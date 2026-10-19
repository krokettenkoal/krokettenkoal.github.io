import {z} from 'astro/zod';
import {defineCollection, reference} from 'astro:content';
import {glob} from 'astro/loaders';
import color from 'color-string';

function colorValidator(val: string): boolean {
    try {
        return color.get(val) != null;
    } catch {
        return false;
    }
}

const projects = defineCollection({
    loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/projects'}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: image(),
        thumbnailAlt: z.string().optional(),
        background: image().optional(),
        date: z.iso.date(),
        tags: z.array(z.stringFormat('project tag', /^[a-z-0-9]+$/)).nonempty(),
        featured: z.boolean().default(false),
        youtube: z.stringFormat('YouTube video id', /^[\w\-]+$/).optional(),
        colors: z.array(z.string().refine(colorValidator)).optional(),
        gridSize: z.number().min(1).max(3).default(1),
        relatedProjects: z.array(reference('projects'))
    })
});

export const collections = {projects};