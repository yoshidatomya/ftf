import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: '会社概要' },
    { href: '#services', label: '施工内容' },
    { href: '#gallery', label: '施工実績' },
    { href: '#before-after', label: 'ビフォーアフター' },
    { href: '#contact', label: 'お問い合わせ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isScrolled
        ? 'bg-primary/95 backdrop-blur-md py-4 shadow-soft'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container-refined flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <img
              src="/favicon.png"
              alt="株式会社ONE"
              className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="text-xl md:text-2xl font-serif tracking-[0.15em] text-primary-foreground">
            株式会社<span className="text-accent">ONE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-[0.15em] text-primary-foreground/80 hover:text-accent transition-colors duration-500 font-medium gold-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact">
            <Button
              size="sm"
              className="text-sm tracking-[0.1em] px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-500 font-medium btn-glow"
            >
              無料相談
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-primary/98 backdrop-blur-md animate-fade-in border-t border-accent/10">
          <div className="container-refined py-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base tracking-[0.15em] text-primary-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                className="text-sm tracking-[0.15em] mt-4 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                無料相談
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
