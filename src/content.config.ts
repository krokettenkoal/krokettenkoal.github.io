import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const projectTags = ['web', 'game', 'xr', 'unity', 'wwise', 'mobile'] as const;

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		thumbnail: image(),
		thumbnailAlt: z.string().optional(),
		date: z.string().date(),
		tags: z.enum(projectTags).array(),
		featured: z.boolean().default(false),
		gridSize: z.number().min(1).max(3).default(1),
		relatedProjects: z.array(reference('projects'))
	})
});

export const collections = { projects };