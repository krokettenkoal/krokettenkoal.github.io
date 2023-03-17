import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		sourcemap: true
	},
	plugins: [
		sveltekit()
	]
};

export default config;
