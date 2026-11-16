import heroWorkspace from '../src/assets/images/hero_studio_workspace_1794757387149.jpg';
import {
  PlaceholderCaseRecord,
  PlaceholderPackage,
  PlaceholderReferenceSlot,
} from '../types';

/**
 * ============================================================================
 * SINGLE EDITABLE PLACEHOLDER DATA MODULE
 * Replace bracketed [PLACEHOLDER] values below with verified real-world data
 * before taking the website online.
 * ============================================================================
 */

export const EDITORIAL_ASSETS = {
  sonaPortrait: '/assets/aistudio/photo_2026-11-15_09-40-20_d8c49589.jpg',
  heroWorkspace,
};

export const PLACEHOLDER_PROFILE = {
  isPlaceholder: true,
  yearsActive: {
    fa: '[جای‌گذاری: سابقه فعالیت واقعی، مثلاً ۶ سال فعالیت در آپورک]',
    en: '[PLACEHOLDER: Verified years active & platform history]',
  },
  verifiedProfileNote: {
    fa: '[جای‌گذاری: لینک پروفایل تاییدشده یا آمار واقعی شخصی سونا]',
    en: '[PLACEHOLDER: Verified public profile link or personal track record]',
  },
  contactEmail: '[PLACEHOLDER_EMAIL: info@yourdomain.com]',
  contactTelegram: '[PLACEHOLDER_TELEGRAM: @your_handle]',
  locationLabel: {
    fa: '[جای‌گذاری: شهر / منطقه ارائه مشاوره]',
    en: '[PLACEHOLDER: Base city / online advisory region]',
  },
};

export const PLACEHOLDER_INFRA_BENCHMARKS = {
  isPlaceholder: true,
  monthlyVpsUsdRange: '$12 – $22',
  monthlyProxyUsdRange: '$10 – $25',
  virtualSimNote: {
    fa: '[جای‌گذاری: هزینه دقیق تمدید شماره یا سیم‌کارت در ۲۰۲۶]',
    en: '[PLACEHOLDER: Exact recurring SIM / virtual number upkeep in 2026]',
  },
};

