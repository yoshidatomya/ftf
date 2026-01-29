import { useInView } from '@/hooks/useInView';

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-refined relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Section header with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
              About
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 tracking-wide">
            株式会社<span className="text-gold-gradient">ONE</span>について
          </h2>

          <div className="flex items-center justify-center gap-4 mb-14">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-[2.2] mb-6 font-light">
            株式会社ONEは、外装から内装まで幅広く対応する
            <br className="hidden md:block" />
            住宅専門の総合リフォーム会社です。
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[2.2] font-light">
            お住まいの価値を長く守るため、
            <br className="hidden md:block" />
            確かな技術と丁寧な施工をお約束します。
          </p>

          {/* Stats - Premium Gold accents */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
            {[
              { value: '10+', label: '年の実績' },
              { value: '500+', label: '施工実績' },
              { value: '98%', label: '顧客満足度' },
              { value: '7', label: '対応工事' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-serif text-gold-gradient mb-3 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
