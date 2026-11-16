import React, { createContext, useContext, useEffect, useState } from 'react';
import { DOSSIER_CONTENT, DossierContent } from '../data/content';
import { ConsultationInquiry, Language } from '../types';

interface BookingModalState {
  isOpen: boolean;
  packageId: string;
}

interface AppContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: DossierContent;
  bookingModal: BookingModalState;
  openBookingModal: (options?: { packageId?: string }) => void;
  closeBookingModal: () => void;
  inquiries: ConsultationInquiry[];
  addInquiry: (inquiry: Omit<ConsultationInquiry, 'id' | 'createdAt' | 'lang'>) => ConsultationInquiry;
  clearInquiries: () => void;
  newsletterEmails: string[];
  subscribeNewsletter: (email: string) => 'success' | 'duplicate' | 'invalid';
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const STORAGE_LANG_KEY = 'sona_lang_v1';
const STORAGE_INQUIRIES_KEY = 'sona_inquiries_v2';
const STORAGE_NEWSLETTER_KEY = 'sona_newsletter_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LANG_KEY);
      return saved === 'en' || saved === 'fa' ? saved : 'fa';
    } catch {
      return 'fa';
    }
  });

  const [inquiries, setInquiries] = useState<ConsultationInquiry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_INQUIRIES_KEY);
      return raw ? (JSON.parse(raw) as ConsultationInquiry[]) : [];
    } catch {
      return [];
    }
  });

  const [newsletterEmails, setNewsletterEmails] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_NEWSLETTER_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });

  const [bookingModal, setBookingModal] = useState<BookingModalState>({
    isOpen: false,
    packageId: 'advisory-audit',
  });

  const t = DOSSIER_CONTENT[lang];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch {
      // Ignore storage quota errors
    }

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title = DOSSIER_CONTENT[lang].meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', DOSSIER_CONTENT[lang].meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', DOSSIER_CONTENT[lang].meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', DOSSIER_CONTENT[lang].meta.description);
    }
  }, [lang]);

  const setLang = (next: Language) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === 'fa' ? 'en' : 'fa'));

  const openBookingModal = (options?: { packageId?: string }) => {
    setBookingModal({
      isOpen: true,
      packageId: options?.packageId ?? 'advisory-audit',
    });
  };

  const closeBookingModal = () => {
    setBookingModal((prev) => ({ ...prev, isOpen: false }));
  };

  const addInquiry = (
    payload: Omit<ConsultationInquiry, 'id' | 'createdAt' | 'lang'>
  ): ConsultationInquiry => {
    const newEntry: ConsultationInquiry = {
      ...payload,
      id: `SONA-REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      lang,
    };
    setInquiries((prev) => {
      const updated = [newEntry, ...prev];
      try {
        localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
    return newEntry;
  };

  const clearInquiries = () => {
    setInquiries([]);
    try {
      localStorage.removeItem(STORAGE_INQUIRIES_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const subscribeNewsletter = (email: string): 'success' | 'duplicate' | 'invalid' => {
    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      return 'invalid';
    }
    if (newsletterEmails.includes(normalized)) {
      return 'duplicate';
    }
    setNewsletterEmails((prev) => {
      const updated = [normalized, ...prev];
      try {
        localStorage.setItem(STORAGE_NEWSLETTER_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
    return 'success';
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        bookingModal,
        openBookingModal,
        closeBookingModal,
        inquiries,
        addInquiry,
        clearInquiries,
        newsletterEmails,
        subscribeNewsletter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
};
