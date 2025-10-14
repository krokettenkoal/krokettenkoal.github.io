/**
 * WARNING: This is a pretty sketchy file that manually (and incompletely) defines the types for our content collections.
 * This is required because Astro's Content Collection types are not available outside the server context (i.e., in React components).
 */

export const projectTags = ['web', 'game', 'xr', 'unity', 'wwise', 'mobile'] as const;

export interface Image {
	src: string;
	width: number;
	height: number;
}

export interface ProjectData {
	title: string;
	description: string;
	thumbnail: Image;
	thumbnailAlt?: string;
	date: string;
	tags: (typeof projectTags[number])[];
	featured?: boolean;
	youtube?: string;
	colors?: string[];
	gridSize: 1 | 2 | 3;
	relatedProjects: { id: string; data: ProjectData }[];
}

export interface ProjectEntry {
	id: string;
	data: ProjectData;
}