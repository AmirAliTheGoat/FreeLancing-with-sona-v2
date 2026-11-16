import React, { useMemo, useRef, useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { Collapsible } from './ui/Collapsible';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';
import { filterFaqItems } from '../utils/calculations';

const Faq: React.FC = () => {
  const { t } = useApp();
  const section = t.faqSection;

  const [openId, setOpenId] = useState<string | null>(section.items[0]?.id ?? null);
  const [query, setQuery] = useState<string>('');
  const listRef = useRef<HTMLDivElement | null>(null);

  const filteredItems = useMemo(
    () => filterFaqItems(section.items, query),
    [query, section.items]
  );

  const liveAnnouncement = useMemo(() => {
    if (!query.trim()) return '';
    if (filteredItems.length === 0) return section.emptyTitle;
    return `${filteredItems.length} / ${section.items.length}`;
  }, [query, filteredItems.length, section.items.length, section.emptyTitle]);

  const handleTriggerKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    itemId: string
  ) => {
    const key = e.key;
    if (key !== 'ArrowDown' && key !== 'ArrowUp' && key !== 'Home' && key !== 'End') {
      return;
    }

    const triggers: HTMLButtonElement[] = listRef.current
      ? Array.from(listRef.current.querySelectorAll<HTMLButtonElement>('button[data-faq-trigger="true"]'))
      : [];
    if (triggers.length === 0) return;

    const currentIndex = triggers.findIndex((btn) => btn.dataset.faqId === itemId);
    if (currentIndex === -1) return;

    e.preventDefault();
    let nextIndex = currentIndex;
    if (key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % triggers.length;
    } else if (key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
    } else if (key === 'Home') {
      nextIndex = 0;
    } else if (key === 'End') {
      nextIndex = triggers.length - 1;
    }
    triggers[nextIndex]?.focus();
  };

  return (
    <section className="py-16 md:py-24 bg-surface-paper border-b border-border" id="faq">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {section.kicker}
            </p>
            <h2 className="font-display text-fluid-h2 font-extrabold text-ink text-balance">
              {section.headingBold}
              <span className="font-serif-accent italic font-normal text-accent">
                {section.headingSerif}
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search
            size={17}
            className="absolute top-1/2 -translate-y-1/2 start-4 text-ink-muted pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={section.searchPlaceholder}
            aria-label={section.searchPlaceholder}
            className="w-full min-h-[48px] bg-surface border border-border rounded-control ps-11 pe-12 text-sm text-ink placeholder:text-ink-muted/70 shadow-subtle focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-[border-color,box-shadow] duration-250 motion-reduce:transition-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label={section.clearSearch}
              className="absolute top-1/2 -translate-y-1/2 end-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-control text-ink-muted hover:text-ink hover:bg-surface-warm transition-colors motion-reduce:transition-none"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Polite announcement of live filtered results (existing copy only) */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {liveAnnouncement}
        </div>

        <div key={query.trim() || '__all'} className="animate-hint-swap">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 px-6 bg-surface rounded-panel border border-border shadow-soft">
              <p className="text-sm text-ink-muted mb-4">{section.emptyTitle}</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="min-h-[44px] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-accent border border-accent rounded-full hover:bg-accent-hover transition-colors duration-250 motion-reduce:transition-none"
              >
                {section.emptyReset}
              </button>
            </div>
          ) : (
            <div
              ref={listRef}
              className="divide-y divide-border border-t border-b border-border bg-surface/60 rounded-card px-4 sm:px-6"
            >
              {filteredItems.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `faq-panel-${item.id}`;
                return (
                  <div
                    key={item.id}
                    onKeyDown={(e) => handleTriggerKeyDown(e, item.id)}
                  >
                    <button
                      type="button"
                      data-faq-trigger="true"
                      data-faq-id={item.id}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="group w-full min-h-[56px] flex items-center justify-between gap-4 text-start font-semibold text-base sm:text-lg text-ink py-5 hover:text-accent transition-colors duration-250 motion-reduce:transition-none"
                    >
                      <span>{item.question}</span>
                      <span
                        aria-hidden="true"
                        className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-250 motion-reduce:transition-none ${
                          isOpen
                            ? 'bg-accent text-white border-accent'
                            : 'bg-surface-warm text-ink border-border group-hover:border-accent/40 group-hover:text-accent'
                        }`}
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform duration-250 ease-out-expo motion-reduce:transition-none ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </span>
                    </button>

                    <Collapsible
                      id={panelId}
                      isOpen={isOpen}
                    >
                      <div className="pb-5 text-sm sm:text-base text-ink-muted leading-relaxed space-y-2.5 text-pretty">
                        {item.answer.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </Collapsible>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
