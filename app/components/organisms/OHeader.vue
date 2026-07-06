<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-wine-950/95 backdrop-blur-sm border-b border-wine-100 dark:border-wine-800 transition-colors duration-300" role="banner">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center gap-2 text-wine-900 dark:text-wine-100 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
          aria-label="La Maison Dorée - Home"
        >
          <span class="text-2xl font-serif font-bold tracking-wide">
            {{ $t('site.name') }}
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="text-sm font-medium text-wine-700 dark:text-wine-300 hover:text-gold-500 dark:hover:text-gold-500 transition-colors uppercase tracking-wider"
            :aria-label="link.label"
          >
            {{ link.label }}
          </NuxtLink>

          <!-- Language Switcher -->
          <div class="relative" @mouseenter="langOpen = true" @mouseleave="langOpen = false">
            <button
              type="button"
              class="flex items-center gap-1 text-sm font-medium text-wine-700 dark:text-wine-300 hover:text-gold-500 transition-colors uppercase tracking-wider"
              :aria-label="$t('nav.language')"
              aria-haspopup="true"
              :aria-expanded="langOpen"
            >
              <AIcon name="globe" size="sm" />
              <span>{{ currentLocaleLabel }}</span>
              <AIcon name="chevron-down" size="sm" />
            </button>
            <div
              v-show="langOpen"
              class="absolute top-full right-0 mt-1 bg-white dark:bg-wine-900 border border-wine-100 dark:border-wine-700 rounded-lg shadow-lg py-1 min-w-[140px]"
              role="menu"
            >
              <button
                v-for="locale in availableLocales"
                :key="locale.code"
                type="button"
                class="w-full text-left px-4 py-2 text-sm text-wine-700 dark:text-wine-300 hover:bg-wine-50 dark:hover:bg-wine-800 transition-colors"
                :class="{ 'font-bold text-gold-600 dark:text-gold-400': locale.code === currentLocale }"
                role="menuitem"
                @click="switchLocale(locale.code)"
              >
                {{ locale.name }}
              </button>
            </div>
          </div>

          <!-- Dark Mode Toggle -->
          <ADarkModeToggle />

          <!-- CTA Button -->
          <NuxtLink :to="localePath('/contact')">
            <ABaseButton variant="primary" size="sm">
              {{ $t('nav.reservations') }}
            </ABaseButton>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center gap-3">
          <ADarkModeToggle />
          <button
            type="button"
            class="p-2 text-wine-700 dark:text-wine-300 hover:text-gold-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <AIcon :name="mobileMenuOpen ? 'close' : 'menu'" size="lg" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-wine-100 dark:border-wine-800 py-4 space-y-3"
        role="menu"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="localePath(link.to)"
          class="block px-4 py-2 text-base font-medium text-wine-700 dark:text-wine-300 hover:text-gold-500 dark:hover:text-gold-500 hover:bg-wine-50 dark:hover:bg-wine-800/50 rounded-lg transition-colors"
          role="menuitem"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="px-4 pt-2 border-t border-wine-100 dark:border-wine-800">
          <p class="text-xs text-wine-500 dark:text-wine-400 mb-2 uppercase tracking-wider">{{ $t('nav.language') }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              type="button"
              class="px-3 py-1.5 text-sm rounded-lg border transition-colors"
              :class="locale.code === currentLocale
                ? 'border-gold-500 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300 font-medium'
                : 'border-wine-200 dark:border-wine-700 text-wine-700 dark:text-wine-300 hover:border-gold-500'"
              @click="switchLocale(locale.code); mobileMenuOpen = false"
            >
              {{ locale.name }}
            </button>
          </div>
        </div>

        <div class="px-4 pt-2">
          <NuxtLink :to="localePath('/contact')" @click="mobileMenuOpen = false">
            <ABaseButton variant="primary" size="md" class="w-full">
              {{ $t('nav.reservations') }}
            </ABaseButton>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ABaseButton from '../atoms/ABaseButton.vue'
import AIcon from '../atoms/AIcon.vue'
import ADarkModeToggle from '../atoms/ADarkModeToggle.vue'

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const mobileMenuOpen = ref(false)
const langOpen = ref(false)

const currentLocale = computed(() => locale.value)

const availableLocales = computed(() => {
  return (locales.value as any[]).map((l: any) => ({
    code: l.code,
    name: l.name || l.code.toUpperCase(),
  }))
})

const currentLocaleLabel = computed(() => {
  const found = availableLocales.value.find((l: any) => l.code === locale.value)
  return found ? found.code.toUpperCase() : locale.value.toUpperCase()
})

function switchLocale(code: string) {
  langOpen.value = false
  navigateTo(switchLocalePath(code))
}

const navLinks = computed(() => [
  { to: '/', label: useNuxtApp().$i18n.t('nav.home') },
  { to: '/menu', label: useNuxtApp().$i18n.t('nav.menu') },
  { to: '/about', label: useNuxtApp().$i18n.t('nav.about') },
  { to: '/contact', label: useNuxtApp().$i18n.t('nav.contact') },
])
</script>
