import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Bot, ChevronDown, Compass, Cpu, Timer } from 'lucide-react';
import { Reveal } from './Reveal';
import { Collapsible } from './ui/Collapsible';
import { usePointerGlow } from './ui/usePointerGlow';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS, PLACEHOLDER_PROFILE } from '../data/placeholders';

const CARD_ICONS = [Compass, Bot, Cpu, Timer];

interface BentoPrincipleCardProps {
  num: string;
  tag: string;
  title: string;
  line: string;
  iconIndex: number;
  isOpen: boolean;
  onToggle: () => void;
  revealIndex: number;
}

const BentoPrincipleCard: React.FC<BentoPrincipleCardProps> = ({
  num,
  tag,
  title,
  line,
  iconIndex,
  isOpen,
  onToggle,
  revealIndex,
}) => {
  const glowRef = usePointerGlow<HTMLElement>();
  const Icon = CARD_ICONS[iconIndex % CARD_ICONS.length];

  return (
    <Reveal index={revealIndex}>
      <article
        ref={glowRef}
        className={`pointer-glow-card rounded-panel border p-5 sm:p-6 shadow-soft hover:shadow-lift hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,border-color,background-color] duration-250 ease-out-expo ${
          isOpen
            ? 'bg-surface border-accent/35'
            : 'bg-surface-paper border-border hover:border-ink/25'
        }`}
      >
        <Collapsible
          id={`straight-talk-card-${iconIndex}`}
          isOpen={isOpen}
          onToggle={onToggle}
          triggerClassName="w-full text-start min-h-[44px] flex flex-col gap-3 rounded-control focus-visible:ring-offset-surface"
          trigger={
            <>
              <div className="w-full flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`w-8 h-8 rounded-control flex items-center justify-center shrink-0 transition-colors duration-250 ${
                      isOpen
                        ? 'bg-accent text-white'
                        : 'bg-accent-soft text-accent'
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-ink-muted tabular-nums truncate">
                    {num} · {tag}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`shrink-0 text-ink-muted transition-transform duration-250 ease-out-expo motion-reduce:transition-none ${
                    isOpen ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </div>

              <h3 className="font-display text-base sm:text-lg font-extrabold text-ink leading-snug text-balance">
                {title}
              </h3>
            </>
          }
        >
          <p className="pt-3.5 mt-3.5 border-t border-border text-sm text-ink-muted leading-relaxed text-pretty">
            {line}
          </p>
        </Collapsible>
      </article>
    </Reveal>
  );
};

const StraightTalkBento: React.FC = () => {
  const { lang, t } = useApp();
  const st = t.straightTalk;
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({ 1: true });
  const [imgError, setImgError] = useState(false);

  const portraitGlowRef = usePointerGlow<HTMLDivElement>();
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  const toggleCard = (idx: number) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      id="straight-talk"
      className="py-16 md:py-24 bg-surface text-ink border-b border-border overflow-hidden"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal index={0}>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <p className="text-xs font-semibold tracking-wide text-accent mb-3">
              {st.kicker}
            </p>
            <h2 className="font-display text-fluid-h1 font-extrabold text-ink leading-[1.1] mb-4 text-balance">
              {st.headingBold}
              <span className="font-serif-accent italic font-normal text-accent">
                {st.headingSerif}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed text-pretty">
              {st.summary}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Featured Portrait Bento Card */}
          <div className="lg:col-span-5">
            <Reveal index={1}>
              <div
                ref={portraitGlowRef}
                className="pointer-glow-card bg-surface-paper border border-border rounded-panel p-5 sm:p-6 shadow-soft hover:shadow-lift hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,box-shadow,border-color] duration-250 ease-out-expo"
              >
                <div className="aspect-[5/4] rounded-card overflow-hidden bg-surface-sand border border-border mb-5">
                  {!imgError ? (
                    <picture>
                      <source type="image/avif" srcSet={EDITORIAL_ASSETS.sonaPortraitAvif} />
                      <source type="image/webp" srcSet={EDITORIAL_ASSETS.sonaPortraitWebp} />
                      <img
                        src={EDITORIAL_ASSETS.sonaPortrait}
                        alt={st.portraitName}
                        width={640}
                        height={640}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-[50%_22%]"
                      />
                    </picture>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-ink-muted">
                      {st.portraitName}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 pb-5 mb-5 border-b border-border text-start">
                  <p className="font-display font-bold text-lg text-ink">
                    {st.portraitName}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted">{st.portraitRole}</p>
                  <p className="text-xs font-medium text-ink-muted pt-1">
                    {PLACEHOLDER_PROFILE.yearsActive[lang]}
                  </p>
                </div>

                <a
                  href="#packages"
                  className="group w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3 bg-accent text-white border-[1.5px] border-accent shadow-soft hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 rounded-control text-sm sm:text-base font-semibold tracking-[0.01em] transition-[transform,background-color,border-color,box-shadow] duration-250 ease-out-expo whitespace-nowrap"
                >
                  <span>{st.ctaLabel}</span>
                  <ArrowIcon
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          {/* 4 Interactive Bento Principle Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            {st.cards.map((card, idx) => (
              <BentoPrincipleCard
                key={card.num}
                num={card.num}
                tag={card.tag}
                title={card.title}
                line={card.line}
                iconIndex={idx}
                isOpen={Boolean(expandedCards[idx])}
                onToggle={() => toggleCard(idx)}
                revealIndex={idx + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StraightTalkBento;
