import React, { useState } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './Reveal';
import { Collapsible } from './ui/Collapsible';
import { usePointerGlow } from './ui/usePointerGlow';
import { useApp } from '../context/AppContext';
import { DRAFT_MODE } from '../constants';
import { PLACEHOLDER_PACKAGES } from '../data/placeholders';
import { Language, PlaceholderPackage } from '../types';

interface TrackCardProps {
  pkg: PlaceholderPackage;
  lang: Language;
  index: number;
  isHighlighted: boolean;
  isExpanded: boolean;
  placeholderBadge: string;
  includedLabel: string;
  excludedToggle: string;
  selectCta: string;
  onSelectTrack: () => void;
  onToggleExcluded: () => void;
  onInquire: () => void;
}

const TrackCard: React.FC<TrackCardProps> = ({
  pkg,
  lang,
  index,
  isHighlighted,
  isExpanded,
  placeholderBadge,
  includedLabel,
  excludedToggle,
  selectCta,
  onSelectTrack,
  onToggleExcluded,
  onInquire,
}) => {
  const glowRef = usePointerGlow<HTMLElement>();

  return (
    <Reveal index={index}>
      <article
        ref={glowRef}
        onFocusCapture={onSelectTrack}
        className={`pointer-glow-card relative overflow-hidden rounded-panel border p-6 sm:p-8 h-full flex flex-col justify-between shadow-soft hover:shadow-lift hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,border-color,background-color] duration-250 ease-out-expo ${
          isHighlighted
            ? 'bg-surface border-accent/45'
            : 'bg-surface-paper border-border hover:bg-surface hover:border-ink/25'
        }`}
      >
        {/* Accent top-edge on recommended / selected card */}
        {isHighlighted && (
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-accent"
          />
        )}

        <div>
          <h4 className="font-display text-lg sm:text-xl font-bold text-ink mb-1.5">
            {pkg.title[lang]}
          </h4>
          <p className="text-sm text-ink-muted leading-relaxed text-pretty">
            {pkg.scopeSummary[lang]}
          </p>

          <div className="bg-surface-warm/70 rounded-card p-4 border border-border my-5 flex flex-wrap items-center justify-between gap-2">
            <div>
              {DRAFT_MODE && (
                <p className="text-xs font-medium text-ink-muted mb-0.5">
                  {placeholderBadge}
                </p>
              )}
              <p className="text-sm sm:text-base font-bold text-ink tabular-nums">
                {pkg.priceDisplay[lang]}
              </p>
            </div>
            <p className="text-xs text-ink-muted">{pkg.deliveryDisplay[lang]}</p>
          </div>

          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
              {includedLabel}
            </p>
            <ul className="space-y-2.5 text-sm">
              {pkg.included[lang].map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-ink/90 leading-relaxed"
                >
                  <Check size={15} aria-hidden="true" className="text-accent mt-1 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <Collapsible
            id={`excluded-${pkg.id}`}
            isOpen={isExpanded}
            onToggle={() => {
              onSelectTrack();
              onToggleExcluded();
            }}
            className="pt-2"
            triggerClassName="inline-flex items-center justify-between gap-2 min-h-[44px] text-xs font-semibold text-ink-muted hover:text-ink bg-surface border-[1.5px] border-border hover:border-ink/40 rounded-control px-4 py-2 shadow-subtle transition-[color,border-color,background-color] duration-250"
            trigger={
              <>
                <span>{excludedToggle}</span>
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-250 ease-out-expo motion-reduce:transition-none ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </>
            }
          >
            <div className="bg-surface-paper rounded-card p-4 border border-border mt-2.5">
              <ul className="space-y-2 text-xs sm:text-sm">
                {pkg.excluded[lang].map((line, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-ink-muted leading-relaxed"
                  >
                    <X size={14} aria-hidden="true" className="text-ink-muted mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Collapsible>
        </div>

        <Button
          variant={isHighlighted ? 'accent' : 'primary'}
          size="md"
          onClick={() => {
            onSelectTrack();
            onInquire();
          }}
          className="w-full mt-6 whitespace-nowrap"
        >
          {selectCta}
        </Button>
      </article>
    </Reveal>
  );
};

const PackageLedger: React.FC = () => {
  const { lang, t, openBookingModal } = useApp();
  const rp = t.readinessAndPackages;

  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [selectedTrackId, setSelectedTrackId] = useState<string>('combined-setup');

  const checkerGlowRef = usePointerGlow<HTMLDivElement>();

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleExcluded = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = checkedIds.length;
  const totalCount = rp.checks.length;
  const isAllReady = totalCount > 0 && checkedCount === totalCount;
  const progressRatio = totalCount > 0 ? checkedCount / totalCount : 0;

  return (
    <section id="packages" className="py-16 md:py-24 bg-surface text-ink border-b border-border">
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Readiness Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 mb-16 border-b border-border">
          <div className="lg:col-span-5">
            <Reveal index={0}>
              <p className="text-xs font-semibold tracking-wide text-accent mb-3">
                {rp.kicker}
              </p>
              <h2 className="font-display text-fluid-h1 font-extrabold text-ink leading-[1.12] mb-4 text-balance">
                {rp.headingBold}
                <span className="font-serif-accent italic font-normal text-accent">
                  {rp.headingSerif}
                </span>
              </h2>
              <p className="text-base text-ink-muted leading-relaxed mb-7 text-pretty">
                {rp.summary}
              </p>
              <Button
                variant="accent"
                size="md"
                onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
              >
                {rp.checkerCta}
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal index={1}>
              <div
                ref={checkerGlowRef}
                className="pointer-glow-card bg-surface-paper rounded-panel border border-border p-6 sm:p-8 shadow-soft"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {rp.checkerTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted">{rp.checkerSubtitle}</p>
                  </div>
                  <span className="text-sm font-extrabold tabular-nums text-ink">
                    {checkedCount} / {totalCount}
                  </span>
                </div>

                {/* Compositor-only scaleX progress bar */}
                <div className="h-1.5 w-full bg-surface-sand rounded-full overflow-hidden mb-5 border border-border">
                  <div
                    className="h-full w-full bg-accent transition-transform duration-250 ease-out-expo motion-reduce:transition-none rtl:[transform-origin:100%_50%] ltr:[transform-origin:0%_50%]"
                    style={{ transform: `scaleX(${progressRatio})` }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {rp.checks.map((item) => {
                    const isChecked = checkedIds.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-pressed={isChecked}
                        onClick={() => toggleCheck(item.id)}
                        className={`w-full min-h-[44px] text-start p-4 rounded-card border-[1.5px] transition-[transform,background-color,border-color,color,box-shadow] duration-250 ease-out-expo active:scale-[0.98] motion-reduce:transition-none flex items-center gap-3 ${
                          isChecked
                            ? 'bg-accent text-white border-accent shadow-soft'
                            : 'bg-surface text-ink border-border hover:border-ink/40'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-control flex items-center justify-center shrink-0 border-[1.5px] transition-colors duration-250 ${
                            isChecked
                              ? 'bg-white text-accent border-white'
                              : 'bg-surface-warm border-border text-transparent'
                          }`}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            width="13"
                            height="13"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3.2 8.4L6.4 11.6L12.8 4.4"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="svg-check-path"
                              data-checked={isChecked ? 'true' : 'false'}
                            />
                          </svg>
                        </span>
                        <span className="text-xs sm:text-sm font-medium leading-snug">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Keyed cross-fade of ready / partial message */}
                <p
                  key={`${lang}-${isAllReady ? 'ready' : 'partial'}`}
                  className={`text-xs sm:text-sm font-semibold animate-hint-swap ${
                    isAllReady ? 'text-accent' : 'text-ink-muted'
                  }`}
                >
                  {isAllReady ? rp.readyMessage : rp.partialMessage}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Setup Tracks 2x2 Architectural Grid */}
        <Reveal index={0}>
          <div className="max-w-2xl mb-10">
            <h3 className="font-display text-fluid-h2 font-extrabold text-ink mb-2">
              {rp.tracksHeading}
            </h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed text-pretty">
              {rp.tracksIntro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLACEHOLDER_PACKAGES.map((pkg, idx) => (
            <TrackCard
              key={pkg.id}
              pkg={pkg}
              lang={lang}
              index={idx}
              isHighlighted={selectedTrackId === pkg.id}
              isExpanded={Boolean(expandedIds[pkg.id])}
              placeholderBadge={rp.placeholderBadge}
              includedLabel={rp.includedLabel}
              excludedToggle={rp.excludedToggle}
              selectCta={rp.selectCta}
              onSelectTrack={() => setSelectedTrackId(pkg.id)}
              onToggleExcluded={() => toggleExcluded(pkg.id)}
              onInquire={() => openBookingModal({ packageId: pkg.id })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageLedger;
