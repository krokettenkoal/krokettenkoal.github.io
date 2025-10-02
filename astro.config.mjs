// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    integrations: [svelte(), robotsTxt()],
    vite: {
        plugins: [tailwindcss()]
    },
    site: 'https://cajetan.dev'
});