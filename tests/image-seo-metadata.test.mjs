import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const publicRoot = path.join(projectRoot, 'public')
const schemaPath = path.join(projectRoot, 'app', 'schema.ts')
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

test('public raster images do not keep embedded EXIF/XMP/IPTC metadata', async () => {
  const files = collectRasterFiles(publicRoot)
  const withMetadata = []

  for (const filePath of files) {
    const metadata = await sharp(filePath).metadata()

    if (metadata.exif || metadata.xmp || metadata.iptc) {
      withMetadata.push(path.relative(publicRoot, filePath))
    }
  }

  assert.deepEqual(
    withMetadata,
    [],
    `Expected no EXIF/XMP/IPTC metadata, found: ${withMetadata.slice(0, 10).join(', ')}`,
  )
})

test('structured image metadata is branded for Robalex Signalisation Sàrl', () => {
  const schemaSource = readFileSync(schemaPath, 'utf8')

  assert.ok(schemaSource.includes("creditText: SITE_NAME"), 'Expected image structured data credit text to use SITE_NAME')
  assert.ok(
    schemaSource.includes("copyrightNotice: `© ${SITE_NAME}`"),
    'Expected image structured data copyright notice to use SITE_NAME',
  )
})
