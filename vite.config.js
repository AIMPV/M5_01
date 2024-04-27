import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://AIMPV.github.io/M5_01",
  build:{
    outDir: "build"
  }
})
