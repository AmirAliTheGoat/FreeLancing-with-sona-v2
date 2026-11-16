import React, { useMemo, useState } from 'react';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';
import { PLACEHOLDER_CASE_RECORDS, PLACEHOLDER_REFERENCES } from '../data/placeholders';
import { RecordCategory } from '../types';

const ECOSYSTEM_ITEMS = ['Upwork', 'Fiverr', 'PayPal', 'Freelancer', 'ChatGPT · AI'];

const FieldRecords: React.FC = () => {
  const { lang, t } = useApp();
  const section = t.fieldRecords;
  const [filter, setFilter] = useState<RecordCategory>('all');

  const visibleCases = useMemo(() => {
    if (filter === 'all') return PLACEHOLDER_CASE_RECORDS;
    return PLACEHOLDER_CASE_RECORDS.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <section
      id="records"
      className="py-16 md:py-24 bg-obsidian text-white overflow-hidden"
    >
      <div className="max-w-page mx-auto px-6 lg:px-8 space-y-14">
        {/* Case Record Slots on Squarespace Obsidian Showcase */}
        <div>
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/15">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">
                  {section.kicker}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 text-balance">
                  {section.headingBold}
                  <span className="font-serif-accent italic font-normal text-white/95">
                    {section.headingSerif}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {section.intro}
                </p>
              </div>

              {/* Filter Tabs */}
              <div
                className="inline-flex flex-wrap items-center gap-1 border-[1.5px] border-white/25 bg-obsidian-card rounded-control p-1 self-start lg:self-auto"
                role="tablist"
              >
                {section.filters.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={filter === tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap ${
                      filter === tab.id
                        ? 'bg-white text-ink shadow-sm'
                        : 'text-white/75 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-hint-swap"
          >
            {visibleCases.map((record) => (
              <article
                key={record.id}
                className="bg-obsidian-card text-white rounded-panel border border-white/15 p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 hover:border-white/35"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/15 text-xs">
                    <span className="font-bold text-white tabular-nums">{record.slotCode}</span>
                    <span className="text-white/70 font-medium">{section.placeholderTag}</span>
                  </div>

                  <p className="text-xs font-semibold text-white/60 mb-4">
                    {record.platform[lang]}
                  </p>

                  <dl className="space-y-3 text-sm mb-5">
                    <div>
                      <dt className="text-xs text-white/55">{section.specialtyLabel}</dt>
                      <dd className="font-medium text-white/95 mt-0.5">
                        {record.specialtyPlaceholder[lang]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-white/55">{section.timeframeLabel}</dt>
                      <dd className="font-medium text-white/95 mt-0.5">
                        {record.timeframePlaceholder[lang]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-white/55">{section.outcomeLabel}</dt>
                      <dd className="font-semibold text-white mt-0.5">
                        {record.outcomePlaceholder[lang]}
                      </dd>
                    </div>
                  </dl>
                </div>

                <p className="text-xs text-white/65 leading-relaxed pt-4 border-t border-white/15">
                  {record.notesPlaceholder[lang]}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Client Reference Slots */}
        <div className="pt-10 border-t border-white/15">
          <div className="mb-7">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              {section.referencesHeading}
            </h3>
            <p className="text-sm text-white/65">{section.referencesSubheading}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLACEHOLDER_REFERENCES.map((ref) => (
              <blockquote
                key={ref.id}
                className="bg-obsidian-card text-white rounded-panel border border-white/15 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-bold text-white/80 tabular-nums">{ref.slotCode}</span>
                    <span className="text-white/60 font-medium">{section.placeholderTag}</span>
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                    {ref.quotePlaceholder[lang]}
                  </p>
                </div>

                <footer className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs text-white/65">
                  <div>
                    <span className="font-semibold text-white">{ref.authorPlaceholder[lang]}</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>{ref.rolePlaceholder[lang]}</span>
                  </div>
                  <span className="tabular-nums">{ref.datePlaceholder[lang]}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Bottom Architectural Platforms Strip */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
            {section.ecosystemStripLabel}
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base sm:text-lg font-display font-bold text-white/90">
            {ECOSYSTEM_ITEMS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldRecords;
