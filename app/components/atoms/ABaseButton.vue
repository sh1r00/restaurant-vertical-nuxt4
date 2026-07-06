<template>
  <button
    :id="id"
    :type="type"
    :disabled="disabled"
    :class="computedClasses"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
  >
    <AIcon v-if="iconLeft" :name="iconLeft" class="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
    <slot />
    <AIcon v-if="iconRight" :name="iconRight" class="w-5 h-5 ml-2 flex-shrink-0" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import AIcon from './AIcon.vue'

const props = defineProps({
  id: { type: String, default: undefined },
  variant: {
    type: String as PropType<'primary' | 'outline' | 'ghost'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  disabled: { type: Boolean, default: false },
  iconLeft: { type: String, default: undefined },
  iconRight: { type: String, default: undefined },
  ariaLabel: { type: String, default: undefined },
  to: { type: String, default: undefined },
})

const computedClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<string, string> = {
    primary: 'bg-wine-900 text-white hover:bg-wine-800 dark:bg-wine-700 dark:hover:bg-wine-600',
    outline: 'border-2 border-wine-900 text-wine-900 hover:bg-wine-900 hover:text-white dark:border-wine-300 dark:text-wine-100 dark:hover:bg-wine-700 dark:hover:text-white',
    ghost: 'text-wine-900 hover:bg-wine-50 dark:text-wine-100 dark:hover:bg-wine-900/30',
  }

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return [base, variants[props.variant], sizes[props.size]].join(' ')
})
</script>
