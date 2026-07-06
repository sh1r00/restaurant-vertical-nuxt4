import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ABaseButton from '~/components/atoms/ABaseButton.vue'

describe('ABaseButton', () => {
  it('renders a button element', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Click Me' },
    })
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Click Me')
  })

  it('renders with default type "button"', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'OK' },
    })
    expect(wrapper.find('button').attributes('type')).toBe('button')
  })

  it('renders with custom type submit', () => {
    const wrapper = mount(ABaseButton, {
      props: { type: 'submit' },
      slots: { default: 'Submit' },
    })
    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })

  it('renders with custom type reset', () => {
    const wrapper = mount(ABaseButton, {
      props: { type: 'reset' },
      slots: { default: 'Reset' },
    })
    expect(wrapper.find('button').attributes('type')).toBe('reset')
  })

  it('renders as disabled when disabled prop is true', () => {
    const wrapper = mount(ABaseButton, {
      props: { disabled: true },
      slots: { default: 'Disabled' },
    })
    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toBeDefined()
    expect(button.attributes('aria-disabled')).toBe('true')
  })

  it('renders with aria-label when provided', () => {
    const wrapper = mount(ABaseButton, {
      props: { ariaLabel: 'Close dialog' },
      slots: { default: 'X' },
    })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Close dialog')
  })

  it('renders with custom id', () => {
    const wrapper = mount(ABaseButton, {
      props: { id: 'my-button' },
      slots: { default: 'OK' },
    })
    expect(wrapper.find('button').attributes('id')).toBe('my-button')
  })

  it('applies primary variant classes by default', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Primary' },
    })
    const classes = wrapper.find('button').classes()
    expect(classes.join(' ')).toContain('bg-wine-900')
  })

  it('applies outline variant classes', () => {
    const wrapper = mount(ABaseButton, {
      props: { variant: 'outline' },
      slots: { default: 'Outline' },
    })
    const classes = wrapper.find('button').classes()
    expect(classes.join(' ')).toContain('border-2')
  })

  it('applies ghost variant classes', () => {
    const wrapper = mount(ABaseButton, {
      props: { variant: 'ghost' },
      slots: { default: 'Ghost' },
    })
    const classes = wrapper.find('button').classes()
    expect(classes).toContain('text-wine-900')
    expect(classes).not.toContain('bg-wine-900')
  })

  it('applies sm size classes', () => {
    const wrapper = mount(ABaseButton, {
      props: { size: 'sm' },
      slots: { default: 'Small' },
    })
    const classes = wrapper.find('button').classes()
    expect(classes.join(' ')).toContain('px-3')
  })

  it('applies md size classes by default', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Medium' },
    })
    const classes = wrapper.find('button').classes()
    expect(classes.join(' ')).toContain('px-6')
  })

  it('applies lg size classes', () => {
    const wrapper = mount(ABaseButton, {
      props: { size: 'lg' },
      slots: { default: 'Large' },
    })
    const classes = wrapper.find('button').classes()
    expect(classes.join(' ')).toContain('px-8')
  })

  it('renders left icon when iconLeft is provided', () => {
    const wrapper = mount(ABaseButton, {
      props: { iconLeft: 'arrow-right' },
      slots: { default: 'Next' },
    })
    const icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons.length).toBe(1)
    expect(icons[0].props('name')).toBe('arrow-right')
    expect(icons[0].classes()).toContain('mr-2')
  })

  it('renders right icon when iconRight is provided', () => {
    const wrapper = mount(ABaseButton, {
      props: { iconRight: 'arrow-right' },
      slots: { default: 'Next' },
    })
    const icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons.length).toBe(1)
    expect(icons[0].props('name')).toBe('arrow-right')
    expect(icons[0].classes()).toContain('ml-2')
  })

  it('renders left and right icons simultaneously', () => {
    const wrapper = mount(ABaseButton, {
      props: { iconLeft: 'menu', iconRight: 'close' },
      slots: { default: 'Actions' },
    })
    const icons = wrapper.findAllComponents({ name: 'AIcon' })
    expect(icons.length).toBe(2)
    expect(icons[0].props('name')).toBe('menu')
    expect(icons[1].props('name')).toBe('close')
  })

  it('does not render icons when none are provided', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Plain' },
    })
    expect(wrapper.findAllComponents({ name: 'AIcon' }).length).toBe(0)
  })

  it('renders slot content between icons', () => {
    const wrapper = mount(ABaseButton, {
      props: { iconLeft: 'star', iconRight: 'arrow-right' },
      slots: { default: '<span class="slot-text">Hello</span>' },
    })
    const html = wrapper.html()
    const leftIconIndex = html.indexOf('mr-2')
    const slotIndex = html.indexOf('slot-text')
    const rightIconIndex = html.indexOf('ml-2')
    expect(leftIconIndex).toBeLessThan(slotIndex)
    expect(slotIndex).toBeLessThan(rightIconIndex)
  })
})
