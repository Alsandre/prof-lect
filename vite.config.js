import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile.html'),
        session1: resolve(__dirname, 'sessions/session1.html'),
        template: resolve(__dirname, 'sessions/template.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './js'),
      '@assets': resolve(__dirname, './public/assets')
    }
  }
}) 