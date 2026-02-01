import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/A-Normal/' : '/',
  build: {
    outDir: 'dist',
    // Optimisations pour réduire le JavaScript inutilisé
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log en production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Séparation des vendors pour un meilleur caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui': ['react-kariu']
        }
      }
    },
    // Active le tree-shaking agressif
    target: 'es2020',
    cssCodeSplit: true
  }
}))
