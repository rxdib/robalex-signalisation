import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/') })

  test('hero shows the current positioning', async ({ page }) => {
    await expect(page.getByText('Suisse romande').first()).toBeVisible()
    await expect(page.getByText(/Depuis plus de 20 ans/)).toBeVisible()
  })

  test('shows the six expertise cards', async ({ page }) => {
    await expect(page.getByText('Signalisation temporaire').first()).toBeVisible()
    await expect(page.getByText('Signalisation permanente').first()).toBeVisible()
    await expect(page.getByText('Signalisation lumineuse').first()).toBeVisible()
    await expect(page.getByText('Location de matériel').first()).toBeVisible()
    await expect(page.getByText('Pose et interventions').first()).toBeVisible()
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

  test('client references section is present', async ({ page }) => {
    await expect(page.getByRole('group', { name: 'Logos de nos clients' })).toBeVisible()
  })
})
