import * as React from 'react';
import { Button } from '@/components/ui/button';

export function ButtonScrollTo({
																 targetSelector,
																 children,
																 ...props
															 }: Omit<React.ComponentProps<typeof Button>, 'onClick'> & {
	targetSelector: string;
}) {
	const handleClick = () => {
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
};