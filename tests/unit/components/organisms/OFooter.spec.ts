import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import OFooter from '~/components/organisms/OFooter.vue'

describe('OFooter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders a footer with role contentinfo', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.find('footer[role="contentinfo"]').exists()).toBe(true)
  })

  it('renders the site name as a link', () => {
    const wrapper = mount(OFooter)
    const brandLink = wrapper.find('footer a')
    expect(brandLink.exists()).toBe(true)
    expect(brandLink.text()).toContain('site.name')
  })

  it('renders the tagline', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('site.tagline')
  })

  it('renders contact info with address', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('footer.address')
  })

  it('renders phone number as a link', () => {
    const wrapper = mount(OFooter)
    const phoneLink = wrapper.find('a[href^="tel:"]')
    expect(phoneLink.exists()).toBe(true)
    expect(phoneLink.text()).toContain('footer.phone')
  })

  it('renders email as a mailto link', () => {
    const wrapper = mount(OFooter)
    const emailLink = wrapper.find('a[href^="mailto:"]')
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.text()).toContain('footer.email')
  })

  it('renders hours section', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('footer.hours')
    expect(wrapper.text()).toContain('footer.hoursValue')
  })

  it('renders newsletter form', () => {
    const wrapper = mount(OFooter)
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
    const input = wrapper.find('input[type="email"]')
    expect(input.exists()).toBe(true)
  })

  it('has a submit button in newsletter form', () => {
    const wrapper = mount(OFooter)
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
    const submitButton = form.find('button[type="submit"]')
    expect(submitButton.exists()).toBe(true)
    expect(submitButton.text()).toContain('footer.newsletterButton')
  })

  it('renders copyright text', () => {
    const wrapper = mount(OFooter)
    const year = new Date().getFullYear()
    expect(wrapper.text()).toContain(String(year))
    expect(wrapper.text()).toContain('footer.copyright')
  })

  it('renders privacy policy link', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('footer.privacyPolicy')
  })

  it('renders terms of service link', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('footer.termsOfService')
  })

  it('newsletter input has proper id', () => {
    const wrapper = mount(OFooter)
    const input = wrapper.find('input[type="email"]')
    expect(input.attributes('id')).toBe('footer-newsletter-email')
  })

  it('newsletter input has placeholder', () => {
    const wrapper = mount(OFooter)
    const input = wrapper.find('input[type="email"]')
    expect(input.attributes('placeholder')).toBe('footer.newsletterPlaceholder')
  })

  it('clears newsletter email on submit', async () => {
    const wrapper = mount(OFooter)

    const input = wrapper.find('input[type="email"]')
    await input.setValue('test@example.com')
    expect((input.element as HTMLInputElement).value).toBe('test@example.com')

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')
    expect((input.element as HTMLInputElement).value).toBe('')
  })

  it('does nothing on submit when email is empty', async () => {
    const wrapper = mount(OFooter)

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')
    // Should not throw and input stays empty
    const input = wrapper.find('input[type="email"]')
    expect((input.element as HTMLInputElement).value).toBe('')
  })

  it('renders AIcon components for contact info', () => {
    const wrapper = mount(OFooter)
    const icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons.length).toBeGreaterThanOrEqual(4) // map-pin, phone, mail, clock
  })

  it('has correct grid columns structure', () => {
    const wrapper = mount(OFooter)
    // Should have 4 columns on large screens
    const grid = wrapper.find('.grid')
    expect(grid.exists()).toBe(true)
  })
})
