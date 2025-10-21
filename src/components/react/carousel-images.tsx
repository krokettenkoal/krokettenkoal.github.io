import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { CarouselIndicators } from '@/components/react/carousel-indicators';
import type { ComponentProps } from 'react';

type CarouselImage = {
	caption: string;
	src: string;
}

type CarouselImagesProps = ComponentProps<typeof Carousel> & {
	images: CarouselImage[];
}

export function CarouselImages({ images, ...restProps }: CarouselImagesProps) {
	return (
		<Carousel {...restProps}>
			<CarouselContent>
				{images.map((image, idx) => (
					<CarouselItem key={idx}>
						<figure className="mb-0!">
							<img src={image.src} alt={image.caption} />
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