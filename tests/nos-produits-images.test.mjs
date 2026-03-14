import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const imagesRoot = path.join(projectRoot, 'public', 'images', 'Liste produit')
const pagePath = path.join(projectRoot, 'app', 'nos-produits', 'page.tsx')

function getProductImages(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return getProductImages(fullPath)
    }

    if (path.extname(entry.name).toLowerCase() === '.xlsx') {
      return []
    }

    return [fullPath]
  })
}

test('nos produits page references every product image in the catalogue folders', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const imageUrls = getProductImages(imagesRoot).map((filePath) => {
    const relativePath = path.relative(path.join(projectRoot, 'public'), filePath)
    return `/${relativePath.split(path.sep).join('/')}`
  })

  const missingImages = imageUrls.filter((imageUrl) => !pageSource.includes(imageUrl))

  assert.deepEqual(missingImages, [])
})
