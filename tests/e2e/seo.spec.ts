import { test, expect } from '@playwright/test'

const seoData = [
  { path: '/',                       keyword: 'signalisation routière en suisse romande' },
  { path: '/location-feux-chantier', keyword: 'feux de chantier' },
  { path: '/nos-produits',           keyword: 'signalisation routière' },
  { path: '/contact',                keyword: 'Lausanne' },
]

test.describe('SEO', () => {
  for (const { path, keyword } of seoData) {
    test(`${path} has meta description containing "${keyword}"`, async ({ page }) => {
      await page.goto(path)
      const desc = await page.getAttribute('meta[name="description"]', 'content')
      expect(desc?.toLowerCase()).toContain(keyword.toLowerCase())
    })

    test(`${path} has canonical link`, async ({ page }) => {
      await page.goto(path)
      const canonical = await page.getAttribute('link[rel="canonical"]', 'href')
      expect(canonical).toContain('robalex-signalisation.ch')
    })
  }

  test('homepage has LocalBusiness schema', async ({ page }) => {
    await page.goto('/')
    const schema = await page.evaluate(() => {
      const el = document.querySelector('script[type="application/ld+json"]')
      return el ? JSON.parse(el.textContent || '{}') : {}
    })
    expect(schema['@type']).toBe('LocalBusiness')
    expect(schema.address.streetAddress).toBe('Chemin du Grand Champ 6')
  })
})
