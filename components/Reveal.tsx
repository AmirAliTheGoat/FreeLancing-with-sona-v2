import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  index?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  index,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: view()');

    if (prefersReducedMotion || supportsScrollTimeline || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '80px 0px 80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const staggerMs = typeof index === 'number' && index > 0 ? index * 70 : 0;
  const clampedDelay = Math.min(Math.max(0, delayMs + staggerMs), 700);

  return (
    <div
      ref={ref}
      data-revealed={visible ? 'true' : 'false'}
      style={
        clampedDelay > 0
          ? ({ '--reveal-delay': `${clampedDelay}ms` } as React.CSSProperties)
          : undefined
      }
      className={`reveal-item ${className}`}
    >
      {children}
    </div>
  );
};
