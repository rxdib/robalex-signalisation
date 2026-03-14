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

test('nos produits page uses the updated catalogue wording', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const expectedLabels = [
    'Flash Fireball LED',
    'Eflare EN800G / UB700G LED',
    'Panneaux de signalisation routière OSR',
    'Balises Tornado Flex',
    'Support vertical trilatte pliable',
    "interventions d'urgence",
  ]
  const outdatedLabels = [
    'Lampe flash Fireball',
    'eFlare AT700',
    'Panneaux de signalisation OSR',
    'Balises Tornado flexibles',
    'Supports trilatte',
    'interventions d urgence',
  ]

  for (const label of expectedLabels) {
    assert.ok(pageSource.includes(label), `Expected updated wording: ${label}`)
  }

  for (const label of outdatedLabels) {
    assert.ok(!pageSource.includes(label), `Expected outdated wording to be removed: ${label}`)
  }
})
