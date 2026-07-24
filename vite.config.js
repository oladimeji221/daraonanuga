import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Base is './' so the built site can be dropped into any folder (e.g. XAMPP htdocs)
// and still resolve its assets with relative paths.
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    port: 5173,
    open: false
  }
})
