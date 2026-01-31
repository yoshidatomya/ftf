import { useState, useRef, useCallback } from 'react';
import { useInView } from '@/hooks/useInView';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterItem {
    before: string;
    after: string;
    title: string;
    description: string;
}

const beforeAfterItems: BeforeAfterItem[] = [
    {
        before: '/assets/before-renovation.jpg',
        after: '/assets/after-renovation.jpg',
        title: '外壁塗装リフォーム',
        description: '経年劣化した外壁を美しく生まれ変わらせました',
    },
];

const BeforeAfterSlider = ({ item }: { item: BeforeAfterItem }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none group"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* After Image (Background) */}
            <img
                src={item.after}
                alt="After renovation"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={item.before}
                    alt="Before renovation"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-accent group-hover:scale-110 transition-transform duration-300">
                    <ArrowLeftRight className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full">
                Before
            </div>
            <div className="absolute top-4 right-4 px-4 py-2 bg-accent/90 backdrop-blur-sm text-accent-foreground text-sm font-medium rounded-full flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                After
            </div>

            {/* Gradient Overlays */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Info at bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div>
                    <h4 className="text-white text-xl font-serif mb-1">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

const BeforeAfter = () => {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section id="before-after" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container-refined relative z-10" ref={ref}>
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-4 mb-10">
                        <span className="text-accent text-2xl font-serif">「</span>
                        <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                            Transformation
                        </span>
                        <span className="text-accent text-2xl font-serif">」</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
                        施工<span className="text-gold-gradient">ビフォーアフター</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
                        <div className="w-3 h-3 rotate-45 border border-accent" />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                    </div>

                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                        スライダーを左右にドラッグして、施工前後の変化をご確認ください
                    </p>
                </div>

                {/* Before/After Slider */}
                <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {beforeAfterItems.map((item, index) => (
                        <BeforeAfterSlider key={index} item={item} />
                    ))}
                </div>

                {/* Call to action */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-muted-foreground mb-4">
                        このような施工をご希望の方は、お気軽にご相談ください
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                        <span>無料相談はこちら</span>
                        <span className="text-lg">→</span>
                    </a>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </section>
    );
};

export default BeforeAfter;
