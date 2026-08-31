import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const optimizedImages = [
  'panneau-candelabre',
  'travaux-marquage-parking',
  'installation-signalisation-temporaire-location',
  'signaux-pliants-triopan',
  'socle-beton-50kg-prefabrique',
  'twong-systeme-fixation-mobile',
  'twong-installation-double',
  'twong-montage-sans-outil',
  'twong-signalisation-temporaire',
]

test('heavy public images have 768px and 1280px WebP display variants', () => {
  for (const image of optimizedImages) {
    for (const width of [768, 1280]) {
      const variant = path.join(projectRoot, 'public', 'images', 'optimized', `${image}-${width}.webp`)
      assert.ok(existsSync(variant), `Expected ${image} to have a ${width}px WebP variant`)
    }
  }
})

test('commercial pages serve their heavy imagery through responsive sources', () => {
  const pages = [
    ['app/page.tsx', 'panneauCandelabreImage', 'marquageParkingImage'],
    ['app/nos-services/page.tsx', 'installationTemporaireImage', 'panneauCandelabreImage', 'marquageParkingImage'],
    ['app/nos-produits/page.tsx', 'signauxPliantsTriopanImage', 'socleBetonImage'],
    ['app/twong/page.tsx', 'twongInstallationImage', 'twongSignalisationImage'],
  ]

  for (const [file, ...variantNames] of pages) {
    const source = readFileSync(path.join(projectRoot, file), 'utf8')

    assert.ok(source.includes('imageVariants'), `Expected ${file} to import display image variants`)
    for (const variantName of variantNames) {
      assert.ok(source.includes(variantName), `Expected ${file} to use ${variantName}`)
    }
  }
})
