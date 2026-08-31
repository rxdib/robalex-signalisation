import { test, expect } from '@playwright/test'

const pages = [
  { path: '/signalisation-temporaire', heading: 'Signalisation temporaire', title: /Signalisation temporaire/ },
  { path: '/signalisation-permanente', heading: 'Signalisation permanente', title: /Signalisation permanente/ },
  { path: '/marquage-routier', heading: 'Marquage routier', title: /Marquage routier/ },
]

test.describe('Focused service pages', () => {
  for (const service of pages) {
    test(`${service.path} has a focused commercial page with metadata and a contact CTA`, async ({ page }) => {
      await page.goto(service.path)

      await expect(page).toHaveTitle(service.title)
      await expect(page.getByRole('heading', { level: 1, name: service.heading })).toBeVisible()
      await expect(page.getByRole('link', { name: /Demander un devis/i }).first()).toHaveAttribute('href', '/contact/')
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`${service.path}/$`))
    })
  }
})
