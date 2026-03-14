import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const shellPath = path.join(projectRoot, 'components', 'LegalPageShell.tsx')
const mentionsPath = path.join(projectRoot, 'app', 'mentions-legales', 'page.tsx')
const privacyPath = path.join(projectRoot, 'app', 'politique-confidentialite', 'page.tsx')

test('legal page shell exposes a real h1 heading', () => {
  const source = readFileSync(shellPath, 'utf8')
  assert.ok(source.includes('<h1'), 'Expected LegalPageShell to render an h1')
})

test('legal pages use clean UTF-8 French copy', () => {
  const mentionsSource = readFileSync(mentionsPath, 'utf8')
  const privacySource = readFileSync(privacyPath, 'utf8')

  for (const source of [mentionsSource, privacySource]) {
    assert.ok(!source.includes('Ã'), 'Expected mojibake to be removed from legal pages')
  }
})
