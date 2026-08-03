import { useEffect, useState } from 'react';

export default function HeaderReact() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20 py-0 transition-all duration-300 ${
        scrolled ? 'bg-white/95 py-4' : 'bg-white/70'
      }`}
    >
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto h-20">
        <div className="flex items-center gap-sm">
          <img
            src="/visbyr-wide-logo.png"
            alt="Visbyr Wide Logo"
            className="w-auto h-12"
          />
        </div>
        <div className="hidden md:flex items-center gap-xl">
          <a className="mono-label hover:text-primary transition-colors" href="#">
            Philosophy
          </a>
          <a className="mono-label hover:text-primary transition-colors" href="/solutions">
            Solutions
          </a>
          <a className="mono-label hover:text-primary transition-colors" href="#">
            Insights
          </a>
        </div>
        <div className="flex items-center gap-lg">
          <button className="border border-on-surface px-lg py-2.5 mono-label hover:bg-on-surface hover:text-white transition-all">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
