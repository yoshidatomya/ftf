import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const services = [
  '外壁塗装工事',
  '屋根工事',
  '雨樋工事',
  '外構工事',
  '内装工事',
  '防水工事',
  '足場工事',
];

const navLinks = [
  { label: '会社について', href: '#about' },
  { label: '私たちの想い', href: '#philosophy' },
  { label: 'サービス', href: '#services' },
  { label: '施工実績', href: '#gallery' },
  { label: 'ビフォーアフター', href: '#before-after' },
  { label: 'お問い合わせ', href: '#contact' },
];

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

      <div className="container-refined py-20 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/favicon.png"
                alt="株式会社ONE"
                className="w-10 h-10 opacity-90"
              />
              <h3 className="text-2xl font-serif tracking-[0.15em]">
                株式会社<span className="text-accent">ONE</span>
              </h3>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              外装から内装まで幅広く対応する住宅専門の総合リフォーム会社。職人が施工管理まで一貫対応いたします。
            </p>
            <div className="flex items-center gap-2 text-sm text-background/50">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              <span>受付時間: 9:00〜18:00（日曜定休）</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-6 flex items-center gap-4 font-medium">
              <span className="w-6 h-px bg-accent/50" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-background/70 hover:text-accent transition-all duration-300"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-6 flex items-center gap-4 font-medium">
              <span className="w-6 h-px bg-accent/50" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-background/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-6 flex items-center gap-4 font-medium">
              <span className="w-6 h-px bg-accent/50" />
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:080-3359-1800"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className="text-lg font-serif">080-3359-1800</span>
              </a>

              <a
                href="mailto:kouyou1800@icloud.com"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span className="text-sm break-all">kouyou1800@icloud.com</span>
              </a>

              <div className="flex items-start gap-3 text-background/60">
                <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="text-sm">
                  <p>〒263-0003</p>
                  <p>千葉県千葉市稲毛区</p>
                  <p>小深町535-2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-12 rounded-xl overflow-hidden border border-background/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9!2d140.1069!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzM0LjMiTiAxNDDCsDA2JzI0LjgiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.7)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="株式会社ONE 所在地"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
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

