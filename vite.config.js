import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@modals': fileURLToPath(new URL('./src/components/modals', import.meta.url)),
      '@renders': fileURLToPath(new URL('./src/components/renders', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@nodes': fileURLToPath(new URL('./src/nodes', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/icons', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@slices': fileURLToPath(new URL('./src/store/slices', import.meta.url)),
    },
  },
})
