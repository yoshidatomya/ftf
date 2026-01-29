import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: '外壁塗装をお願いしましたが、仕上がりが本当に美しく、近所の方からも褒められました。職人さんの丁寧な仕事ぶりに感動しました。',
    author: 'T.K 様',
    location: '千葉市稲毛区',
    project: '外壁塗装工事',
  },
  {
    id: 2,
    content: '中古住宅を購入後、フルリフォームをお願いしました。予算内で理想以上の仕上がりになり、家族全員大満足です。',
    author: 'S.M 様',
    location: '千葉市若葉区',
    project: '内装フルリフォーム',
  },
  {
    id: 3,
    content: '雨漏りで困っていましたが、原因をしっかり調査してくださり、屋根から雨樋まで一括で対応していただきました。もう安心です。',
    author: 'Y.N 様',
    location: '千葉市花見川区',
    project: '屋根・雨樋工事',
  },
];

const Testimonials = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Japanese geometric pattern background - Gold themed */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Decorative vertical line - Gold */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div ref={ref} className="container-refined relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section header with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-primary-foreground/60 font-medium">
              Voice
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
            お客様の声
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote icon - Gold */}
              <div className="absolute -top-4 -left-2 text-accent/30">
                <Quote size={56} strokeWidth={1} />
              </div>

              {/* Content Card */}
              <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-10 pt-12 rounded-sm hover:bg-primary-foreground/10 hover:border-accent/30 hover:-translate-y-2 transition-all duration-700 group">
                {/* Project tag - Gold */}
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent mb-6 block font-medium">
                  {testimonial.project}
                </span>

                {/* Quote */}
                <p className="text-primary-foreground/80 leading-[2.2] mb-10 text-base font-light">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between border-t border-primary-foreground/10 pt-8">
                  <div>
                    <p className="font-medium text-primary-foreground text-lg">{testimonial.author}</p>
                    <p className="text-xs text-primary-foreground/50 mt-1">{testimonial.location}</p>
                  </div>

                  {/* Decorative element - Gold */}
                  <div className="w-10 h-px bg-accent/50 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
