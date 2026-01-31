import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'トップ' },
  { id: 'about', label: '会社概要' },
  { id: 'philosophy', label: '私たちの想い' },
  { id: 'services', label: '施工内容' },
  { id: 'gallery', label: '施工実績' },
  { id: 'before-after', label: 'ビフォーアフター' },
  { id: 'strengths', label: '特長' },
  { id: 'target', label: 'こんな方へ' },
  { id: 'contact', label: 'お問い合わせ' },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-4"
          aria-label={`${section.label}へ移動`}
        >
          {/* Label */}
          <span
            className={`text-[10px] tracking-[0.15em] uppercase transition-all duration-300 font-medium ${activeSection === section.id
                ? 'opacity-100 text-accent'
                : 'opacity-0 group-hover:opacity-100 text-muted-foreground'
              }`}
          >
            {section.label}
          </span>

          {/* Dot indicator - Gold themed */}
          <span
            className={`relative flex items-center justify-center transition-all duration-300 ${activeSection === section.id ? 'w-3 h-3' : 'w-2 h-2'
              }`}
          >
            <span
              className={`absolute inset-0 rounded-full transition-all duration-300 ${activeSection === section.id
                  ? 'bg-accent'
                  : 'bg-border group-hover:bg-accent/50'
                }`}
            />
            {activeSection === section.id && (
              <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
            )}
          </span>
        </button>
      ))}

      {/* Vertical line connector - Gold */}
      <div className="absolute right-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-border to-accent/20 -z-10" />
    </nav>
  );
};

export default SectionNav;
