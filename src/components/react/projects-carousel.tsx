import type { CollectionEntry } from 'astro:content';
import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Icon } from '@iconify/react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AuroraText } from '@/components/ui/aurora-text';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import * as React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type ProjectsCarouselProps = React.ComponentProps<typeof Carousel> & {
	projects: CollectionEntry<'projects'>[];
}

export function ProjectsCarousel({ projects, ...restProps }: Omit<ProjectsCarouselProps, 'plugins'>) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<>
			{projects.map((project, idx) => (
				<img key={idx}
						 src={project.data.thumbnail.src}
						 alt={project.data.thumbnailAlt ?? project.data.title}
						 loading="lazy"
						 className={cn(
							 'absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none mask-y-from-70% mask-y-to-90% filter saturate-[75%] blur-lg opacity-0 transition-opacity duration-500',
							 { 'opacity-30': idx === current }
						 )}
				/>
			))}

			<Carousel plugins={[Autoplay({ delay: 7000 })]} setApi={setApi} {...restProps}>
				<CarouselContent>
					{projects.map((project) => (
						<CarouselItem key={project.id}>
							<div className="mt-8 mb-6 lg:hidden">
								<BlurFade inView={true}>
									<h2
										className="scroll-m-20 px-2 text-5xl font-black tracking-tight text-balance lg:text-6xl uppercase">
										<AuroraText colors={project.data.colors}>
											{project.data.title}
										</AuroraText>
									</h2>
								</BlurFade>
							</div>

							<div
								className="w-full max-h-[30vh] lg:max-h-[45vh] overflow-clip lg:w-[45%] lg:float-left lg:mr-12 lg:rounded-xl	">
								{project.data.youtube ? (
									<LiteYouTubeEmbed id={project.data.youtube} title={project.data.title} />
								) : (
									<img src={project.data.thumbnail.src} width={project.data.thumbnail.width}
											 height={project.data.thumbnail.height} alt={project.data.thumbnailAlt ?? project.data.title}
											 loading="lazy" className="w-full h-full object-cover object-center" />
								)}
							</div>

							<div className="max-w-[120ch] my-auto">
								<BlurFade inView={true} className="hidden lg:block">
									<h2
										className="scroll-m-20 px-2 text-4xl font-black tracking-tight text-balance lg:text-5xl uppercase">
										<AuroraText colors={project.data.colors}>
											{project.data.title}
										</AuroraText>
									</h2>
								</BlurFade>
								<BlurFade inView={true} delay={.5} direction="left">
									<p className="text-muted-foreground text-lg lg:text-xl lg:mt-4 p-2">
										{project.data.description}
									</p>
								</BlurFade>

								<div className="flex justify-center mt-2 lg:mt-8 lg:block">
									<a href={`/projects/${project.id}`}
										 className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'text-lg select-none')}>
										Explore Project
										<Icon icon="lucide:arrow-right" className="inline-block ml-2" />
									</a>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<ul className="flex justify-center items-center gap-4 mt-8 lg:mt-0">
					{projects.map((_project, idx) => (
						<li key={idx}>
							<button onClick={() => api?.scrollTo(idx)	}
											className={cn('cursor-pointer text-muted-foreground text-xs hover:text-foreground transition-all', { 'scale-125 text-foreground': current === idx })}>
								●
							</button>
						</li>
					))}
				</ul>

				<CarouselPrevious className="hidden lg:inline-flex" />
				<CarouselNext className="hidden lg:inline-flex" />
			</Carousel>

		</>
	);
}