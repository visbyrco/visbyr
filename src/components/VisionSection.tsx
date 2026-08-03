import { useState } from 'react';

export default function VisionSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative h-[600px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        alt="Visbyr Vision"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 transition-transform duration-[2000ms]"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ZKWyrr5Jcg7g2enXbHEzXUyU-7f3BcSaOsqdbgiOFPfDzMl4m-uGPgZnpQz5_raTOLedHGzcEDTiPlN3ZTyVRWlLCRi6dLHZATSoanea9S7aUdb-IRg6eoY0jYfk-6UHqmoHZQXhJcGjpKfud57rN1HG6j8dFYdsWg9AC1TTpjNs__fk3Xa8QmB1P9CTPE3qpgfkkUIx8P-2OqLYfbioH-9-xrBbI1SEXMVbQWAIsOrAGsqJFqNr"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute inset-0 flex items-center px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto w-full">
          <div className="max-w-2xl text-white">
            <div className="surgical-accent bg-primary mb-lg"></div>
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold mb-lg">Visit our Vision.</h2>
            <p className="text-xl text-white/80 mb-xl max-w-xl font-sans">
              Experience the intersection of functional design and enterprise logic at our flagship Stockholm office.
            </p>
            <button className="bg-white text-on-surface px-xxl py-4 mono-label font-bold hover:bg-primary hover:text-white transition-all">
              Schedule an Office Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
