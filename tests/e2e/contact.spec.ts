import { test, expect } from '@playwright/test'

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => { await page.goto('/contact') })

  test('shows contact form with required fields', async ({ page }) => {
    await expect(page.getByLabel('Nom *', { exact: true })).toBeVisible()
    await expect(page.getByLabel(/Prénom/i)).toBeVisible()
    await expect(page.getByLabel(/Email/i)).toBeVisible()
    await expect(page.getByLabel(/Message/i)).toBeVisible()
  })

  test('shows address information', async ({ page }) => {
    await expect(page.getByText(/Chemin de Grandchamp 6/).first()).toBeVisible()
    await expect(page.getByText(/1018 Lausanne/).first()).toBeVisible()
  })

  test('shows phone number', async ({ page }) => {
    await expect(page.locator('dl').getByRole('link', { name: /021 657 07 05/ })).toBeVisible()
  })

  test('shows payment FAQ answer mentioning facture', async ({ page }) => {
    await expect(page.getByText(/facture/i)).toBeVisible()
  })

  test('form action points to formspree', async ({ page }) => {
    const formAction = await page.getAttribute('form', 'action')
    expect(formAction).toContain('formspree.io')
  })
})
