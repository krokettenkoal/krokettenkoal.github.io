import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { type ProjectEntry, projectTags } from '@/lib/types/content';
import { className as tagListClass } from '@/components/common/tag-list';

type ProjectsGridProps = {
	projects: ProjectEntry[];
	gridClass?: string;
	cardClass?: string;
	tagFilterClass?: string;
	showTagFilter?: boolean;
}

const gridSizes: Record<number, string> = {
	1: 'col-span-3 lg:col-span-1',
	2: 'col-span-3 lg:col-span-2',
	3: 'col-span-3 lg:col-span-3'
};

export function ProjectsGrid({
															 projects,
															 showTagFilter = false,
															 tagFilterClass = '',
															 gridClass = '',
															 cardClass = ''
														 }: ProjectsGridProps) {
	const [tagFilter, setTagFilter] = useState<typeof projectTags[number] | null>(null);
	const filteredProjects = tagFilter ? projects.filter(p => p.data.tags.includes(tagFilter)) : projects;

	return (
		<>
			{showTagFilter && (
				<div className={cn(tagFilterClass)}>
					<ul className={cn(tagListClass, 'inline-flex p-2')}>
						<li key="all">
							<button
								className={buttonVariants({ variant: tagFilter === null ? 'default' : 'outline' })}
								onClick={() => setTagFilter(null)}
								disabled={tagFilter === null}>
								all
							</button>
						</li>
						{projectTags.map((tag) => (
							<li key={tag}>
								<button
									className={buttonVariants({ variant: tagFilter === tag ? 'default' : 'outline' })}
									onClick={() => setTagFilter(tag)}
									disabled={tagFilter === tag}>
									{tag}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}

			{filteredProjects.length > 0 ? (
				<BentoGrid className={cn(gridClass)}>
					{filteredProjects.map((project, idx) => (
						<BentoCard
							key={idx}
							href={`/projects/${project.id}`}
							name={project.data.title}
							description={project.data.description}
							cta="Explore project"
							tags={project.data.tags}
							className={cn(gridSizes[project.data.gridSize] ?? gridSizes[1]!, 'rounded-none lg:rounded-xl', cardClass)}
						>
							<img src={project.data.thumbnail.src} alt={project.data.thumbnailAlt ?? project.data.title}
									 className="w-full h-full object-cover object-center" />
						</BentoCard>
					))}
				</BentoGrid>
			) : (
				<p className="text-muted-foreground text-center mt-2">No projects found.</p>
			)}
		</>
	);
}

