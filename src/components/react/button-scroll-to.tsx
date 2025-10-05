import * as React from 'react';
import { Button } from '@/components/ui/button';

export function ButtonScrollTo({
																 targetSelector,
																 onClick,
																 children,
																 ...props
															 }: React.ComponentProps<typeof Button> & {
	targetSelector: string;
}) {
	const handleClick: typeof onClick = (ev) => {
		onClick?.(ev);
		ev.currentTarget.dataset.clicked = '';

		const element = document.querySelector(targetSelector);
		if (!element) {
			console.warn(`Element not found for selector: ${targetSelector}`);
			return;
		}

		element.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Button onClick={handleClick} {...props}>
			{children}
		</Button>
	);
}