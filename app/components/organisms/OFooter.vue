<template>
  <footer class="bg-wine-950 dark:bg-black text-wine-100 border-t border-wine-800" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand Column -->
        <div class="space-y-4">
          <NuxtLink :to="localePath('/')" class="text-2xl font-serif font-bold text-gold-500">
            {{ $t('site.name') }}
          </NuxtLink>
          <p class="text-sm text-wine-300 leading-relaxed">
            {{ $t('site.tagline') }}
          </p>
        </div>

        <!-- Contact Column -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold uppercase tracking-widest text-gold-500">{{ $t('contact.title') }}</h3>
          <ul class="space-y-3 text-sm text-wine-300">
            <li class="flex items-start gap-2">
              <AIcon name="map-pin" size="sm" class="mt-0.5 text-gold-500 flex-shrink-0" />
              <span>{{ $t('footer.address') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <AIcon name="phone" size="sm" class="mt-0.5 text-gold-500 flex-shrink-0" />
              <a :href="'tel:' + $t('footer.phone')" class="hover:text-gold-500 transition-colors">{{ $t('footer.phone') }}</a>
            </li>
            <li class="flex items-start gap-2">
              <AIcon name="mail" size="sm" class="mt-0.5 text-gold-500 flex-shrink-0" />
              <a :href="'mailto:' + $formatEmail(t('footer.email'))" class="hover:text-gold-500 transition-colors">{{ $formatEmail(t('footer.email')) }}</a>
            </li>
          </ul>
        </div>

        <!-- Hours Column -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold uppercase tracking-widest text-gold-500">{{ $t('footer.hours') }}</h3>
          <div class="flex items-start gap-2 text-sm text-wine-300">
            <AIcon name="clock" size="sm" class="mt-0.5 text-gold-500 flex-shrink-0" />
            <p class="leading-relaxed">{{ $t('footer.hoursValue') }}</p>
          </div>
        </div>

        <!-- Newsletter Column -->
        <div class="space-y-4">
          <h3 class="text-sm font-semibold uppercase tracking-widest text-gold-500">{{ $t('footer.newsletter') }}</h3>
          <p class="text-sm text-wine-300">{{ $t('site.description') }}</p>
          <form class="flex gap-2" @submit.prevent="handleNewsletterSubmit">
            <label :for="newsletterId" class="sr-only">{{ $t('footer.newsletterPlaceholder') }}</label>
            <input
              :id="newsletterId"
              v-model="newsletterEmail"
              type="email"
              :placeholder="$t('footer.newsletterPlaceholder')"
              class="flex-1 px-3 py-2 text-sm bg-wine-900 dark:bg-wine-800 border border-wine-700 dark:border-wine-600 rounded-lg text-wine-100 placeholder-wine-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
            <ABaseButton type="submit" variant="outline" size="sm">
              {{ $t('footer.newsletterButton') }}
            </ABaseButton>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-wine-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-wine-400">
          &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
        </p>
        <div class="flex gap-6 text-xs text-wine-400">
          <NuxtLink :to="localePath('/contact')" class="hover:text-gold-500 transition-colors">
            {{ $t('footer.privacyPolicy') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="hover:text-gold-500 transition-colors">
            {{ $t('footer.termsOfService') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ABaseButton from '../atoms/ABaseButton.vue'
import AIcon from '../atoms/AIcon.vue'

const localePath = useLocalePath()

const newsletterEmail = ref('')
const newsletterId = 'footer-newsletter-email'

function handleNewsletterSubmit() {
  if (newsletterEmail.value) {
    // In a real app, this would call an API
    newsletterEmail.value = ''
  }
}
</script>
