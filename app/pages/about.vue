<template>
  <div>
    <!-- Page Header -->
    <section class="py-20 bg-wine-950 dark:bg-black relative overflow-hidden" aria-labelledby="about-heading">
      <div class="absolute inset-0 opacity-5"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,169,110,0.4) 30px, rgba(201,169,110,0.4) 32px);"
        aria-hidden="true">
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 id="about-heading" class="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          {{ $t('about.title') }}
        </h1>
        <div class="w-24 h-0.5 bg-gold-500 mx-auto" aria-hidden="true" />
      </div>
    </section>

    <!-- Chef Story -->
    <section class="py-16 md:py-24 bg-white dark:bg-wine-950 transition-colors" aria-labelledby="chef-heading">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Chef Image -->
          <div class="relative">
            <div class="aspect-[3/4] bg-gradient-to-br from-wine-200 via-wine-300 to-gold-200 dark:from-wine-800 dark:via-wine-700 dark:to-gold-900/30 rounded-2xl flex items-center justify-center overflow-hidden" aria-hidden="true">
              <div class="text-center p-8">
                <AIcon name="star" size="2xl" class="text-wine-600 dark:text-wine-400 opacity-40 mb-4" />
                <p class="text-wine-700 dark:text-wine-300 text-lg font-serif italic">Chef Antoine Laurent</p>
              </div>
            </div>
            <!-- Decorative border -->
            <div class="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold-500 rounded-tl-2xl" aria-hidden="true" />
            <div class="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold-500 rounded-br-2xl" aria-hidden="true" />
          </div>

          <!-- Chef Bio -->
          <div>
            <h2 id="chef-heading" class="text-3xl md:text-4xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
              {{ $t('about.chefName') }}
            </h2>
            <p class="text-gold-600 dark:text-gold-400 font-medium mb-6 text-lg">
              {{ $t('about.chefTitle') }}
            </p>
            <div class="space-y-4 text-wine-600 dark:text-wine-300 leading-relaxed">
              <p>{{ $t('about.chefBio1') }}</p>
              <p>{{ $t('about.chefBio2') }}</p>
              <p>{{ $t('about.chefBio3') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="py-16 md:py-24 bg-wine-50 dark:bg-wine-900/20 transition-colors" aria-labelledby="philosophy-heading">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 id="philosophy-heading" class="section-heading mb-4">
            {{ $t('about.philosophyTitle') }}
          </h2>
          <div class="w-24 h-0.5 bg-gold-500 mx-auto" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Philosophy 1 -->
          <div class="bg-white dark:bg-wine-950 rounded-2xl p-8 text-center border border-wine-100 dark:border-wine-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300">
            <div class="w-14 h-14 bg-wine-100 dark:bg-wine-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <AIcon name="leaf" size="lg" class="text-gold-600 dark:text-gold-400" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-3">
              {{ $t('about.philosophy1Title') }}
            </h3>
            <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
              {{ $t('about.philosophy1Desc') }}
            </p>
          </div>

          <!-- Philosophy 2 -->
          <div class="bg-white dark:bg-wine-950 rounded-2xl p-8 text-center border border-wine-100 dark:border-wine-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300">
            <div class="w-14 h-14 bg-wine-100 dark:bg-wine-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <AIcon name="star" size="lg" class="text-gold-600 dark:text-gold-400" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-3">
              {{ $t('about.philosophy2Title') }}
            </h3>
            <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
              {{ $t('about.philosophy2Desc') }}
            </p>
          </div>

          <!-- Philosophy 3 -->
          <div class="bg-white dark:bg-wine-950 rounded-2xl p-8 text-center border border-wine-100 dark:border-wine-800 hover:border-gold-500 dark:hover:border-gold-500 transition-all duration-300">
            <div class="w-14 h-14 bg-wine-100 dark:bg-wine-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <AIcon name="wine" size="lg" class="text-gold-600 dark:text-gold-400" />
            </div>
            <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-3">
              {{ $t('about.philosophy3Title') }}
            </h3>
            <p class="text-wine-600 dark:text-wine-400 text-sm leading-relaxed">
              {{ $t('about.philosophy3Desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards -->
    <section class="py-16 md:py-24 bg-white dark:bg-wine-950 transition-colors" aria-labelledby="awards-heading">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 id="awards-heading" class="section-heading mb-4">
            {{ $t('about.awardsTitle') }}
          </h2>
          <div class="w-24 h-0.5 bg-gold-500 mx-auto" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Award 1 -->
          <div class="text-center p-6 rounded-xl bg-wine-50 dark:bg-wine-900/20 border border-wine-100 dark:border-wine-800">
            <AIcon name="award" size="xl" class="text-gold-500 mx-auto mb-4" />
            <h3 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-1">
              {{ $t('about.award1Name') }}
            </h3>
            <p class="text-xs text-gold-600 dark:text-gold-400 font-medium mb-2">{{ $t('about.award1Year') }}</p>
            <p class="text-sm text-wine-600 dark:text-wine-400">{{ $t('about.award1Desc') }}</p>
          </div>

          <!-- Award 2 -->
          <div class="text-center p-6 rounded-xl bg-wine-50 dark:bg-wine-900/20 border border-wine-100 dark:border-wine-800">
            <AIcon name="award" size="xl" class="text-gold-500 mx-auto mb-4" />
            <h3 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-1">
              {{ $t('about.award2Name') }}
            </h3>
            <p class="text-xs text-gold-600 dark:text-gold-400 font-medium mb-2">{{ $t('about.award2Year') }}</p>
            <p class="text-sm text-wine-600 dark:text-wine-400">{{ $t('about.award2Desc') }}</p>
          </div>

          <!-- Award 3 -->
          <div class="text-center p-6 rounded-xl bg-wine-50 dark:bg-wine-900/20 border border-wine-100 dark:border-wine-800">
            <AIcon name="award" size="xl" class="text-gold-500 mx-auto mb-4" />
            <h3 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-1">
              {{ $t('about.award3Name') }}
            </h3>
            <p class="text-xs text-gold-600 dark:text-gold-400 font-medium mb-2">{{ $t('about.award3Year') }}</p>
            <p class="text-sm text-wine-600 dark:text-wine-400">{{ $t('about.award3Desc') }}</p>
          </div>

          <!-- Award 4 -->
          <div class="text-center p-6 rounded-xl bg-wine-50 dark:bg-wine-900/20 border border-wine-100 dark:border-wine-800">
            <AIcon name="award" size="xl" class="text-gold-500 mx-auto mb-4" />
            <h3 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-1">
              {{ $t('about.award4Name') }}
            </h3>
            <p class="text-xs text-gold-600 dark:text-gold-400 font-medium mb-2">{{ $t('about.award4Year') }}</p>
            <p class="text-sm text-wine-600 dark:text-wine-400">{{ $t('about.award4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AIcon from '~/components/atoms/AIcon.vue'

useHead({
  title: 'About - La Maison Dorée',
  meta: [
    { name: 'description', content: 'Meet Chef Antoine Laurent and discover the philosophy, passion, and awards behind La Maison Dorée.' },
  ],
})
</script>
