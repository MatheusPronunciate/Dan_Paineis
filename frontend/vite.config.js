// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Adicione esta linha:
  // Substitua '<NOME-DO-SEU-REPO>' pelo nome real do seu repo no GitHub
  base: '/'
})