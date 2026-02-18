import { useEffect, useRef, type RefObject } from 'react';

export function useFocusOnMount<T extends HTMLElement>(
  shouldFocus: boolean = true
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return ref;
}

export function useKeyboardNavigation(
  items: string[],
  onSelect: (id: string) => void
) {
  const handleKeyDown = (event: React.KeyboardEvent, currentIndex: number) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        onSelect(items[nextIndex]);
        break;
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIndex]);
        break;
      }
      case 'Home':
        event.preventDefault();
        onSelect(items[0]);
        break;
      case 'End':
        event.preventDefault();
        onSelect(items[items.length - 1]);
        break;
    }
  };

  return handleKeyDown;
}

export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}