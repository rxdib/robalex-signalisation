import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const projectRoot = 'C:\\Users\\Robin\\Desktop\\robalex-next'
const googleTrackingPath = path.join(projectRoot, 'components', 'GoogleTracking.tsx')
const trackingLibPath = path.join(projectRoot, 'lib', 'googleTracking.ts')
const envExamplePath = path.join(projectRoot, '.env.example')
const layoutPath = path.join(projectRoot, 'app', 'layout.tsx')
const contactPagePath = path.join(projectRoot, 'app', 'contact', 'page.tsx')
const navPath = path.join(projectRoot, 'components', 'Nav.tsx')
const footerPath = path.join(projectRoot, 'components', 'Footer.tsx')
const ctaBandPath = path.join(projectRoot, 'components', 'CtaBand.tsx')
const heroPath = path.join(projectRoot, 'components', 'Hero.tsx')

test('google tracking files and env example exist', () => {
  assert.ok(existsSync(googleTrackingPath), 'Expected components/GoogleTracking.tsx to exist')
  assert.ok(existsSync(trackingLibPath), 'Expected lib/googleTracking.ts to exist')
  assert.ok(existsSync(envExamplePath), 'Expected .env.example to exist')
})

test('root layout mounts GoogleTracking', () => {
  const source = readFileSync(layoutPath, 'utf8')

  assert.ok(source.includes("import GoogleTracking from '@/components/GoogleTracking'"), 'Expected root layout to import GoogleTracking')
  assert.ok(source.includes('<GoogleTracking />'), 'Expected root layout to render GoogleTracking')
})

test('google tracking component is wired for GA4 and Google Ads env vars', () => {
  const componentSource = readFileSync(googleTrackingPath, 'utf8')
  const libSource = readFileSync(trackingLibPath, 'utf8')

  const expectedStrings = [
    'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    'NEXT_PUBLIC_GOOGLE_ADS_ID',
    'NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL',
    'NEXT_PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_LABEL',
    'NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL',
    'googletagmanager.com/gtag/js',
  ]

  for (const expected of expectedStrings) {
    assert.ok(
      componentSource.includes(expected) || libSource.includes(expected),
      `Expected Google tracking implementation to reference ${expected}`,
    )
  }
})

test('lead entry points are marked for tracking', () => {
  const contactPage = readFileSync(contactPagePath, 'utf8')
  const navSource = readFileSync(navPath, 'utf8')
  const footerSource = readFileSync(footerPath, 'utf8')
  const ctaBandSource = readFileSync(ctaBandPath, 'utf8')
  const heroSource = readFileSync(heroPath, 'utf8')
  const envExample = readFileSync(envExamplePath, 'utf8')

  assert.ok(contactPage.includes('data-track-lead-form'), 'Expected contact form to be marked for lead tracking')
  assert.ok(navSource.includes('data-tracking-location'), 'Expected nav contact links to include tracking context')
  assert.ok(footerSource.includes('data-tracking-location'), 'Expected footer contact links to include tracking context')
  assert.ok(ctaBandSource.includes('data-tracking-location'), 'Expected CTA band links to include tracking context')
  assert.ok(heroSource.includes('data-track-contact-cta'), 'Expected hero contact CTAs to be marked for tracking')

  const expectedEnvKeys = [
    'NEXT_PUBLIC_GA_MEASUREMENT_ID=',
    'NEXT_PUBLIC_GOOGLE_ADS_ID=',
    'NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL=',
    'NEXT_PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_LABEL=',
    'NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL=',
  ]

  for (const expected of expectedEnvKeys) {
    assert.ok(envExample.includes(expected), `Expected .env.example to include ${expected}`)
  }
})
