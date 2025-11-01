/**
 * Vite Configuration
 * 
 * Build tool configuration for the portfolio application.
 * Configures React plugin, Tailwind CSS, and base path for GitHub Pages deployment.
 * 
 * @fileoverview Vite build configuration
 * @see https://vite.dev/config/
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Vite Configuration Export
 * 
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    react(),        // React plugin for JSX/TSX support
    tailwindcss()   // Tailwind CSS Vite plugin
  ],
  base: '/portfolio',  // Base path for GitHub Pages deployment
})
