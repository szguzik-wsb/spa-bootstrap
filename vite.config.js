import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      'vue': '@vue/compat',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/assets', import.meta.url)),
    }
  }
})
