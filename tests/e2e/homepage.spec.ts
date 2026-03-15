import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/') })

  test('hero shows correct badge and subtitle', async ({ page }) => {
    await expect(page.getByText('Suisse romande').first()).toBeVisible()
    await expect(page.getByText(/La fourniture, la location et la pose/)).toBeVisible()
  })

  test('shows 5 expertise cards', async ({ page }) => {
    await expect(page.getByText('Signalisation temporaire').first()).toBeVisible()
    await expect(page.getByText('Signalisation permanente').first()).toBeVisible()
    await expect(page.getByText('Montage et installation')).toBeVisible()
    await expect(page.getByText('Location feux de chantier').first()).toBeVisible()
    await expect(page.getByText('Marquage routier').first()).toBeVisible()
  })

  test('shows Triopan representative mention', async ({ page }) => {
    await expect(page.getByText(/Représentant officiel.*Triopan SA/i).first()).toBeVisible()
  })

  test('shows correct CTA text', async ({ page }) => {
    await expect(page.getByText(/Un projet spécifique ou une demande particulière/i)).toBeVisible()
  })

  test('footer has updated address', async ({ page }) => {
    await expect(page.getByText(/Chemin du Grandchamp 6/).first()).toBeVisible()
    await expect(page.getByText(/1018 Lausanne/).first()).toBeVisible()
  })

  test('footer shows 2026 copyright', async ({ page }) => {
    await expect(page.getByText(/2026 Robalex/)).toBeVisible()
  })

  test('partner logos link to external sites', async ({ page }) => {
    const triopanLink = page.getByRole('link', { name: /Triopan AG/i })
    await expect(triopanLink).toHaveAttribute('href', 'https://www.triopan.ch')
  })
})
