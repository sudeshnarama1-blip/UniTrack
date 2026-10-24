import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative paths, so the built app works on GitHub Pages (or any host) under any folder.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
