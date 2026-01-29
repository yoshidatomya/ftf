import { useInView } from '@/hooks/useInView';

const targets = [
  '戸建て住宅をお持ちの方',
  '中古住宅をご購入された方',
  '外装メンテナンスをご検討中の方',
  '雨漏り・劣化対策をお考えの方',
];

const Target = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="target" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      
      {/* Gold accent circles */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-accent/5 rounded-full pointer-events-none" />
      
      {/* Decorative Enso - Gold */}
      <div className="absolute top-20 right-10 w-56 h-56 opacity-[0.06] pointer-events-none">
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
      
      <div className="container-refined relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Section header with decorative brackets */}
            <div className="inline-flex items-center gap-4 mb-10">
              <span className="text-accent text-2xl font-serif">「</span>
              <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                For You
              </span>
              <span className="text-accent text-2xl font-serif">」</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
              こんな方に<span className="text-gold-gradient">おすすめ</span>です
            </h2>
            
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-px bg-gradient-to-r from-accent to-transparent" />
              <div className="w-3 h-3 rotate-45 border border-accent" />
            </div>

            <div className="space-y-4">
              {targets.map((target, index) => (
                <div
                  key={target}
                  className={`group flex items-center gap-8 py-8 px-6 border border-border/50 rounded-sm transition-all duration-700 cursor-default hover:bg-card hover:border-accent/30 hover:shadow-soft ${
                    isInView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="text-2xl font-serif text-gold-gradient group-hover:scale-125 transition-transform duration-500">✦</span>
                  <span className="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                    {target}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
