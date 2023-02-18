import type {SvelteComponent} from "svelte";
import HumanGreeting from 'svelte-material-icons/HumanGreeting.svelte';
import CardAccountDetails from 'svelte-material-icons/CardAccountDetails.svelte';
import FileCertificate from 'svelte-material-icons/FileCertificate.svelte';

export interface NavPage {
    title: string;
    url: string;
    icon: typeof SvelteComponent | null;
}

export interface NavData {
    pages: NavPage[];
}

export interface PrevNextData {
    prev: NavPage | null;
    next: NavPage | null;
}

export const data: NavData = {
    pages: [
        {
            title: 'Welcome',
            url: '/',
            icon: HumanGreeting
        },
        {
            title: 'Bio',
            url: '/bio',
            icon: CardAccountDetails,
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
            icon: FileCertificate
        }
    ]
}

export function getPageIndex(url: string): number {
    return data.pages.findIndex(p => p.url === url);
}

export function getPrevNext(currentPath: string): PrevNextData {
    const prevNext: PrevNextData = {prev: null, next: null};

    const page = matchPage(currentPath);
    if(!page)
        return prevNext;

    const idx = getPageIndex(page.url);

    if(idx < 0){
        prevNext.prev = {
            title: 'Go to start',
            url: '/',
            icon: null
        };

        return prevNext;
    }

    if(idx > 0){
        prevNext.prev = data.pages[idx - 1];
    }

    if(idx < data.pages.length - 1){
        prevNext.next = data.pages[idx + 1];
    }

    return prevNext;
}

export function getPageData(url: string): NavPage | undefined {
    return data.pages.find(p => p.url === url);
}

export function matchPage(path: string): NavPage | undefined {
    const parts = path.split('/').filter(p => p);

    if(parts.length === 0)
        return getPageData('/');

    return getPageData('/' + parts[0]);
}