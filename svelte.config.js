import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static'
import portfolio from "./src/data/portfolio/portfolio.json" assert { type: "json" };
import site from "./src/data/site.json" assert { type: "json" };

const pages = site.pages.map(p => p.url);
const portfolioPages = portfolio.projects.map(p => '/portfolio/' + p.id);

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
		prerender: {entries: [...pages, ...portfolioPages]},
		alias: {
			'$src': './src',
			'$data': './src/data',
			'$stor': './src/stores.js'
		}
	}
};

export default config;
