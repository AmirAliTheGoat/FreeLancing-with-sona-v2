import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS, PLACEHOLDER_PROFILE } from '../data/placeholders';

const Footer: React.FC = () => {
  const { lang, setLang, t, subscribeNewsletter } = useApp();
  const footer = t.footer;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate' | 'invalid'>('idle');
  const [avatarFailed, setAvatarFailed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const result = subscribeNewsletter(email);
    setStatus(result);
    if (result === 'success') setEmail('');
  };

  return (
    <footer className="bg-black text-white border-t border-white/15 pt-16 pb-12">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        {/* Newsletter Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/15 pb-12 mb-12">
          <div className="max-w-lg">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">
              {footer.newsletterTitle}
            </h2>
            <p className="text-white/65 text-sm">{footer.newsletterSubtitle}</p>
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
                className="flex-1 h-12 bg-obsidian-card border-[1.5px] border-white/25 rounded-control px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 rounded-control bg-white text-ink border-[1.5px] border-white hover:bg-transparent hover:text-white hover:-translate-y-0.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 active:translate-y-0 active:scale-[0.985]"
              >
                {footer.subscribeCta}
              </button>
            </form>

            {status === 'success' && (
              <p className="mt-2.5 text-xs text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>{footer.newsletterSuccess}</span>
              </p>
            )}
            {status === 'duplicate' && (
              <p className="mt-2.5 text-xs text-white/70 flex items-center gap-1.5">
                <AlertCircle size={14} className="shrink-0" />
                <span>{footer.newsletterDuplicate}</span>
              </p>
            )}
            {status === 'invalid' && (
              <p className="mt-2.5 text-xs text-amber-300 flex items-center gap-1.5">
                <AlertCircle size={14} className="shrink-0" />
                <span>{footer.newsletterInvalid}</span>
              </p>
            )}
          </div>
        </div>

        {/* Squarespace Multi-Column Architectural Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-card overflow-hidden border-[1.5px] border-white/25 bg-obsidian-card flex items-center justify-center shrink-0">
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
                <span className="block text-xs text-white/60">
                  {lang === 'fa' ? 'پروژه جانبی · ۲۰۲۶ / ۱۴۰۵' : 'Independent Side-Hustle · 2026'}
                </span>
              </div>
            </div>

            <p className="text-white/65 text-xs sm:text-sm leading-relaxed max-w-md">
              {footer.colophonNote}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-white/55 mb-4">
              {footer.linksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <h3 className="font-bold text-xs uppercase tracking-wider text-white/55 mb-4">
              {footer.contactTitle}
            </h3>
            <p className="text-sm text-white/90 font-medium" dir="ltr">
              {PLACEHOLDER_PROFILE.contactEmail}
            </p>
            <p className="text-sm text-white/90 font-medium" dir="ltr">
              {PLACEHOLDER_PROFILE.contactTelegram}
            </p>
            <p className="text-xs text-white/60">{PLACEHOLDER_PROFILE.locationLabel[lang]}</p>
          </div>
        </div>

        {/* Bottom Legal & Language Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-xs pt-6 border-t border-white/15">
          <p>{footer.copyright}</p>

          <div className="flex items-center gap-2.5">
            <Globe size={14} aria-hidden="true" />
            <div className="inline-flex gap-1 p-1 rounded-control bg-obsidian-card border-[1.5px] border-white/25">
              <button
                type="button"
                onClick={() => setLang('fa')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap ${
                  lang === 'fa'
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                فارسی
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
