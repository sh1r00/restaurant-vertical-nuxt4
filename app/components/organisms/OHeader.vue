<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-wine-950/95 backdrop-blur-sm border-b border-wine-100 dark:border-wine-800 transition-colors duration-300" role="banner">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
      <div class="flex items-center justify-between h-20">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-wine-900 dark:text-wine-100 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
          aria-label="La Maison Dorée - Home"
        >
          <span class="text-2xl font-serif font-bold tracking-wide">La Maison Dorée</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks" :key="link.to" :to="link.to"
            class="text-sm font-medium text-wine-700 dark:text-wine-300 hover:text-gold-500 dark:hover:text-gold-500 transition-colors uppercase tracking-wider"
            :aria-label="link.label"
          >{{ link.label }}</NuxtLink>
          <ADarkModeToggle />
          <NuxtLink to="/contact">
            <ABaseButton variant="primary" size="sm">Reservations</ABaseButton>
          </NuxtLink>
        </div>

        <div class="flex md:hidden items-center gap-3">
          <ADarkModeToggle />
          <button type="button"
            class="p-2 text-wine-700 dark:text-wine-300 hover:text-gold-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="mobileMenuOpen"
            @click="mobileMenuOpen = !mobileMenuOpen">
            <AIcon :name="mobileMenuOpen ? 'close' : 'menu'" size="lg" />
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden border-t border-wine-100 dark:border-wine-800 py-4 space-y-3" role="menu">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
          class="block px-4 py-2 text-base font-medium text-wine-700 dark:text-wine-300 hover:text-gold-500 dark:hover:text-gold-500 hover:bg-wine-50 dark:hover:bg-wine-800/50 rounded-lg transition-colors"
          role="menuitem" @click="mobileMenuOpen = false">{{ link.label }}</NuxtLink>
        <div class="px-4 pt-2">
          <NuxtLink to="/contact" @click="mobileMenuOpen = false">
            <ABaseButton variant="primary" size="md" class="w-full">Reservations</ABaseButton>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ABaseButton from '../atoms/ABaseButton.vue'
import AIcon from '../atoms/AIcon.vue'
import ADarkModeToggle from '../atoms/ADarkModeToggle.vue'

const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
</script>
