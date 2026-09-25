// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// NOTE: `site` is required for canonical URLs, sitemap and absolute OG image URLs.
// Left unset until Boston Motors confirms the production domain.
// site: 'https://www.bostonmotors.in',

// https://astro.build/config
export default defineConfig({
  image: {
    // Every <Image /> gets a responsive srcset + sizes by default.
    layout: 'constrained',
    responsiveStyles: true,
  },

  // Self-hosted, subsetted and preloaded at build time — no runtime request to Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: [400, 500, 600, 700, 800],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      subsets: ['latin'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
