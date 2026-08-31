import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const twongPagePath = path.join(projectRoot, 'app', 'twong', 'page.tsx')

test('TWONG page presents documented benefits and a contact path without online pricing', () => {
  assert.ok(existsSync(twongPagePath), 'Expected the TWONG product page to exist')

  const source = readFileSync(twongPagePath, 'utf8')

  for (const term of [
    'Système de fixation mobile',
    'sans outil',
    'sans perçage',
    '30 à 330 mm',
    'En stock à Lausanne',
    'Demander la disponibilité',
  ]) {
    assert.ok(source.includes(term), `Expected the TWONG page to include ${term}`)
  }

  assert.equal(source.includes('Prix:'), false, 'TWONG must not show a fabricated price')
  assert.equal(source.includes('CHF'), false, 'TWONG must not show a fabricated CHF price')
  assert.equal(source.includes('livraison sous'), false, 'TWONG must not promise an unsupported delivery time')
})

test('TWONG is discoverable from the main commercial paths', () => {
  for (const file of ['components/Nav.tsx', 'components/Footer.tsx', 'app/page.tsx', 'app/nos-produits/page.tsx']) {
    const source = readFileSync(path.join(projectRoot, file), 'utf8')
    assert.ok(source.includes("'/twong'"), `Expected ${file} to link to /twong`)
  }
})
