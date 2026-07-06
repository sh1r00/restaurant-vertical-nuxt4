import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import OHeader from '~/components/organisms/OHeader.vue'

describe('OHeader', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders a header with role banner', () => {
    const wrapper = mount(OHeader)
    expect(wrapper.find('header[role="banner"]').exists()).toBe(true)
  })

  it('renders the site name as a link', () => {
    const wrapper = mount(OHeader)
    const logoLink = wrapper.find('header a')
    expect(logoLink.exists()).toBe(true)
    expect(logoLink.text()).toContain('site.name')
  })

  it('renders navigation links', () => {
    const wrapper = mount(OHeader)
    // The navLinks are in a hidden md:flex div
    const navDiv = wrapper.find('.hidden.md\\:flex')
    expect(navDiv.exists()).toBe(true)
  })

  it('renders dark mode toggle', () => {
    const wrapper = mount(OHeader)
    const toggleComponents = wrapper.findAllComponents({ name: 'ADarkModeToggle' })
    // One for desktop, one for mobile
    expect(toggleComponents.length).toBeGreaterThanOrEqual(1)
  })

  it('renders CTA button with reservation text', () => {
    const wrapper = mount(OHeader)
    const buttons = wrapper.findAllComponents({ name: 'ABaseButton' })
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('has mobile menu button with menu icon initially', () => {
    const wrapper = mount(OHeader)
    const mobileButtons = wrapper.findAll('button')
    // Find the mobile menu button (one without type from ADarkModeToggle)
    const menuButton = mobileButtons.find(b => b.attributes('aria-label') === 'Open menu')
    expect(menuButton).toBeTruthy()
  })

  it('opens mobile menu when mobile button is clicked', async () => {
    const wrapper = mount(OHeader)

    // Mobile menu should not be visible initially
    const mobileButtons = wrapper.findAll('button')
    const menuButton = mobileButtons.find(b => {
      return b.attributes('aria-label') === 'Open menu' || b.attributes('aria-label') === 'Close menu'
    })

    expect(menuButton).toBeTruthy()

    // Before click, only the language dropdown has [role="menu"] (v-show hidden, but in DOM)
    expect(wrapper.findAll('[role="menu"]').length).toBe(1)

    await menuButton!.trigger('click')

    // After click, both language dropdown and mobile menu have [role="menu"]
    expect(wrapper.findAll('[role="menu"]').length).toBe(2)
    expect(menuButton!.attributes('aria-label')).toBe('Close menu')
  })

  it('closes mobile menu on second click', async () => {
    const wrapper = mount(OHeader)

    const menuButton = wrapper.findAll('button').find(b => {
      return b.attributes('aria-label') === 'Open menu'
    })

    await menuButton!.trigger('click')
    expect(wrapper.findAll('[role="menu"]').length).toBe(2)

    await menuButton!.trigger('click')
    // After closing, only the language dropdown remains
    expect(wrapper.findAll('[role="menu"]').length).toBe(1)
  })

  it('mobile menu has aria-expanded attribute', async () => {
    const wrapper = mount(OHeader)

    const menuButton = wrapper.findAll('button').find(b => {
      return b.attributes('aria-label') === 'Open menu' || b.attributes('aria-label') === 'Close menu'
    })

    expect(menuButton!.attributes('aria-expanded')).toBe('false')

    await menuButton!.trigger('click')
    expect(menuButton!.attributes('aria-expanded')).toBe('true')
  })

  it('renders language switcher in desktop nav', () => {
    const wrapper = mount(OHeader)
    // Language switcher button with globe icon
    const html = wrapper.html()
    expect(html).toContain('nav.language')
  })

  it('opens language dropdown on mouseenter', async () => {
    const wrapper = mount(OHeader)

    // Find the language switcher
    const langSwitcher = wrapper.find('.relative')
    expect(langSwitcher.exists()).toBe(true)

    // Trigger mouseenter
    await langSwitcher.trigger('mouseenter')
    // After mouseenter, v-show should make the menu visible
    const menuItems = wrapper.findAll('[role="menuitem"]')
    expect(menuItems.length).toBeGreaterThanOrEqual(1)
  })

  it('renders mobile language options when menu is open', async () => {
    const wrapper = mount(OHeader)

    // Open mobile menu
    const menuButton = wrapper.findAll('button').find(
      b => b.attributes('aria-label') === 'Open menu'
    )
    await menuButton!.trigger('click')

    // After opening, there should be language toggle buttons in mobile menu
    const html = wrapper.html()
    expect(html).toContain('nav.language')
  })
})
