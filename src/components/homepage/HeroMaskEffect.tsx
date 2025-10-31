'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroMaskEffect = () => {
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero || !maskRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!maskRef.current) return;
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(maskRef.current, {
        '--mask-x': `${x}px`,
        '--mask-y': `${y}px`,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseEnter = () => {
      if (maskRef.current) {
        gsap.to(maskRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (maskRef.current) {
        gsap.to(maskRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseenter', handleMouseEnter);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseenter', handleMouseEnter);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={maskRef}
      className="pointer-events-none absolute inset-0 z-100 opacity-0 [--mask-x:50%] [--mask-y:50%] [background:radial-gradient(circle_180px_at_var(--mask-x)_var(--mask-y),rgba(131,231,238,0.25),rgba(134,79,254,0.2)_50%,transparent_100%)] mix-blend-screen"
    />
  );
};

export default HeroMaskEffect;
