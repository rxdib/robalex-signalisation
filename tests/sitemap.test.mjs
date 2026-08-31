import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const sitemapPath = path.join(projectRoot, 'app', 'sitemap.ts')

test('sitemap uses a truthful per-page update date instead of the obsolete fixed date', () => {
  const source = readFileSync(sitemapPath, 'utf8')

  assert.ok(!source.includes("new Date('2026-03-13')"), 'Sitemap must not keep the obsolete March 2026 date')
  assert.ok(source.includes('lastModified:'), 'Each sitemap page should define its own lastModified value')
  assert.ok(source.includes("'/location-feux-chantier/'"), 'Location feux must remain in the sitemap')
})
