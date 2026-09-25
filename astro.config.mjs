// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The one production origin. Canonical URLs, the sitemap, Open Graph images
  // and structured data are all built from it. It must match the PRIMARY
  // domain in Netlify (currently the bare domain — `www` 301s to it). The
  // .netlify.app address still serves a full copy, which the absolute
  // canonicals point back here.
  site: 'https://bostonmotorsllp.com',

  // Netlify serves every page at its trailing-slash URL and 301s the other
  // form, so links, canonicals and the sitemap all use that form. 'always'
  // also makes the dev server reject a slash-less internal link.
  trailingSlash: 'always',

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
      weights: [400, 500, 600, 700],
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

  integrations: [sitemap()],
});
