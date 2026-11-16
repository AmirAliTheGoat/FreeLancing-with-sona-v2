import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/Button';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS } from '../data/placeholders';

const HeroBento: React.FC = () => {
  const { lang, t, openBookingModal } = useApp();
  const hero = t.hero;

  const [query, setQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(hero.topics[0].id);
  const [bgFailed, setBgFailed] = useState(false);

  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  const boldWords = useMemo(
    () => hero.headlineBold.trim().split(/\s+/).filter(Boolean),
    [hero.headlineBold]
  );
  const serifWords = useMemo(
    () => hero.headlineSerif.trim().split(/\s+/).filter(Boolean),
    [hero.headlineSerif]
  );

  const activeTopic = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q) {
      const matched = hero.topics.find(
        (topic) =>
          topic.chip.toLowerCase().includes(q) ||
          topic.title.toLowerCase().includes(q) ||
          topic.answer.toLowerCase().includes(q) ||
          topic.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
      if (matched) return matched;
    }
    return hero.topics.find((item) => item.id === selectedTopicId) ?? hero.topics[0];
  }, [query, selectedTopicId, hero.topics]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTopic) {
      setSelectedTopicId(activeTopic.id);
    }
  };

  const heroPillars =
    lang === 'fa'
      ? [
          { label: 'زبان انگلیسی', value: 'هوش مصنوعی سد زبان را کوچک‌تر کرده است' },
          { label: 'بخش فنی و VPS', value: 'چند روز تمرین برای افراد غیرفنی' },
          { label: 'شفافیت اعداد', value: 'اطلاعات جای‌گذاری پیش از انتشار' },
        ]
      : [
          { label: 'English Requirement', value: 'AI makes English a smaller barrier' },
          { label: 'Tech Curve', value: 'Remote VPS basics learned in a few days' },
          { label: 'Data Transparency', value: 'Bracketed [PLACEHOLDER] slots pre-launch' },
        ];

  return (
    <section
      id="top"
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-surface-paper text-ink overflow-hidden border-b border-border"
    >
      {/* Ambient Accent Mesh Gradient (transform-only drift, paused under reduced motion) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-mesh-drift absolute -top-28 -inset-x-16 h-[28rem] opacity-75"
          style={{
            background:
              'radial-gradient(48% 58% at 18% 28%, var(--color-accent-soft, #eaf4f2) 0%, transparent 72%), radial-gradient(42% 52% at 84% 22%, rgba(21, 99, 88, 0.08) 0%, transparent 70%), radial-gradient(50% 45% at 55% 78%, var(--surface-sand, #eeede8) 0%, transparent 75%)',
          }}
        />
        <div className="bg-editorial-grain absolute inset-0 opacity-[0.035]" />
      </div>

      <div className="relative z-10 max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Grid: Typographic Lockup + Framed Workspace Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 text-start space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center min-h-[32px] px-3 py-1 rounded-full bg-accent-soft border border-accent/20 text-xs font-semibold text-accent">
                {hero.sideHustleTag}
              </span>
              <span className="text-xs text-ink-muted">{hero.draftNotice}</span>
            </div>

            {/* Word-only staggered rise (never split by character) */}
            <h1 className="font-display text-fluid-display font-extrabold text-ink leading-[1.08] tracking-tight text-balance">
              {boldWords.map((word, idx) => (
                <React.Fragment key={`${lang}-b-${idx}`}>
                  <span
                    className="inline-block animate-word-rise"
                    style={{ animationDelay: `${idx * 45}ms` }}
                  >
                    {word}
                  </span>{' '}
                </React.Fragment>
              ))}
              <span className="font-serif-accent text-accent">
                {serifWords.map((word, idx) => (
                  <React.Fragment key={`${lang}-s-${idx}`}>
                    <span
                      className="inline-block animate-word-rise"
                      style={{ animationDelay: `${(boldWords.length + idx) * 45}ms` }}
                    >
                      {word}
                    </span>
                    {idx < serifWords.length - 1 ? ' ' : ''}
                  </React.Fragment>
                ))}
              </span>
            </h1>

            <p className="text-fluid-body text-ink-muted leading-relaxed max-w-2xl text-pretty">
              {hero.subheadline}
            </p>

            {/* Primary (accent filled) + Secondary (ghost) CTA Row */}
            <div className="space-y-2.5 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
                  className="gap-2.5"
                >
                  <span>{hero.primaryCta}</span>
                  <ArrowIcon
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
                  />
                </Button>

                <a
                  href="#packages"
                  className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-control border-[1.5px] border-transparent text-sm sm:text-base font-semibold text-ink-muted hover:text-ink hover:border-border hover:bg-surface-warm transition-[transform,color,background-color,border-color] duration-250 ease-out-expo hover:-translate-y-[1px] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 whitespace-nowrap"
                >
                  <span>{t.straightTalk.ctaLabel}</span>
                  <ArrowIcon
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
                  />
                </a>
              </div>
              <p className="text-xs text-ink-muted">{hero.helperNote}</p>
            </div>
          </div>

          {/* Framed Editorial Workspace Card with Subtle view() Parallax */}
          <div className="lg:col-span-5">
            <div className="rounded-panel bg-surface border border-border p-2.5 shadow-lift">
              <div className="overflow-hidden rounded-card bg-surface-sand aspect-[16/10]">
                {!bgFailed ? (
                  <img
                    src={EDITORIAL_ASSETS.heroWorkspace}
                    alt=""
                    width={1376}
                    height={768}
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    onError={() => setBgFailed(true)}
                    className="w-full h-full object-cover hero-parallax-img"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-accent-soft text-accent font-display text-sm font-semibold p-6 text-center">
                    {hero.sideHustleTag}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Clean "Ask" Topic Explorer Card */}
        <div
          style={{ animationDelay: '90ms' }}
          className="mt-8 md:mt-10 animate-enter-up bg-surface border border-border rounded-panel p-4 sm:p-6 shadow-soft"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 p-1.5 bg-surface-paper border-[1.5px] border-border rounded-control focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-[border-color,box-shadow,background-color] duration-250"
          >
            <Search
              size={17}
              className="ms-3 text-ink-muted shrink-0"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={hero.searchPlaceholder}
              aria-label={hero.searchPlaceholder}
              className="flex-1 min-h-[44px] px-2 bg-transparent text-sm text-ink placeholder:text-ink-muted/80 focus:outline-none focus-visible:ring-0 min-w-0"
            />
            <Button type="submit" variant="primary" size="sm" className="shrink-0">
              {hero.searchButtonLabel}
            </Button>
          </form>

          {/* Animated Pill Topic Selector */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pb-4 border-b border-border">
            <span className="text-xs text-ink-muted font-medium me-1">{hero.suggestedLabel}</span>
            {hero.topics.map((topic) => {
              const isSelected = activeTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setQuery('');
                    setSelectedTopicId(topic.id);
                  }}
                  className={`min-h-[44px] px-4 py-2 text-xs font-semibold rounded-full border-[1.5px] transition-[transform,background-color,border-color,color,box-shadow] duration-250 ease-out-expo whitespace-nowrap active:scale-[0.98] motion-reduce:transition-none ${
                    isSelected
                      ? 'bg-accent text-white border-accent shadow-soft scale-[1.01] motion-reduce:scale-100'
                      : 'bg-surface-warm text-ink-muted border-border hover:border-ink/35 hover:bg-surface-sand hover:text-ink'
                  }`}
                >
                  {topic.chip}
                </button>
              );
            })}
          </div>

          {/* Cross-fading Answer Panel */}
          <div
            key={`${lang}-${activeTopic.id}`}
            className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-hint-swap"
          >
            <div className="text-start min-w-0 space-y-1">
              <p className="text-xs font-semibold text-accent">{activeTopic.chip}</p>
              <h2 className="font-display text-base sm:text-lg font-bold text-ink">
                {activeTopic.title}
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">{activeTopic.answer}</p>
            </div>
            <a
              href={activeTopic.targetHref}
              className="group inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-surface-warm border-[1.5px] border-border rounded-control text-xs font-semibold text-ink hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 transition-[transform,background-color,border-color,color] duration-250 ease-out-expo motion-reduce:transition-none motion-reduce:hover:translate-y-0 whitespace-nowrap shrink-0 self-start sm:self-center"
            >
              <span>{activeTopic.ctaLabel}</span>
              <ArrowIcon
                size={14}
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Proof Strip Beneath */}
        <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 text-start">
          {heroPillars.map((pillar) => (
            <div key={pillar.label} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0"
              />
              <div className="space-y-0.5 min-w-0">
                <p className="text-xs text-ink-muted font-medium">{pillar.label}</p>
                <p className="text-sm font-semibold text-ink leading-snug">{pillar.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