export const PLACEHOLDER_PACKAGES: PlaceholderPackage[] = [
  {
    id: 'upwork-setup',
    isPlaceholderPrice: true,
    title: {
      fa: 'مسیر ۱ · راه‌اندازی و انطباق آپورک + پی‌پل',
      en: 'Track 01 · Upwork & PayPal Infrastructure Setup',
    },
    scopeSummary: {
      fa: 'مناسب متخصصانی که قصد ارسال پروپوزال مستقیم در آپورک را دارند.',
      en: 'For specialists with a sellable skill ready to pitch clients directly on Upwork.',
    },
    priceDisplay: {
      fa: '[قیمت نهایی: تکمیل قبل از انتشار]',
      en: '[TBD — Final Setup Fee]',
    },
    deliveryDisplay: {
      fa: '[زمان تحویل: مثلاً ۷ تا ۱۴ روز کاری]',
      en: '[TBD — Est. Provisioning Window]',
    },
    included: {
      fa: [
        'آماده‌سازی زیرساخت سرور مجازی (VPS) و تنظیم آی‌پی مسکونی اولیه',
        'راهنمایی و تامین پیش‌نیازهای احراز هویت (KYC) متناسب با لوکیشن هدف',
        'راه‌اندازی حساب پی‌پل شخصی و کارت متصل (با راهنمای محدودیت‌های اولیه)',
        'بازبینی ساختار پروفایل و ۳ نمونه پروپوزال واقعی',
      ],
      en: [
        'Dedicated VPS provisioning & clean residential IP onboarding setup',
        'UK-aligned identity & proof-of-address KYC compliance preparation',
        'Personal PayPal & linked card setup (with new-account hold briefing)',
        'Profile structure review and 3 tailored proposal critiques',
      ],
    },
    excluded: {
      fa: [
        'تضمین گرفتن پروژه یا درآمد در ماه اول',
        'هزینه تمدید ماهانه VPS، پروکسی مسکونی و خرید کانکت (Connects)',
      ],
      en: [
        'Guaranteed first-month clients or fixed income promises',
        'Ongoing monthly VPS, residential proxy, and Upwork Connects fees',
      ],
    },
  },
  {
    id: 'fiverr-setup',
    isPlaceholderPrice: true,
    title: {
      fa: 'مسیر ۲ · راه‌اندازی فایور + پی‌پل',
      en: 'Track 02 · Fiverr Seller & PayPal Setup',
    },
    scopeSummary: {
      fa: 'مناسب افرادی که خدمات بسته‌بندی‌شده (طراحی، محتوا، ترجمه، فنی) ارائه می‌دهند.',
      en: 'For practitioners offering productized services (design, localization, dev).',
    },
    priceDisplay: {
      fa: '[قیمت نهایی: تکمیل قبل از انتشار]',
      en: '[TBD — Final Setup Fee]',
    },
    deliveryDisplay: {
      fa: '[زمان تحویل: مثلاً ۷ تا ۱۴ روز کاری]',
      en: '[TBD — Est. Provisioning Window]',
    },
    included: {
      fa: [
        'راه‌اندازی زیرساخت اتصال امن (VPS + آی‌پی مسکونی وریفای)',
        'تنظیم و احراز حساب فروشنده فایور مطابق استانداردهای جاری',
        'راه‌اندازی حساب پی‌پل شخصی و کارت بانکی مرتبط',
        'بررسی ساختار ۳ گیگ اولیه و قیمت‌گذاری واقعی بازار',
      ],
      en: [
        'Dedicated VPS & clean residential IP configuration for seller KYC',
        'Fiverr seller profile provisioning & verification walkthrough',
        'Personal PayPal & linked verification card setup',
        'Structural review of 3 initial service gigs and market pricing',
      ],
    },
    excluded: {
      fa: [
        'تضمین رتبه‌گیری فوری در جستجوی فایور یا سفارش تضمینی',
        'تمدید ماهانه سرور، پروکسی و کارمزدهای برداشت پی‌پل/صرافی',
      ],
      en: [
        'Guaranteed search ranking or immediate inbound buyer orders',
        'Monthly VPS/proxy renewals and exchange conversion spreads',
      ],
    },
  },
  {
    id: 'combined-setup',
    isPlaceholderPrice: true,
    title: {
      fa: 'مسیر ۳ · راه‌اندازی ترکیبی (آپورک + فایور + پی‌پل)',
      en: 'Track 03 · Combined Dual-Platform Setup',
    },
    scopeSummary: {
      fa: 'پوشش هم‌زمان هر دو پلتفرم در یک محیط کنترل‌شده برای کاهش وابستگی به یک کانال.',
      en: 'Provisioning both marketplaces inside one controlled network environment.',
    },
    priceDisplay: {
      fa: '[قیمت نهایی: تکمیل قبل از انتشار]',
      en: '[TBD — Final Setup Fee]',
    },
    deliveryDisplay: {
      fa: '[زمان تحویل: مثلاً ۱۰ تا ۲۱ روز کاری]',
      en: '[TBD — Est. Provisioning Window]',
    },
    included: {
      fa: [
        'تمامی موارد مسیر ۱ و ۲ در یک زیرساخت یکپارچه با آی‌پی و هویت هماهنگ',
        'چک‌لیست عملی پیشگیری از تداخل نشست‌ها و خطاهای امنیتی مرورگر',
        'دو جلسه ارزیابی پروفایل، نرخ‌گذاری و استراتژی ارتباط با کارفرما',
      ],
      en: [
        'Full provisioning for Upwork, Fiverr & PayPal under aligned credentials',
        'Operational checklist for browser profile isolation & IP hygiene',
        'Two 1-on-1 profile, pricing, and client-communication review sessions',
      ],
    },
    excluded: {
      fa: [
        'انجام پروژه به جای شما یا مدیریت اکانت پس از تحویل',
        'هزینه‌های جاری ماهانه سرور، پروکسی و تبدیل ارز',
      ],
      en: [
        'Doing client outreach or managing active projects on your behalf',
        'Recurring monthly VPS, proxy bandwidth, or exchange fees',
      ],
    },
  },
  {
    id: 'advisory-audit',
    isPlaceholderPrice: true,
    title: {
      fa: 'مسیر ۴ · جلسه ارزیابی آمادگی و بازبینی اکانت',
      en: 'Track 04 · Readiness Audit & Advisory Session',
    },
    scopeSummary: {
      fa: 'برای افرادی که پیش از خرید زیرساخت می‌خواهند وضعیت مهارت، زبان و ریسک خود را بسنجند.',
      en: 'For applicants auditing their skill readiness, English, or existing account risks first.',
    },
    priceDisplay: {
      fa: '[قیمت جلسه / یا رایگان پیش از ثبت‌نام]',
      en: '[TBD — Single Session Fee or Free Screening]',
    },
    deliveryDisplay: {
      fa: '[زمان هماهنگی: ۴۸ ساعت کاری]',
      en: '[TBD — Scheduled within 48h]',
    },
    included: {
      fa: [
        'بررسی صادقانه اینکه با مهارت و زبان فعلی آیا ورود به بازار خارجی منطقی است یا خیر',
        'ارزیابی ریسک اکانت‌های قبلی (در صورت داشتن اکانت مسدود یا نیمه‌کاره)',
        'برآورد هزینه‌های واقعی ۳ تا ۶ ماه اول بر اساس شرایط شخصی شما',
      ],
      en: [
        'Candid assessment of whether your current skill & English are market-ready',
        'Risk review of any previously restricted or half-configured accounts',
        'Personalized 3–6 month carrying-cost and runway estimate',
      ],
    },
    excluded: {
      fa: [
        'ارائه مدرک، VPS یا اکانت آماده در این سطح',
      ],
      en: [
        'Provisioning of identity credentials, VPS, or platform accounts',
      ],
    },
  },
];

