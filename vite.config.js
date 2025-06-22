import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    preview: {
    allowedHosts: ['my-app-name-a3n8.onrender.com']
  }
})