import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const expectedAddress = 'Chemin du Grandchamp 6'
const legacyAddress = 'Chemin du Grand Champ 6'

const filesToCheck = [
  path.join(projectRoot, 'app', 'schema.ts'),
  path.join(projectRoot, 'app', 'contact', 'page.tsx'),
  path.join(projectRoot, 'app', 'mentions-legales', 'page.tsx'),
  path.join(projectRoot, 'app', 'politique-confidentialite', 'page.tsx'),
  path.join(projectRoot, 'components', 'Footer.tsx'),
]

test('public-facing source files use the updated Lausanne address everywhere', () => {
  for (const filePath of filesToCheck) {
    const source = readFileSync(filePath, 'utf8')
    assert.ok(source.includes(expectedAddress), `Expected updated address in ${path.basename(filePath)}`)
    assert.ok(!source.includes(legacyAddress), `Expected legacy address to be removed from ${path.basename(filePath)}`)
  }
})

test('schema and contact map target the updated address', () => {
  const schemaSource = readFileSync(path.join(projectRoot, 'app', 'schema.ts'), 'utf8')
  const contactSource = readFileSync(path.join(projectRoot, 'app', 'contact', 'page.tsx'), 'utf8')

  assert.ok(
    schemaSource.includes('Chemin+du+Grandchamp+6,+1018+Lausanne'),
    'Expected schema hasMap URL to use the updated address',
  )
  assert.ok(
    contactSource.includes('Chemin+du+Grandchamp+6,+1018+Lausanne'),
    'Expected contact page map iframe to use the updated address',
  )
})
