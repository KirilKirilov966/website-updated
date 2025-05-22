import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',        // 📁 изходната папка, която копираш в nginx
    emptyOutDir: true      // 🧹 изчисти предишния билд
  },
  base: './'               // 🧭 важно за коректни пътища при nginx
})