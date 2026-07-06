<template>
  <div class="min-h-screen flex flex-col">
    <!-- Skip to content -->
    <a
      href="#main-content"
      class="skip-to-content"
      aria-label="Skip to main content"
    >
      {{ $t('skipToContent') }}
    </a>

    <OHeader />

    <main id="main-content" class="flex-1 pt-20">
      <slot />
    </main>

    <OFooter />
  </div>
</template>

<script setup lang="ts">
import OHeader from '~/components/organisms/OHeader.vue'
import OFooter from '~/components/organisms/OFooter.vue'
</script>
