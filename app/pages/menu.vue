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
          {{ 'Our Menu' }}
        </h1>
        <p class="text-wine-300 text-lg md:text-xl max-w-2xl mx-auto">
          {{ 'A carefully curated selection of dishes that celebrate the finest seasonal ingredients and culinary craftsmanship' }}
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
            {{ 'Appetizers' }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="'Tuna Tartare'"
              :description="'Fresh yellowfin tuna with avocado mousse, sesame tuile, and yuzu dressing'"
              :price="'$28'"
              :dietary="['glutenFree']"
              :delay="0"
            />
            <MenuItem
              :name="'Burrata & Heirloom Tomatoes'"
              :description="'Creamy burrata with vine-ripened heirloom tomatoes, basil oil, aged balsamic'"
              :price="'$24'"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="100"
            />
            <MenuItem
              :name="'Foie Gras Torchon'"
              :description="'House-made foie gras with brioche toast, fig compote, and Sauternes gelée'"
              :price="'$36'"
              :delay="200"
            />
            <MenuItem
              :name="'Wild Mushroom Velouté'"
              :description="'Silky mushroom soup with truffle foam and toasted hazelnuts'"
              :price="'$22'"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="300"
            />
          </div>
        </div>

        <!-- Main Courses -->
        <div class="mb-20" aria-labelledby="mains-heading">
          <h2 id="mains-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ 'Main Courses' }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="'Herb-Crusted Rack of Lamb'"
              :description="'New Zealand lamb with rosemary jus, ratatouille, and potato gratin'"
              :price="'$68'"
              :dietary="['glutenFree']"
              :delay="0"
            />
            <MenuItem
              :name="'Pan-Roasted Halibut'"
              :description="'Atlantic halibut with pea purée, morel mushrooms, and Champagne sauce'"
              :price="'$56'"
              :dietary="['glutenFree']"
              :delay="100"
            />
            <MenuItem
              :name="'Filet Mignon'"
              :description="'Prime beef tenderloin with green peppercorn sauce, asparagus, and pommes dauphine'"
              :price="'$78'"
              :dietary="['glutenFree']"
              :delay="200"
            />
            <MenuItem
              :name="'Wild Mushroom Risotto'"
              :description="'Creamy carnaroli rice with mixed wild mushrooms, truffle oil, and parmesan crisp'"
              :price="'$44'"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="300"
            />
          </div>
        </div>

        <!-- Desserts -->
        <div class="mb-20" aria-labelledby="desserts-heading">
          <h2 id="desserts-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ 'Desserts' }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="'Crème Brûlée'"
              :description="'Classic Tahitian vanilla bean crème brûlée with caramelized sugar crust'"
              :price="'$18'"
              :dietary="['vegetarian', 'glutenFree']"
              :delay="0"
            />
            <MenuItem
              :name="'Tarte Tatin'"
              :description="'Upside-down caramelized apple tart with Calvados crème fraîche'"
              :price="'$22'"
              :dietary="['vegetarian']"
              :delay="100"
            />
            <MenuItem
              :name="'Chocolate Fondant'"
              :description="'Warm molten chocolate cake with raspberry coulis and vanilla ice cream'"
              :price="'$20'"
              :dietary="['vegetarian']"
              :delay="200"
            />
            <MenuItem
              :name="'Cheese Selection'"
              :description="'Artisanal cheese board with honeycomb, quince paste, and walnut bread'"
              :price="'$32'"
              :dietary="['vegetarian']"
              :delay="300"
            />
          </div>
        </div>

        <!-- Wine List -->
        <div aria-labelledby="wine-heading">
          <h2 id="wine-heading" class="text-3xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
            {{ 'Wine List' }}
          </h2>
          <div class="w-16 h-0.5 bg-gold-500 mb-8" aria-hidden="true" />

          <div class="space-y-6">
            <MenuItem
              :name="'Château Margaux 2018'"
              :description="'Bordeaux, France — Full-bodied with notes of blackcurrant, cedar, and truffle'"
              :price="'$580'"
              :is-wine="true"
              :delay="0"
            />
            <MenuItem
              :name="'Domaine de la Romanée-Conti 2019'"
              :description="'Burgundy, France — Elegant and complex with silky tannins and dark fruit'"
              :price="'$2,200'"
              :is-wine="true"
              :delay="100"
            />
            <MenuItem
              :name="'Sassicaia 2020'"
              :description="'Tuscany, Italy — Super Tuscan with rich blackberry, spice, and tobacco'"
              :price="'$320'"
              :is-wine="true"
              :delay="200"
            />
            <MenuItem
              :name="'Veuve Clicquot La Grande Dame 2015'"
              :description="'Champagne, France — Refined bubbles with brioche, pear, and citrus zest'"
              :price="'$240'"
              :is-wine="true"
              :delay="300"
            />
            <MenuItem
              :name="'Cloudy Bay Sauvignon Blanc 2023'"
              :description="'Marlborough, New Zealand — Crisp and vibrant with passionfruit and gooseberry'"
              :price="'$85'"
              :is-wine="true"
              :delay="400"
            />
            <MenuItem
              :name="'Marqués de Riscal Reserva 2019'"
              :description="'Rioja, Spain — Tempranillo with vanilla, leather, and dark cherry'"
              :price="'$110'"
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
          {{ 'Reserve your table and let us create an unforgettable dining experience tailored just for you.' }}
        </p>
        <NuxtLink :to="localePath('/contact')">
          <ABaseButton variant="primary" size="lg" icon-right="arrow-right">
            {{ 'Make a Reservation' }}
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
