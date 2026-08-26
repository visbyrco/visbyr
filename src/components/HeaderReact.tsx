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
      className={`fixed top-0 w-full z-50 glass-top transition-all duration-300 ease-spring ${
        scrolled ? 'shadow-ambient-sm' : ''
      }`}
    >
      <nav className="flex justify-between items-center px-4 md:px-6 max-w-[56rem] mx-auto h-20">
        <a href="/" className="flex items-center gap-2.5">
          <img src="/chat.svg" alt="Visbyr" width="32" height="32" className="h-8 w-8 shrink-0" />
          <span className="font-display font-bold text-[22px] tracking-[-0.015em] leading-none text-on-surface">Visbyr</span>
        </a>
        <div className="hidden md:flex items-center gap-xl">
          <a className="font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-on-surface-variant hover:text-primary transition-colors ease-spring" href="/philosophy">
            Philosophy
          </a>
          <a className="font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-on-surface-variant hover:text-primary transition-colors ease-spring" href="/solutions">
            Solutions
          </a>
          <a className="font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-on-surface-variant hover:text-primary transition-colors ease-spring" href="/insights">
            Insights
          </a>
        </div>
        <div className="flex items-center gap-md">
          <a
            href="/contact"
            className="rounded-lg border border-outline-variant bg-primary px-5 py-2.5 font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-on-primary transition-all ease-spring hover:shadow-bloom dark:bg-cyber-cyan dark:text-obsidian-black dark:hover:shadow-bloom"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
