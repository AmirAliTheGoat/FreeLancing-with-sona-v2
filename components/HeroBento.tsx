import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/Button';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS } from '../data/placeholders';

const HeroBento: React.FC = () => {
  const { lang, setLang, t, openBookingModal } = useApp();
  const hero = t.hero;

  const [query, setQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(hero.topics[0].id);
  const [bgFailed, setBgFailed] = useState(false);

  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

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
          { label: 'زبان انگلیسی', value: 'با GPT در ۲۰۲۶ اختیاری شده' },
          { label: 'بخش فنی و VPS', value: 'چند روز تمرین برای افراد غیرفنی' },
          { label: 'شفافیت اعداد', value: 'اطلاعات جای‌گذاری پیش از انتشار' },
        ]
      : [
          { label: 'English Requirement', value: 'AI-assisted · virtually optional in 2026' },
          { label: 'Tech Curve', value: 'Remote VPS basics learned in a few days' },
          { label: 'Data Transparency', value: 'Bracketed [PLACEHOLDER] slots pre-launch' },
        ];

  return (
    <section
      id="top"
      className="relative pt-20 pb-8 md:pt-24 md:pb-10 bg-obsidian text-white overflow-hidden"
    >
      {/* Full-bleed Architectural Studio Backdrop + Measured Contrast Scrim */}
      {!bgFailed && (
        <img
          src={EDITORIAL_ASSETS.heroWorkspace}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setBgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-obsidian"
      />

      <div className="relative z-10 max-w-page mx-auto px-6 lg:px-8">
        {/* Centered Squarespace Editorial Hero Lockup */}
        <div className="flex flex-col items-center text-center mb-5 animate-enter-up">
          {/* Architectural Language Switch */}
          <div
            className="inline-flex items-center gap-1 border-[1.5px] border-white/25 bg-black/50 backdrop-blur-md rounded-control p-1 mb-3.5"
            role="group"
            aria-label={t.footer.languageLabel}
          >
            <button
              type="button"
              onClick={() => setLang('fa')}
              aria-pressed={lang === 'fa'}
              className={`px-4 py-1.5 text-xs font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap ${
                lang === 'fa'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-white/75 hover:text-white hover:bg-white/10'
              }`}
            >
              فارسی
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-4 py-1.5 text-xs font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap ${
                lang === 'en'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-white/75 hover:text-white hover:bg-white/10'
              }`}
            >
              English
            </button>
          </div>

          <p className="text-xs font-medium tracking-wide text-white/75 mb-1">
            {hero.sideHustleTag}
          </p>
          <p className="text-xs text-white/60 mb-3 max-w-xl">{hero.draftNotice}</p>

          <h1 className="font-display text-[clamp(2.15rem,4.4vw,3.9rem)] font-extrabold text-white leading-[1.08] tracking-tight max-w-4xl text-balance mb-3">
            {hero.headlineBold}
            <span className="font-serif-accent italic font-normal text-white/95">
              {hero.headlineSerif}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mb-5">
            {hero.subheadline}
          </p>

          <div className="flex flex-col items-center gap-1.5">
            <Button
              variant="white"
              size="lg"
              onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
              className="gap-2.5"
            >
              <span>{hero.primaryCta}</span>
              <ArrowIcon
                size={17}
                className="transition-transform duration-150 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
              />
            </Button>
            <p className="text-xs text-white/65 mt-0.5">{hero.helperNote}</p>
          </div>
        </div>

        {/* Crisp Architectural Topic Explorer Panel */}
        <div
          style={{ animationDelay: '90ms' }}
          className="max-w-3xl mx-auto animate-enter-up bg-black/65 backdrop-blur-md border border-white/15 rounded-panel p-4 sm:p-5 shadow-elevated"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center p-1.5 bg-white/[0.07] border-[1.5px] border-white/25 rounded-control focus-within:border-white focus-within:bg-white/[0.11] transition-all duration-200"
          >
            <Search
              size={16}
              className="ltr:ml-3.5 rtl:mr-3.5 text-white/65 shrink-0"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={hero.searchPlaceholder}
              aria-label={hero.searchPlaceholder}
              className="flex-1 h-11 px-3 bg-transparent text-sm text-white placeholder:text-white/55 focus:outline-none min-w-0"
            />
            <button
              type="submit"
              className="h-11 px-6 bg-white text-ink border-[1.5px] border-white hover:bg-neutral-100 hover:-translate-y-[0.5px] text-xs font-semibold transition-all duration-200 shrink-0 rounded-[4px] shadow-sm active:translate-y-0 active:scale-[0.985]"
            >
              {hero.searchButtonLabel}
            </button>
          </form>

          {/* Suggested Topic Selector Strip */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pb-4 border-b border-white/15">
            <span className="text-xs text-white/60 font-medium">{hero.suggestedLabel}</span>
            {hero.topics.map((topic) => {
              const isSelected = activeTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setSelectedTopicId(topic.id);
                  }}
                  className={`px-4 py-1.5 text-xs font-medium rounded-control border-[1.5px] transition-all duration-200 whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-ink border-white shadow-sm'
                      : 'bg-white/[0.04] text-white/80 border-white/20 hover:border-white/60 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  {topic.chip}
                </button>
              );
            })}
          </div>

          {/* Live Answer Output */}
          <div
            key={activeTopic.id}
            className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-hint-swap"
          >
            <div className="text-start min-w-0">
              <p className="text-xs font-semibold text-white/60 mb-1">{activeTopic.chip}</p>
              <h2 className="font-display text-base sm:text-lg font-bold text-white mb-1">
                {activeTopic.title}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">{activeTopic.answer}</p>
            </div>
            <a
              href={activeTopic.targetHref}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] border-[1.5px] border-white/30 rounded-control text-xs font-semibold text-white hover:bg-white hover:text-ink hover:border-white hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0 self-start sm:self-center"
            >
              <span>{activeTopic.ctaLabel}</span>
              <ArrowIcon
                size={14}
                className="transition-transform duration-200 group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom Architectural Reality Bar echoing Squarespace hero foundation strip */}
        <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center md:text-start">
          {heroPillars.map((pillar) => (
            <div key={pillar.label} className="space-y-0.5">
              <p className="text-xs text-white/55 font-medium">{pillar.label}</p>
              <p className="text-sm font-semibold text-white/95">{pillar.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
