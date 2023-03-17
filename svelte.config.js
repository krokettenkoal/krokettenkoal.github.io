import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static'
import portfolio from "./src/data/portfolio/portfolio.data.js";
import {pages as p} from "./src/site.config.js";

const pages = p.map(p => p.url);
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
