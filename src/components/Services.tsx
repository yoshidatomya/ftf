import { useInView } from '@/hooks/useInView';

const services = [
  { title: '外壁塗装工事', description: '美観の回復と建物の保護を両立', icon: '壁' },
  { title: '屋根工事', description: '葺き替え・塗装・補修に対応', icon: '屋' },
  { title: '雨樋工事', description: '交換・修理・清掃まで', icon: '樋' },
  { title: '外構工事', description: '門扉・フェンス・カーポート', icon: '外' },
  { title: '内装工事', description: '快適な室内空間を実現', icon: '内' },
  { title: '防水工事', description: '水の侵入を確実に防止', icon: '防' },
  { title: '足場工事一式', description: '自社足場での効率的施工', icon: '足' },
];

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Gold decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 border border-accent/5 rounded-full pointer-events-none" />
      
      <div className="container-refined relative z-10">
        <div className="text-center mb-20">
          {/* Section header with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-primary-foreground/60 font-medium">
              Services
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
            対応工事内容
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-10 rounded-sm hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl font-serif text-accent/40 group-hover:text-accent mb-6 transition-colors duration-500">
                {service.icon}
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-700" />
              
              <h3 className="text-xl font-serif mb-4 group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          {/* Empty cell with pattern */}
          <div className="hidden lg:flex items-center justify-center bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-10 rounded-sm">
            <div className="text-center">
              <span className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/40 block mb-2">
                And more
              </span>
              <div className="w-8 h-px bg-accent/30 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
