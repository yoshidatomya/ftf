import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: '外装リノベーション',
    category: '外壁・外構',
    description: 'モダンな和風デザインへの全面改装',
  },
  {
    id: 2,
    image: portfolio2,
    title: '内装フルリフォーム',
    category: '内装工事',
    description: '自然素材を活かした空間づくり',
  },
  {
    id: 3,
    image: portfolio3,
    title: '屋根葺き替え工事',
    category: '屋根工事',
    description: '伝統的な日本瓦への葺き替え',
  },
  {
    id: 4,
    image: portfolio4,
    title: '外壁塗装工事',
    category: '外壁塗装',
    description: 'プロフェッショナルな塗装施工',
  },
];

const Portfolio = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Japanese decorative element - Gold Enso circle */}
      <div className="absolute top-20 right-10 w-72 h-72 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent"
            strokeDasharray="280"
            strokeDashoffset="20"
          />
        </svg>
      </div>

      <div ref={ref} className="container-refined relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section header with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
              Works
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
            施工事例
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              } ${hoveredId === item.id ? 'shadow-card ring-1 ring-accent/30' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image with enhanced zoom */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out`}
                  style={{ transform: hoveredId === item.id ? 'scale(1.1)' : 'scale(1)' }}
                />
              </div>

              {/* Overlay - Indigo gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-95' : 'opacity-75'
                }`}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p
                  className={`text-sm text-primary-foreground/70 transition-all duration-500 ${
                    hoveredId === item.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Corner accent - Gold */}
              <div
                className={`absolute top-6 right-6 transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="w-10 h-10 border-t-2 border-r-2 border-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
