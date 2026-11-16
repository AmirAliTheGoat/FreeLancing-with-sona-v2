import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { usePointerGlow } from './ui/usePointerGlow';
import { useApp } from '../context/AppContext';
import { PLACEHOLDER_CASE_RECORDS, PLACEHOLDER_REFERENCES } from '../data/placeholders';
import { Language, PlaceholderCaseRecord, PlaceholderReferenceSlot, RecordCategory } from '../types';

const ECOSYSTEM_ITEMS = ['Upwork', 'Fiverr', 'PayPal', 'Freelancer', 'ChatGPT · AI'];

interface FilterIndicatorState {
  offsetStart: number;
  offsetTop: number;
  width: number;
  height: number;
  ready: boolean;
}

interface CaseSlotCardProps {
  record: PlaceholderCaseRecord;
  lang: Language;
  index: number;
  placeholderTag: string;
  specialtyLabel: string;
  timeframeLabel: string;
  outcomeLabel: string;
}

const CaseSlotCard: React.FC<CaseSlotCardProps> = ({
  record,
  lang,
  index,
  placeholderTag,
  specialtyLabel,
  timeframeLabel,
  outcomeLabel,
}) => {
  const glowRef = usePointerGlow<HTMLElement>();

  return (
    <Reveal index={index}>
      <article
        ref={glowRef}
        className="pointer-glow-card pointer-glow-dark placeholder-shimmer bg-obsidian-card text-white rounded-panel border border-white/15 p-6 sm:p-7 h-full flex flex-col justify-between transition-[transform,border-color] duration-250 ease-out-expo hover:-translate-y-0.5 hover:border-white/35 motion-reduce:hover:translate-y-0"
      >
        <div>
          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/15 text-xs">
            <span className="font-bold text-white tabular-nums">{record.slotCode}</span>
            <span className="text-white/75 font-medium">{placeholderTag}</span>
          </div>

          <p className="text-xs font-semibold text-white/70 mb-4">
            {record.platform[lang]}
          </p>

          <dl className="space-y-3 text-sm mb-5">
            <div>
              <dt className="text-xs text-white/60">{specialtyLabel}</dt>
              <dd className="font-medium text-white/95 mt-0.5">
                {record.specialtyPlaceholder[lang]}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-white/60">{timeframeLabel}</dt>
              <dd className="font-medium text-white/95 mt-0.5">
                {record.timeframePlaceholder[lang]}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-white/60">{outcomeLabel}</dt>
              <dd className="font-semibold text-white mt-0.5">
                {record.outcomePlaceholder[lang]}
              </dd>
            </div>
          </dl>
        </div>

        <p className="text-xs text-white/70 leading-relaxed pt-4 border-t border-white/15">
          {record.notesPlaceholder[lang]}
        </p>
      </article>
    </Reveal>
  );
};

interface ReferenceSlotCardProps {
  item: PlaceholderReferenceSlot;
  lang: Language;
  index: number;
  placeholderTag: string;
}

const ReferenceSlotCard: React.FC<ReferenceSlotCardProps> = ({
  item,
  lang,
  index,
  placeholderTag,
}) => {
  const glowRef = usePointerGlow<HTMLQuoteElement>();

  return (
    <Reveal index={index}>
      <blockquote
        ref={glowRef}
        className="pointer-glow-card pointer-glow-dark placeholder-shimmer bg-obsidian-card text-white rounded-panel border border-white/15 p-6 h-full flex flex-col justify-between transition-[transform,border-color] duration-250 ease-out-expo hover:-translate-y-0.5 hover:border-white/30 motion-reduce:hover:translate-y-0"
      >
        <div>
          <div className="flex items-center justify-between text-xs mb-4">
            <span className="font-bold text-white/85 tabular-nums">{item.slotCode}</span>
            <span className="text-white/70 font-medium">{placeholderTag}</span>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
            {item.quotePlaceholder[lang]}
          </p>
        </div>

        <footer className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
          <div>
            <span className="font-semibold text-white">{item.authorPlaceholder[lang]}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{item.rolePlaceholder[lang]}</span>
          </div>
          <span className="tabular-nums">{item.datePlaceholder[lang]}</span>
        </footer>
      </blockquote>
    </Reveal>
  );
};

