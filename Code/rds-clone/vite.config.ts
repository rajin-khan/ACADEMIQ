// rds-clone/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // As per v4.1 docs

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // The plugin is added here
  ],
})