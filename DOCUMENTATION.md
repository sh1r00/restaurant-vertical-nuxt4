# Restaurant Vertical (La Maison Dorée) — restaurant-vertical-nuxt4

> Category: Restaurant Template · Live: https://restaurant-vertical.netlify.app

## Functionality

A fine-dining restaurant site with a **vertical scroll** layout and an elegant French-cuisine theme.

- **Public pages** — `app/pages/index.vue` (home), `app/pages/menu.vue`, `app/pages/about.vue`, `app/pages/contact.vue`.
- **Layout** — vertical-scrolling sections; header/footer organisms (`OHeader`, `OFooter`).
- **Extras** — `app/composables/useEmail.ts` (contact form), `app/plugins/formatPrice.ts` (currency formatting).
- **Also included** — dark mode (SSR-safe via Pinia + `useCookie`), PWA (offline + install prompt), i18n (3 locales).

> **Note:** this template is the exception in the set — it runs as an SPA (`ssr: false`) and uses i18n `strategy: 'prefix_except_default'`, so the root `/` serves the app directly (no `/` → `/en/` redirect).

## Stack

- Nuxt 4 (`compatibilityVersion: 4`, `ssr: false` — SPA mode), Vue 3 `<script setup>`, TypeScript
- Pinia (stores: `darkMode`, `pwaInstall`)
- Tailwind CSS (`@nuxtjs/tailwindcss`)
- `@nuxtjs/i18n` v10 — 3 locales (English, Español, አማርኛ), `strategy: 'prefix_except_default'`
- `@vite-pwa/nuxt` — service worker, offline caching, installable manifest
- `nuxt-security` — CSP (nonce-based), rate limiter, XSS validator (production only)
- Vitest + Vue Test Utils (unit), Playwright (e2e)

## Steps Taken

`git log --oneline` (newest first):

- `b1e355d` fix(netlify): root `/` redirect to `/en/` (prefix strategy) + SPA fallback to `/200.html` *(see note below — superseded by the final SPA config)*
- `edc132d` fix(netlify): node 24 + legacy-peer-deps (nuxt-security@2.6.0 needs >=24)
- `2e481cb` fix(i18n+security): detectBrowserLanguage:false, `$t`→`t`, missing keys, CSP nonce, lazy i18n, branded PWA
- `ffd0487` fix README.md formatting
- `8f13c82` convert README.txt to README.md with GitHub markdown formatting
- `74ae4c3` add README.txt with deploy instructions + project overview
- `a09f2bb` restore nuxt-security CSP with permissive rules + ssr:false for i18n compat
- `26c282e` nuxt4 migration/creation + restaurant-vertical-nuxt4

## Pitfalls & Fixes

### Shared pitfalls (all shiro Nuxt 4 templates)

- **`nuxt-security@2.6.0` needs Node ≥ 24** — Netlify's default Node version is too old and the build fails. Fix: `NODE_VERSION = "24"` in `netlify.toml`.
- **esbuild peer conflict** — a peer dependency conflict (esbuild/rollup) aborts `npm install`. Fix: `npm install --legacy-peer-deps`.
- **i18n v10 `detectBrowserLanguage`** — browser detection causes unpredictable 302s on first load. Fix: `detectBrowserLanguage: false` and generate links with `const localePath = useLocalePath()`.
- **`$t()` is banned in `<template>`** — i18n v10 drops the global `$t()` template helper. Fix: `const { t } = useI18n()` in `<script setup>` and call `t('key')`.
- **Component auto-import `pathPrefix: false`** — default path-prefixed auto-import names don't match the tags, producing a blank screen. Fix: declare each component dir with `pathPrefix: false`.
- **PWA `navigateFallback`** — a precached SPA fallback serves non-precached URLs as the app shell → blank screen. Fix: `navigateFallback: null` and exclude `.html` from precache globs.
- **i18n `prefix` strategy root redirect** — with `strategy: 'prefix'` there is no page at `/`; Netlify must 302 `/` → `/en/`. *(Not applicable here — see project-specific note below.)*
- **`defineProps()` without `const props =`** — in `<script setup>` you must capture the return value (`const props = defineProps<...>()`); otherwise destructuring throws "props is not defined".
- **SSG vs SSR output dirs** — `nuxt build` (SSR) writes `.output/server` + `.output/public`; `nuxt generate` (SSG) writes the static site to `.output/public` only. Netlify `publish` must point at `.output/public`.

### Project-specific

- **SPA + `prefix_except_default` (no `/` → `/en/` redirect)** — this project uses `ssr: false` and i18n `strategy: 'prefix_except_default'`, so the root `/` serves the SPA. The `netlify.toml` therefore uses a single SPA fallback `/*` → `/index.html` (200) instead of a `/` → `/en/` redirect. (The `git log` commit `b1e355d` mentions the `/en/` redirect, but the actual committed `netlify.toml` reflects the SPA-only config.)
- **`ssr: false` for i18n compatibility** — SSR + i18n caused issues under Nuxt 4, so the project is intentionally an SPA (see commit `a09f2bb`).
- **Duplicate i18n locale files** — locale JSON exists in both `i18n/locales/` (referenced by `i18n/i18n.config.ts`) and `app/i18n/`. The `i18n/i18n.config.ts` sets `legacy: true` and bundles messages inline, separate from the module's lazy file-based config — keep both in sync when editing translations.

## Deployment

Static site generation (SPA output):

```bash
npm install --legacy-peer-deps
npm run generate   # → .output/public
```

Netlify (`netlify.toml`): `NODE_VERSION = "24"`, build command `npm install --legacy-peer-deps --no-audit --no-fund && npm run generate`, publish dir `.output/public`, redirect `/*` → `/index.html` (200, SPA fallback). No `/` → `/en/` redirect.

Live: https://restaurant-vertical.netlify.app
