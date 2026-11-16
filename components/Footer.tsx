import React, { useEffect, useState } from 'react';
import { AlertCircle, ArrowUp, CheckCircle2, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS, PLACEHOLDER_PROFILE } from '../data/placeholders';

const Footer: React.FC = () => {
  const { lang, setLang, t, subscribeNewsletter, bookingModal } = useApp();
  const footer = t.footer;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate' | 'invalid'>('idle');
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById('top');
    const footerEl = document.getElementById('site-footer');
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setHeroVisible(entries[0].isIntersecting);
        }
      },
      { threshold: 0.08 }
    );

    const footerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setFooterVisible(entries[0].isIntersecting);
        }
      },
      { threshold: 0.04 }
    );

    if (heroEl) heroObserver.observe(heroEl);
    if (footerEl) footerObserver.observe(footerEl);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const result = subscribeNewsletter(email);
    setStatus(result);
    if (result === 'success') setEmail('');
  };

  const backToTopVisible = !heroVisible && !bookingModal.isOpen;
  const stickyBarOffset = !heroVisible && !footerVisible;

  return (
    <>
      <footer
        id="site-footer"
        className="bg-obsidian text-white border-t border-white/10 pt-16 pb-24"
      >
        <div className="max-w-page mx-auto px-6 lg:px-8">
          {/* Newsletter Block */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/15 pb-12 mb-12">
            <div className="max-w-lg">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                {footer.newsletterTitle}
              </h2>
              <p className="text-white/70 text-sm text-pretty">{footer.newsletterSubtitle}</p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[430px]">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2.5"
                noValidate
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder={footer.emailPlaceholder}
                  aria-label={footer.emailPlaceholder}
                  dir="ltr"
                  className="flex-1 min-h-[48px] bg-obsidian-card border border-white/20 rounded-control px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition-[border-color,box-shadow] duration-250 motion-reduce:transition-none"
                />
                <button
                  type="submit"
                  className="min-h-[48px] px-7 rounded-control bg-accent text-white border border-accent hover:bg-accent-hover hover:border-accent-hover text-sm font-semibold transition-colors duration-250 whitespace-nowrap shrink-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                  {footer.subscribeCta}
                </button>
              </form>

              {status === 'success' && (
                <p className="mt-2.5 text-xs text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="shrink-0" aria-hidden="true" />
                  <span>{footer.newsletterSuccess}</span>
                </p>
              )}
              {status === 'duplicate' && (
                <p className="mt-2.5 text-xs text-white/75 flex items-center gap-1.5">
                  <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
                  <span>{footer.newsletterDuplicate}</span>
                </p>
              )}
              {status === 'invalid' && (
                <p className="mt-2.5 text-xs text-amber-300 flex items-center gap-1.5">
                  <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
                  <span>{footer.newsletterInvalid}</span>
                </p>
              )}
            </div>
          </div>

          {/* Multi-Column Architectural Footer */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-card overflow-hidden border border-white/20 bg-obsidian-card flex items-center justify-center shrink-0">
                  {!avatarFailed ? (
                    <img
                      src={EDITORIAL_ASSETS.sonaPortrait}
                      alt="Sona"
                      referrerPolicy="no-referrer"
                      onError={() => setAvatarFailed(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="font-bold text-white">S</span>
                  )}
                </div>
                <div>
                  <span dir="ltr" className="inline-block font-display text-lg font-bold text-white">
                    Sona.
                  </span>
                  <span className="block text-xs text-white/65">{t.hero.sideHustleTag}</span>
                </div>
              </div>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md text-pretty">
                {footer.colophonNote}
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-white/60 mb-3">
                {footer.linksTitle}
              </h3>
              <ul className="space-y-0.5 text-sm text-white/85">
                {t.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="footer-link-underline min-h-[44px] min-w-[44px] py-2 hover:text-white transition-colors motion-reduce:transition-none"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-2.5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-white/60 mb-4">
                {footer.contactTitle}
              </h3>
              <p className="text-sm text-white/90 font-medium" dir="ltr">
                {PLACEHOLDER_PROFILE.contactEmail}
              </p>
              <p className="text-sm text-white/90 font-medium" dir="ltr">
                {PLACEHOLDER_PROFILE.contactTelegram}
              </p>
              <p className="text-xs text-white/65">{PLACEHOLDER_PROFILE.locationLabel[lang]}</p>
            </div>
          </div>

          {/* Bottom Legal & Language Selector */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/65 text-xs pt-6 border-t border-white/15">
            <p>{footer.copyright}</p>

            <div className="flex items-center gap-2.5">
              <Globe size={14} aria-hidden="true" />
              <div
                className="inline-flex items-center gap-1 p-1 rounded-full bg-obsidian-card border border-white/20"
                role="group"
                aria-label={footer.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => setLang('fa')}
                  aria-pressed={lang === 'fa'}
                  className={`min-h-[44px] px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-250 whitespace-nowrap motion-reduce:transition-none ${
                    lang === 'fa'
                      ? 'bg-accent text-white shadow-subtle'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  فارسی
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`min-h-[44px] px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-250 whitespace-nowrap motion-reduce:transition-none ${
                    lang === 'en'
                      ? 'bg-accent text-white shadow-subtle'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top control appearing once user scrolls past Hero */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Sona."
        aria-hidden={!backToTopVisible}
        tabIndex={backToTopVisible ? 0 : -1}
        className={`fixed bottom-6 end-4 md:end-6 z-30 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-surface text-ink border border-border shadow-lift hover:border-accent hover:text-accent transition-[transform,opacity,border-color,color] duration-250 ease-out-expo motion-reduce:transition-none ${
          backToTopVisible
            ? stickyBarOffset
              ? 'opacity-100 -translate-y-16 md:translate-y-0'
              : 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </>
  );
};

export default Footer;
