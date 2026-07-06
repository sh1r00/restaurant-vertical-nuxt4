<template>
  <div>
    <!-- Page Header -->
    <section class="py-20 bg-wine-950 dark:bg-black relative overflow-hidden" aria-labelledby="contact-heading">
      <div class="absolute inset-0 opacity-5"
        style="background-image: repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,169,110,0.4) 30px, rgba(201,169,110,0.4) 32px);"
        aria-hidden="true">
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 id="contact-heading" class="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-wine-300 text-lg max-w-2xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
        <div class="w-24 h-0.5 bg-gold-500 mx-auto mt-8" aria-hidden="true" />
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white dark:bg-wine-950 transition-colors">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <!-- Sidebar: Info -->
          <aside class="lg:col-span-1 space-y-8" aria-label="Contact information">
            <!-- Hours -->
            <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-6 border border-wine-100 dark:border-wine-800">
              <h2 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-4 flex items-center gap-2">
                <AIcon name="clock" size="md" class="text-gold-500" />
                {{ $t('contact.hoursTitle') }}
              </h2>
              <ul class="space-y-3 text-sm text-wine-700 dark:text-wine-300">
                <li class="flex justify-between">
                  <span class="font-medium">{{ $t('contact.hoursDinner') }}</span>
                  <span class="text-wine-500 dark:text-wine-400">{{ $t('contact.hoursDinnerTime') }}</span>
                </li>
                <li class="flex justify-between">
                  <span class="font-medium">{{ $t('contact.hoursBrunch') }}</span>
                  <span class="text-wine-500 dark:text-wine-400">{{ $t('contact.hoursBrunchTime') }}</span>
                </li>
                <li class="flex justify-between border-t border-wine-200 dark:border-wine-700 pt-3">
                  <span class="font-medium text-wine-500">{{ $t('contact.hoursClosed') }}</span>
                </li>
              </ul>
            </div>

            <!-- Location -->
            <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-6 border border-wine-100 dark:border-wine-800">
              <h2 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-4 flex items-center gap-2">
                <AIcon name="map-pin" size="md" class="text-gold-500" />
                {{ $t('contact.locationTitle') }}
              </h2>
              <p class="text-sm text-wine-700 dark:text-wine-300 mb-1">{{ $t('contact.locationAddress') }}</p>
              <p class="text-xs text-wine-500 dark:text-wine-400">{{ $t('contact.locationCross') }}</p>
            </div>

            <!-- Phone & Email -->
            <div class="space-y-4">
              <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-6 border border-wine-100 dark:border-wine-800">
                <h2 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-4 flex items-center gap-2">
                  <AIcon name="phone" size="md" class="text-gold-500" />
                  {{ $t('contact.phoneTitle') }}
                </h2>
                <a :href="'tel:' + $t('contact.phoneNumber')" class="text-sm text-wine-700 dark:text-wine-300 hover:text-gold-500 transition-colors">
                  {{ $t('contact.phoneNumber') }}
                </a>
              </div>

              <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-6 border border-wine-100 dark:border-wine-800">
                <h2 class="text-lg font-serif font-semibold text-wine-900 dark:text-wine-100 mb-4 flex items-center gap-2">
                  <AIcon name="mail" size="md" class="text-gold-500" />
                  {{ $formatEmail(t('contact.emailTitle')) }}
                </h2>
                <a :href="'mailto:' + $formatEmail(t('contact.emailAddress'))" class="text-sm text-wine-700 dark:text-wine-300 hover:text-gold-500 transition-colors break-all">
                  {{ $formatEmail(t('contact.emailAddress')) }}
                </a>
              </div>
            </div>

            <!-- Dress Code & Parking -->
            <div class="space-y-3 text-sm">
              <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-6 border border-wine-100 dark:border-wine-800">
                <h3 class="font-semibold text-wine-900 dark:text-wine-100 mb-1">{{ $t('contact.dressCode') }}</h3>
                <p class="text-wine-600 dark:text-wine-400">{{ $t('contact.dressCodeDetail') }}</p>
              </div>
              <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-6 border border-wine-100 dark:border-wine-800">
                <h3 class="font-semibold text-wine-900 dark:text-wine-100 mb-1">{{ $t('contact.parking') }}</h3>
                <p class="text-wine-600 dark:text-wine-400">{{ $t('contact.parkingDetail') }}</p>
              </div>
            </div>
          </aside>

          <!-- Reservation Form -->
          <div class="lg:col-span-2">
            <div class="bg-wine-50 dark:bg-wine-900/20 rounded-2xl p-8 border border-wine-100 dark:border-wine-800">
              <h2 class="text-2xl font-serif font-bold text-wine-900 dark:text-wine-100 mb-2">
                {{ $t('contact.reservationTitle') }}
              </h2>
              <p class="text-wine-600 dark:text-wine-400 text-sm mb-8">
                {{ $t('contact.reservationSubtitle') }}
              </p>

              <!-- Success State -->
              <div v-if="submitted" class="text-center py-12" role="status">
                <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 class="text-xl font-serif font-semibold text-wine-900 dark:text-wine-100 mb-2">
                  {{ $t('contact.successTitle') }}
                </h3>
                <p class="text-wine-600 dark:text-wine-400 max-w-md mx-auto">
                  {{ $t('contact.successMessage') }}
                </p>
              </div>

              <!-- Form -->
              <form
                v-else
                class="space-y-6"
                novalidate
                @submit.prevent="handleSubmit"
              >
                <!-- Name -->
                <div>
                  <label for="reservation-name" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                    {{ $t('contact.nameLabel') }} <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="reservation-name"
                    v-model="form.name"
                    type="text"
                    :placeholder="$t('contact.namePlaceholder')"
                    required
                    :aria-invalid="errors.name ? 'true' : 'false'"
                    :aria-describedby="errors.name ? 'name-error' : undefined"
                    class="w-full px-4 py-3 bg-white dark:bg-wine-900 border rounded-lg text-wine-900 dark:text-wine-100 placeholder-wine-400 dark:placeholder-wine-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    :class="errors.name ? 'border-red-500' : 'border-wine-200 dark:border-wine-700'"
                  />
                  <p v-if="errors.name" id="name-error" class="mt-1 text-sm text-red-500" role="alert">{{ errors.name }}</p>
                </div>

                <!-- Email & Phone row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="reservation-email" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                      {{ $formatEmail(t('contact.emailLabel')) }} <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="reservation-email"
                      v-model="form.email"
                      type="email"
                      :placeholder="$formatEmail(t('contact.emailPlaceholder'))"
                      required
                      :aria-invalid="errors.email ? 'true' : 'false'"
                      :aria-describedby="errors.email ? 'email-error' : undefined"
                      class="w-full px-4 py-3 bg-white dark:bg-wine-900 border rounded-lg text-wine-900 dark:text-wine-100 placeholder-wine-400 dark:placeholder-wine-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      :class="errors.email ? 'border-red-500' : 'border-wine-200 dark:border-wine-700'"
                    />
                    <p v-if="errors.email" id="email-error" class="mt-1 text-sm text-red-500" role="alert">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label for="reservation-phone" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                      {{ $t('contact.phoneLabel') }}
                    </label>
                    <input
                      id="reservation-phone"
                      v-model="form.phone"
                      type="tel"
                      :placeholder="$t('contact.phonePlaceholder')"
                      :aria-invalid="errors.phone ? 'true' : 'false'"
                      :aria-describedby="errors.phone ? 'phone-error' : undefined"
                      class="w-full px-4 py-3 bg-white dark:bg-wine-900 border border-wine-200 dark:border-wine-700 rounded-lg text-wine-900 dark:text-wine-100 placeholder-wine-400 dark:placeholder-wine-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    />
                    <p v-if="errors.phone" id="phone-error" class="mt-1 text-sm text-red-500" role="alert">{{ errors.phone }}</p>
                  </div>
                </div>

                <!-- Date, Time, Guests row -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label for="reservation-date" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                      {{ $t('contact.dateLabel') }} <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="reservation-date"
                      v-model="form.date"
                      type="date"
                      required
                      :aria-invalid="errors.date ? 'true' : 'false'"
                      :aria-describedby="errors.date ? 'date-error' : undefined"
                      class="w-full px-4 py-3 bg-white dark:bg-wine-900 border rounded-lg text-wine-900 dark:text-wine-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      :class="errors.date ? 'border-red-500' : 'border-wine-200 dark:border-wine-700'"
                    />
                    <p v-if="errors.date" id="date-error" class="mt-1 text-sm text-red-500" role="alert">{{ errors.date }}</p>
                  </div>
                  <div>
                    <label for="reservation-time" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                      {{ $t('contact.timeLabel') }} <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="reservation-time"
                      v-model="form.time"
                      required
                      :aria-invalid="errors.time ? 'true' : 'false'"
                      :aria-describedby="errors.time ? 'time-error' : undefined"
                      class="w-full px-4 py-3 bg-white dark:bg-wine-900 border rounded-lg text-wine-900 dark:text-wine-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      :class="errors.time ? 'border-red-500' : 'border-wine-200 dark:border-wine-700'"
                    >
                      <option value="" disabled>{{ $t('contact.timeLabel') }}</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    <p v-if="errors.time" id="time-error" class="mt-1 text-sm text-red-500" role="alert">{{ errors.time }}</p>
                  </div>
                  <div>
                    <label for="reservation-guests" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                      {{ $t('contact.guestsLabel') }} <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="reservation-guests"
                      v-model="form.guests"
                      required
                      :aria-invalid="errors.guests ? 'true' : 'false'"
                      :aria-describedby="errors.guests ? 'guests-error' : undefined"
                      class="w-full px-4 py-3 bg-white dark:bg-wine-900 border rounded-lg text-wine-900 dark:text-wine-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      :class="errors.guests ? 'border-red-500' : 'border-wine-200 dark:border-wine-700'"
                    >
                      <option value="" disabled>{{ $t('contact.guestsPlaceholder') }}</option>
                      <option v-for="n in 10" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
                    </select>
                    <p v-if="errors.guests" id="guests-error" class="mt-1 text-sm text-red-500" role="alert">{{ errors.guests }}</p>
                  </div>
                </div>

                <!-- Occasion -->
                <div>
                  <label for="reservation-occasion" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                    {{ $t('contact.occasionLabel') }}
                  </label>
                  <select
                    id="reservation-occasion"
                    v-model="form.occasion"
                    class="w-full px-4 py-3 bg-white dark:bg-wine-900 border border-wine-200 dark:border-wine-700 rounded-lg text-wine-900 dark:text-wine-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{{ $t('contact.occasionNone') }}</option>
                    <option value="birthday">{{ $t('contact.occasionBirthday') }}</option>
                    <option value="anniversary">{{ $t('contact.occasionAnniversary') }}</option>
                    <option value="business">{{ $t('contact.occasionBusiness') }}</option>
                    <option value="other">{{ $t('contact.occasionOther') }}</option>
                  </select>
                </div>

                <!-- Special Requests -->
                <div>
                  <label for="reservation-requests" class="block text-sm font-medium text-wine-700 dark:text-wine-300 mb-2">
                    {{ $t('contact.requestsLabel') }}
                  </label>
                  <textarea
                    id="reservation-requests"
                    v-model="form.requests"
                    :placeholder="$t('contact.requestsPlaceholder')"
                    rows="4"
                    class="w-full px-4 py-3 bg-white dark:bg-wine-900 border border-wine-200 dark:border-wine-700 rounded-lg text-wine-900 dark:text-wine-100 placeholder-wine-400 dark:placeholder-wine-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-y"
                  />
                </div>

                <!-- Submit -->
                <div class="pt-2">
                  <ABaseButton
                    id="reservation-submit"
                    type="submit"
                    variant="primary"
                    size="lg"
                    :disabled="submitting"
                    class="w-full sm:w-auto"
                  >
                    {{ submitting ? $t('contact.submitting') : $t('contact.submitButton') }}
                  </ABaseButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import ABaseButton from '~/components/atoms/ABaseButton.vue'
import AIcon from '~/components/atoms/AIcon.vue'

const { t } = useI18n()

const submitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  occasion: '',
  requests: '',
})

const errors = reactive<Record<string, string>>({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
})

function validate(): boolean {
  let valid = true

  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.date = ''
  errors.time = ''
  errors.guests = ''

  if (!form.name.trim()) {
    errors.name = t('errors.required')
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = t('errors.required')
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = formatEmail(t('errors.email'))
    valid = false
  }

  if (form.phone && !/^[\d\s\+\-\(\)\.]{7,}$/.test(form.phone)) {
    errors.phone = t('errors.phone')
    valid = false
  }

  if (!form.date) {
    errors.date = t('errors.required')
    valid = false
  }

  if (!form.time) {
    errors.time = t('errors.required')
    valid = false
  }

  if (!form.guests) {
    errors.guests = t('errors.required')
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (!validate()) return

  submitting.value = true

  // Simulate API call
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
  }, 1500)
}

useHead({
  title: 'Contact & Reservations - La Maison Dorée',
  meta: [
    { name: 'description', content: 'Make a reservation at La Maison Dorée. View our hours, location, and contact information for the finest dining experience.' },
  ],
})
</script>
