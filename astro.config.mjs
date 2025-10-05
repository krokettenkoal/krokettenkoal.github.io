// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import robotsTxt from 'astro-robots-txt';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		robotsTxt(),
		icon({
			include: {
				lucide: ['*'] // TODO: limit to only the icons used in the project
			}
		})
	],
	vite: {
		plugins: [tailwindcss()]
	},
	site: 'https://cajetan.dev'
});