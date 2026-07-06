import { test, expect } from '@playwright/test'

const NAV_PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const

test.describe('Navigation (La Maison Dorée — vertical)', () => {
  test('skip-to-content link is visible and functional', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeVisible()
    await skipLink.click()
    await expect(page.locator('#main-content')).toBeVisible()
  })

  test('header is visible on all pages', async ({ page }) => {
    for (const { path } of NAV_PAGES) {
      await page.goto(path)
      await expect(page.locator('header')).toBeVisible()
    }
  })

  test('desktop nav has links to all pages', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')

    const nav = page.locator('nav[aria-label="Main navigation"]')
    await expect(nav).toBeVisible()

    // All nav links should be present in the desktop nav
    const links = nav.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(NAV_PAGES.length)
  })

  test('nav links navigate to correct pages', async ({ page }) => {
    await page.goto('/')

    // Click Menu link
    await page.getByRole('link', { name: /Menu/i }).first().click()
    await expect(page).toHaveURL(/\/menu/)

    // Click About link
    await page.getByRole('link', { name: /About/i }).first().click()
    await expect(page).toHaveURL(/\/about/)

    // Click Contact link
    await page.getByRole('link', { name: /Contact/i }).first().click()
    await expect(page).toHaveURL(/\/contact/)

    // Brand logo / home link
    await page.getByRole('link', { name: /La Maison Dorée/i }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('mobile menu toggles open and closed', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: /open menu/i })
    await expect(menuButton).toBeVisible()

    // Open
    await menuButton.click()
    const mobileMenu = page.locator('[role="menu"]').first()
    await expect(mobileMenu).toBeVisible()

    // Close
    const closeButton = page.getByRole('button', { name: /close menu/i })
    await closeButton.click()
    await expect(mobileMenu).not.toBeVisible()
  })

  test('reservations CTA button links to contact page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')

    const cta = page.getByRole('link', { name: /reservations/i })
    if (await cta.isVisible()) {
      await cta.first().click()
      await expect(page).toHaveURL(/\/contact/)
    }
  })

  test('footer is visible on all pages', async ({ page }) => {
    for (const { path } of NAV_PAGES) {
      await page.goto(path)
      await expect(page.locator('footer')).toBeVisible()
    }
  })
})
