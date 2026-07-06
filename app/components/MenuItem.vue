<template>
  <div
    class="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-wine-50/50 dark:bg-wine-900/20 border border-transparent hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all duration-300"
  >
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1 flex-wrap">
        <h3 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100">
          {{ name }}
        </h3>
        <!-- Dietary badges -->
        <span
          v-for="diet in dietary"
          :key="diet"
          class="text-[10px] px-1.5 py-0.5 rounded-full border uppercase tracking-wider font-medium"
          :class="dietBadgeClass(diet)"
        >
          {{ dietLabel(diet) }}
        </span>
      </div>
      <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
    <div class="flex-shrink-0 text-right">
      <p class="text-xl font-serif font-semibold text-gold-600 dark:text-gold-400 whitespace-nowrap">
        {{ price }}
      </p>
      <p v-if="isWine" class="text-xs text-wine-500 dark:text-wine-500 mt-0.5">per bottle</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $i18n } = useNuxtApp()
const t = $i18n.t

const props = defineProps({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  dietary: { type: Array as () => string[], default: () => [] },
  isWine: { type: Boolean, default: false },
  delay: { type: Number, default: 0 },
})

function dietLabel(diet: string): string {
  const labels: Record<string, string> = {
    vegetarian: t('menu.vegetarian'),
    glutenFree: t('menu.glutenFree'),
    vegan: t('menu.vegan'),
  }
  return labels[diet] || diet
}

function dietBadgeClass(diet: string): string {
  const classes: Record<string, string> = {
    vegetarian: 'border-green-500 text-green-700 dark:text-green-400',
    glutenFree: 'border-amber-500 text-amber-700 dark:text-amber-400',
    vegan: 'border-emerald-500 text-emerald-700 dark:text-emerald-400',
  }
  return classes[diet] || 'border-wine-300 text-wine-600 dark:text-wine-400'
}
</script>
