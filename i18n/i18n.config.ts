import en from './locales/en.json'
import es from './locales/es.json'
import am from './locales/am.json'

export default defineI18nConfig(() => ({
  legacy: true,
  locale: 'en',
  messages: {
    en,
    es,
    am,
  },
}))
