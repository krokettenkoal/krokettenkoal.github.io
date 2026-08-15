// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), icon({
        include: {
            lucide: ['*'], // TODO: limit to only the icons used in the project
            'simple-icons': ['wwise', 'chocolatey'],
            'skill-icons': ['*'],
            devicon: ['renpy', 'illustrator'],
            fad: ['logo-reaper']
        }
    }), mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()]
    },
    site: 'https://cajetan.dev',
    redirects: {
        '/portfolio': '/projects',
        '/portfolio/[id]': '/projects/[id]'
    }
});