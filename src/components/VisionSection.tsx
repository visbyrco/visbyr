import { useState } from 'react';

export default function VisionSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      className="relative h-[560px] overflow-hidden rounded-xl mx-4 md:mx-6 max-w-[56rem] lg:mx-auto border border-outline-variant dark:border-white/[0.08]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        alt="Visbyr Vision"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 transition-transform duration-[2000ms] ease-spring"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ZKWyrr5Jcg7g2enXbHEzXUyU-7f3BcSaOsqdbgiOFPfDzMl4m-uGPgZnpQz5_raTOLedHGzcEDTiPlN3ZTyVRWlLCRi6dLHZATSoanea9S7aUdb-IRg6eoY0jYfk-6UHqmoHZQXhJcGjpKfud57rN1HG6j8dFYdsWg9AC1TTpjNs__fk3Xa8QmB1P9CTPE3qpgfkkUIx8P-2OqLYfbioH-9-xrBbI1SEXMVbQWAIsOrAGsqJFqNr"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 flex items-center px-6 md:px-8">
        <div className="max-w-2xl text-white">
          <div className="surgical-accent bg-cyber-cyan mb-4"></div>
          <h2 className="font-display text-display-lg md:text-display-xl font-bold mb-4 leading-tight">Visit our Vision.</h2>
          <p className="font-body text-body-base text-white/80 mb-6 max-w-xl">
            Experience the intersection of functional design and enterprise logic at our flagship Stockholm office.
          </p>
          <button className="rounded-full bg-white px-8 py-3.5 font-label text-[12px] font-semibold tracking-[0.02em] uppercase text-obsidian-black transition-all ease-spring hover:bg-cyber-cyan">
            Schedule an Office Visit
          </button>
        </div>
      </div>
    </section>
  );
}
