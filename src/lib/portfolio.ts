import type {IMedia} from "$lib/media";
import data from '$data/portfolio/portfolio.data.js'

export const DEFAULT_PROJECT: IProject = {
    id: "new-project",
    title: "New project",
    description: "",
    text: "",
    background: "",
    portrait: "",
    thumbnail: "",
    logo: "logo.png",
    hasTheme: false,
    links: [],
    media: []
}

/**
 * Interface for data of a single project link
 */
export interface IProjectLink {
    target: string;
    label: string;
    title?: string;
}

/**
 * Interface for data of a single project
 */
export interface IProject {
    [key: string]: any;
    id: string;
    title: string;
    description: string;
    text: string;
    background?: string;
    portrait?: string;
    logo?: string;
    thumbnail?: string;
    hasTheme?: boolean;
    links?: IProjectLink[];
    media?: IMedia[];
}

/**
 * Interface for finding projects using a match object
 */
export interface IProjectMatch {
    [key: string]: string | boolean | undefined;
    id?: string;
    title?: string;
    description?: string;
    text?: string;
    hasTheme?: boolean;
}

/**
 *  Class representing a single link assigned to a project
 */
export class ProjectLink implements IProjectLink {
    target: string;
    label: string;
    title?: string;

    constructor(data: IProjectLink) {
        this.target = data.target;
        this.label = data.label;
        this.title = data.title;
    }
}

/**
 * Class representing a single project in the portfolio
 */
export class Project implements IProject {
    [key: string]: any;
    id: string;
    title: string;
    description: string;
    text: string;
    background?: string;
    portrait?: string;
    logo: string;
    thumbnail?: string;
    hasTheme?: boolean;
    links?: ProjectLink[];
    media?: IMedia[];

    constructor(data: IProject = DEFAULT_PROJECT) {
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
        this.logo = data.logo || DEFAULT_PROJECT.logo!;

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.links = (data.links || DEFAULT_PROJECT.links! || []).map(l => new ProjectLink(l));
    }

    get bg(): string {
        return this.background ? `/img/portfolio/${this.id}/${this.background}` : '';
    }

    get thumb(): string {
        return this.thumbnail ? `/img/portfolio/${this.id}/${this.thumbnail}` : '';
    }

    get logoUrl(): string {
        return `/img/portfolio/${this.id}/${this.logo}`;
    }
}

/**
 * Class representing the whole portfolio, providing methods for retrieving one or more projects
 */
export class Portfolio {
    static async findProjects(...matches: Array<IProjectMatch | string>): Promise<IProject[]> {
        return data.projects.filter((p: IProject) => {
            return matches.length === 0
                || matches.some((m: IProjectMatch | string) => {
                const match: any = m.constructor === String ? {id: m} : m;
                return Object.keys(match).every((k: string) => p[k] === match[k]);
            });
        });
    }

    static async findProject(match: IProjectMatch | string): Promise<IProject | undefined> {
        if(!match)
            return undefined;

        const m: any = match.constructor === String ? {id: match} : match;
        return data.projects.find((p: IProject) =>
            Object.keys(m).every((k: string) =>
                p[k] === m[k])
        );
    }

    static async getProject(match: IProjectMatch | string): Promise<IProject> {
        if(!match)
            throw new ReferenceError('Invalid match');

        const m: any = match.constructor === String ? {id: match} : match;
        const res = data.projects.find((p: IProject) =>
            Object.keys(m).every((k: string) =>
                p[k] === m[k])
        );

        if(!res)
            throw new ReferenceError('No matching project found.');

        return res;
    }
}