// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code: string;
			id: number;
		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
