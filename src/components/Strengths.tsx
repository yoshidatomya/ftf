import { useInView } from '@/hooks/useInView';

const strengths = [
  {
    number: '01',
    title: '外装から内装まで一括対応',
    description: '住まいのあらゆるお悩みにワンストップで対応いたします。',
  },
  {
    number: '02',
    title: '足場を含めたワンストップ施工',
    description: '自社足場により工期の短縮とコスト削減を実現。',
  },
  {
    number: '03',
    title: 'お客様のご要望に柔軟対応',
    description: 'ご予算やご要望に合わせた最適なプランをご提案。',
  },
  {
    number: '04',
    title: '住宅メンテナンスまで対応',
    description: '施工後のアフターフォローで住まいの価値を守ります。',
  },
];

const Strengths = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="strengths" className="section-padding relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Gold accent blur */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-refined relative z-10">
        <div className="text-center mb-20">
          {/* Section header with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
              Why Choose Us
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
            選ばれる理由
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {strengths.map((strength, index) => (
            <div
              key={strength.number}
              className={`group flex gap-8 md:gap-12 py-12 border-b border-border last:border-b-0 transition-all duration-700 cursor-default hover:bg-secondary/30 hover:px-8 rounded-sm ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-5xl md:text-6xl font-serif text-gold-gradient flex-shrink-0 group-hover:scale-110 transition-all duration-500">
                {strength.number}
              </span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {strength.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
              {/* Decorative arrow */}
              <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-px bg-gradient-to-r from-accent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
