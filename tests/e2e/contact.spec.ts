import { test, expect } from '@playwright/test'

test.describe('Contact Page (La Maison Dorée — vertical)', () => {
  test('contact page loads successfully', async ({ page }) => {
    const response = await page.goto('/contact')
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('#contact-heading')).toBeVisible()
  })

  test('reservation form exists with required fields', async ({ page }) => {
    await page.goto('/contact')

    const form = page.locator('form')
    await expect(form).toBeVisible()

    // Name field
    const nameInput = page.locator('#reservation-name')
    await expect(nameInput).toBeVisible()
    await expect(nameInput).toHaveAttribute('required', '')

    // Email field
    const emailInput = page.locator('#reservation-email')
    await expect(emailInput).toBeVisible()
    await expect(emailInput).toHaveAttribute('type', 'email')
    await expect(emailInput).toHaveAttribute('required', '')

    // Phone field
    const phoneInput = page.locator('#reservation-phone')
    await expect(phoneInput).toBeVisible()

    // Date field
    const dateInput = page.locator('#reservation-date')
    await expect(dateInput).toBeVisible()
    await expect(dateInput).toHaveAttribute('type', 'date')
    await expect(dateInput).toHaveAttribute('required', '')

    // Time select
    const timeSelect = page.locator('#reservation-time')
    await expect(timeSelect).toBeVisible()
    await expect(timeSelect).toHaveAttribute('required', '')

    // Guests select
    const guestsSelect = page.locator('#reservation-guests')
    await expect(guestsSelect).toBeVisible()
    await expect(guestsSelect).toHaveAttribute('required', '')
  })

  test('contact info sidebar is displayed', async ({ page }) => {
    await page.goto('/contact')

    const sidebar = page.locator('aside[aria-label="Contact information"]')
    await expect(sidebar).toBeVisible()

    // Hours section
    await expect(page.getByText(/Dinner/i).first()).toBeVisible()

    // Location section
    await expect(page.getByText(/Location/i).first()).toBeVisible()

    // Phone number link
    const phoneLink = page.locator('a[href^="tel:"]')
    await expect(phoneLink.first()).toBeVisible()

    // Email link
    const emailLink = page.locator('a[href^="mailto:"]')
    await expect(emailLink.first()).toBeVisible()
  })

  test('submit button exists', async ({ page }) => {
    await page.goto('/contact')
    const submitBtn = page.locator('#reservation-submit')
    await expect(submitBtn).toBeVisible()
    await expect(submitBtn).not.toBeEmpty()
  })

  test('form shows validation errors when submitted empty', async ({ page }) => {
    await page.goto('/contact')

    const submitBtn = page.locator('#reservation-submit')
    await submitBtn.click()

    // Error messages should appear (role="alert")
    const alerts = page.locator('[role="alert"]')
    // There may be multiple error messages for empty required fields
    const alertCount = await alerts.count()
    // At least some error messages should appear for required fields
    expect(alertCount).toBeGreaterThan(0)
  })

  test('contact page is reachable from nav', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /Contact/i }).first().click()
    await expect(page).toHaveURL(/\/contact/)
    await expect(page.locator('#contact-heading')).toBeVisible()
  })
})
