import { useInView } from '@/hooks/useInView';
import { Wrench, Users, ShieldCheck, Heart, Building2 } from 'lucide-react';

const philosophyPoints = [
  {
    icon: Wrench,
    title: '現場経験を持つ職人が一貫対応',
    description: '営業担当だけでなく、実際に現場を知る職人が施工管理まで携わることで、無駄のない施工計画と実用性を重視したご提案が可能です。',
  },
  {
    icon: ShieldCheck,
    title: '中間業者を挟まない体制',
    description: '余計なコストを抑えながらも、品質を落とさない施工を実現。「価格を下げるために品質を落とす」のではなく、無駄を省くことで適正価格を実現します。',
  },
  {
    icon: Heart,
    title: 'お客様の想いに寄り添う施工',
    description: '住まいは、お客様のこれからの生活を支える大切な空間。一人ひとりの想いやご希望に寄り添いながら、将来を見据えた施工をご提案いたします。',
  },
  {
    icon: Users,
    title: '本当に必要な工事だけを見極める',
    description: '現場のスペシャリストとしての技術力と責任感を持ち、過剰な提案は行いません。工事完了後も「頼んで良かった」と思っていただける関係づくりを大切にしています。',
  },
];

const Philosophy = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Japanese pattern accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-refined relative z-10" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section label with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
              Philosophy
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
            私たちの<span className="text-gold-gradient">想い</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            私たちは、単に施工を行うだけの会社ではありません。
            <br className="hidden md:block" />
            長く安心して暮らせる住まいづくりをサポートしてまいります。
          </p>
        </div>

        {/* Property Types Badge */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 backdrop-blur-sm">
            <Building2 className="w-5 h-5 text-accent" strokeWidth={1.5} />
            <span className="text-sm md:text-base tracking-wider font-medium">
              アパート・マンション・戸建て<span className="text-accent ml-2">承ります</span>
            </span>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className={`spotlight-card group relative p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-accent/30 hover:shadow-soft transition-all duration-700 cursor-default ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon with gold accent */}
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:translate-x-1 transition-transform duration-500">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {point.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-accent to-transparent" />
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-accent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default Philosophy;
