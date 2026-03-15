import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const publicRoot = path.join(projectRoot, 'public')
const rasterExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

function collectRasterFiles(dirPath) {
  const files = []

  for (const entry of readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      files.push(...collectRasterFiles(fullPath))
      continue
    }

    if (rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath)
    }
  }

  return files
}

function hasEmbeddedMetadata(metadata) {
  return Boolean(metadata.exif || metadata.xmp || metadata.iptc)
}

function buildEncodeCandidates(source, format) {
  switch (format) {
    case 'jpeg':
      return [
        sharp(source).rotate().jpeg({ quality: 85, mozjpeg: true }),
        sharp(source).rotate().jpeg({ quality: 80, mozjpeg: true }),
        sharp(source).rotate().jpeg({ quality: 76, mozjpeg: true }),
        sharp(source).rotate().jpeg({ quality: 72, mozjpeg: true }),
      ]
    case 'png':
      return [
        sharp(source).rotate().png({ compressionLevel: 9 }),
        sharp(source).rotate().png({ compressionLevel: 9, palette: true, quality: 100, effort: 10 }),
      ]
    case 'webp':
      return [
        sharp(source).rotate().webp({ quality: 85, effort: 6 }),
        sharp(source).rotate().webp({ quality: 80, effort: 6 }),
      ]
    case 'avif':
      return [
        sharp(source).rotate().avif({ quality: 65, effort: 6 }),
        sharp(source).rotate().avif({ quality: 55, effort: 6 }),
      ]
    default:
      throw new Error(`Unsupported format: ${format}`)
  }
}

async function stripRasterMetadata() {
  const files = collectRasterFiles(publicRoot)
  const changed = []

  for (const filePath of files) {
    const source = readFileSync(filePath)
    const metadata = await sharp(source).metadata()

    if (!hasEmbeddedMetadata(metadata)) {
      continue
    }

    const candidates = buildEncodeCandidates(source, metadata.format)
    const encodedBuffers = await Promise.all(candidates.map((candidate) => candidate.toBuffer()))
    const encoded = encodedBuffers.sort((left, right) => left.length - right.length)[0]

    writeFileSync(filePath, encoded)
    changed.push(path.relative(publicRoot, filePath))
  }

  console.log(JSON.stringify({ changedCount: changed.length, changed }, null, 2))
}

stripRasterMetadata().catch((error) => {
  console.error(error)
  process.exit(1)
})
