import * as site from "$src/site.config.js";
export const data = {
    pages: site.pages
};
export function getPageIndex(url) {
    return data.pages.findIndex(p => p.url === url);
}
export function getPrevNext(currentPath) {
    const prevNext = { prev: null, next: null };
    const page = matchPage(currentPath);
    if (!page)
        return prevNext;
    const idx = getPageIndex(page.url);
    if (idx < 0) {
        prevNext.prev = {
            title: 'Go to start',
            url: '/',
            icon: undefined
        };
        return prevNext;
    }
    if (idx > 0) {
        prevNext.prev = data.pages[idx - 1];
    }
    if (idx < data.pages.length - 1) {
        prevNext.next = data.pages[idx + 1];
    }
    return prevNext;
}
export function getPageData(url) {
    return data.pages.find(p => p.url === url);
}
export function matchPage(path) {
    const parts = path.split('/').filter(p => p);
    if (parts.length === 0)
        return getPageData('/');
    return getPageData('/' + parts[0]);
}
//# sourceMappingURL=navdata.js.map