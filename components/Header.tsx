import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const { lang, setLang, t, openBookingModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenReview = () => {
    setMobileMenuOpen(false);
    openBookingModal({ packageId: 'advisory-audit' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-border py-3.5 text-ink'
          : 'bg-obsidian/70 backdrop-blur-md border-white/15 py-4 text-white'
      }`}
    >
      <div className="max-w-page mx-auto px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          dir="ltr"
          className={`font-display text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 ${
            isScrolled ? 'text-ink' : 'text-white'
          }`}
        >
          Sona.
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label={lang === 'fa' ? 'ناوبری اصلی' : 'Primary navigation'}
          className="hidden md:flex items-center gap-7"
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium py-1 border-b border-transparent transition-colors whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'text-ink-muted hover:text-ink hover:border-ink'
                  : 'text-white/80 hover:text-white hover:border-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Crisp Rectangular Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant={isScrolled ? 'primary' : 'white'}
            size="sm"
            onClick={handleOpenReview}
            className="hidden md:inline-flex px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0"
          >
            {t.header.cta}
          </Button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? t.header.menuCloseLabel : t.header.menuOpenLabel}
            aria-expanded={mobileMenuOpen}
            className={`md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-control border-[1.5px] transition-colors ${
              isScrolled
                ? 'text-ink border-border hover:border-ink/40 hover:bg-surface-muted'
                : 'text-white border-white/25 hover:border-white/60 hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white text-ink border-t border-b border-border shadow-elevated px-6 py-5 flex flex-col gap-4 z-50 animate-hint-swap">
          <nav className="flex flex-col divide-y divide-border">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-ink text-base font-medium py-3 hover:text-ink-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-ink-muted">{t.footer.languageLabel}</span>
            <div className="inline-flex gap-1 p-1 border-[1.5px] border-border rounded-control bg-surface-muted">
              <button
                type="button"
                onClick={() => setLang('fa')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-[4px] transition-all whitespace-nowrap ${
                  lang === 'fa' ? 'bg-ink text-white shadow-sm' : 'text-ink-muted hover:text-ink'
                }`}
              >
                فارسی
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-[4px] transition-all whitespace-nowrap ${
                  lang === 'en' ? 'bg-ink text-white shadow-sm' : 'text-ink-muted hover:text-ink'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={handleOpenReview}
            className="w-full py-3 text-sm font-semibold whitespace-nowrap"
          >
            {t.header.cta}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
