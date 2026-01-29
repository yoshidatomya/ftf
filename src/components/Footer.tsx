const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top accent border - Gold */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      {/* Decorative Enso circle */}
      <div className="absolute -bottom-32 -right-32 w-72 h-72 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-background"
            strokeDasharray="280"
            strokeDashoffset="20"
          />
        </svg>
      </div>

      <div className="container-refined py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {/* Company Logo */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/favicon.png" 
                alt="株式会社ONE" 
                className="w-10 h-10 opacity-90"
              />
              <h3 className="text-2xl font-serif tracking-[0.15em]">
                株式会社<span className="text-accent">ONE</span>
              </h3>
            </div>
            <p className="text-base text-background/60 leading-[2] tracking-wide font-light">
              外装から内装まで幅広く対応する
              <br />
              住宅専門の総合リフォーム会社
            </p>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-10 flex items-center gap-4 font-medium">
              <span className="w-8 h-px bg-accent/50" />
              Company
            </h4>
            <div className="space-y-6 text-base text-background/70 font-light">
              <p className="leading-relaxed">
                <span className="text-background/40 text-[10px] tracking-[0.2em] uppercase block mb-2">代表者</span>
                貝塚 航陽
              </p>
              <p className="leading-relaxed">
                <span className="text-background/40 text-[10px] tracking-[0.2em] uppercase block mb-2">所在地</span>
                千葉県千葉市稲毛区小深町535-2
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-10 flex items-center gap-4 font-medium">
              <span className="w-8 h-px bg-accent/50" />
              Contact
            </h4>
            <div className="space-y-5">
              <a
                href="tel:080-3359-1800"
                className="group flex items-center text-base text-background/70 hover:text-accent transition-all duration-500 font-light"
              >
                <span className="w-0 h-px bg-accent group-hover:w-6 transition-all duration-500 mr-0 group-hover:mr-4" />
                080-3359-1800
              </a>
              <a
                href="mailto:kouyou1800@icloud.com"
                className="group flex items-center text-base text-background/70 hover:text-accent transition-all duration-500 font-light"
              >
                <span className="w-0 h-px bg-accent group-hover:w-6 transition-all duration-500 mr-0 group-hover:mr-4" />
                kouyou1800@icloud.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-12 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] tracking-[0.2em] text-background/30 uppercase font-medium">
            © {new Date().getFullYear()} 株式会社ONE — All rights reserved
          </p>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-accent/30" />
            <span className="w-2 h-2 rounded-full border border-accent/50" />
            <span className="w-1 h-1 rounded-full bg-accent/30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
