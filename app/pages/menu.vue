<template>
  <div>
    <!-- Page Header -->
    <section class="py-20 bg-wine-950 dark:bg-black relative overflow-hidden" aria-labelledby="menu-heading">
      <div class="absolute inset-0 opacity-5"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,169,110,0.4) 30px, rgba(201,169,110,0.4) 32px);"
        aria-hidden="true">
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 id="menu-heading" class="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          {{ $t('menu.title') }}
        </h1>
        <p class="text-wine-300 text-lg md:text-xl max-w-2xl mx-auto">
          {{ $t('menu.subtitle') }}
        </p>
        <div class="w-24 h-0.5 bg-gold-500 mx-auto mt-8" aria-hidden="true" />
      </div>
    </section>

    <!-- Menu Content -->
    <section class="py-16 md:py-24 bg-white dark:bg-wine-950 transition-colors">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Appetizers -->
        <div class="mb-20" aria-labelledby="appetizers-heading">
          <h2 id="appetizers-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ $t('menu.appetizers') }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="$t('menu.appetizer1Name')"
              :description="$t('menu.appetizer1Desc')"
              :price="$t('menu.appetizer1Price')"
              :dietary="['glutenFree']"
              :delay="0"
            />
            <MenuItem
              :name="$t('menu.appetizer2Name')"
              :description="$t('menu.appetizer2Desc')"
              :price="$t('menu.appetizer2Price')"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="100"
            />
            <MenuItem
              :name="$t('menu.appetizer3Name')"
              :description="$t('menu.appetizer3Desc')"
              :price="$t('menu.appetizer3Price')"
              :delay="200"
            />
            <MenuItem
              :name="$t('menu.appetizer4Name')"
              :description="$t('menu.appetizer4Desc')"
              :price="$t('menu.appetizer4Price')"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="300"
            />
          </div>
        </div>

        <!-- Main Courses -->
        <div class="mb-20" aria-labelledby="mains-heading">
          <h2 id="mains-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ $t('menu.mains') }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="$t('menu.main1Name')"
              :description="$t('menu.main1Desc')"
              :price="$t('menu.main1Price')"
              :dietary="['glutenFree']"
              :delay="0"
            />
            <MenuItem
              :name="$t('menu.main2Name')"
              :description="$t('menu.main2Desc')"
              :price="$t('menu.main2Price')"
              :dietary="['glutenFree']"
              :delay="100"
            />
            <MenuItem
              :name="$t('menu.main3Name')"
              :description="$t('menu.main3Desc')"
              :price="$t('menu.main3Price')"
              :dietary="['glutenFree']"
              :delay="200"
            />
            <MenuItem
              :name="$t('menu.main4Name')"
              :description="$t('menu.main4Desc')"
              :price="$t('menu.main4Price')"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="300"
            />
          </div>
        </div>

        <!-- Desserts -->
        <div class="mb-20" aria-labelledby="desserts-heading">
          <h2 id="desserts-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ $t('menu.desserts') }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="$t('menu.dessert1Name')"
              :description="$t('menu.dessert1Desc')"
              :price="$t('menu.dessert1Price')"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="0"
            />
            <MenuItem
              :name="$t('menu.dessert2Name')"
              :description="$t('menu.dessert2Desc')"
              :price="$t('menu.dessert2Price')"
              :dietary="['vegetarian']"
              :delay="100"
            />
            <MenuItem
              :name="$t('menu.dessert3Name')"
              :description="$t('menu.dessert3Desc')"
              :price="$t('menu.dessert3Price')"
              :dietary="['vegetarian']"
              :delay="200"
            />
            <MenuItem
              :name="$t('menu.dessert4Name')"
              :description="$t('menu.dessert4Desc')"
              :price="$t('menu.dessert4Price')"
              :dietary="['vegetarian']"
              :delay="300"
            />
          </div>
        </div>

        <!-- Wine List -->
        <div aria-labelledby="wine-heading">
          <h2 id="wine-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ $t('menu.wineList') }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="$t('menu.wine1Name')"
              :description="$t('menu.wine1Desc')"
              :price="$t('menu.wine1Price')"
              :is-wine="true"
              :delay="0"
            />
            <MenuItem
              :name="$t('menu.wine2Name')"
              :description="$t('menu.wine2Desc')"
              :price="$t('menu.wine2Price')"
              :is-wine="true"
              :delay="100"
            />
            <MenuItem
              :name="$t('menu.wine3Name')"
              :description="$t('menu.wine3Desc')"
              :price="$t('menu.wine3Price')"
              :is-wine="true"
              :delay="200"
            />
            <MenuItem
              :name="$t('menu.wine4Name')"
              :description="$t('menu.wine4Desc')"
              :price="$t('menu.wine4Price')"
              :is-wine="true"
              :delay="300"
            />
            <MenuItem
              :name="$t('menu.wine5Name')"
              :description="$t('menu.wine5Desc')"
              :price="$t('menu.wine5Price')"
              :is-wine="true"
              :delay="400"
            />
            <MenuItem
              :name="$t('menu.wine6Name')"
              :description="$t('menu.wine6Desc')"
              :price="$t('menu.wine6Price')"
              :is-wine="true"
              :delay="500"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-wine-950 dark:bg-black relative overflow-hidden transition-colors">
      <div class="absolute inset-0 opacity-10"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,169,110,0.3) 30px, rgba(201,169,110,0.3) 32px);"
        aria-hidden="true">
      </div>
      <div class="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <p class="text-wine-300 text-lg mb-8">
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
import MenuItem from '~/components/MenuItem.vue'

const localePath = useLocalePath()

useHead({
  title: 'Menu - La Maison Dorée',
  meta: [
    { name: 'description', content: 'Explore our carefully curated menu featuring seasonal appetizers, exquisite main courses, decadent desserts, and an award-winning wine list.' },
  ],
})
</script>
