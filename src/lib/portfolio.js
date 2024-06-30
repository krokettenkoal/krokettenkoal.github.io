import data from '$data/portfolio/portfolio.data.js';
export const DEFAULT_PROJECT = {
    id: "new-project",
    title: "New project",
    description: "",
    text: "",
    background: "",
    portrait: "",
    thumbnail: "",
    logo: "logo.webp",
    hasTheme: false,
    links: [],
    media: []
};
/**
 *  Class representing a single link assigned to a project
 */
export class ProjectLink {
    target;
    label;
    title;
    constructor(data) {
        this.target = data.target;
        this.label = data.label;
        this.title = data.title;
    }
}
/**
 * Class representing a single project in the portfolio
 */
export class Project {
    id;
    title;
    description;
    text;
    background;
    portrait;
    logo;
    thumbnail;
    hasTheme;
    links;
    media;
    constructor(data = DEFAULT_PROJECT) {
        this.id = data.id || DEFAULT_PROJECT.id;
        this.title = data.title || DEFAULT_PROJECT.title;
        this.description = data.description || DEFAULT_PROJECT.description;
        this.text = data.text || DEFAULT_PROJECT.text;
        this.background = data.background || DEFAULT_PROJECT.background;
        this.portrait = data.portrait || DEFAULT_PROJECT.portrait;
        this.thumbnail = data.thumbnail || DEFAULT_PROJECT.thumbnail;
        this.hasTheme = data.hasTheme;
        this.media = data.media;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.logo = data.logo || DEFAULT_PROJECT.logo;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.links = (data.links || DEFAULT_PROJECT.links || []).map(l => new ProjectLink(l));
    }
    get bg() {
        return this.background ? `/img/portfolio/${this.id}/${this.background}` : '';
    }
    get thumb() {
        return this.thumbnail ? `/img/portfolio/${this.id}/${this.thumbnail}` : '';
    }
    get logoUrl() {
        return `/img/portfolio/${this.id}/${this.logo}`;
    }
}
/**
 * Class representing the whole portfolio, providing methods for retrieving one or more projects
 */
export class Portfolio {
    static async findProjects(...matches) {
        return data.projects.filter((p) => {
            return matches.length === 0
                || matches.some((m) => {
                    const match = m.constructor === String ? { id: m } : m;
                    return Object.keys(match).every((k) => p[k] === match[k]);
                });
        });
    }
    static async findProject(match) {
        if (!match)
            return undefined;
        const m = match.constructor === String ? { id: match } : match;
        return data.projects.find((p) => Object.keys(m).every((k) => p[k] === m[k]));
    }
    static async getProject(match) {
        if (!match)
            throw new ReferenceError('Invalid match');
        const m = match.constructor === String ? { id: match } : match;
        const res = data.projects.find((p) => Object.keys(m).every((k) => p[k] === m[k]));
        if (!res)
            throw new ReferenceError('No matching project found.');
        return res;
    }
}
//# sourceMappingURL=portfolio.js.map