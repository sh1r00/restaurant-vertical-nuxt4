import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins: [vue()],
  define: {
    'import.meta.client': 'true',
    'import.meta.server': 'false',
  },
  test: { 
    environment: 'happy-dom', 
    globals: true, 
    include: ['tests/unit/**/*.spec.ts'], 
    setupFiles: ['tests/unit/setup.ts'],
  },
  resolve: { alias: { '~': resolve(__dirname, 'app'), '@': resolve(__dirname, 'app') } },
})
