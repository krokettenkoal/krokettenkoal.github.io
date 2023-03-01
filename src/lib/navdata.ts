import site from "$data/site.json";
import type {SvelteComponent} from "svelte";

export interface INavPage {
    title: string;
    url: string;
    icon?: string;
}

export interface INavData {
    pages: INavPage[];
}

export interface IPrevNextData {
    prev: INavPage | null;
    next: INavPage | null;
}

export const data: INavData = {
    pages: site.pages
};

export function getPageIndex(url: string): number {
    return data.pages.findIndex(p => p.url === url);
}

export function getPrevNext(currentPath: string): IPrevNextData {
    const prevNext: IPrevNextData = {prev: null, next: null};

    const page = matchPage(currentPath);
    if(!page)
        return prevNext;

    const idx = getPageIndex(page.url);

    if(idx < 0){
        prevNext.prev = {
            title: 'Go to start',
            url: '/',
            icon: undefined
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

export function getPageData(url: string): INavPage | undefined {
    return data.pages.find(p => p.url === url);
}

export function matchPage(path: string): INavPage | undefined {
    const parts = path.split('/').filter(p => p);

    if(parts.length === 0)
        return getPageData('/');

    return getPageData('/' + parts[0]);
}