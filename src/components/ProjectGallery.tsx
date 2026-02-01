import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

// Import all project images
const projectImages = [
    {
        src: '/assets/WhatsApp Image 2026-01-31 at 14.56.51.jpeg',
        alt: '施工実績 - 集合住宅',
        category: 'アパート',
    },
    {
        src: '/assets/WhatsApp Image 2026-01-31 at 14.56.51 (1).jpeg',
        alt: '施工実績 - 住宅外装',
        category: 'アパート',
    },
    {
        src: '/assets/WhatsApp Image 2026-01-31 at 14.56.53.jpeg',
        alt: '施工実績 - 戸建て住宅',
        category: '戸建て',
    },
    {
        src: '/assets/WhatsApp Image 2026-01-31 at 14.56.53 (1).jpeg',
        alt: '施工実績 - カラフル住宅',
        category: '戸建て',
    },
];

const ProjectGallery = () => {
    const { ref, isInView } = useInView({ threshold: 0.2 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    // Auto-scroll effect
    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    // Update selected index on scroll
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <section id="gallery" className="section-padding relative overflow-hidden bg-secondary/30">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container-refined relative z-10" ref={ref}>
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-4 mb-10">
                        <span className="text-accent text-2xl font-serif">「</span>
                        <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                            Gallery
                        </span>
                        <span className="text-accent text-2xl font-serif">」</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
                        施工<span className="text-gold-gradient">実績</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
                        <div className="w-3 h-3 rotate-45 border border-accent" />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                    </div>

                    <p className="text-lg text-muted-foreground font-light">
                        アパート・マンション・戸建ての施工事例をご紹介
                    </p>
                </div>

                {/* Carousel Container */}
                <div className={`relative transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Main Carousel */}
                    <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {projectImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-full md:w-[80%] lg:w-[60%] px-2 md:px-4"
                                >
                                    <div className={`relative overflow-hidden rounded-lg group transition-all duration-700 ${selectedIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                                        }`}>
                                        {/* Image with Ken Burns effect */}
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${selectedIndex === index ? 'scale-110' : 'scale-100'
                                                    }`}
                                            />
                                        </div>

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Category Badge */}
                                        <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-accent/90 text-accent-foreground text-xs tracking-wider font-medium backdrop-blur-sm transition-all duration-500 ${selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                            }`}>
                                            {image.category}
                                        </div>

                                        {/* Image info on hover */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-primary-foreground text-lg font-light">
                                                {image.alt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className={`flex justify-center gap-2 mt-8 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    {projectImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === index
                                ? 'w-8 bg-accent'
                                : 'bg-border hover:bg-muted-foreground'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Image counter */}
                <div className={`text-center mt-6 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-sm text-muted-foreground">
                        <span className="text-gold-gradient font-serif text-lg">{selectedIndex + 1}</span>
                        <span className="mx-2">/</span>
                        <span>{projectImages.length}</span>
                    </span>
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </section>
    );
};

export default ProjectGallery;
