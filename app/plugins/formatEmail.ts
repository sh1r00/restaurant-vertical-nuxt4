import { formatEmail } from '~/composables/useEmail'

// Register `$formatEmail` as a template helper (used as `$formatEmail(...)` in
// OFooter.vue + contact.vue). Without this, SSR/prerender throws
// "_ctx.$formatEmail is not a function".
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('formatEmail', formatEmail)
})
