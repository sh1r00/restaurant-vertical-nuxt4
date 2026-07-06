import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'

describe('darkMode store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    // Reset mocks
    vi.clearAllMocks()
    // Reset localStorage
    localStorage.clear()
    // Reset document classes
    document.documentElement.classList.remove('dark')
  })

  describe('state', () => {
    it('initializes with isDark as false', () => {
      const store = useDarkModeStore()
      expect(store.isDark).toBe(false)
    })
  })

  describe('toggle', () => {
    it('toggles isDark from false to true', () => {
      const store = useDarkModeStore()
      store.toggle()
      expect(store.isDark).toBe(true)
    })

    it('toggles isDark from true to false', () => {
      const store = useDarkModeStore()
      store.isDark = true
      store.toggle()
      expect(store.isDark).toBe(false)
    })

    it('persists dark mode to localStorage after toggle', () => {
      const store = useDarkModeStore()
      store.toggle()
      expect(localStorage.getItem('darkMode')).toBe('true')
      store.toggle()
      expect(localStorage.getItem('darkMode')).toBe('false')
    })

    it('toggles the dark class on document element', () => {
      const store = useDarkModeStore()
      store.toggle()
      expect(document.documentElement.classList.contains('dark')).toBe(true)
      store.toggle()
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })
  })

  describe('init', () => {
    it('reads from localStorage if stored value is "true"', () => {
      localStorage.setItem('darkMode', 'true')
      const store = useDarkModeStore()
      store.init()
      expect(store.isDark).toBe(true)
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('reads from localStorage if stored value is "false"', () => {
      localStorage.setItem('darkMode', 'false')
      const store = useDarkModeStore()
      store.init()
      expect(store.isDark).toBe(false)
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('falls back to matchMedia when no localStorage value', () => {
      // Default: no stored value, matchMedia will return false in happy-dom
      const store = useDarkModeStore()
      store.init()
      // In happy-dom, matchMedia defaults to { matches: false }
      expect(store.isDark).toBe(false)
    })

    it('uses matchMedia when localStorage is null and prefers dark', () => {
      // Mock matchMedia to return matches: true
      const originalMatchMedia = window.matchMedia
      window.matchMedia = vi.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }))

      try {
        const store = useDarkModeStore()
        store.init()
        expect(store.isDark).toBe(true)
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      } finally {
        window.matchMedia = originalMatchMedia
      }
    })
  })

  describe('apply', () => {
    it('adds dark class to document when isDark is true', () => {
      const store = useDarkModeStore()
      store.isDark = true
      store.apply()
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('removes dark class from document when isDark is false', () => {
      const store = useDarkModeStore()
      document.documentElement.classList.add('dark')
      store.isDark = false
      store.apply()
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })
  })
})
