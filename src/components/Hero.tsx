import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="和モダン建築"
          className="w-full h-full object-cover"
        />
        {/* Deep indigo gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, hsl(222, 47%, 18%, 0.5) 100%)',
          }}
        />

        {/* Subtle gold shimmer overlay */}
        <div className="absolute inset-0 opacity-10 bg-gold-shimmer pointer-events-none" />
      </div>

      {/* Japanese decorative elements - Gold */}
      <div className="absolute top-32 left-8 md:left-16 opacity-20 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 120 120" className="text-accent">
          <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Additional decorative element */}
      <div className="absolute bottom-40 right-16 opacity-10 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 100 100" className="text-accent">
          <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M10,60 Q30,30 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-refined relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Small accent text */}
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-accent mb-10 block animate-fade-up">
            <span className="w-8 h-px bg-accent" />
            総合リフォーム会社
          </span>

          {/* Main Heading - Dramatic hierarchy with gold accent */}
          <h1 className="font-serif leading-[1.15] mb-12 animate-fade-up animation-delay-100">
            <span className="block text-2xl md:text-3xl text-primary-foreground/70 mb-4 font-light tracking-widest">
              あなたの思い描く
            </span>
            <span
              className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary-foreground tracking-tight"
              style={{ textShadow: '0 4px 40px hsl(222, 47%, 10%, 0.5)' }}
            >
              素敵な<span className="text-gold-gradient">家</span>作り
            </span>
          </h1>

          {/* Divider with gold accent */}
          <div className="flex items-center gap-6 mb-12 animate-fade-up animation-delay-200">
            <div className="w-24 h-px bg-gradient-to-r from-accent via-accent to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-[2] mb-16 animate-fade-up animation-delay-300 font-light">
            お客様一人ひとりの理想に寄り添い、
            <br className="hidden md:block" />
            機能性・デザイン性・耐久性を考えた
            <br className="hidden md:block" />
            最適なリフォームをご提案します。
          </p>

          {/* CTA Buttons - Premium Gold styling */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-up animation-delay-400">
            <a href="#contact">
              <Button
                size="lg"
                className="text-sm tracking-[0.15em] px-12 py-8 group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground btn-glow transition-all duration-700 w-full"
              >
                <span className="relative z-10 flex items-center font-medium">
                  無料相談はこちら
                  <ArrowRight className="ml-4 h-5 w-5 transition-all duration-500 group-hover:translate-x-2" strokeWidth={1.5} />
                </span>
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="outline"
                size="lg"
                className="text-sm tracking-[0.15em] px-12 py-8 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground transition-all duration-700 group w-full"
              >
                施工内容を見る
                <ChevronDown className="ml-3 h-5 w-5 transition-all duration-500 group-hover:translate-y-1" strokeWidth={1.5} />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Gold themed */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up animation-delay-600">
          <a
            href="#about"
            className="flex flex-col items-center text-primary-foreground/60 hover:text-accent transition-colors duration-500 group"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase mb-4">Scroll</span>
            <div className="relative">
              <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
              <ChevronDown className="absolute -bottom-4 -left-2 h-4 w-4 animate-bounce text-accent" strokeWidth={1} />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom decorative line - Gold gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
};

export default Hero;
