import { useEffect, useRef } from 'react';

export function usePointerGlow<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) {
      return;
    }

    let frameId = 0;
    let latestX = 0;
    let latestY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      latestX = e.clientX - rect.x;
      latestY = e.clientY - rect.y;

      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        el.style.setProperty('--mx', `${latestX}px`);
        el.style.setProperty('--my', `${latestY}px`);
      });
    };

    const handlePointerLeave = () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    el.addEventListener('pointermove', handlePointerMove, { passive: true });
    el.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return ref;
}
