import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectTags = ['web', 'game', 'xr', 'unity', 'wwise', 'mobile'] as const;

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		thumbnail: z.string(),
		tags: z.enum(projectTags).array(),
		featured: z.boolean().default(false),
		relatedProjects: z.array(reference('projects'))
	})
});

export const collections = { projects };