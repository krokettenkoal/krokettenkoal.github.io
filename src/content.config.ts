import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import color from 'color-string';
import { projectTags } from '@/lib/types/content.ts';

function colorValidator(val: string): boolean {
	try {
		return color.get(val) != null;
	} catch {
		return false;
	}
}

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		thumbnail: image(),
		thumbnailAlt: z.string().optional(),
		background: image().optional(),
		date: z.string().date(),
		tags: z.enum(projectTags).array(),
		featured: z.boolean().default(false),
		youtube: z.string().optional(),
		colors: z.string().refine(colorValidator).array().optional(),
		gridSize: z.number().min(1).max(3).default(1),
		relatedProjects: z.array(reference('projects'))
	})
});

export const collections = { projects };