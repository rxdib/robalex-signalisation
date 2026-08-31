import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const twongPagePath = path.join(projectRoot, 'app', 'twong', 'page.tsx')

test('TWONG page presents documented benefits and a contact path without online pricing', () => {
  assert.ok(existsSync(twongPagePath), 'Expected the TWONG product page to exist')

  const source = readFileSync(twongPagePath, 'utf8')

  for (const term of ['title = \'TWONG\'', 'Système de fixation mobile pour la signalisation temporaire', 'En stock à Lausanne', 'Consulter la présentation PDF', '/documents/presentation-twong-robalex.pdf']) {
    assert.ok(source.includes(term), `Expected the TWONG page to include ${term}`)
  }

  assert.ok(
    existsSync(path.join(projectRoot, 'public', 'documents', 'presentation-twong-robalex.pdf')),
    'Expected the TWONG presentation PDF to be publicly available',
  )

  assert.equal(source.includes('Trois gestes.'), false, 'TWONG must not include the detailed installation steps')
  assert.equal(source.includes('30 à 330 mm'), false, 'TWONG must not foreground technical compatibility details')

  assert.equal(source.includes('Prix:'), false, 'TWONG must not show a fabricated price')
  assert.equal(source.includes('CHF'), false, 'TWONG must not show a fabricated CHF price')
  assert.equal(source.includes('livraison sous'), false, 'TWONG must not promise an unsupported delivery time')
})

test('desktop navigation keeps each label on a single line', () => {
  const source = readFileSync(path.join(projectRoot, 'components', 'Nav.tsx'), 'utf8')

  assert.match(source, /whitespace-nowrap/)
})

test('TWONG is discoverable from the main commercial paths', () => {
  for (const file of ['components/Nav.tsx', 'components/Footer.tsx', 'app/page.tsx', 'app/nos-produits/page.tsx']) {
    const source = readFileSync(path.join(projectRoot, file), 'utf8')
    assert.ok(source.includes('/twong'), `Expected ${file} to link to /twong`)
  }
})
