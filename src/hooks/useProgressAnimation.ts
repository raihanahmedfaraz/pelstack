import { useEffect, useRef, useState } from 'react';

interface Options {
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
}

export function useProgressAnimation(target: number, options: Options = {}) {
  const { duration = 2, delay = 0, triggerOnScroll = true } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let rafId: number | null = null;
    let observer: IntersectionObserver | null = null;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      const startTime = performance.now() + delay * 1000;
      const endTime = startTime + duration * 1000;

      const step = (time: number) => {
        if (time < startTime) {
          rafId = requestAnimationFrame(step);
          return;
        }
        const progress = Math.min((time - startTime) / (endTime - startTime), 1);
        const current = Math.round(progress * target);
        setValue(current);
        if (progress < 1) rafId = requestAnimationFrame(step);
      };

      rafId = requestAnimationFrame(step);
    };

    if (triggerOnScroll && ref.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
              if (observer) observer.disconnect();
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(ref.current);
    } else {
      start();
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, [target, duration, delay, triggerOnScroll]);

  return { value, ref } as const;
}
