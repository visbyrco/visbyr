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
      className={`fixed top-0 w-full z-50 glass-top transition-all duration-300 ease-spring ${scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06)]' : ''}`}
    >
      <nav className="flex justify-between items-center px-4 md:px-6 max-w-[56rem] mx-auto h-16">
        <a href="/" className="flex items-center gap-2.5 text-on-surface">
          <svg viewBox="0 0 32 32" width="28" height="28" className="h-7 w-7 shrink-0" role="img" aria-label="Visbyr">
            <rect x="2" y="2" width="28" height="28" rx="7" fill="currentColor" opacity="0.08" />
            <path d="M9 11 L16 22 L23 11 H19.2 L16 17.4 L12.8 11 Z" fill="currentColor" />
          </svg>
          <span className="font-display font-bold text-[19px] tracking-[-0.015em] leading-none">Visbyr</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a className="font-label text-[11px] font-semibold tracking-[0.06em] uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/philosophy">
            Philosophy
          </a>
          <a className="font-label text-[11px] font-semibold tracking-[0.06em] uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/solutions">
            Solutions
          </a>
          <a className="font-label text-[11px] font-semibold tracking-[0.06em] uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/insights">
            Insights
          </a>
          <a className="font-label text-[11px] font-semibold tracking-[0.06em] uppercase text-on-surface-variant hover:text-on-surface transition-colors" href="/chat">
            Chat
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 font-label text-[11px] font-semibold tracking-[0.06em] uppercase text-on-primary transition-all hover:opacity-95 dark:bg-cyber-cyan dark:text-obsidian-black"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
