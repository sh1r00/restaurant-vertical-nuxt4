import { config } from '@vue/test-utils'
import { vi, beforeEach } from 'vitest'
import { ref } from 'vue'

// Mock vue-i18n module — needed because components import { useI18n } from 'vue-i18n'
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    locale: ref('en'),
    locales: ref([
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
    ]),
    t: (key: string) => key,
  }),
}))

const cookieStore: Record<string, any> = {}
vi.stubGlobal('useCookie', (key: string, opts?: any) => {
  if (!(key in cookieStore)) {
    const defaultVal = opts?.default ? (typeof opts.default === 'function' ? opts.default() : opts.default) : null
    cookieStore[key] = ref(defaultVal)
  }
  return cookieStore[key]
})

vi.stubGlobal('useHead', vi.fn())
vi.stubGlobal('useSeoMeta', vi.fn())
vi.stubGlobal('useRuntimeConfig', vi.fn(() => ({})))
vi.stubGlobal('navigateTo', vi.fn())
vi.stubGlobal('useRoute', vi.fn(() => ({ path: '/', params: {}, query: {}, fullPath: '/' })))
vi.stubGlobal('useRouter', vi.fn(() => ({ push: vi.fn(), replace: vi.fn() })))

// useLocalePath should return a function that maps paths
vi.stubGlobal('useLocalePath', vi.fn(() => (path: string) => path))
vi.stubGlobal('useSwitchLocalePath', vi.fn(() => (path: string) => path))

vi.stubGlobal('useI18n', vi.fn(() => ({
  locale: ref('en'),
  locales: ref([
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ]),
  t: (key: string) => key,
})))

vi.stubGlobal('useNuxtApp', vi.fn(() => ({
  $i18n: { t: (key: string) => key },
})))

vi.stubGlobal('$fetch', vi.fn().mockResolvedValue({}))

// Mock $t for template usage
config.global.mocks = {
  $t: (key: string) => key,
}

config.global.stubs = {
  NuxtLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
  ClientOnly: { template: '<div><slot /></div>' },
}

beforeEach(() => {
  for (const k of Object.keys(cookieStore)) delete cookieStore[k]
})
vi.stubGlobal("import", { meta: { client: true, server: false } })
import { useDarkModeStore } from '~/stores/darkMode'; vi.stubGlobal('useDarkMode', () => useDarkModeStore());
