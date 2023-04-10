import type {SvelteComponent} from "svelte";

export class TextUtils {
    static limit (str: string, limit: number, ellipsis = '[...]'): string {
        if(str.length < limit)
            return str.slice();

        const cutIndex = str.slice(0, limit - ellipsis.length).lastIndexOf(' ') + 1;
        return str.slice(0, cutIndex) + ellipsis;
    }

    static hash (str: string, seed = 0): number {
        let h1 = 0xdeadbeef ^ seed,
            h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }

        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };
}

export function icon(name: string): Promise<SvelteComponent> {
    return import(`../../node_modules/svelte-material-icons/${name}.svelte`);
}

export function mmss(seconds: number): string {
    const mins = Math.trunc(seconds / 60);
    const secs = seconds % 60;

    const mm = ('0' + mins).slice(-2);
    const ss = ('0' + secs).slice(-2);

    return `${mm}:${ss}`;
}