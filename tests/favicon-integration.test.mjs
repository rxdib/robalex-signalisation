import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const layoutPath = path.join(projectRoot, 'app', 'layout.tsx')
const manifestPath = path.join(projectRoot, 'app', 'manifest.ts')
const rootFaviconPath = path.join(projectRoot, 'public', 'favicon.ico')
const rootAppleTouchIconPath = path.join(projectRoot, 'public', 'apple-touch-icon.png')

test('root layout declares the site favicon set and manifest', () => {
  const layoutSource = readFileSync(layoutPath, 'utf8')

  assert.ok(layoutSource.includes('icons:'), 'Expected metadata icons to be declared in app/layout.tsx')
  assert.ok(layoutSource.includes("manifest: '/manifest.webmanifest'"), 'Expected metadata manifest link in app/layout.tsx')
  assert.ok(layoutSource.includes('/images/Favicon/favicon-32x32.png'), 'Expected 32x32 favicon in metadata')
  assert.ok(layoutSource.includes('/images/Favicon/favicon-16x16.png'), 'Expected 16x16 favicon in metadata')
})

test('web app manifest and root-level favicon files exist', () => {
  assert.ok(existsSync(manifestPath), 'Expected app/manifest.ts to exist')
  assert.ok(existsSync(rootFaviconPath), 'Expected public/favicon.ico to exist')
  assert.ok(existsSync(rootAppleTouchIconPath), 'Expected public/apple-touch-icon.png to exist')
})
