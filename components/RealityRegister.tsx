import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button } from './ui/Button';
import { Reveal } from './Reveal';
import { usePointerGlow } from './ui/usePointerGlow';
import { useApp } from '../context/AppContext';

interface TabIndicatorState {
  offsetStart: number;
  offsetTop: number;
  width: number;
  height: number;
  ready: boolean;
}

interface MetricCardProps {
  metric: string;
  title: string;
  detail: string;
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, title, detail, index }) => {
  const glowRef = usePointerGlow<HTMLElement>();

  return (
    <Reveal index={index}>
      <article
        ref={glowRef}
        className="pointer-glow-card bg-surface rounded-panel border border-border p-6 sm:p-7 h-full flex flex-col justify-between shadow-soft hover:shadow-lift hover:-translate-y-0.5 hover:border-ink/25 motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,border-color] duration-250 ease-out-expo"
      >
        <div>
          <div className="pb-4 mb-5 border-b border-border">
            <p className="font-display text-lg sm:text-xl font-extrabold text-ink tabular-nums">
              {metric}
            </p>
            <span
              aria-hidden="true"
              className="block h-[2px] w-12 bg-accent mt-2.5 metric-underline-draw"
              style={{ animationDelay: `${index * 90 + 80}ms` }}
            />
          </div>
          <h3 className="font-display text-lg font-bold text-ink mb-2">
            {title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed text-pretty">
            {detail}
          </p>
        </div>
      </article>
    </Reveal>
  );
};

const RealityRegister: React.FC = () => {
  const { lang, t, openBookingModal } = useApp();
  const reg = t.realityRegister;
  const [activeTab, setActiveTab] = useState<'kyc' | 'costs' | 'payouts'>('costs');

  const tabListRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<TabIndicatorState>({
    offsetStart: 0,
    offsetTop: 0,
    width: 100,
    height: 44,
    ready: false,
  });

  const items =
    activeTab === 'kyc'
      ? reg.kycItems
      : activeTab === 'costs'
      ? reg.costItems
      : reg.payoutItems;

  const updateIndicator = useCallback(() => {
    const listEl = tabListRef.current;
    const activeEl = tabRefs.current[activeTab];
    if (!listEl || !activeEl) return;

    const listRect = listEl.getBoundingClientRect();
    const tabRect = activeEl.getBoundingClientRect();
    if (listRect.width === 0 || tabRect.width === 0) return;

    const offsetStart =
      lang === 'fa'
        ? listRect.x + listRect.width - (tabRect.x + tabRect.width)
        : tabRect.x - listRect.x;
    const offsetTop = tabRect.y - listRect.y;

    setIndicator({
      offsetStart,
      offsetTop,
      width: tabRect.width,
      height: tabRect.height,
      ready: true,
    });
  }, [activeTab, lang]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    let cancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) updateIndicator();
      });
    }
    return () => {
      cancelled = true;
      window.removeEventListener('resize', updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <section
      id="reality"
      className="py-16 md:py-24 bg-surface-warm text-ink border-b border-border overflow-hidden"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Split Header */}
        <Reveal index={0}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 pb-8 border-b border-border">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-accent mb-3">
                {reg.kicker}
              </p>
              <h2 className="font-display text-fluid-h1 font-extrabold text-ink leading-[1.1] text-balance">
                {reg.headingBold}
                <span className="font-serif-accent italic font-normal text-accent">
                  {reg.headingSerif}
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed text-pretty">
                {reg.summary}
              </p>
              <Button
                variant="accent"
                size="md"
                onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
              >
                {reg.ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Segmented Filter Bar with Sliding Transform-Only Pill */}
        <div className="mb-8">
          <div
            ref={tabListRef}
            className="relative inline-flex flex-wrap items-center gap-1 border border-border bg-surface rounded-full p-1 shadow-subtle"
            role="tablist"
            aria-label={reg.kicker}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 start-0 w-[100px] h-[44px] rounded-full bg-ink shadow-subtle transition-[transform,opacity] duration-250 ease-out-expo motion-reduce:transition-none rtl:[transform-origin:100%_0%] ltr:[transform-origin:0%_0%]"
              style={{
                opacity: indicator.ready ? 1 : 0,
                transform: `translate3d(${
                  lang === 'fa' ? -indicator.offsetStart : indicator.offsetStart
                }px, ${indicator.offsetTop}px, 0) scale(${indicator.width / 100}, ${
                  indicator.height / 44
                })`,
              }}
            />

            {reg.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 min-h-[44px] px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-250 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-white'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Keyed Cross-fade Panel of 3 Metric Cards */}
        <div
          key={`${lang}-${activeTab}`}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-hint-swap"
        >
          {items.map((item, idx) => (
            <MetricCard
              key={`${activeTab}-${idx}`}
              metric={item.metric}
              title={item.title}
              detail={item.detail}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealityRegister;