export const PLACEHOLDER_CASE_RECORDS: PlaceholderCaseRecord[] = [
  {
    id: 'case-slot-01',
    category: 'upwork',
    isPlaceholder: true,
    slotCode: 'CASE-SLOT-01',
    platform: { fa: 'آپورک (Upwork)', en: 'Upwork' },
    specialtyPlaceholder: {
      fa: '[جای‌گذاری: تخصص واقعی، مثلاً توسعه‌دهنده فرانت‌اند با ۴ سال سابقه]',
      en: '[PLACEHOLDER: Verified client specialty & prior experience level]',
    },
    timeframePlaceholder: {
      fa: '[جای‌گذاری: بازه زمانی واقعی تا اولین قرارداد، مثلاً ۱۰ هفته]',
      en: '[PLACEHOLDER: Actual time from launch to first paid contract]',
    },
    outcomePlaceholder: {
      fa: '[جای‌گذاری: عدد درآمد تاییدشده یا وضعیت فعلی اکانت]',
      en: '[PLACEHOLDER: Verified net outcome or current account status]',
    },
    notesPlaceholder: {
      fa: 'این جایگاه برای ثبت یک پرونده واقعی و قابل استناد در نظر گرفته شده است (بدون عددسازی تبلیغاتی).',
      en: 'Reserved for a verified client dossier entry showing real timeline, friction faced, and net outcome.',
    },
  },
  {
    id: 'case-slot-02',
    category: 'fiverr',
    isPlaceholder: true,
    slotCode: 'CASE-SLOT-02',
    platform: { fa: 'فایور (Fiverr)', en: 'Fiverr' },
    specialtyPlaceholder: {
      fa: '[جای‌گذاری: تخصص واقعی، مثلاً طراحی رابط کاربری یا موشن]',
      en: '[PLACEHOLDER: Verified seller niche & portfolio readiness]',
    },
    timeframePlaceholder: {
      fa: '[جای‌گذاری: تعداد سفارش و مدت زمان واقعی تا تسویه اول]',
      en: '[PLACEHOLDER: Actual days to first order & first PayPal clearance]',
    },
    outcomePlaceholder: {
      fa: '[جای‌گذاری: خالص دریافتی پس از کسر ۲۰٪ کارمزد فایور و هزینه سرور]',
      en: '[PLACEHOLDER: Verified net payout after 20% Fiverr fee & infra cost]',
    },
    notesPlaceholder: {
      fa: 'درج مستندات واقعی همراه با چالش‌های طی‌شده (از جمله دوره انتظار تسویه ۱۴ روزه فایور).',
      en: 'Slot reserved for real seller logs including Fiverr 14-day clearing delays and actual conversion.',
    },
  },
  {
    id: 'case-slot-03',
    category: 'advisory',
    isPlaceholder: true,
    slotCode: 'CASE-SLOT-03',
    platform: { fa: 'مشاوره و رفع ریسک', en: 'Advisory & Recovery' },
    specialtyPlaceholder: {
      fa: '[جای‌گذاری: موضوع پرونده، مثلاً بازبینی اکانت یا تغییر زیرساخت]',
      en: '[PLACEHOLDER: Real advisory case — e.g. infrastructure migration]',
    },
    timeframePlaceholder: {
      fa: '[جای‌گذاری: تاریخ و مدت پیگیری واقعی]',
      en: '[PLACEHOLDER: Actual advisory timeline & resolution]',
    },
    outcomePlaceholder: {
      fa: '[جای‌گذاری: نتیجه واقعی پرونده (موفق یا تصمیم به توقف)]',
      en: '[PLACEHOLDER: Honest documented outcome]',
    },
    notesPlaceholder: {
      fa: 'جایگاه ثبت تجربه واقعی مشاوره—شامل مواردی که تصمیم بر شروع نکردن یا تغییر مسیر بوده است.',
      en: 'Reserved for transparent advisory outcomes, including cases advised to wait before spending.',
    },
  },
];

