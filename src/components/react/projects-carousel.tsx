import type {CollectionEntry} from 'astro:content';
import {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {Icon} from '@iconify/react';
import {AuroraText} from '@/components/ui/aurora-text';
import {cn} from '@/lib/utils';
import {buttonVariants} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {TagList} from '@/components/react/tag-list';
import {CarouselIndicators} from '@/components/react/carousel-indicators';

type ProjectsCarouselProps = React.ComponentProps<typeof Carousel> & {
    projects: CollectionEntry<'projects'>[];
}

export function ProjectsCarousel({projects, ...restProps}: Omit<ProjectsCarouselProps, 'plugins'>) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
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
                     alt=""
                     loading="lazy"
                     className={cn(
                         'absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none mask-y-from-70% mask-y-to-90% filter saturate-[75%] blur-lg opacity-0 transition-opacity duration-500',
                         {'opacity-30': idx === current}
                     )}
                />
            ))}

            <Carousel plugins={[Autoplay({delay: 7000})]} setApi={setApi} {...restProps}>
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id}>
                            <div className="mt-8 mb-6 lg:hidden">
                                <h2
                                    className="scroll-m-20 px-2 text-4xl font-bold tracking-tight text-balance uppercase">
                                    <AuroraText colors={project.data.colors}>
                                        {project.data.title}
                                    </AuroraText>
                                </h2>
                            </div>

                            <div
                                className="w-full aspect-square overflow-clip lg:w-[45%] lg:float-left lg:mr-12 lg:rounded-xl"
                            >
                                <img src={project.data.thumbnail.src} width={project.data.thumbnail.width}
                                     height={project.data.thumbnail.height}
                                     alt={project.data.thumbnailAlt ?? ''}
                                     loading="lazy" className="w-full h-full object-cover object-center"/>

                            </div>

                            <div className="max-w-[120ch] my-auto">
                                <h2
                                    className="hidden lg:block scroll-m-20 px-2 text-5xl font-bold tracking-tight text-balance uppercase">
                                    <AuroraText colors={project.data.colors}>
                                        {project.data.title}
                                    </AuroraText>
                                </h2>

                                <TagList tags={project.data.tags} className="p-2 lg:p-0 lg:mt-2" variant="outline"/>

                                <p className="text-lg line-clamp-5 lg:text-xl lg:mt-4 p-2">
                                    {project.data.description}
                                </p>

                                <div className="flex justify-center mt-4 lg:mt-8 lg:block">
                                    <a href={`/projects/${project.id}`}
                                       className={cn(buttonVariants({
                                           variant: 'outline',
                                           size: 'lg'
                                       }), 'text-lg select-none')}>
                                        Explore Project
                                        <Icon icon="lucide:arrow-right" className="inline-block ml-2"/>
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselIndicators className="mt-4 lg:mt-8"/>
            </Carousel>
        </>
    );
}