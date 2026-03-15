import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const packageJsonPath = path.join(projectRoot, 'package.json')
const layoutPath = path.join(projectRoot, 'app', 'layout.tsx')

test('root layout includes Vercel Analytics and package dependency', () => {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
  const layoutSource = readFileSync(layoutPath, 'utf8')

  assert.ok(
    packageJson.dependencies?.['@vercel/analytics'],
    'Expected @vercel/analytics to be installed as a dependency',
  )
  assert.ok(
    layoutSource.includes("import { Analytics } from '@vercel/analytics/next'"),
    'Expected RootLayout to import Analytics from @vercel/analytics/next',
  )
  assert.ok(
    layoutSource.includes('<Analytics />'),
    'Expected RootLayout to render the Analytics component',
  )
})
