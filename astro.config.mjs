// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import icon from 'astro-icon';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), robotsTxt(), icon({
		include: {
			lucide: ['*'] // TODO: limit to only the icons used in the project
		}
	})],
	vite: {
		plugins: [tailwindcss()]
	},
	site: 'https://cajetan.dev'
});