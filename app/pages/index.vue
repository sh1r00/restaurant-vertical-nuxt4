<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <!-- Hero Background -->
      <div class="absolute inset-0 bg-wine-950">
        <div class="absolute inset-0 bg-gradient-to-r from-wine-950/90 to-wine-950/60 z-10" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-transparent to-transparent z-10" />
        <!-- Decorative Pattern -->
        <div class="absolute inset-0 opacity-10 z-0"
          style="background-image: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,169,110,0.3) 40px, rgba(201,169,110,0.3) 42px);">
        </div>
      </div>

      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p class="text-gold-500 text-lg md:text-xl font-serif italic mb-4 tracking-wide">
          {{ $t('site.tagline') }}
        </p>
        <h1 id="hero-heading" class="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          {{ $t('home.heroTitle') }}
        </h1>
        <p class="text-wine-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {{ $t('home.heroSubtitle') }}
        </p>
        <NuxtLink :to="localePath('/contact')">
          <ABaseButton variant="primary" size="lg" icon-right="arrow-right">
            {{ $t('home.heroCTA') }}
          </ABaseButton>
        </NuxtLink>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" aria-hidden="true">
        <AIcon name="chevron-down" size="lg" class="text-gold-500" />
      </div>
    </section>

    <!-- Featured Dishes Section -->
    <section class="py-20 md:py-28 bg-white dark:bg-wine-950 transition-colors" aria-labelledby="featured-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 id="featured-heading" class="section-heading mb-4">
            {{ $t('home.featuredTitle') }}
          </h2>
          <p class="text-wine-600 dark:text-wine-300 text-lg max-w-2xl mx-auto">
            {{ $t('home.featuredSubtitle') }}
          </p>
          <div class="w-24 h-0.5 bg-gold-500 mx-auto mt-6" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Dish 1 -->
          <article class="group bg-wine-50 dark:bg-wine-900/30 rounded-2xl overflow-hidden border border-wine-100 dark:border-wine-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
            <div class="h-48 bg-gradient-to-br from-wine-200 to-wine-400 dark:from-wine-800 dark:to-wine-700 flex items-center justify-center" aria-hidden="true">
              <AIcon name="leaf" size="2xl" class="text-wine-600 dark:text-wine-400 opacity-50" />
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100">
                  {{ $t('home.dish1Name') }}
                </h3>
                <span class="text-gold-600 dark:text-gold-400 font-medium ml-2 flex-shrink-0">{{ $t('home.dish1Price') }}</span>
              </div>
              <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
                {{ $t('home.dish1Desc') }}
              </p>
            </div>
          </article>

          <!-- Dish 2 -->
          <article class="group bg-wine-50 dark:bg-wine-900/30 rounded-2xl overflow-hidden border border-wine-100 dark:border-wine-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
            <div class="h-48 bg-gradient-to-br from-wine-300 to-wine-500 dark:from-wine-800 dark:to-wine-700 flex items-center justify-center" aria-hidden="true">
              <AIcon name="star" size="2xl" class="text-wine-600 dark:text-wine-400 opacity-50" />
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100">
                  {{ $t('home.dish2Name') }}
                </h3>
                <span class="text-gold-600 dark:text-gold-400 font-medium ml-2 flex-shrink-0">{{ $t('home.dish2Price') }}</span>
              </div>
              <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
                {{ $t('home.dish2Desc') }}
              </p>
            </div>
          </article>

          <!-- Dish 3 -->
          <article class="group bg-wine-50 dark:bg-wine-900/30 rounded-2xl overflow-hidden border border-wine-100 dark:border-wine-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
            <div class="h-48 bg-gradient-to-br from-wine-200 to-wine-400 dark:from-wine-800 dark:to-wine-700 flex items-center justify-center" aria-hidden="true">
              <AIcon name="wine" size="2xl" class="text-wine-600 dark:text-wine-400 opacity-50" />
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100">
                  {{ $t('home.dish3Name') }}
                </h3>
                <span class="text-gold-600 dark:text-gold-400 font-medium ml-2 flex-shrink-0">{{ $t('home.dish3Price') }}</span>
              </div>
              <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
                {{ $t('home.dish3Desc') }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Chef's Specials -->
    <section class="py-20 md:py-28 bg-wine-50 dark:bg-wine-900/20 transition-colors" aria-labelledby="specials-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 id="specials-heading" class="section-heading mb-4">
            {{ $t('home.specialsTitle') }}
          </h2>
          <p class="text-wine-600 dark:text-wine-300 text-lg max-w-2xl mx-auto">
            {{ $t('home.specialsSubtitle') }}
          </p>
          <div class="w-24 h-0.5 bg-gold-500 mx-auto mt-6" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Special 1 -->
          <div class="relative group">
            <div class="h-56 bg-gradient-to-br from-wine-200 to-wine-400 dark:from-wine-800 dark:to-wine-700 rounded-2xl flex items-center justify-center mb-4" aria-hidden="true">
              <AIcon name="star" size="2xl" class="text-gold-500 opacity-60" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-2">
              {{ $t('home.special1Name') }}
            </h3>
            <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
              {{ $t('home.special1Desc') }}
            </p>
          </div>

          <!-- Special 2 -->
          <div class="relative group">
            <div class="h-56 bg-gradient-to-br from-wine-300 to-wine-500 dark:from-wine-800 dark:to-wine-700 rounded-2xl flex items-center justify-center mb-4" aria-hidden="true">
              <AIcon name="star" size="2xl" class="text-gold-500 opacity-60" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-2">
              {{ $t('home.special2Name') }}
            </h3>
            <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
              {{ $t('home.special2Desc') }}
            </p>
          </div>

          <!-- Special 3 -->
          <div class="relative group">
            <div class="h-56 bg-gradient-to-br from-wine-200 to-wine-400 dark:from-wine-800 dark:to-wine-700 rounded-2xl flex items-center justify-center mb-4" aria-hidden="true">
              <AIcon name="star" size="2xl" class="text-gold-500 opacity-60" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-2">
              {{ $t('home.special3Name') }}
            </h3>
            <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
              {{ $t('home.special3Desc') }}
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink :to="localePath('/menu')">
            <ABaseButton variant="outline" size="md" icon-right="arrow-right">
              {{ $t('home.viewAllMenu') }}
            </ABaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Reservation CTA -->
    <section class="py-20 md:py-28 bg-wine-950 dark:bg-black relative overflow-hidden transition-colors" aria-labelledby="cta-heading">
      <div class="absolute inset-0 opacity-10"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,169,110,0.3) 30px, rgba(201,169,110,0.3) 32px);"
        aria-hidden="true">
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 id="cta-heading" class="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          {{ $t('home.ctaTitle') }}
        </h2>
        <p class="text-wine-300 text-lg mb-10 leading-relaxed">
          {{ $t('home.ctaSubtitle') }}
        </p>
        <NuxtLink :to="localePath('/contact')">
          <ABaseButton variant="primary" size="lg" icon-right="arrow-right">
            {{ $t('home.ctaButton') }}
          </ABaseButton>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ABaseButton from '~/components/atoms/ABaseButton.vue'
import AIcon from '~/components/atoms/AIcon.vue'

const localePath = useLocalePath()

useHead({
  title: 'La Maison Dorée - Fine Dining Restaurant',
  meta: [
    { name: 'description', content: 'An exceptional fine-dining experience. Michelin-starred cuisine, impeccable service, and an ambiance of refined elegance.' },
  ],
})
</script>
