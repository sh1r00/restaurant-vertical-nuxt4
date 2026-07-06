import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'
import ADarkModeToggle from '~/components/atoms/ADarkModeToggle.vue'

describe('ADarkModeToggle', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders a button element', () => {
    const wrapper = mount(ADarkModeToggle)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders moon icon when not in dark mode', () => {
    const wrapper = mount(ADarkModeToggle)
    const icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons.length).toBe(1)
    expect(icons[0].props('name')).toBe('moon')
  })

  it('renders sun icon when in dark mode', () => {
    const store = useDarkModeStore()
    store.isDark = true
    const wrapper = mount(ADarkModeToggle)
    const icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons.length).toBe(1)
    expect(icons[0].props('name')).toBe('sun')
  })

  it('toggles dark mode when clicked', async () => {
    const wrapper = mount(ADarkModeToggle)
    const store = useDarkModeStore()
    expect(store.isDark).toBe(false)

    await wrapper.find('button').trigger('click')
    expect(store.isDark).toBe(true)

    await wrapper.find('button').trigger('click')
    expect(store.isDark).toBe(false)
  })

  it('updates icon after toggle', async () => {
    const wrapper = mount(ADarkModeToggle)

    // Initially moon (light mode)
    let icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons[0].props('name')).toBe('moon')

    // Toggle to dark
    await wrapper.find('button').trigger('click')
    icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons[0].props('name')).toBe('sun')

    // Toggle back to light
    await wrapper.find('button').trigger('click')
    icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons[0].props('name')).toBe('moon')
  })

  it('passes size prop to AIcon', () => {
    const wrapper = mount(ADarkModeToggle, {
      props: { size: 'lg' },
    })
    const icon = wrapper.findComponent({ name: 'AIcon' })
    expect(icon.props('size')).toBe('lg')
  })

  it('uses default size md when no size prop', () => {
    const wrapper = mount(ADarkModeToggle)
    const icon = wrapper.findComponent({ name: 'AIcon' })
    expect(icon.props('size')).toBe('md')
  })

  it('has accessibility label for light mode', () => {
    const wrapper = mount(ADarkModeToggle)
    const button = wrapper.find('button')
    // Since $t returns key, label will be 'darkMode.toggleDark'
    expect(button.attributes('aria-label')).toBe('darkMode.toggleDark')
  })

  it('has accessibility label for dark mode', () => {
    const store = useDarkModeStore()
    store.isDark = true
    const wrapper = mount(ADarkModeToggle)
    const button = wrapper.find('button')
    expect(button.attributes('aria-label')).toBe('darkMode.toggleLight')
  })

  it('has button type="button"', () => {
    const wrapper = mount(ADarkModeToggle)
    expect(wrapper.find('button').attributes('type')).toBe('button')
  })
})
