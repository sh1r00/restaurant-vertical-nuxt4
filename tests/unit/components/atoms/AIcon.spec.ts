import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AIcon from '~/components/atoms/AIcon.vue'

describe('AIcon', () => {
  it('renders with required name prop', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    const span = wrapper.find('span')
    expect(span.exists()).toBe(true)
  })

  it('does not render if icon name is unknown', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'nonexistent-icon' },
    })
    const span = wrapper.find('span')
    expect(span.exists()).toBe(false)
  })

  it('applies default size class md', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('w-5')
    expect(span.classes()).toContain('h-5')
  })

  it('applies sm size class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun', size: 'sm' },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('w-3.5')
    expect(span.classes()).toContain('h-3.5')
  })

  it('applies lg size class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun', size: 'lg' },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('w-6')
    expect(span.classes()).toContain('h-6')
  })

  it('applies xl size class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun', size: 'xl' },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('w-8')
    expect(span.classes()).toContain('h-8')
  })

  it('applies 2xl size class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun', size: '2xl' },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('w-10')
    expect(span.classes()).toContain('h-10')
  })

  it('is decorative (aria-hidden="true") by default', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    const span = wrapper.find('span')
    expect(span.attributes('aria-hidden')).toBe('true')
    expect(span.attributes('aria-label')).toBeUndefined()
  })

  it('is not decorative when decorative=false', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun', decorative: false },
    })
    const span = wrapper.find('span')
    expect(span.attributes('aria-hidden')).toBeUndefined()
    expect(span.attributes('aria-label')).toBe('sun')
  })

  it('has flex-shrink-0 class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    expect(wrapper.find('span').classes()).toContain('flex-shrink-0')
  })

  it('has inline-block class', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    expect(wrapper.find('span').classes()).toContain('inline-block')
  })

  it('renders sun SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    expect(wrapper.find('span').html()).toContain('<circle')
    expect(wrapper.find('span').html()).toContain('cx="12"')
  })

  it('renders moon SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'moon' },
    })
    expect(wrapper.find('span').html()).toContain('<path')
  })

  it('renders menu SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'menu' },
    })
    const html = wrapper.find('span').html()
    expect(html).toContain('<line')
  })

  it('renders close SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'close' },
    })
    expect(wrapper.find('span').html()).toContain('<line')
  })

  it('renders phone SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'phone' },
    })
    expect(wrapper.find('span').html()).toContain('<path')
  })

  it('renders mail SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'mail' },
    })
    expect(wrapper.find('span').html()).toContain('<polyline')
  })

  it('renders map-pin SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'map-pin' },
    })
    expect(wrapper.find('span').html()).toContain('<path')
    expect(wrapper.find('span').html()).toContain('<circle')
  })

  it('renders clock SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'clock' },
    })
    expect(wrapper.find('span').html()).toContain('<circle')
    expect(wrapper.find('span').html()).toContain('<polyline')
  })

  it('renders star SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'star' },
    })
    expect(wrapper.find('span').html()).toContain('<polygon')
  })

  it('renders award SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'award' },
    })
    expect(wrapper.find('span').html()).toContain('<circle')
  })

  it('renders arrow-right SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'arrow-right' },
    })
    expect(wrapper.find('span').html()).toContain('<line')
    expect(wrapper.find('span').html()).toContain('<polyline')
  })

  it('renders chevron-down SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'chevron-down' },
    })
    expect(wrapper.find('span').html()).toContain('<polyline')
  })

  it('renders globe SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'globe' },
    })
    expect(wrapper.find('span').html()).toContain('<circle')
  })

  it('renders leaf SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'leaf' },
    })
    expect(wrapper.find('span').html()).toContain('<path')
  })

  it('renders wine SVG content', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'wine' },
    })
    expect(wrapper.find('span').html()).toContain('<path')
  })

  it('applies text-current class for color', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun' },
    })
    expect(wrapper.find('span').classes()).toContain('text-current')
  })

  it('handles unrecognized size gracefully with default', () => {
    const wrapper = mount(AIcon, {
      props: { name: 'sun', size: 'unknown' },
    })
    const span = wrapper.find('span')
    expect(span.classes()).toContain('w-5')
    expect(span.classes()).toContain('h-5')
  })
})
