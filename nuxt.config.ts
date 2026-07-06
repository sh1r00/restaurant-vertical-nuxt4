// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityVersion: 4,
  devtools: { enabled: true },

  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-security',
  ],

  components: {
    dirs: [
      { path: '~/app/components/atoms', pathPrefix: false },
      { path: '~/app/components/molecules', pathPrefix: false },
      { path: '~/app/components/organisms', pathPrefix: false },
    ],
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'am', iso: 'am-ET', name: 'አማርኛ', file: 'am.json' },
    ],
    detection: { browserLanguage: false },
  },

  pwa: {
    registerType: 'autoUpdate',
    devOptions: { enabled: false },
    manifest: { name: 'App', short_name: 'App', theme_color: '#000000', background_color: '#ffffff', display: 'standalone' },
    workbox: { globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2,json}'], navigateFallback: '/', cleanupOutdatedCaches: true, skipWaiting: true, clientsClaim: true },
  },

  security: {
    headers: process.env.NODE_ENV === 'development' ? false : {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://fonts.googleapis.com'],
        'img-src': ["'self'", 'data:', 'https:'],
        'connect-src': ["'self'"],
        'frame-src': ["'self'"],
        'frame-ancestors': ["'self'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
      },
    },
    rateLimiter: false,
    xssValidator: process.env.NODE_ENV !== 'development',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
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

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'pinia'],
    },
  },
})
