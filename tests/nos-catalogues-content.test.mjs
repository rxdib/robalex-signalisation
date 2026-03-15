import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const pagePath = path.join(projectRoot, 'app', 'nos-catalogues', 'page.tsx')

test('nos catalogues page uses the updated catalogue hierarchy and cleaner copy', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const expectedStrings = [
    "badge: 'Catalogue Triopan'",
    "title: 'Catalogue Triopan'",
    "kicker: 'Signaux pliants'",
    "badge: 'Robalex Signalisation Sàrl'",
    "title: 'Catalogue 2025'",
    "kicker: 'Signalisation et sécurité routière'",
    'Robalex,',
    'signaux routiers',
    'Répertoire visuel',
    'Presque tous les signaux routiers OSR',
    'Repérer rapidement un signal',
    '/images/catalogue-signaux-routiers-preview.png',
  ]
  const removedStrings = [
    "title: 'Catalogue Signaux pliants Triopan'",
    "badge: 'Gamme complète'",
    "title: 'Catalogue Signalisation & Sécurité routière'",
    'catalogue.points.map',
    'Tous les symboles OSR',
    'Tous les formats disponibles',
    'Demande sur devis selon votre besoin',
    '/images/catalogue-signaux-routiers-cover.png',
  ]

  for (const expectedString of expectedStrings) {
    assert.ok(pageSource.includes(expectedString), `Expected updated content: ${expectedString}`)
  }

  for (const removedString of removedStrings) {
    assert.ok(!pageSource.includes(removedString), `Expected removed content: ${removedString}`)
  }
})