const FieldRecords: React.FC = () => {
  const { lang, t } = useApp();
  const section = t.fieldRecords;
  const [filter, setFilter] = useState<RecordCategory>('all');

  const tabListRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState<FilterIndicatorState>({
    offsetStart: 0,
    offsetTop: 0,
    width: 100,
    height: 44,
    ready: false,
  });

  const visibleCases = useMemo(() => {
    if (filter === 'all') return PLACEHOLDER_CASE_RECORDS;
    return PLACEHOLDER_CASE_RECORDS.filter((c) => c.category === filter);
  }, [filter]);

  const updateIndicator = useCallback(() => {
    const listEl = tabListRef.current;
    const activeEl = tabRefs.current[filter];
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
  }, [filter, lang]);

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
      id="records"
      className="py-16 md:py-24 bg-obsidian text-white overflow-hidden"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Case Record Slots on Obsidian Dark Contrast Surface */}
        <div>
          <Reveal index={0}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/15">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-white/70 mb-2">
                  {section.kicker}
                </p>
                <h2 className="font-display text-fluid-h1 font-extrabold text-white mb-3 text-balance">
                  {section.headingBold}
                  <span className="font-serif-accent italic font-normal text-white/95">
                    {section.headingSerif}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed text-pretty">
                  {section.intro}
                </p>
              </div>

              {/* Filter Tabs with Transform-Only Sliding Pill */}
              <div
                ref={tabListRef}
                className="relative inline-flex flex-wrap items-center gap-1 border border-white/20 bg-obsidian-card rounded-full p-1 self-start lg:self-auto"
                role="tablist"
                aria-label={section.kicker}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 start-0 w-[100px] h-[44px] rounded-full bg-white shadow-subtle transition-[transform,opacity] duration-250 ease-out-expo motion-reduce:transition-none rtl:[transform-origin:100%_0%] ltr:[transform-origin:0%_0%]"
                  style={{
                    opacity: indicator.ready ? 1 : 0,
                    transform: `translate3d(${
                      lang === 'fa' ? -indicator.offsetStart : indicator.offsetStart
                    }px, ${indicator.offsetTop}px, 0) scale(${indicator.width / 100}, ${
                      indicator.height / 44
                    })`,
                  }}
                />

                {section.filters.map((tab) => {
                  const isActive = filter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      ref={(el) => {
                        tabRefs.current[tab.id] = el;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setFilter(tab.id)}
                      className={`relative z-10 min-h-[44px] px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-250 whitespace-nowrap ${
                        isActive
                          ? 'text-ink'
                          : 'text-white/75 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div
            key={`${lang}-${filter}`}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-hint-swap"
          >
            {visibleCases.map((record, idx) => (
              <CaseSlotCard
                key={record.id}
                record={record}
                lang={lang}
                index={idx}
                placeholderTag={section.placeholderTag}
                specialtyLabel={section.specialtyLabel}
                timeframeLabel={section.timeframeLabel}
                outcomeLabel={section.outcomeLabel}
              />
            ))}
          </div>
        </div>

        {/* Client Reference Slots */}
        <div className="pt-10 border-t border-white/15">
          <Reveal index={0}>
            <div className="mb-7">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                {section.referencesHeading}
              </h3>
              <p className="text-sm text-white/70">{section.referencesSubheading}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLACEHOLDER_REFERENCES.map((item, idx) => (
              <ReferenceSlotCard
                key={item.id}
                item={item}
                lang={lang}
                index={idx}
                placeholderTag={section.placeholderTag}
              />
            ))}
          </div>
        </div>

        {/* Bottom Ecosystem Strip: CSS-Transform Marquee (paused on hover, static under reduced motion) */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/65 shrink-0">
            {section.ecosystemStripLabel}
          </p>

          <div dir="ltr" className="marquee-viewport flex-1 min-w-0">
            <div className="marquee-track items-center gap-10">
              <div className="flex items-center gap-10 pe-10">
                {ECOSYSTEM_ITEMS.map((item) => (
                  <span
                    key={`a-${item}`}
                    className="text-base sm:text-lg font-display font-bold text-white/90 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div
                aria-hidden="true"
                className="flex items-center gap-10 pe-10 motion-reduce:hidden"
              >
                {ECOSYSTEM_ITEMS.map((item) => (
                  <span
                    key={`b-${item}`}
                    className="text-base sm:text-lg font-display font-bold text-white/90 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldRecords;
