import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const pagePath = path.join(projectRoot, 'app', 'location-feux-chantier', 'page.tsx')

test('location feux page references the full client logo set', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const expectedStrings = [
    'Logo_AGV-Toni.jpg',
    'Logo_bernasconi.png',
    'Logo_cornaz-fontanellaz.avif',
    'Logo_walo.jpg',
    'Romande_Energie_Logo.svg',
    'logo-grisoni.png',
    'Logo-Moll-SA.png',
    'Logo_AC-atelier-commun-architectes.png',
    'Logo_innov-construction-sa.png',
    'Logo_zmoos-sa.jpg',
  ]

  for (const expectedString of expectedStrings) {
    assert.ok(pageSource.includes(expectedString), `Expected location feux references to include ${expectedString}`)
  }
})
