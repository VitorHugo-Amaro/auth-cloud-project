// 1. Importe o defineConfig do vitest/config em vez de 'vite'
import { defineConfig } from 'vitest/config' 
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Configurações do VITE (para o site rodar)
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // importante para o Docker que você configurou!
  },

  // Configurações do VITEST (para os testes rodarem)
  test: {
    globals: true,
    environment: 'jsdom', // simula o navegador
    setupFiles: './src/test/setup.ts', // arquivo que limpa os testes
  },
})