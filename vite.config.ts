import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves the site from https://<user>.github.io/AIT/
  base: '/AIT/',
  plugins: [react()],
})
