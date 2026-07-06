<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-lg text-wine-700 hover:bg-wine-100 dark:text-wine-300 dark:hover:bg-wine-800/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
    :aria-label="darkModeStore.isDark ? $t('darkMode.toggleLight') : $t('darkMode.toggleDark')"
    @click="darkModeStore.toggle()"
  >
    <AIcon v-if="darkModeStore.isDark" name="sun" :size="size" />
    <AIcon v-else name="moon" :size="size" />
  </button>
</template>

<script setup lang="ts">
import { useDarkModeStore } from '~/stores/darkMode'
import AIcon from './AIcon.vue'

const darkModeStore = useDarkModeStore()

defineProps({
  size: { type: String, default: 'md' },
})
</script>
