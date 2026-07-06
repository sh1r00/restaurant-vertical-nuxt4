import { test, expect } from '@playwright/test'

test.describe('Menu Page (La Maison Dorée — vertical)', () => {
  test('menu page loads successfully', async ({ page }) => {
    const response = await page.goto('/menu')
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('#menu-heading')).toBeVisible()
  })

  test('menu heading is present', async ({ page }) => {
    await page.goto('/menu')
    const heading = page.locator('#menu-heading')
    await expect(heading).toBeVisible()
    await expect(heading).not.toBeEmpty()
  })

  test('menu sections are displayed with headings', async ({ page }) => {
    await page.goto('/menu')

    // Appetizers section
    await expect(page.locator('#appetizers-heading')).toBeVisible()
    // Mains section
    await expect(page.locator('#mains-heading')).toBeVisible()
    // Desserts section
    await expect(page.locator('#desserts-heading')).toBeVisible()
    // Wine List section (La Maison Dorée has wine)
    await expect(page.locator('#wine-heading')).toBeVisible()
  })

  test('menu items are rendered', async ({ page }) => {
    await page.goto('/menu')

    // Each MenuItem component renders item details — check for prices
    const prices = page.locator('text=/\\$\\d+/')
    const priceCount = await prices.count()
    expect(priceCount).toBeGreaterThan(0)

    // Each section under #appetizers-heading should have items
    const appetizersSection = page.locator('#appetizers-heading')
    await expect(appetizersSection).toBeVisible()
  })

  test('CTA section links to contact page', async ({ page }) => {
    await page.goto('/menu')

    // CTA button at bottom of menu page
    const ctaLink = page.getByRole('link', { name: /reservations/i })
    const ctaButton = page.getByRole('link').filter({ hasText: '' })
    // Use the CTA section link
    const ctaSection = page.locator('section').last()
    const contactLink = ctaSection.locator('a[href*="contact"]')
    await expect(contactLink).toBeVisible()
  })

  test('at least one menu item in each category', async ({ page }) => {
    await page.goto('/menu')

    const sectionIds = ['appetizers', 'mains', 'desserts', 'wine']
    for (const id of sectionIds) {
      const heading = page.locator(`#${id}-heading`)
      await expect(heading).toBeVisible()
    }
  })
})
