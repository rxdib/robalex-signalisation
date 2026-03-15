import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const pagePath = path.join(projectRoot, 'app', 'page.tsx')

test('home page uses clearer expertise categories and keeps references at the end', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const expectedStrings = [
    'Produits, location et services pour sécuriser vos routes, chantiers, parkings et accès privés.',
    'Signalisation permanente',
    'Location de matériel',
    'Pose et interventions',
    'Marquage routier',
    'Triopan, cônes, balises, barrières et flashs',
    'Panneaux OSR, miroirs, bornes, potelets et plaques de rue',
    'Signalisation lumineuse',
  ]
  const removedStrings = [
    'Ce que nous fournissons',
    'Ce que nous louons',
    'Ce que nous réalisons',
    'PartnerLogo',
  ]

  for (const expectedString of expectedStrings) {
    assert.ok(pageSource.includes(expectedString), `Expected updated expertise content: ${expectedString}`)
  }

  for (const removedString of removedStrings) {
    assert.ok(!pageSource.includes(removedString), `Expected legacy expertise content to be removed: ${removedString}`)
  }

  assert.ok(
    pageSource.indexOf('Produits <span className="text-red">phares</span>') <
      pageSource.indexOf('Ils nous font <span className="text-red">confiance</span>'),
    'Expected references section to appear after featured products',
  )

  const catalogueLinks = pageSource.match(/link: '\/nos-catalogues'/g) ?? []
  const catalogueLabels = pageSource.match(/linkLabel: 'Voir les catalogues'/g) ?? []

  assert.equal(catalogueLinks.length, 3, 'Expected the 3 product expertise cards to point to catalogues')
  assert.equal(catalogueLabels.length, 3, 'Expected the 3 product expertise cards to use the catalogues CTA label')
})
