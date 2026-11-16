import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useApp } from '../context/AppContext';

interface PillIndicatorState {
  offsetStart: number;
  width: number;
  visible: boolean;
}

const Header: React.FC = () => {
  const { lang, setLang, t, openBookingModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('');
  const [indicator, setIndicator] = useState<PillIndicatorState>({
    offsetStart: 0,
    width: 100,
    visible: false,
  });

  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = t.nav.map((item) => item.href.replace(/^#/, ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        const firstVisible = sectionIds.find((id) => visibleIds.has(id));
        if (firstVisible) {
          setActiveHref(`#${firstVisible}`);
        } else if (window.scrollY < 160) {
          setActiveHref('');
        }
      },
      {
        rootMargin: '-22% 0px -55% 0px',
        threshold: 0.01,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [t.nav]);

  const updateIndicator = useCallback(() => {
    const navEl = navRef.current;
    const activeEl = activeHref ? linkRefs.current[activeHref] : null;
    if (!navEl || !activeEl) {
      setIndicator((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();

    if (navRect.width === 0 || linkRect.width === 0) {
      return;
    }

    const offsetStart =
      lang === 'fa'
        ? navRect.x + navRect.width - (linkRect.x + linkRect.width)
        : linkRect.x - navRect.x;

    setIndicator({
      offsetStart,
      width: linkRect.width,
      visible: true,
    });
  }, [activeHref, lang]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    let cancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) updateIndicator();
      });
    }
    return () => {
      cancelled = true;
      window.removeEventListener('resize', updateIndicator);
    };
  }, [updateIndicator]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleOpenReview = () => {
    setMobileMenuOpen(false);
    openBookingModal({ packageId: 'advisory-audit' });
  };

  return (
    <>
      {/* Scroll progress bar driven by CSS scroll() timeline (hidden fallback when unsupported) */}
      <div aria-hidden="true" className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none">
        <div className="h-full w-full bg-accent scroll-progress-bar" />
      </div>

      <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 pb-2 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-page mx-auto rounded-full border transition-[transform,background-color,border-color,box-shadow] duration-250 ease-out-expo motion-reduce:transition-none ${
            isScrolled
              ? 'scale-[0.985] motion-reduce:scale-100 bg-surface/90 backdrop-blur-md border-border shadow-soft'
              : 'scale-100 bg-surface-paper/90 backdrop-blur-sm border-border/80 shadow-subtle'
          }`}
        >
          <div className="px-3 sm:px-5 py-1.5 flex items-center justify-between gap-2 lg:gap-6">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#top"
              dir="ltr"
              className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-ink hover:text-accent transition-colors whitespace-nowrap shrink-0 min-h-[44px] inline-flex items-center px-2 rounded-full"
            >
              Sona.
            </a>

            {/* Zone 2: Single-Line Navigation Links with Sliding Active Pill */}
            <nav
              ref={navRef}
              aria-label={lang === 'fa' ? 'ناوبری اصلی' : 'Primary navigation'}
              className="relative hidden md:flex items-center gap-0.5 lg:gap-1"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 start-0 h-full w-[100px] rounded-full bg-accent-soft border border-accent/20 transition-[transform,opacity] duration-250 ease-out-expo motion-reduce:transition-none rtl:[transform-origin:100%_50%] ltr:[transform-origin:0%_50%]"
                style={{
                  opacity: indicator.visible ? 1 : 0,
                  transform: `translate3d(${
                    lang === 'fa' ? -indicator.offsetStart : indicator.offsetStart
                  }px, 0, 0) scaleX(${indicator.width / 100})`,
                }}
              />

              {t.nav.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    ref={(el) => {
                      linkRefs.current[item.href] = el;
                    }}
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setActiveHref(item.href)}
                    className={`relative z-10 text-xs lg:text-sm font-medium min-h-[44px] px-2.5 lg:px-3.5 rounded-full inline-flex items-center transition-colors duration-250 whitespace-nowrap shrink-0 ${
                      isActive ? 'text-accent font-semibold' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Language Switch + Primary Action + Mobile Trigger */}
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="hidden md:inline-flex items-center gap-0.5 p-0.5 border border-border rounded-full bg-surface-warm"
                role="group"
                aria-label={t.footer.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => setLang('fa')}
                  aria-pressed={lang === 'fa'}
                  className={`min-h-[44px] px-2.5 lg:px-3 text-xs font-semibold rounded-full transition-colors duration-250 whitespace-nowrap ${
                    lang === 'fa'
                      ? 'bg-ink text-white shadow-subtle'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  فارسی
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`min-h-[44px] px-2.5 lg:px-3 text-xs font-semibold rounded-full transition-colors duration-250 whitespace-nowrap ${
                    lang === 'en'
                      ? 'bg-ink text-white shadow-subtle'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  English
                </button>
              </div>

              <Button
                variant="accent"
                size="sm"
                onClick={handleOpenReview}
                className="hidden md:inline-flex rounded-full px-3.5 lg:px-5 text-xs lg:text-sm font-semibold whitespace-nowrap shrink-0"
              >
                {t.header.cta}
              </Button>

              <button
                type="button"
                aria-label={mobileMenuOpen ? t.header.menuCloseLabel : t.header.menuOpenLabel}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-sheet"
                className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-border bg-surface text-ink hover:border-ink/40 hover:bg-surface-warm transition-colors"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Sheet Menu with Staggered Link Entrance */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-sheet"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'fa' ? 'منوی ناوبری' : 'Navigation menu'}
          className="fixed inset-0 z-[70] md:hidden bg-surface-paper text-ink flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <a
                href="#top"
                dir="ltr"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-extrabold tracking-tight text-ink min-h-[44px] inline-flex items-center px-1"
              >
                Sona.
              </a>
              <button
                type="button"
                aria-label={t.header.menuCloseLabel}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-border bg-surface text-ink hover:bg-surface-warm transition-colors"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label={lang === 'fa' ? 'ناوبری موبایل' : 'Mobile navigation'}
              className="mt-6 flex flex-col divide-y divide-border"
            >
              {t.nav.map((item, index) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{ animationDelay: `${index * 55}ms` }}
                    onClick={() => {
                      setActiveHref(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`animate-enter-up min-h-[52px] flex items-center justify-between py-3 text-lg font-display font-bold transition-colors ${
                      isActive ? 'text-accent' : 'text-ink hover:text-accent'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div
            style={{ animationDelay: `${t.nav.length * 55}ms` }}
            className="animate-enter-up pt-6 border-t border-border space-y-4"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-ink-muted">{t.footer.languageLabel}</span>
              <div
                className="inline-flex items-center gap-1 p-1 border border-border rounded-full bg-surface-warm"
                role="group"
                aria-label={t.footer.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => setLang('fa')}
                  aria-pressed={lang === 'fa'}
                  className={`min-h-[44px] px-4 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                    lang === 'fa'
                      ? 'bg-ink text-white shadow-subtle'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  فارسی
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`min-h-[44px] px-4 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                    lang === 'en'
                      ? 'bg-ink text-white shadow-subtle'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <Button
              variant="accent"
              size="lg"
              onClick={handleOpenReview}
              className="w-full rounded-full"
            >
              {t.header.cta}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
