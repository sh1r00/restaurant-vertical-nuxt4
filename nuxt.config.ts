// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityVersion: 4,
  devtools: { enabled: true },

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-security',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: false,
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'es', language: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'am', language: 'am', iso: 'am-ET', file: 'am.json', name: 'አማርኛ' },
    ],
  },

  components: {
    dirs: [
      { path: '~/app/components/atoms', pathPrefix: false },
      { path: '~/app/components/molecules', pathPrefix: false },
      { path: '~/app/components/organisms', pathPrefix: false },
    ],
  },

  pwa: {
    registerType: 'autoUpdate',
    devOptions: { enabled: false },
    manifest: { name: 'La Maison Dorée', short_name: 'Maison Dorée', theme_color: '#1a1a2e', display: 'standalone' },
    workbox: { globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'], navigateFallback: '/', cleanupOutdatedCaches: true, skipWaiting: true, clientsClaim: true },
  },

  security: {
    headers: process.env.NODE_ENV === 'development' ? false : {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://fonts.googleapis.com'],
        'img-src': ["'self'", 'data:', 'https:'],
        'connect-src': ["'self'"],
        'frame-src': ["'self'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
      },
    },
    rateLimiter: { tokensPerInterval: 30, interval: 60000 },
    xssValidator: process.env.NODE_ENV !== 'development',
  },

  app: {
    head: {
      title: 'La Maison Dorée — Fine Dining',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },

  tailwindcss: {
    css: { configPath: 'tailwind.config.ts', cssPath: 'app/assets/css/main.css' },
  },

  vite: { optimizeDeps: { include: ['@vue/devtools-core', '@vue/devtools-kit', 'pinia'] } },
  nitro: { prerender: { failOnError: false } },
})
