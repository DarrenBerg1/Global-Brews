import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/static',
  build:{ outDir: '../CoffeeShopDjango/static',
  emptyOutDir:true,
  Sourcemap:true},
  
    plugins: [react()]
  })
  