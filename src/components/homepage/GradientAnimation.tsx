'use client';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useEffect, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin);
}

const PATH_IDS = [
  'curve-path-1',
  'curve-path-2',
  'curve-path-3',
  'curve-path-4',
  'curve-path-5',
  'curve-path-6',
  'curve-path-7',
  'curve-path-8',
] as const;

const HORIZONTAL_PATH_IDS = [
  'horizontal-path-1',
  'horizontal-path-2',
  'horizontal-path-3',
] as const;

// Utility to read CSS custom properties (theme-aware) with fallback
const cssVar = (name: string, fallback: string) => {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
};

// Build brand-aligned palette from CSS variables (falls back to current hues)
const getBrandPalette = () => {
  const purple = cssVar('--color-primary-500', '#864ffe');
  const cyan = cssVar('--color-ns-cyan', '#83e7ee');
  const yellow = cssVar('--color-ns-yellow', '#f9eb57');
  const green = cssVar('--color-ns-green', '#c6f56f');
  return { purple, cyan, yellow, green } as const;
};

const interpolateColor = (c1: string, c2: string, f: number) => {
  const r1 = parseInt(c1.slice(1, 3), 16),
    g1 = parseInt(c1.slice(3, 5), 16),
    b1 = parseInt(c1.slice(5, 7), 16);
  const r2 = parseInt(c2.slice(1, 3), 16),
    g2 = parseInt(c2.slice(3, 5), 16),
    b2 = parseInt(c2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * f);
  const g = Math.round(g1 + (g2 - g1) * f);
  const b = Math.round(b1 + (b2 - b1) * f);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const RECT_COUNT = 60;
const HORIZONTAL_RECT_COUNT = 80;

const GradientAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);
  const travelTweensRef = useRef<gsap.core.Tween[]>([]);
  const twinkleTweensRef = useRef<gsap.core.Tween[]>([]);

  // Use useEffect for more reliable initialization
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const { cyan, yellow, purple, green } = getBrandPalette();
    // start → end colors per path, brand-inspired and alternating for a pixel-stream feel
    const GRADIENTS: Array<[string, string]> = [
      [cyan, yellow],
      [purple, cyan],
      [yellow, green],
      [purple, yellow],
      [cyan, purple],
      [green, cyan],
      [yellow, purple],
      [cyan, green],
    ];

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      try {
        // If user prefers reduced motion, render static pixels without GSAP tweens
        if (prefersReduced) {
          PATH_IDS.forEach((pathId, idx) => {
            const group = idx + 1;
            const [startCol, endCol] = GRADIENTS[idx];
            for (let i = 1; i <= RECT_COUNT; i++) {
              const rect = svg.querySelector<SVGRectElement>(`#rect-${group}-${i}`);
              if (!rect) continue;
              const factor = (i - 1) / (RECT_COUNT - 1);
              rect.setAttribute('fill', interpolateColor(startCol, endCol, factor));
              rect.setAttribute('opacity', String(0.4 + factor * 0.6));
            }
          });
          
          // Static horizontal lines
          const horizontalGradients: Array<[string, string]> = [
            [cyan, purple],
            [yellow, cyan],
            [purple, yellow],
          ];
          HORIZONTAL_PATH_IDS.forEach((pathId, idx) => {
            const group = idx + 9;
            const [startCol, endCol] = horizontalGradients[idx];
            for (let i = 1; i <= HORIZONTAL_RECT_COUNT; i++) {
              const rect = svg.querySelector<SVGRectElement>(`#h-rect-${group}-${i}`);
              if (!rect) continue;
              const factor = (i - 1) / (HORIZONTAL_RECT_COUNT - 1);
              rect.setAttribute('fill', interpolateColor(startCol, endCol, factor));
              rect.setAttribute('opacity', String(0.4 + factor * 0.6));
            }
          });
          return;
        }

        // Animated mode
  const tweens: gsap.core.Tween[] = [];
  PATH_IDS.forEach((pathId, idx) => {
          const path = svg.querySelector<SVGPathElement>(`#${pathId}`);
          if (!path) {
            console.warn(`Path not found: ${pathId}`);
            return;
          }

          const group = idx + 1;
          const [startCol, endCol] = GRADIENTS[idx];
          const baseDelay = gsap.utils.random(0, 2);
          const duration = gsap.utils.random(4, 8);

          // Animate each rect along the path using MotionPath
          for (let i = 1; i <= RECT_COUNT; i++) {
            const rect = svg.querySelector<SVGRectElement>(`#rect-${group}-${i}`);
            if (!rect) {
              continue;
            }

            // Calculate gradient color based on position
            const factor = (i - 1) / (RECT_COUNT - 1);
            rect.setAttribute('fill', interpolateColor(startCol, endCol, factor));
            rect.setAttribute('opacity', String(0.6));

            // Animate rect along the path
            const travel = gsap.to(rect, {
              motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
              },
              duration: duration,
              ease: 'power1.inOut',
              repeat: -1,
              // Negative delay offsets the start position along the path for a continuous stream
              delay: baseDelay - gsap.utils.random(0, duration),
            });

            // Subtle flicker/scale to feel like pixels blinking
            const twinkle = gsap.to(rect, {
              opacity: gsap.utils.random(0.5, 0.8),
              scale: gsap.utils.random(0.95, 1.05),
              transformOrigin: '50% 50%',
              duration: gsap.utils.random(1.4, 2.2),
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              delay: gsap.utils.random(0, 1.2),
            });

            tweens.push(travel, twinkle);
            travelTweensRef.current.push(travel);
            twinkleTweensRef.current.push(twinkle);
          }
        });

        // Animate horizontal paths at the bottom
        HORIZONTAL_PATH_IDS.forEach((pathId, idx) => {
          const path = svg.querySelector<SVGPathElement>(`#${pathId}`);
          if (!path) {
            console.warn(`Horizontal path not found: ${pathId}`);
            return;
          }

          const group = idx + 9; // Start from group 9
          const horizontalGradients: Array<[string, string]> = [
            [cyan, purple],
            [yellow, cyan],
            [purple, yellow],
          ];
          const [startCol, endCol] = horizontalGradients[idx];
          const baseDelay = gsap.utils.random(0, 1);
          const duration = gsap.utils.random(5, 8);

          for (let i = 1; i <= HORIZONTAL_RECT_COUNT; i++) {
            const rect = svg.querySelector<SVGRectElement>(`#h-rect-${group}-${i}`);
            if (!rect) continue;

            const factor = (i - 1) / (HORIZONTAL_RECT_COUNT - 1);
            rect.setAttribute('fill', interpolateColor(startCol, endCol, factor));
            rect.setAttribute('opacity', String(0.6));

            const travel = gsap.to(rect, {
              motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
              },
              duration: duration,
              ease: 'power1.inOut',
              repeat: -1,
              delay: baseDelay - gsap.utils.random(0, duration),
            });

            const twinkle = gsap.to(rect, {
              opacity: gsap.utils.random(0.5, 0.8),
              scale: gsap.utils.random(0.95, 1.05),
              transformOrigin: '50% 50%',
              duration: gsap.utils.random(1.4, 2.2),
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              delay: gsap.utils.random(0, 1.2),
            });

            tweens.push(travel, twinkle);
            travelTweensRef.current.push(travel);
            twinkleTweensRef.current.push(twinkle);
          }
        });

        tweensRef.current = tweens;
      } catch (error) {
        console.error('Error in gradient animation:', error);
        // Silent error handling
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      // Kill any active tweens
      tweensRef.current.forEach((t) => t.kill());
      tweensRef.current = [];
      travelTweensRef.current.forEach((t) => t.kill());
      travelTweensRef.current = [];
      twinkleTweensRef.current.forEach((t) => t.kill());
      twinkleTweensRef.current = [];
    };
  }, []);

  const renderRectGroup = (groupId: number) =>
    Array.from({ length: RECT_COUNT }, (_, i) => (
      <rect key={`rect-${groupId}-${i + 1}`} id={`rect-${groupId}-${i + 1}`} width={2} height={2} />
    ));

  const renderHorizontalRectGroup = (groupId: number) =>
    Array.from({ length: HORIZONTAL_RECT_COUNT }, (_, i) => (
      <rect key={`h-rect-${groupId}-${i + 1}`} id={`h-rect-${groupId}-${i + 1}`} width={2} height={2} />
    ));

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full relative top-0"
      viewBox="0 0 1392 1378"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Soft glow for pixels */}
        <filter id="pixel-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Subtle grid pattern to hint at pixel matrix */}
        <pattern id="grid-pattern" width="18" height="18" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="1" height="1" fill="currentColor" opacity="0.06" />
        </pattern>
      </defs>

      {/* faint grid background */}
      <rect x="0" y="0" width="1392" height="1378" fill="url(#grid-pattern)" className="text-stroke-4 dark:text-stroke-5" />
      <path
        id="curve-path-1"
        d="M409.5 0V688.857C409.5 739.32 387.08 787.176 348.307 819.475L210.193 934.525C171.42 966.824 149 1014.68 149 1065.14V1436"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-2"
        d="M984 0V688.857C984 739.32 1006.42 787.176 1045.19 819.475L1183.31 934.525C1222.08 966.824 1244.5 1014.68 1244.5 1065.14V1436"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-3"
        d="M301.5 0V647.386C301.5 696.681 280.102 743.549 242.854 775.839L59.6455 934.661C22.3976 966.951 1 1013.82 1 1063.11V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-4"
        d="M1090.5 0V647.386C1090.5 696.681 1111.9 743.549 1149.15 775.839L1332.35 934.661C1369.6 966.951 1391 1013.82 1391 1063.11V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-5"
        d="M517.5 0V704.584C517.5 749.67 499.589 792.911 467.708 824.792L356.792 935.708C324.911 967.589 307 1010.83 307 1055.92V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-6"
        d="M876 0V704.584C876 749.67 893.911 792.911 925.792 824.792L1036.71 935.708C1068.59 967.589 1086.5 1010.83 1086.5 1055.92V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-7"
        d="M625.5 0V679.422C625.5 709.28 617.636 738.611 602.7 764.465L497.8 946.035C482.864 971.889 475 1001.22 475 1031.08V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="curve-path-8"
        d="M768 0V679.422C768 709.28 775.864 738.611 790.8 764.465L895.7 946.035C910.636 971.889 918.5 1001.22 918.5 1031.08V1469.5"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />

      {/* Horizontal flowing paths at bottom - left to right and right to left */}
      <path
        id="horizontal-path-1"
        d="M0 1300 H1392"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="horizontal-path-2"
        d="M1392 1340 H0"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />
      <path
        id="horizontal-path-3"
        d="M0 1280 H1392"
        className="stroke-stroke-4 dark:stroke-stroke-5"
      />

      {/* Pixels container with blend mode for luminous effect */}
      <g id="pixels-layer" filter="url(#pixel-glow)" className="mix-blend-screen dark:mix-blend-screen">
        {/* 8 groups × 60 rects - vertical paths */}
        {Array.from({ length: 8 }, (_, g) => (
          <g key={`group-${g + 1}`} id={`group-${g + 1}`} data-group={g + 1}>
            {renderRectGroup(g + 1)}
          </g>
        ))}
        {/* 3 groups × 80 rects - horizontal paths at bottom */}
        {Array.from({ length: 3 }, (_, g) => (
          <g key={`h-group-${g + 9}`} id={`h-group-${g + 9}`} data-group={g + 9}>
            {renderHorizontalRectGroup(g + 9)}
          </g>
        ))}
      </g>
    </svg>
  );
};

export default GradientAnimation;