import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const notFoundPagePath = path.join(projectRoot, 'app', 'not-found.tsx')
const rootLayoutPath = path.join(projectRoot, 'app', 'layout.tsx')

test('custom not-found page exists and exposes clear recovery actions', () => {
  assert.ok(existsSync(notFoundPagePath), 'Expected app/not-found.tsx to exist')

  const source = readFileSync(notFoundPagePath, 'utf8')

  const expectedStrings = [
    'Page introuvable',
    'La page que vous recherchez n&apos;existe pas ou n&apos;est plus disponible.',
    'Retour à l&apos;accueil',
    'Voir nos produits',
    'Contact',
  ]

  for (const expected of expectedStrings) {
    assert.ok(source.includes(expected), `Expected custom 404 page content: ${expected}`)
  }

  assert.ok(!source.includes('This page could not be found'), 'Expected default Next.js 404 copy to be removed')
})

test('root layout does not force index, follow metadata onto the 404 page', () => {
  const layoutSource = readFileSync(rootLayoutPath, 'utf8')

  assert.ok(!layoutSource.includes('robots:'), 'Expected root layout metadata to avoid a global robots override')
})