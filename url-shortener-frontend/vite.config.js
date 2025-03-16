import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set base path for deployment
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, // Enable source maps
  },
})
