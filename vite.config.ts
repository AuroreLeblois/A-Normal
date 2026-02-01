import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // Assets JS/CSS avec hash - cache longue durée (1 an)
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        runtimeCaching: [
          {
            // Assets statiques hashés - CacheFirst (1 an)
            urlPattern: /\.(?:js|css)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
              }
            }
          },
          {
            // Images et polices - CacheFirst (30 jours)
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico|woff|woff2)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-fonts',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 jours
              }
            }
          },
          {
            // Fichiers JSON (données) - StaleWhileRevalidate (rafraîchit en arrière-plan)
            urlPattern: /\.json$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'json-data',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 // 1 jour
              }
            }
          },
          {
            // PDFs - CacheFirst (7 jours)
            urlPattern: /\.pdf$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pdf-files',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 jours
              }
            }
          }
        ]
      },
      manifest: {
        name: 'A/Normal - Ressources',
        short_name: 'A/Normal',
        description: 'Ressources officielles du jeu de rôle A/Normal',
        theme_color: '#1a1a2e',
        background_color: '#1a1a2e',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  base: command === 'build' ? '/A-Normal/' : '/',
  build: {
    outDir: 'dist',
    // Optimisations pour réduire le JavaScript inutilisé
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
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
    target: 'es2020',
    cssCodeSplit: true
  }
}))
