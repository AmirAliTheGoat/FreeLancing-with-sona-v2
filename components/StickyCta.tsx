import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { useApp } from '../context/AppContext';

const StickyCta: React.FC = () => {
  const { lang, t, bookingModal, openBookingModal } = useApp();
  const [heroVisible, setHeroVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

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

  const isShown = !heroVisible && !footerVisible && !bookingModal.isOpen;

  return (
    <div
      aria-hidden={!isShown}
      inert={!isShown ? true : undefined}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-surface/95 backdrop-blur-md border-t border-border shadow-float transition-[transform,opacity] duration-250 ease-out-expo motion-reduce:transition-none ${
        isShown
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <Button
        variant="accent"
        size="md"
        tabIndex={isShown ? 0 : -1}
        onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
        className="w-full rounded-full gap-2"
      >
        <span>{t.hero.primaryCta}</span>
        <ArrowIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
};

export default StickyCta;
