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
            'skill-icons': [
                'typescript',
                'javascript',
                'cs',
            ],
            devicon: [
                'renpy',
                'tailwindcss',
            ],
            'devicon-plain': [
                'linkedin',
            ],
            fad: ['logo-reaper'],
            logos: [
                'nodejs-icon'
            ],
            thesvg: [
                'unity',
                'github',
            ],
            'thesvg-color': [
                'vite',
                'svelte',
                'astro-light',
                'astro-dark',
                'react-light',
                'react-dark',
                'php-light',
                'php-dark',
                'mysql-light',
                'mysql-dark',
                'git',
                'microsoft-azure',
                'chocolatey',
                'powershell',
                'html5',
                'css',
                'dotnet',
                'ansible',
                'jetbrains'
            ]
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