import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AlertCircle, Trash2, X } from 'lucide-react';
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

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const closingRef = useRef(false);

  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
  const [errorShakeKey, setErrorShakeKey] = useState(0);
  const [submittedReceipt, setSubmittedReceipt] = useState<ConsultationInquiry | null>(null);

  const finalizeClose = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    document.body.style.overflow = '';
    setIsRendered(false);
    setIsVisible(false);
    closingRef.current = false;
    closeBookingModal();

    const opener = openerRef.current;
    openerRef.current = null;
    if (opener && opener.isConnected) {
      requestAnimationFrame(() => opener.focus());
    }
  }, [closeBookingModal]);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsVisible(false);

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      finalizeClose();
      return;
    }

    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      finalizeClose();
    }, 240);
  }, [finalizeClose]);

  const prevOpenRef = useRef(false);

  useEffect(() => {
    if (bookingModal.isOpen && !prevOpenRef.current) {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      closingRef.current = false;

      if (!isRendered) {
        openerRef.current =
          document.activeElement instanceof HTMLElement ? document.activeElement : null;
      }

      setPackageId(bookingModal.packageId || 'advisory-audit');
      setSubmittedReceipt(null);
      setErrorMsg(null);
      setActiveTab('new');
      setIsRendered(true);
    } else if (!bookingModal.isOpen && prevOpenRef.current && isRendered && !closingRef.current) {
      requestClose();
    }
    prevOpenRef.current = bookingModal.isOpen;
  }, [bookingModal.isOpen, bookingModal.packageId, isRendered, requestClose]);

  useEffect(() => {
    if (!isRendered) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    }
  }, [isRendered]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
      document.body.style.overflow = '';
    };
  }, []);

  if (!isRendered) return null;

  const resolvePackageTitle = (id: string) =>
    PLACEHOLDER_PACKAGES.find((p) => p.id === id)?.title[lang] ??
    PLACEHOLDER_PACKAGES[3].title[lang];

  const triggerError = (msg: string) => {
    setErrorMsg(msg);
    setErrorShakeKey((k) => k + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (fullName.trim().length < 2) {
      triggerError(modal.errors.nameRequired);
      return;
    }
    if (contactHandle.trim().length < 3) {
      triggerError(modal.errors.contactRequired);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      triggerError(modal.errors.emailInvalid);
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

  const fieldClasses =
    'w-full min-h-[44px] px-3.5 rounded-control border border-border bg-surface-warm/60 text-sm text-ink placeholder:text-ink-muted/65 focus:bg-surface focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-[border-color,background-color,box-shadow] duration-250 motion-reduce:transition-none';

  return (
    <dialog
      ref={dialogRef}
      data-visible={isVisible ? 'true' : 'false'}
      aria-modal="true"
      aria-labelledby="intake-modal-title"
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          requestClose();
        }
      }}
      className="sona-dialog"
    >
      <div className="sona-dialog-panel w-full sm:max-w-xl bg-surface rounded-t-panel rounded-b-none sm:rounded-panel border border-border shadow-float overflow-hidden flex flex-col max-h-[90dvh] sm:max-h-[88dvh]">
        {/* Mobile bottom-sheet pull handle */}
        <div aria-hidden="true" className="sm:hidden flex justify-center pt-2.5 pb-1 bg-surface">
          <span className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-border flex items-start justify-between gap-4">
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
            onClick={requestClose}
            aria-label={modal.closeCta}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-transparent text-ink-muted hover:text-ink hover:border-border hover:bg-surface-warm transition-colors shrink-0 motion-reduce:transition-none"
          >
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        {/* Pill Mode Switcher */}
        <div className="px-6 sm:px-8 py-3 border-b border-border bg-surface-paper">
          <div className="inline-flex gap-1 p-1 rounded-full bg-surface-warm border border-border">
            <button
              type="button"
              onClick={() => setActiveTab('new')}
              className={`min-h-[40px] px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-250 whitespace-nowrap motion-reduce:transition-none ${
                activeTab === 'new'
                  ? 'bg-accent text-white shadow-subtle'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {modal.tabNew}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('saved')}
              className={`min-h-[40px] px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-250 whitespace-nowrap tabular-nums motion-reduce:transition-none ${
                activeTab === 'saved'
                  ? 'bg-accent text-white shadow-subtle'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {modal.tabSaved} ({inquiries.length})
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain">
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
                        className="p-4 rounded-card bg-surface-paper border border-border text-sm space-y-1.5"
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
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-medium text-red-700 hover:text-red-800 px-4 py-2 rounded-control border border-transparent hover:border-red-200 hover:bg-red-50 transition-colors motion-reduce:transition-none"
                    >
                      <Trash2 size={14} aria-hidden="true" />
                      <span>{modal.clearSaved}</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : submittedReceipt ? (
            <div className="text-center py-4 space-y-5 animate-enter-up">
              <div className="w-14 h-14 rounded-full bg-accent-soft text-accent border border-accent/25 flex items-center justify-center mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" className="animate-svg-check" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">{modal.confirmation.heading}</h3>
                <p className="text-sm text-ink-muted leading-relaxed text-pretty">
                  {modal.confirmation.message}
                </p>
              </div>
              <div className="p-4 rounded-card bg-surface-paper border border-border text-sm space-y-2 text-start">
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
                  className="flex-1 rounded-full"
                >
                  {modal.confirmation.newRequestCta}
                </Button>
                <Button variant="accent" onClick={requestClose} className="flex-1 rounded-full">
                  {modal.closeCta}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {errorMsg && (
                <div
                  key={errorShakeKey}
                  role="alert"
                  className="animate-shake p-3.5 rounded-card bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm flex items-center gap-2.5"
                >
                  <AlertCircle size={17} className="shrink-0 text-red-700" aria-hidden="true" />
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
                    className={fieldClasses}
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
                    className={fieldClasses}
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
                  className={fieldClasses}
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
                    className={fieldClasses}
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
                    className={fieldClasses}
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
                    className={fieldClasses}
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
                    className={fieldClasses}
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
                  className="w-full p-3.5 rounded-control border border-border bg-surface-warm/60 text-sm text-ink placeholder:text-ink-muted/65 focus:bg-surface focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-[border-color,background-color,box-shadow] duration-250 resize-none motion-reduce:transition-none"
                />
              </div>

              <Button type="submit" variant="accent" size="md" className="w-full mt-2 rounded-full">
                {modal.submitCta}
              </Button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default ConsultationModal;
