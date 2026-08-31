import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const packageJsonPath = path.join(projectRoot, 'package.json')
const layoutPath = path.join(projectRoot, 'app', 'layout.tsx')

test('root layout includes Vercel Web Analytics only', () => {
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
  assert.ok(
    !packageJson.dependencies?.['@vercel/speed-insights'],
    'Speed Insights should not be installed when only Vercel Web Analytics is used',
  )
  assert.ok(!layoutSource.includes('SpeedInsights'), 'RootLayout should not render Speed Insights')
})
