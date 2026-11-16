import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Bot, Compass, Cpu, Timer } from 'lucide-react';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS, PLACEHOLDER_PROFILE } from '../data/placeholders';

const CARD_ICONS = [Compass, Bot, Cpu, Timer];

const StraightTalkBento: React.FC = () => {
  const { lang, t } = useApp();
  const st = t.straightTalk;
  const [activeIdx, setActiveIdx] = useState(1); // Highlight AI-assisted English by default
  const [imgError, setImgError] = useState(false);

  const activeCard = st.cards[activeIdx] ?? st.cards[0];
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="straight-talk"
      className="py-16 md:py-24 bg-white text-ink border-b border-border overflow-hidden"
    >
      <div className="max-w-page mx-auto px-6 lg:px-8">
        {/* Centered Header + Horizontal Editorial Tab Strip inspired by Squarespace "Grow your business" */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
              {st.kicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-[1.1] mb-4 text-balance">
              {st.headingBold}
              <span className="font-serif-accent italic font-normal">{st.headingSerif}</span>
            </h2>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              {st.summary}
            </p>
          </div>
        </Reveal>

        {/* Horizontal 4-Card Index Tabs */}
        <div
          role="tablist"
          aria-label={st.kicker}
          className="grid grid-cols-2 lg:grid-cols-4 border-b border-border mb-8"
        >
          {st.cards.map((card, idx) => {
            const Icon = CARD_ICONS[idx % CARD_ICONS.length];
            const isActive = idx === activeIdx;
            return (
              <button
                key={card.num}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(idx)}
                className={`text-start px-4 py-4 border-b-2 transition-colors duration-150 flex items-center justify-between gap-2 ${
                  isActive
                    ? 'border-ink text-ink bg-surface-muted/60'
                    : 'border-transparent text-ink-muted hover:text-ink hover:bg-surface-muted/30'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon size={16} className="shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold truncate">{card.tag}</span>
                </div>
                <span className="text-xs font-bold tabular-nums opacity-60 shrink-0">
                  {card.num}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Gallery Spotlight Card */}
        <Reveal>
          <div
            key={activeIdx}
            className="bg-surface-muted border border-border rounded-panel p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-hint-swap"
          >
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-semibold text-ink-muted mb-3 tabular-nums">
                  {activeCard.num} · {activeCard.tag}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink leading-tight mb-4 text-balance">
                  {activeCard.title}
                </h3>
                <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
                  {activeCard.line}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#packages"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-white border-[1.5px] border-ink shadow-[0_2px_10px_-2px_rgba(14,14,14,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-neutral-800 hover:border-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-6px_rgba(14,14,14,0.38)] rounded-control text-sm sm:text-base font-semibold tracking-[0.01em] transition-all duration-200 active:translate-y-0 active:scale-[0.985]"
                >
                  <span>{st.ctaLabel}</span>
                  <ArrowIcon
                    size={16}
                    className="transition-transform duration-200 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Editorial Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-border rounded-panel p-4 shadow-subtle">
                <div className="aspect-[5/4] rounded-card overflow-hidden bg-surface-muted border border-border mb-4">
                  {!imgError ? (
                    <img
                      src={EDITORIAL_ASSETS.sonaPortrait}
                      alt={st.portraitName}
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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display font-bold text-base text-ink">
                      {st.portraitName}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">{st.portraitRole}</p>
                    <p className="text-xs font-medium text-draft mt-2">
                      {PLACEHOLDER_PROFILE.yearsActive[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default StraightTalkBento;
