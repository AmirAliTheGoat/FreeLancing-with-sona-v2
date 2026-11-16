import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Trash2, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useApp } from '../context/AppContext';
import { PLACEHOLDER_PACKAGES } from '../data/placeholders';
import { ConsultationInquiry } from '../types';

const ConsultationModal: React.FC = () => {
  const {
    lang,
    t,
    bookingModal,
    closeBookingModal,
    inquiries,
    addInquiry,
    clearInquiries,
  } = useApp();

  const modal = t.modal;

  const [activeTab, setActiveTab] = useState<'new' | 'saved'>('new');
  const [fullName, setFullName] = useState('');
  const [contactHandle, setContactHandle] = useState('');
  const [email, setEmail] = useState('');
  const [packageId, setPackageId] = useState(bookingModal.packageId);
  const [craftArea, setCraftArea] = useState<'dev' | 'design' | 'writing' | 'other'>('dev');
  const [englishLevel, setEnglishLevel] = useState<'basic' | 'working' | 'fluent'>('working');
  const [platformFocus, setPlatformFocus] = useState<
    'upwork' | 'fiverr' | 'freelancer' | 'paypal'
  >('upwork');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedReceipt, setSubmittedReceipt] = useState<ConsultationInquiry | null>(null);

  useEffect(() => {
    if (bookingModal.isOpen) {
      setPackageId(bookingModal.packageId || 'advisory-audit');
      setSubmittedReceipt(null);
      setErrorMsg(null);
      setActiveTab('new');
    }
  }, [bookingModal.isOpen, bookingModal.packageId]);

  useEffect(() => {
    if (!bookingModal.isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBookingModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookingModal.isOpen, closeBookingModal]);

  if (!bookingModal.isOpen) return null;

  const resolvePackageTitle = (id: string) =>
    PLACEHOLDER_PACKAGES.find((p) => p.id === id)?.title[lang] ??
    PLACEHOLDER_PACKAGES[3].title[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (fullName.trim().length < 2) {
      setErrorMsg(modal.errors.nameRequired);
      return;
    }
    if (contactHandle.trim().length < 3) {
      setErrorMsg(modal.errors.contactRequired);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg(modal.errors.emailInvalid);
      return;
    }

    const receipt = addInquiry({
      fullName: fullName.trim(),
      contactHandle: contactHandle.trim(),
      email: email.trim(),
      packageId,
      packageTitle: resolvePackageTitle(packageId),
      craftArea,
      englishLevel,
      platformFocus,
      notes: notes.trim(),
    });

    setSubmittedReceipt(receipt);
    setFullName('');
    setContactHandle('');
    setEmail('');
    setNotes('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="intake-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBookingModal();
      }}
    >
      <div className="w-full max-w-xl bg-white rounded-panel border border-border shadow-elevated overflow-hidden my-auto">
        {/* Header */}
        <div className="p-6 sm:px-8 border-b border-border flex items-start justify-between gap-4">
          <div>
            <h2 id="intake-modal-title" className="font-display text-xl font-bold text-ink">
              {modal.title}
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
              {modal.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={closeBookingModal}
            aria-label={modal.closeCta}
            className="p-2 rounded-control border-[1.5px] border-transparent text-ink-muted hover:text-ink hover:border-border hover:bg-surface-muted transition-all shrink-0"
          >
            <X size={19} />
          </button>
        </div>

        {/* Clean Architectural Mode Switcher */}
        <div className="px-6 sm:px-8 py-3 border-b border-border bg-surface-muted/60">
          <div className="inline-flex gap-1 p-1 rounded-control bg-surface-muted border-[1.5px] border-border">
            <button
              type="button"
              onClick={() => setActiveTab('new')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap ${
                activeTab === 'new'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {modal.tabNew}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-[4px] transition-all duration-200 whitespace-nowrap tabular-nums ${
                activeTab === 'saved'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {modal.tabSaved} ({inquiries.length})
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {activeTab === 'saved' ? (
            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <p className="text-sm text-ink-muted text-center py-8">{modal.savedEmpty}</p>
              ) : (
                <>
                  <div className="space-y-3">
                    {inquiries.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-card bg-surface-muted border border-border text-sm space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-ink">{item.packageTitle}</span>
                          <span className="text-xs font-semibold text-accent tabular-nums">
                            {item.id}
                          </span>
                        </div>
                        <p className="text-xs text-ink-muted">
                          {item.fullName} · {item.contactHandle} · {item.email}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={clearInquiries}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-red-700 hover:text-red-800 px-3.5 py-2 rounded-control border-[1.5px] border-transparent hover:border-red-200 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={14} />
                      <span>{modal.clearSaved}</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : submittedReceipt ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-12 h-12 rounded-full bg-surface-muted text-ink border border-border flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">{modal.confirmation.heading}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {modal.confirmation.message}
                </p>
              </div>
              <div className="p-4 rounded-card bg-surface-muted border border-border text-sm space-y-2 text-start">
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">{modal.confirmation.refLabel}</span>
                  <span className="font-bold text-ink tabular-nums">{submittedReceipt.id}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink-muted shrink-0">{modal.confirmation.packageLabel}</span>
                  <span className="font-semibold text-accent text-end">
                    {submittedReceipt.packageTitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setSubmittedReceipt(null)}
                  className="flex-1 py-2.5 text-sm"
                >
                  {modal.confirmation.newRequestCta}
                </Button>
                <Button variant="primary" onClick={closeBookingModal} className="flex-1 py-2.5 text-sm">
                  {modal.closeCta}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 rounded-card bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm flex items-center gap-2.5"
                >
                  <AlertCircle size={17} className="shrink-0 text-red-700" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="intake-name" className="block text-xs font-semibold text-ink mb-1.5">
                    {modal.fullNameLabel}
                  </label>
                  <input
                    id="intake-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={modal.fullNamePlaceholder}
                    className="w-full h-11 px-3.5 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="intake-contact" className="block text-xs font-semibold text-ink mb-1.5">
                    {modal.contactLabel}
                  </label>
                  <input
                    id="intake-contact"
                    type="text"
                    required
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    placeholder={modal.contactPlaceholder}
                    className="w-full h-11 px-3.5 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="intake-email" className="block text-xs font-semibold text-ink mb-1.5">
                  {modal.emailLabel}
                </label>
                <input
                  id="intake-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={modal.emailPlaceholder}
                  dir="ltr"
                  className="w-full h-11 px-3.5 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="intake-craft" className="block text-xs font-semibold text-ink mb-1.5">
                    {modal.craftLabel}
                  </label>
                  <select
                    id="intake-craft"
                    value={craftArea}
                    onChange={(e) =>
                      setCraftArea(e.target.value as 'dev' | 'design' | 'writing' | 'other')
                    }
                    className="w-full h-11 px-3 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                  >
                    {modal.crafts.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="intake-english" className="block text-xs font-semibold text-ink mb-1.5">
                    {modal.englishLabel}
                  </label>
                  <select
                    id="intake-english"
                    value={englishLevel}
                    onChange={(e) =>
                      setEnglishLevel(e.target.value as 'basic' | 'working' | 'fluent')
                    }
                    className="w-full h-11 px-3 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                  >
                    {modal.englishLevels.map((lvl) => (
                      <option key={lvl.id} value={lvl.id}>
                        {lvl.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="intake-package" className="block text-xs font-semibold text-ink mb-1.5">
                    {modal.packageLabel}
                  </label>
                  <select
                    id="intake-package"
                    value={packageId}
                    onChange={(e) => setPackageId(e.target.value)}
                    className="w-full h-11 px-3 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                  >
                    {PLACEHOLDER_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.title[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="intake-platform" className="block text-xs font-semibold text-ink mb-1.5">
                    {modal.platformLabel}
                  </label>
                  <select
                    id="intake-platform"
                    value={platformFocus}
                    onChange={(e) =>
                      setPlatformFocus(
                        e.target.value as 'upwork' | 'fiverr' | 'freelancer' | 'paypal'
                      )
                    }
                    className="w-full h-11 px-3 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors"
                  >
                    {modal.platforms.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="intake-notes" className="block text-xs font-semibold text-ink mb-1.5">
                  {modal.notesLabel}
                </label>
                <textarea
                  id="intake-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={modal.notesPlaceholder}
                  className="w-full p-3.5 rounded-control border-[1.5px] border-border bg-surface-muted/60 text-sm text-ink focus:bg-white focus:outline-none focus:border-ink transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full mt-2">
                {modal.submitCta}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
