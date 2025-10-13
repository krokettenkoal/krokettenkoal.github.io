import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { Badge, type badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { className as tagListClass } from '@/components/common/tag-list';

type TagListProps = React.HTMLAttributes<HTMLUListElement> & VariantProps<typeof badgeVariants> & {
	tags: string[];
}

export function TagList({ tags, className, variant = 'outline', ...restProps }: TagListProps) {
	return (
		<ul className={cn(tagListClass, className)} {...restProps}>
			{tags.map((tag) => (
				<li key={tag}>
					<Badge variant={variant}>{tag}</Badge>
				</li>
			))}
		</ul>
	);
}