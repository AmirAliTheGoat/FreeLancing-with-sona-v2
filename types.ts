export type Language = 'fa' | 'en';

export type RecordCategory = 'all' | 'upwork' | 'fiverr' | 'advisory';

export interface NavItem {
  label: string;
  href: string;
}

export interface PlaceholderPackage {
  id: string;
  isPlaceholderPrice: boolean;
  title: Record<Language, string>;
  scopeSummary: Record<Language, string>;
  priceDisplay: Record<Language, string>;
  deliveryDisplay: Record<Language, string>;
  included: Record<Language, string[]>;
  excluded: Record<Language, string[]>;
}

export interface PlaceholderCaseRecord {
  id: string;
  category: Exclude<RecordCategory, 'all'>;
  isPlaceholder: true;
  slotCode: string;
  platform: Record<Language, string>;
  specialtyPlaceholder: Record<Language, string>;
  timeframePlaceholder: Record<Language, string>;
  outcomePlaceholder: Record<Language, string>;
  notesPlaceholder: Record<Language, string>;
}

export interface PlaceholderReferenceSlot {
  id: string;
  isPlaceholder: true;
  slotCode: string;
  authorPlaceholder: Record<Language, string>;
  rolePlaceholder: Record<Language, string>;
  datePlaceholder: Record<Language, string>;
  quotePlaceholder: Record<Language, string>;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string[];
  keywords: string[];
}

export interface ConsultationInquiry {
  id: string;
  fullName: string;
  contactHandle: string;
  email: string;
  packageId: string;
  packageTitle: string;
  craftArea: 'dev' | 'design' | 'writing' | 'other';
  englishLevel: 'basic' | 'working' | 'fluent';
  platformFocus: 'upwork' | 'fiverr' | 'freelancer' | 'paypal';
  notes: string;
  createdAt: string;
  lang: Language;
}
