import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const pagePath = path.join(projectRoot, 'app', 'page.tsx')

const countMatches = (source, needle) => source.split(needle).length - 1

test('home page uses clearer expertise categories and keeps references at the end', () => {
  const pageSource = readFileSync(pagePath, 'utf8')
  const expectedStrings = [
    'Produits, location et services pour sécuriser vos routes, chantiers, parkings et accès privés.',
    'Signalisation permanente',
    'Location de matériel',
    'Pose et interventions',
    'Marquage routier',
    'Marquages routiers en peinture ou à 2 composants pour parkings, routes et sites privés.',
    'Triopan, cônes, balises, barrières et flashs',
    'Panneaux OSR, miroirs, bornes, potelets et plaques de rue',
    'Signalisation lumineuse',
  ]
  const removedStrings = [
    'Ce que nous fournissons',
    'Ce que nous louons',
    'Ce que nous réalisons',
    'PartnerLogo',
    'Feux avec radar, décompte et matériel temporaire',
    'Passages piétons, parkings, flèches et numérotation',
    'Voir tous nos produits',
  ]

  for (const expectedString of expectedStrings) {
    assert.ok(pageSource.includes(expectedString), `Expected updated expertise content: ${expectedString}`)
  }

  for (const removedString of removedStrings) {
    assert.ok(!pageSource.includes(removedString), `Expected legacy expertise content to be removed: ${removedString}`)
  }

  assert.equal(
    countMatches(pageSource, 'Montage, pose, remplacement et démontage'),
    1,
    'Expected the pose card to keep a single concise description line',
  )

  assert.ok(
    pageSource.indexOf('Produits <span className="text-red">phares</span>') <
      pageSource.indexOf('Ils nous font <span className="text-red">confiance</span>'),
    'Expected references section to appear after featured products',
  )

  const catalogueLinks = pageSource.match(/link: '\/nos-catalogues'/g) ?? []
  const catalogueLabels = pageSource.match(/linkLabel: 'Voir les catalogues'/g) ?? []
  const featuredProductsButton = /<a href="\/nos-produits" className="border-2 border-red[\s\S]*?\n\s*Nos produits\n\s*<\/a>/

  assert.equal(catalogueLinks.length, 3, 'Expected the 3 product expertise cards to point to catalogues')
  assert.equal(catalogueLabels.length, 3, 'Expected the 3 product expertise cards to use the catalogues CTA label')
  assert.match(pageSource, featuredProductsButton, 'Expected the featured products button label to be "Nos produits"')
})
