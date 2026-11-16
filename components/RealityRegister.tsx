import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Reveal } from './Reveal';
import { useApp } from '../context/AppContext';

const RealityRegister: React.FC = () => {
  const { t, openBookingModal } = useApp();
  const reg = t.realityRegister;
  const [activeTab, setActiveTab] = useState<'kyc' | 'costs' | 'payouts'>('costs');

  const items =
    activeTab === 'kyc'
      ? reg.kycItems
      : activeTab === 'costs'
      ? reg.costItems
      : reg.payoutItems;

  return (
    <section
      id="reality"
      className="py-16 md:py-24 bg-surface-muted text-ink border-b border-border overflow-hidden"
    >
      <div className="max-w-page mx-auto px-6 lg:px-8">
        {/* Squarespace Asymmetric Split Header ("Everything you need on one platform") */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 pb-8 border-b border-border">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                {reg.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-[1.1] text-balance">
                {reg.headingBold}
                <span className="font-serif-accent italic font-normal">{reg.headingSerif}</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                {reg.summary}
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => openBookingModal({ packageId: 'advisory-audit' })}
              >
                {reg.ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Clean Architectural Segmented Filter Bar */}
        <div className="mb-8">
          <div
            className="inline-flex flex-wrap items-center gap-1 border-[1.5px] border-border bg-white rounded-control p-1 shadow-subtle"
            role="tablist"
          >
            {reg.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink hover:bg-surface-muted'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Crisp Gallery Cards */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-hint-swap"
        >
          {items.map((item, idx) => (
            <article
              key={`${activeTab}-${idx}`}
              className="bg-white rounded-panel border border-border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div>
                <p className="font-display text-lg sm:text-xl font-extrabold text-ink tabular-nums pb-4 mb-5 border-b border-border">
                  {item.metric}
                </p>
                <h3 className="font-display text-lg font-bold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealityRegister;
