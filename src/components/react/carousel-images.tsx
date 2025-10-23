import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import {
	Dialog,
	DialogContent,
	DialogTrigger
} from '@/components/ui/dialog';
import { CarouselIndicators } from '@/components/react/carousel-indicators';
import type { ComponentProps } from 'react';
import useMediaQuery from '@/lib/hooks/media-query.hook';

type CarouselImage = {
	caption: string;
	src: string;
}

type CarouselImagesProps = ComponentProps<typeof Carousel> & {
	images: CarouselImage[];
}

export function CarouselImages({ images, ...restProps }: CarouselImagesProps) {
	const isMobile = useMediaQuery('(max-width: 48rem)'); // 768px

	return (
		<Carousel {...restProps}>
			<CarouselContent>
				{images.map((image, idx) => (
					<CarouselItem key={idx}>
						<figure className="mb-0!">
							<Dialog>
								<DialogTrigger disabled={isMobile}>
									<img src={image.src} alt={image.caption} />
								</DialogTrigger>
								<DialogContent className="bg-transparent p-0 border-none max-w-2/3!">
									<img src={image.src} alt={image.caption} className="w-full object-contain object-center" />
								</DialogContent>
							</Dialog>
							<figcaption>{image.caption}</figcaption>
						</figure>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselIndicators className="not-prose" />
			<CarouselPrevious className="max-lg:hidden" />
			<CarouselNext className="max-lg:hidden" />
		</Carousel>
	);
}