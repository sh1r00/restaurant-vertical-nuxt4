export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatPrice(price: string): string {
        return price
      },
    },
  }
})
