import React, { useState } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';
import { PLACEHOLDER_PACKAGES } from '../data/placeholders';

const PackageLedger: React.FC = () => {
  const { lang, t, openBookingModal } = useApp();
  const rp = t.readinessAndPackages;

  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

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
  const isAllReady = checkedCount === totalCount;
  const progressPct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  return (
    <section id="packages" className="py-16 md:py-24 bg-white border-b border-border">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        {/* Top Asymmetric Readiness Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 mb-16 border-b border-border">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                {rp.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-[1.15] mb-4 text-balance">
                {rp.headingBold}
                <span className="font-serif-accent italic font-normal">{rp.headingSerif}</span>
              </h2>
              <p className="text-base text-ink-muted leading-relaxed mb-7">
                {rp.summary}
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
              >
                {rp.checkerCta}
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delayMs={100}>
              <div className="bg-surface-muted rounded-panel border border-border p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
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

                <div className="h-1 w-full bg-white rounded-none overflow-hidden mb-5 border border-border">
                  <div
                    className="h-full bg-ink transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
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
                        className={`w-full text-start p-4 rounded-card border-[1.5px] transition-all duration-200 flex items-center gap-3 ${
                          isChecked
                            ? 'bg-ink text-white border-ink shadow-sm'
                            : 'bg-white text-ink border-border hover:border-ink/45'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 border-[1.5px] transition-colors ${
                            isChecked
                              ? 'bg-white text-ink border-white'
                              : 'bg-surface-muted border-border text-transparent'
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-xs sm:text-sm font-medium leading-snug">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs sm:text-sm font-semibold text-ink-muted">
                  {isAllReady ? rp.readyMessage : rp.partialMessage}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Setup Tracks 2x2 Architectural Grid */}
        <Reveal>
          <div className="max-w-2xl mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-2">
              {rp.tracksHeading}
            </h3>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              {rp.tracksIntro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLACEHOLDER_PACKAGES.map((pkg, idx) => {
            const isExpanded = Boolean(expandedIds[pkg.id]);
            return (
              <Reveal key={pkg.id} delayMs={idx * 60}>
                <article className="bg-surface-muted/60 rounded-panel border border-border p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-200 hover:bg-white hover:shadow-card">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-ink mb-1.5">
                      {pkg.title[lang]}
                    </h4>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {pkg.scopeSummary[lang]}
                    </p>

                    <div className="bg-white rounded-card p-4 border border-border my-5 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-semibold text-draft">
                          {rp.placeholderBadge}
                        </p>
                        <p className="text-sm sm:text-base font-bold text-ink tabular-nums mt-0.5">
                          {pkg.priceDisplay[lang]}
                        </p>
                      </div>
                      <p className="text-xs text-ink-muted">{pkg.deliveryDisplay[lang]}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                        {rp.includedLabel}
                      </p>
                      <ul className="space-y-2.5 text-sm">
                        {pkg.included[lang].map((line, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-ink/90 leading-relaxed"
                          >
                            <Check size={15} className="text-ink mt-1 shrink-0" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => toggleExcluded(pkg.id)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-white bg-white hover:bg-ink border-[1.5px] border-border hover:border-ink rounded-control px-4 py-2 shadow-subtle transition-all duration-200"
                      >
                        <span>{rp.excludedToggle}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="bg-white rounded-card p-4 border border-border mt-2.5 animate-hint-swap">
                          <ul className="space-y-2 text-xs sm:text-sm">
                            {pkg.excluded[lang].map((line, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-ink-muted leading-relaxed"
                              >
                                <X size={14} className="text-ink mt-0.5 shrink-0" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => openBookingModal({ packageId: pkg.id })}
                    className="w-full mt-6 whitespace-nowrap"
                  >
                    {rp.selectCta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackageLedger;
