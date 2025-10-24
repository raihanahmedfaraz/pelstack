import { useMemo } from 'react';

export interface UseStackCardsOptions {
  topOffset?: number;
  gap?: number;
  initDelay?: number;
  disabled?: boolean;
}

export function useStackCards(options: UseStackCardsOptions = {}) {
  const { topOffset = 0, gap = 8, initDelay = 0, disabled = false } = options;

  const stackCardsProps = useMemo(() => {
    // Minimal implementation: expose a className that could be used for styling
    const styleVars: Record<string, string> = {
      // keep names similar to intended CSS vars if needed by styles
      '--stack-top-offset': `${topOffset}px`,
      '--stack-gap': `${gap}px`,
      '--stack-init-delay': `${initDelay}s`,
    };

    return {
      className: disabled ? '' : 'stack-cards',
      style: styleVars,
    } as const;
  }, [topOffset, gap, initDelay, disabled]);

  return { stackCardsProps } as const;
}
