import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';
import { EDITORIAL_ASSETS } from '../data/placeholders';

const ClosingBanner: React.FC = () => {
  const { lang, t, openBookingModal } = useApp();
  const banner = t.closingBanner;
  const [imgError, setImgError] = useState(false);

  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative py-16 md:py-24 bg-accent text-white border-b border-accent-hover overflow-hidden"
      id="closing-cta"
    >
      {/* Ambient Accent Mesh Gradient (transform-only drift, static under reduced motion) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-mesh-drift absolute -top-24 -inset-x-16 h-[32rem] opacity-70"
          style={{
            background:
              'radial-gradient(46% 56% at 16% 24%, rgba(255, 255, 255, 0.16) 0%, transparent 70%), radial-gradient(44% 52% at 86% 78%, rgba(10, 10, 10, 0.34) 0%, transparent 72%), radial-gradient(50% 45% at 50% 50%, rgba(234, 244, 242, 0.1) 0%, transparent 74%)',
          }}
        />
        <div className="bg-editorial-grain absolute inset-0 opacity-[0.045]" />
      </div>

      <div className="relative z-10 max-w-page mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-fluid-h1 font-extrabold text-white leading-[1.14] mb-5 text-balance">
                {banner.headingBold}
                <span className="font-serif-accent italic font-normal text-accent-soft">
                  {banner.headingSerif}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-xl text-pretty">
                {banner.subtitle}
              </p>
              <Button
                variant="white"
                size="lg"
                onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
                className="gap-2.5 rounded-full"
              >
                <span>{banner.cta}</span>
                <ArrowIcon
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-150 motion-reduce:transition-none group-hover:ltr:translate-x-0.5 group-hover:rtl:-translate-x-0.5"
                />
              </Button>
            </Reveal>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <Reveal delayMs={100}>
              <div className="w-60 sm:w-72 aspect-square rounded-panel overflow-hidden bg-obsidian-card border border-white/25 shadow-float">
                {!imgError ? (
                  <img
                    src={EDITORIAL_ASSETS.sonaPortrait}
                    alt={t.straightTalk.portraitName}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-[50%_22%]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display font-bold text-white/75 text-2xl">
                    Sona
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingBanner;
