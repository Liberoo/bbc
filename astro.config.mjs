import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
  AstroPWA({
    mode: 'development',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'BBC App',
      short_name: 'BBC App',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//],
    },
    experimental: {
      directoryAndTrailingSlashHandler: true,
    }
  }),
  ],
});