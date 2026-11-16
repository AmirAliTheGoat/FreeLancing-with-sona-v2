import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Minus, Plus, Search, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS } from '../data/placeholders';
import { filterFaqItems } from '../utils/calculations';

const Faq: React.FC = () => {
  const { lang, t, openBookingModal } = useApp();
  const section = t.faqSection;
  const banner = t.closingBanner;

  const [openId, setOpenId] = useState<string | null>(section.items[0]?.id ?? null);
  const [query, setQuery] = useState<string>('');
  const [imgError, setImgError] = useState(false);

  const filteredItems = useMemo(
    () => filterFaqItems(section.items, query),
    [query, section.items]
  );

  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Band 6: Squarespace Architectural Closing Split Band */}
      <section className="py-16 md:py-24 bg-surface-muted border-b border-border overflow-hidden">
        <div className="max-w-page mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-[1.1] mb-4 text-balance">
                  {banner.headingBold}
                  <span className="font-serif-accent italic font-normal">
                    {banner.headingSerif}
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-7 max-w-xl">
                  {banner.subtitle}
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
                  className="gap-2.5"
                >
                  <span>{banner.cta}</span>
                  <ArrowIcon
                    size={17}
                    className="transition-transform duration-150 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
                  />
                </Button>
              </Reveal>
            </div>

            <div className="md:col-span-5 flex justify-center md:justify-end">
              <Reveal delayMs={100}>
                <div className="w-64 sm:w-72 aspect-square rounded-panel overflow-hidden bg-white border border-border shadow-card">
                  {!imgError ? (
                    <img
                      src={EDITORIAL_ASSETS.sonaPortrait}
                      alt={t.straightTalk.portraitName}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-[50%_22%]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-ink-muted">
                      Sona
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Band 7: Clean Editorial Hairline FAQ */}
      <section className="py-16 md:py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-2">
                {section.kicker}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                {section.headingBold}
                <span className="font-serif-accent italic font-normal">{section.headingSerif}</span>
              </h2>
            </div>
          </Reveal>

          {/* Search Input */}
          <div className="relative mb-8">
            <Search
              size={17}
              className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 text-ink-muted pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={section.searchPlaceholder}
              aria-label={section.searchPlaceholder}
              className="w-full h-12 bg-surface-muted border-[1.5px] border-border rounded-control ltr:pl-11 ltr:pr-11 rtl:pr-11 rtl:pl-11 text-sm text-ink placeholder:text-ink-muted/70 focus:outline-none focus:bg-white focus:border-ink focus:shadow-subtle transition-all duration-200"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={section.clearSearch}
                className="absolute top-1/2 -translate-y-1/2 ltr:right-3 rtl:left-3 p-1.5 rounded-control text-ink-muted hover:text-ink hover:bg-white transition-colors"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-10 px-6 bg-surface-muted rounded-panel border border-border">
              <p className="text-sm text-ink-muted mb-4">{section.emptyTitle}</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="px-6 py-3 text-xs font-semibold text-white bg-ink border-[1.5px] border-ink rounded-control hover:bg-neutral-800 hover:-translate-y-0.5 shadow-subtle transition-all duration-200"
              >
                {section.emptyReset}
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border border-t border-b border-border">
              {filteredItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="transition-colors duration-150">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="group w-full flex items-center justify-between gap-4 text-start font-semibold text-base sm:text-lg text-ink py-5 hover:text-ink/80 transition-colors"
                    >
                      <span>{item.question}</span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-control border-[1.5px] flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? 'bg-ink text-white border-ink'
                            : 'bg-surface-muted text-ink border-border group-hover:border-ink/50 group-hover:bg-white'
                        }`}
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 text-sm sm:text-base text-ink-muted leading-relaxed space-y-2 animate-hint-swap">
                        {item.answer.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Faq;
