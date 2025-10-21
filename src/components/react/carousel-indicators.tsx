import { type ComponentProps, useCallback, useState, useEffect, useId } from 'react';
import { type CarouselApi, useCarousel } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type CarouselIndicatorsProps = ComponentProps<'ul'> & {
	buttonClass?: string;
	jump?: boolean;
}

function CarouselIndicators({
															className,
															buttonClass,
															jump,
															children,
															...restProps
														}: CarouselIndicatorsProps) {
	const { api } = useCarousel();
	const [current, setCurrent] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const indicatorsId = useId();

	const onInit = useCallback((carouselApi: CarouselApi) => {
		if (!carouselApi) return;
		setScrollSnaps(carouselApi.scrollSnapList());
		setLoading(false);
	}, []);

	const onSelect = useCallback((carouselApi: CarouselApi) => {
		if (!carouselApi) return;
		setCurrent(carouselApi.selectedScrollSnap());
	}, []);

	const scrollTo = useCallback((idx: number, jump?: boolean) => {
		api?.scrollTo(idx, jump);
	}, [api]);

	useEffect(() => {
		if (!api) {
			return;
		}

		onInit(api);
		onSelect(api);
		api.on('reInit', onInit).on('reInit', onSelect);
		api.on('select', onSelect);

		return () => {
			api?.off('select', onSelect);
		};
	}, [api, onSelect, onInit]);

	return (
		<ul className={cn('flex justify-center items-center gap-3 list-none', className)} {...restProps}>
			{loading ? (
					<li>&nbsp;</li>
				)
				: scrollSnaps.map((_snap, idx) => (
					<li key={`${indicatorsId}_${idx}`}>
						<button type="button"
										onClick={() => scrollTo(idx, jump)}
										disabled={current === idx}
										className={cn(
											'enabled:cursor-pointer disabled:border-foreground size-4 rounded-full aspect-square border-2 transition-all',
											buttonClass
										)}>
							{children ? children : (
								<span className="sr-only">Go to slide {idx + 1}</span>
							)}
						</button>
					</li>
				))}
		</ul>
	);
}

export { CarouselIndicators };