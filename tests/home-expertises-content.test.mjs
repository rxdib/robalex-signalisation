import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const pagePath = path.join(projectRoot, 'app', 'page.tsx')

test('home expertise section explains what Robalex supplies, rents and installs', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const expectedStrings = [
    'Ce que nous fournissons',
    'Ce que nous louons',
    'Ce que nous réalisons',
    'Panneaux, miroirs et mobilier',
    'Signalisation lumineuse',
    'Pose et interventions sur site',
    'Nous fournissons, louons, posons et installons les équipements nécessaires',
  ]
  const removedStrings = [
    'badge="Ce que nous faisons"',
    "De la fourniture à l'installation, nous couvrons l'ensemble de vos besoins en signalisation et sécurité routière.",
    'expertises.slice(0,3)',
    'expertises.slice(3)',
  ]

  for (const expectedString of expectedStrings) {
    assert.ok(pageSource.includes(expectedString), `Expected updated expertise content: ${expectedString}`)
  }

  for (const removedString of removedStrings) {
    assert.ok(!pageSource.includes(removedString), `Expected legacy expertise content to be removed: ${removedString}`)
  }
})
