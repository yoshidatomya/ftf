import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="cta" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Decorative circles - Gold */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-accent/10 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full border border-accent/5 pointer-events-none" />

      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 opacity-5 bg-gold-shimmer pointer-events-none" />

      <div className="container-refined relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Section header with decorative brackets */}
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="text-accent text-2xl font-serif">「</span>
            <span className="text-[11px] tracking-[0.4em] uppercase text-primary-foreground/60 font-medium">
              Contact
            </span>
            <span className="text-accent text-2xl font-serif">」</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-10 leading-relaxed">
            住まいのこと、
            <br className="md:hidden" />
            まずはお気軽にご相談ください
          </h2>

          <div className="flex items-center justify-center gap-4 mb-14">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
            <div className="w-3 h-3 rotate-45 border border-accent" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>

          <p className="text-primary-foreground/70 mb-16 leading-relaxed max-w-lg mx-auto text-lg font-light">
            お見積りは無料です。どんな小さなことでもお気軽にお問い合わせください。
          </p>


          {/* Enhanced CTA Button - Gold */}
          <a href="#contact">
            <Button
              size="lg"
              className="text-sm tracking-[0.15em] px-16 py-10 group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground btn-glow transition-all duration-700"
            >
              <span className="relative z-10 flex items-center text-base font-medium">
                無料相談・お問い合わせ
                <ArrowRight className="ml-4 h-5 w-5 transition-all duration-500 group-hover:translate-x-2" strokeWidth={1.5} />
              </span>
            </Button>
          </a>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-10 mt-10 text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase font-medium">
            <span>無料見積り</span>
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            <span>相談無料</span>
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            <span>対応迅速</span>
          </div>

          {/* Contact info with icons */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center mt-20 pt-14 border-t border-primary-foreground/10">
            <a
              href="tel:080-3359-1800"
              className="group flex items-center justify-center gap-4 text-base text-primary-foreground/70 hover:text-accent transition-all duration-500"
            >
              <Phone className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
              <span className="tracking-wide font-light">080-3359-1800</span>
            </a>
            <a
              href="mailto:kouyou1800@icloud.com"
              className="group flex items-center justify-center gap-4 text-base text-primary-foreground/70 hover:text-accent transition-all duration-500"
            >
              <Mail className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
              <span className="tracking-wide font-light">kouyou1800@icloud.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
