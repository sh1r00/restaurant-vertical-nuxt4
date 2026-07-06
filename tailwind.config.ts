import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f5ccd3',
          300: '#eda3b0',
          400: '#e27088',
          500: '#d44564',
          600: '#c0274e',
          700: '#a11b41',
          800: '#871a3b',
          900: '#722F37',
          950: '#41121A',
        },
        gold: {
          50: '#fdfaed',
          100: '#f9f2cc',
          200: '#f3e495',
          300: '#ecd154',
          400: '#e5bd2d',
          500: '#C9A96E',
          600: '#a6822e',
          700: '#856027',
          800: '#6f4e26',
          900: '#5f4125',
          950: '#372312',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
}
