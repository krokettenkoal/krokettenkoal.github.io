import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {entries: ['/', '/bio', '/portfolio', '/portfolio/nftp', '/portfolio/kk', '/portfolio/jhs']},
		alias: {
			'$src': './src',
			'$data': './src/data',
			'$stor': './src/stores.js'
		}
	}
};

export default config;
