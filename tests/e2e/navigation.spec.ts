import { test, expect } from '@playwright/test'

const pages = [
  { path: '/',                        title: /Robalex Signalisation/ },
  { path: '/a-propos',                title: /À propos/ },
  { path: '/nos-produits',            title: /Nos produits/ },
  { path: '/nos-services',            title: /Nos services/ },
  { path: '/location-feux-chantier',  title: /Location feux/ },
  { path: '/nos-catalogues',          title: /Catalogues/ },
  { path: '/contact',                 title: /Contact/ },
]

test.describe('Navigation', () => {
  for (const { path, title } of pages) {
    test(`${path} loads and has correct title`, async ({ page }) => {
      await page.goto(path)
      await expect(page).toHaveTitle(title)
      // Nav is present
      await expect(page.getByRole('navigation')).toBeVisible()
      // Footer is present
      await expect(page.getByRole('contentinfo')).toBeVisible()
    })
  }
})