export const PLACEHOLDER_REFERENCES: PlaceholderReferenceSlot[] = [
  {
    id: 'ref-slot-01',
    isPlaceholder: true,
    slotCode: 'REF-01',
    authorPlaceholder: {
      fa: '[جای‌گذاری: نام یا حروف اول واقعی مراجع]',
      en: '[PLACEHOLDER: Verified Client Name / Initials]',
    },
    rolePlaceholder: {
      fa: '[جای‌گذاری: رشته تخصصی و پلتفرم]',
      en: '[PLACEHOLDER: Craft & Primary Platform]',
    },
    datePlaceholder: {
      fa: '[تاریخ همکاری واقعی]',
      en: '[TBD — Date]',
    },
    quotePlaceholder: {
      fa: '[این بخش برای نقل‌قول بدون ویرایش و واقعی یکی از مراجعین قبلی محفوظ است تا پیش از انتشار جایگزین شود.]',
      en: '[Reserved for an unedited, verified client statement before going live.]',
    },
  },
  {
    id: 'ref-slot-02',
    isPlaceholder: true,
    slotCode: 'REF-02',
    authorPlaceholder: {
      fa: '[جای‌گذاری: نام یا حروف اول واقعی مراجع]',
      en: '[PLACEHOLDER: Verified Client Name / Initials]',
    },
    rolePlaceholder: {
      fa: '[جای‌گذاری: رشته تخصصی و پلتفرم]',
      en: '[PLACEHOLDER: Craft & Primary Platform]',
    },
    datePlaceholder: {
      fa: '[تاریخ همکاری واقعی]',
      en: '[TBD — Date]',
    },
    quotePlaceholder: {
      fa: '[این بخش برای بازخورد واقعی درباره روند وریفای، چالش‌های اولیه و پشتیبانی محفوظ است.]',
      en: '[Reserved for real client feedback covering onboarding friction and support.]',
    },
  },
];
