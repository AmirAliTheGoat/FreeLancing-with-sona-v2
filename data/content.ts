import { FaqItem, Language, NavItem } from '../types';

export interface DossierContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  header: {
    cta: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
  };
  hero: {
    sideHustleTag: string;
    draftNotice: string;
    headlineBold: string;
    headlineSerif: string;
    subheadline: string;
    searchPlaceholder: string;
    searchButtonLabel: string;
    suggestedLabel: string;
    topics: {
      id: string;
      chip: string;
      keywords: string[];
      title: string;
      answer: string;
      ctaLabel: string;
      targetHref: string;
    }[];
    orText: string;
    helperNote: string;
    primaryCta: string;
  };
  straightTalk: {
    kicker: string;
    headingBold: string;
    headingSerif: string;
    summary: string;
    ctaLabel: string;
    portraitName: string;
    portraitRole: string;
    cards: { num: string; tag: string; title: string; line: string }[];
  };
  realityRegister: {
    kicker: string;
    headingBold: string;
    headingSerif: string;
    summary: string;
    ctaLabel: string;
    tabs: { id: 'kyc' | 'costs' | 'payouts'; label: string }[];
    kycItems: { metric: string; title: string; detail: string }[];
    costItems: { metric: string; title: string; detail: string }[];
    payoutItems: { metric: string; title: string; detail: string }[];
  };
  readinessAndPackages: {
    kicker: string;
    headingBold: string;
    headingSerif: string;
    summary: string;
    checkerTitle: string;
    checkerSubtitle: string;
    checks: { id: string; label: string }[];
    readyMessage: string;
    partialMessage: string;
    checkerCta: string;
    tracksHeading: string;
    tracksIntro: string;
    placeholderBadge: string;
    includedLabel: string;
    excludedToggle: string;
    selectCta: string;
  };
  fieldRecords: {
    kicker: string;
    headingBold: string;
    headingSerif: string;
    intro: string;
    placeholderTag: string;
    filters: { id: 'all' | 'upwork' | 'fiverr' | 'advisory'; label: string }[];
    specialtyLabel: string;
    timeframeLabel: string;
    outcomeLabel: string;
    referencesHeading: string;
    referencesSubheading: string;
    ecosystemStripLabel: string;
  };
  closingBanner: {
    headingBold: string;
    headingSerif: string;
    subtitle: string;
    cta: string;
  };
  faqSection: {
    kicker: string;
    headingBold: string;
    headingSerif: string;
    searchPlaceholder: string;
    clearSearch: string;
    emptyTitle: string;
    emptyReset: string;
    items: FaqItem[];
  };
  footer: {
    newsletterTitle: string;
    newsletterSubtitle: string;
    emailPlaceholder: string;
    subscribeCta: string;
    newsletterSuccess: string;
    newsletterDuplicate: string;
    newsletterInvalid: string;
    colophonNote: string;
    linksTitle: string;
    contactTitle: string;
    languageLabel: string;
    copyright: string;
  };
  modal: {
    title: string;
    subtitle: string;
    tabNew: string;
    tabSaved: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    packageLabel: string;
    craftLabel: string;
    crafts: { id: 'dev' | 'design' | 'writing' | 'other'; label: string }[];
    englishLabel: string;
    englishLevels: { id: 'basic' | 'working' | 'fluent'; label: string }[];
    platformLabel: string;
    platforms: { id: 'upwork' | 'fiverr' | 'freelancer' | 'paypal'; label: string }[];
    notesLabel: string;
    notesPlaceholder: string;
    submitCta: string;
    closeCta: string;
    errors: {
      nameRequired: string;
      contactRequired: string;
      emailInvalid: string;
    };
    confirmation: {
      heading: string;
      message: string;
      refLabel: string;
      packageLabel: string;
      newRequestCta: string;
    };
    savedEmpty: string;
    clearSaved: string;
  };
}

export const DOSSIER_CONTENT: Record<Language, DossierContent> = {
  fa: {
    meta: {
      title: 'Sona | راهنمای عملی فریلنسری بین‌المللی از ایران (۱۴۰۵)',
      description:
        'راهنمای عملی سونا برای کار در آپورک و فایور از ایران: عادت‌های امن، استفاده از ابزارهای هوش مصنوعی و برآورد هزینه‌های ماهانه.',
    },
    nav: [
      { label: 'نقشه راه', href: '#straight-talk' },
      { label: 'قوانین و هزینه', href: '#reality' },
      { label: 'مسیرها', href: '#packages' },
      { label: 'سوابق', href: '#records' },
      { label: 'سوالات', href: '#faq' },
    ],
    header: {
      cta: 'بررسی نقطه شروع',
      menuOpenLabel: 'باز کردن منو',
      menuCloseLabel: 'بستن منو',
    },
    hero: {
      sideHustleTag: 'راهنمای مستقل سونا · نسخه ۱۴۰۵ / ۲۰۲۶',
      draftNotice: 'جایگاه‌های قیمت و سوابق با برچسب [جای‌گذاری] پیش از انتشار با داده‌های واقعی تکمیل می‌شوند.',
      headlineBold: 'کسب درآمد دلاری از ایران ',
      headlineSerif: 'با زیرساخت و مسیری روشن',
      subheadline:
        'در این راهنمای عملی، عادت‌های امن کار با آپورک و فایور از ایران، هزینه‌های واقعی ماهانه و مسیر مناسب شروع خود را یکجا می‌بینید.',
      searchPlaceholder: 'جستجو کنید (مثلاً: انگلیسی با GPT، هزینه VPS، افراد غیرفنی، تسویه اول)...',
      searchButtonLabel: 'جستجو',
      suggestedLabel: 'پیشنهادها:',
      topics: [
        {
          id: 'ai-english',
          chip: 'انگلیسی با AI / GPT',
          keywords: ['انگلیسی', 'زبان', 'gpt', 'ai', 'هوش مصنوعی'],
          title: 'هوش مصنوعی سد زبان انگلیسی را کوچک‌تر کرده است',
          answer:
            'با ابزارهای هوش مصنوعی، نگارش پروپوزال و مکاتبه با کارفرما ساده‌تر شده است تا تمرکز اصلی روی مهارت شما بماند.',
          ctaLabel: 'نقشه‌راه را ببینید',
          targetHref: '#straight-talk',
        },
        {
          id: 'non-tech',
          chip: 'منحنی یادگیری غیرفنی‌ها',
          keywords: ['غیرفنی', 'فنی', 'vps', 'یادگیری', 'مرورگر'],
          title: 'کار با ابزارهای ریموت روالی یادگرفتنی دارد',
          answer:
            'استفاده از سرور اختصاصی و مرورگر مجزا در روزهای نخست تازه است، اما در چک‌لیست شروع به گام‌های ساده تقسیم شده است.',
          ctaLabel: 'چک‌لیست شروع را ببینید',
          targetHref: '#packages',
        },
        {
          id: 'monthly-costs',
          chip: 'هزینه‌های ماهانه VPS',
          keywords: ['هزینه', 'ماهانه', 'vps', 'پروکسی', 'کانکت'],
          title: 'سه هزینه ماهانه مشخص پیش روی شماست',
          answer:
            'پیش از شروع، هزینه سرور مجازی، آی‌پی مسکونی و اعتبار ارسال پیشنهاد آپورک را در نظر بگیرید؛ جزئیات هر مورد در بخش پایین آمده است.',
          ctaLabel: 'هزینه‌های ماهانه را ببینید',
          targetHref: '#reality',
        },
        {
          id: 'payout-hold',
          chip: 'تاخیر تسویه اول',
          keywords: ['پی پل', 'تسویه', 'بلوکه', 'برداشت', 'نقد'],
          title: 'درآمدهای نخست با یک دوره انتظار آزاد می‌شوند',
          answer:
            'حساب‌های تازه در پی‌پل و فایور در سفارش‌های اولیه دوره بررسی دارند و سپس سرعت تسویه بیشتر می‌شود؛ جزئیات آن در بخش پایین است.',
          ctaLabel: 'روال تسویه را ببینید',
          targetHref: '#reality',
        },
      ],
      orText: 'یا',
      helperNote: 'مهارت و شرایط فعلی خود را ثبت کنید تا مناسب‌ترین مسیر شروع را مشخص کنیم.',
      primaryCta: 'نقطه شروع را بسنجید',
    },
    straightTalk: {
      kicker: 'نقشه راه ۲۰۲۶',
      headingBold: 'چهار اصل کلیدی ',
      headingSerif: 'در مسیر ۱۴۰۵',
      summary:
        'هر یک از سربرگ‌های زیر را انتخاب کنید تا چهار اصل اساسی کار بین‌المللی از ایران را با جزئیات بخوانید.',
      ctaLabel: 'مسیرهای همکاری را ببینید',
      portraitName: 'سونا',
      portraitRole: 'پروژه جانبی · راه‌اندازی و همراهی عملی',
      cards: [
        {
          num: '۰۱',
          tag: 'مهارت و دسترسی',
          title: 'زیرساخت مسیر را می‌گشاید؛ مهارت قرارداد می‌بندد',
          line: 'حساب کاربری سالم تنها شرط ورود به پلتفرم است و گرفتن پروژه همچنان به کیفیت نمونه‌کار، تخصص واقعی و تحویل دقیق کار بستگی دارد.',
        },
        {
          num: '۰۲',
          tag: 'زبان و هوش مصنوعی',
          title: 'هوش مصنوعی سد زبان را کوچک‌تر می‌کند',
          line: 'ابزارهای هوش مصنوعی به شما کمک می‌کنند شرح پروژه‌ها را دقیق بفهمید، پروپوزال‌های حرفه‌ای بنویسید و پاسخ کارفرما را با دقت و روانی ویرایش کنید.',
        },
        {
          num: '۰۳',
          tag: 'روال فنی',
          title: 'عادت‌های ریموت کاملاً یادگرفتنی است',
          line: 'کار با سرور اختصاصی و مرورگر مجزا برای افراد غیرفنی در ابتدا تازه است، اما با پیروی از چک‌لیست روزانه به‌سرعت به عادتی ساده تبدیل می‌شود.',
        },
        {
          num: '۰۴',
          tag: 'زمان‌بندی واقعی',
          title: 'ساختن جریان کار معمولاً ۲ تا ۴ ماه زمان می‌برد',
          line: 'تنظیم دقیق پروفایل، آزمون و خطا در ارسال پیشنهادها و کسب نخستین امتیازها نیازمند پیگیری پیوسته در چند ماه اول است.',
        },
      ],
    },
    realityRegister: {
      kicker: 'شفافیت کاربردی',
      headingBold: 'امنیت حساب، هزینه‌ها و ',
      headingSerif: 'روال تسویه در یک نگاه',
      summary:
        'عادت‌های ضروری حفظ حساب، برآورد هزینه‌های ماهانه و زمان‌بندی تسویه را پیش از شروع بررسی کنید.',
      ctaLabel: 'نقطه شروع را بسنجید',
      tabs: [
        { id: 'kyc', label: 'عادت‌های امنیتی' },
        { id: 'costs', label: 'هزینه‌های ماهانه' },
        { id: 'payouts', label: 'کارمزد و تسویه' },
      ],
      kycItems: [
        {
          metric: 'عادت ۰۱',
          title: 'ورود انحصاری از طریق VPS',
          detail: 'اپلیکیشن موبایل را نصب نکنید و همواره تنها از داخل سرور اختصاصی خود وارد شوید تا نشانی آی‌پی شما ثابت بماند.',
        },
        {
          metric: 'طبیعی و رایج',
          title: 'احراز هویت در نخستین برداشت',
          detail: 'درخواست تایید مدرک در برداشت‌های اولیه روندی عادی در پلتفرم‌هاست و آماده‌سازی پیشین مدارک، عبور از این مرحله را هموار می‌کند.',
        },
        {
          metric: 'قانون پلتفرم',
          title: 'حفظ گفتگو و پرداخت درون پلتفرم',
          detail: 'تمامی پیام‌ها، توافق‌ها و پرداخت‌ها را برای حفظ امنیت حساب، در چارچوب خود آپورک یا فایور انجام دهید.',
        },
      ],
      costItems: [
        {
          metric: '$12–$22 / ماه',
          title: 'سرور مجازی اختصاصی (VPS)',
          detail: 'محیط کار ریموت اختصاصی شما با موقعیت ثابت و دسترسی پایدار در تمام طول ماه.',
        },
        {
          metric: '$10–$25 / ماه',
          title: 'آی‌پی مسکونی تمیز',
          detail: 'پایداری بیشتر هنگام ثبت‌نام، مراحل تایید هویت و راه‌اندازی سرویس‌ها در پلتفرم.',
        },
        {
          metric: '$15–$40 / ماه',
          title: 'کانکت آپورک و نگهداری شماره',
          detail: 'اعتبار ماهانه برای ارسال هدفمند پروپوزال در آپورک و حفظ خط برای دریافت کدهای تایید پیامکی.',
        },
      ],
      payoutItems: [
        {
          metric: '۱۴ تا ۲۱ روز',
          title: 'دوره انتظار تسویه سفارش‌های نخست',
          detail: 'حساب‌های تازه در پی‌پل و فایور معمولاً درآمد سفارش‌های اولیه را پیش از آزادسازی، حدود ۲ تا ۳ هفته در وضعیت بررسی نگه می‌دارند.',
        },
        {
          metric: '۱۰٪ تا ۲۰٪',
          title: 'کارمزد استاندارد پلتفرم‌ها',
          detail: 'فایور ۲۰ درصد و آپورک حدود ۱۰ درصد کارمزد کسر می‌کنند؛ هنگام نرخ‌گذاری این درصد را در قیمت خود لحاظ کنید.',
        },
        {
          metric: 'تبدیل صرافی',
          title: 'تبدیل و نقد کردن درآمد پی‌پل',
          detail: 'نقد کردن موجودی پی‌پل به تتر یا ریال از طریق صرافی‌های معتبر با کارمزد تبدیل انجام می‌شود و مسیرهای شفاف آن را با هم بررسی می‌کنیم.',
        },
      ],
    },
    readinessAndPackages: {
      kicker: 'آمادگی و مسیرها',
      headingBold: 'نقطه شروع خود را ',
      headingSerif: 'گام‌به‌گام انتخاب کنید',
      summary:
        'چک‌لیست آمادگی را بررسی کنید؛ موارد انتخاب‌نشده قابل یادگیری هستند و قیمت مسیرهای زیر پیش از انتشار نهایی تکمیل می‌شوند.',
      checkerTitle: 'چک‌لیست آمادگی شروع',
      checkerSubtitle: 'مواردی را که اکنون دارید انتخاب کنید؛ بقیه قابل یادگیری هستند:',
      checks: [
        { id: 'skill', label: 'مهارت قابل ارائه دارم (یا در حال تکمیل نمونه‌کار هستم)' },
        { id: 'ai_comm', label: 'برای نگارش پروپوزال و مکاتبه از ابزارهای AI مانند ChatGPT کمک می‌گیرم' },
        { id: 'runway', label: 'بودجه ماهانه VPS، آی‌پی و کانکت ماه‌های نخست را در نظر گرفته‌ام' },
        { id: 'learn_tech', label: 'آماده یادگیری روال کار با VPS و مرورگر امن هستم' },
      ],
      readyMessage: '۴ از ۴ آماده — آمادگی بسیار خوبی دارید؛ می‌توانیم مسیر مناسب شما را انتخاب کنیم.',
      partialMessage: 'موارد باقی‌مانده مانع شروع نیستند و گام‌به‌گام قابل یادگیری و آماده‌سازی‌اند.',
      checkerCta: 'نقطه شروع را بسنجید',
      tracksHeading: 'مسیرهای همکاری و حدود مسئولیت',
      tracksIntro: 'قیمت‌ها و زمان‌های داخل کروشه پیش از انتشار نهایی با ارقام واقعی تکمیل می‌شوند.',
      placeholderBadge: 'جای‌گذاری · تکمیل قبل از انتشار',
      includedLabel: 'شامل موارد زیر است',
      excludedToggle: 'بخش‌هایی که بر عهده شماست',
      selectCta: 'این مسیر را بررسی کنید',
    },
    fieldRecords: {
      kicker: 'پرونده‌ها و نظرهای واقعی',
      headingBold: 'چرا شفافیت ',
      headingSerif: 'بهتر از وعده است',
      intro: 'هیچ اسم یا عدد ساختگی اینجا نیست؛ این کارت‌ها برای ثبت نتایج واقعی پیش از انتشار آماده شده‌اند.',
      placeholderTag: 'در انتظار داده واقعی',
      filters: [
        { id: 'all', label: 'همه' },
        { id: 'upwork', label: 'آپورک' },
        { id: 'fiverr', label: 'فایور' },
        { id: 'advisory', label: 'مشاوره' },
      ],
      specialtyLabel: 'تخصص',
      timeframeLabel: 'زمان واقعی تا نتیجه',
      outcomeLabel: 'نتیجه ثبت‌شده',
      referencesHeading: 'جایگاه بازخورد مراجعین',
      referencesSubheading: 'آماده درج نظر واقعی پیش از انتشار',
      ecosystemStripLabel: 'پلتفرم‌ها و ابزارهای پوشش‌داده‌شده',
    },
    closingBanner: {
      headingBold: 'مسیر فریلنسری بین‌المللی را ',
      headingSerif: 'با آمادگی کامل آغاز کنید',
      subtitle: 'مهارت، ابزارهای هوش مصنوعی و شرایط فعلی خود را بررسی کنید تا گام نخست را با دیدی شفاف بردارید.',
      cta: 'نقطه شروع را بسنجید',
    },
    faqSection: {
      kicker: 'راهنمای شروع',
      headingBold: 'مسیر شروع و ',
      headingSerif: 'پرسش‌های متداول',
      searchPlaceholder: 'جستجو در پرسش‌ها (مثلاً: انگلیسی، غیرفنی، هزینه، تسویه)...',
      clearSearch: 'پاک کردن',
      emptyTitle: 'نتیجه‌ای پیدا نشد.',
      emptyReset: 'نمایش همه',
      items: [
        {
          id: 'english-ai',
          question: 'آیا بدون تسلط کامل به زبان انگلیسی هم می‌توانم کار کنم؟',
          answer: [
            'بله. ابزارهای هوش مصنوعی مانند ChatGPT سد زبان را کوچک‌تر کرده‌اند و به شما کمک می‌کنند شرح پروژه‌ها را دقیق‌تر بفهمید، پروپوزال بنویسید و مکاتبه حرفه‌ای‌تری با کارفرما داشته باشید.',
          ],
          keywords: ['انگلیسی', 'زبان', 'gpt', 'هوش مصنوعی', 'مکاتبه'],
        },
        {
          id: 'non-tech-curve',
          question: 'آیا یادگیری روال کار با VPS برای افراد غیرفنی دشوار است؟',
          answer: [
            'اگر تاکنون با سرور ریموت و مرورگر مجزا کار نکرده‌اید، در ابتدا نیازمند کمی تمرین است؛ اما این روند کاملاً یادگرفتنی است و با چک‌لیست مرحله‌به‌مرحله به یک عادت روزانه ساده تبدیل می‌شود.',
          ],
          keywords: ['فنی', 'غیرفنی', 'vps', 'یادگیری', 'سخت'],
        },
        {
          id: 'timeline',
          question: 'معمولاً چقدر زمان می‌برد تا نخستین پروژه ثبت شود؟',
          answer: [
            'به‌طور معمول ۲ تا ۴ ماه بازه‌ای واقع‌بینانه برای تنظیم پروفایل، ارسال منظم پیشنهادها و رقابت برای پروژه‌های نخست است که بسته به مهارت و پیگیری شما متفاوت خواهد بود.',
          ],
          keywords: ['زمان', 'ماه اول', 'پروژه', 'تضمین', 'درآمد'],
        },
        {
          id: 'ongoing-costs',
          question: 'هزینه‌های جاری ماهانه شامل چه مواردی است؟',
          answer: [
            'هزینه‌های مستمر شامل تمدید سرور مجازی (VPS)، آی‌پی مسکونی، اعتبار ارسال پیشنهاد (Connects) در آپورک، نگهداری شماره فعال و کارمزد تبدیل صرافی است که برآورد آن‌ها در بخش هزینه‌های ماهانه آمده است.',
          ],
          keywords: ['هزینه', 'ماهانه', 'vps', 'کانکت', 'تمدید'],
        },
        {
          id: 'paypal-holds',
          question: 'درآمد سفارش‌های نخست چه زمانی آزاد می‌شود؟',
          answer: [
            'حساب‌های تازه در پی‌پل و فایور معمولاً در سفارش‌های اولیه یک دوره انتظار برای تایید دارند و پس از شکل‌گیری سابقه تراکنش، سرعت آزادسازی افزایش می‌یابد؛ جزئیات زمانی در بخش کارمزد و تسویه درج شده است.',
          ],
          keywords: ['پی پل', 'نقد', 'بلوکه', 'hold', 'برداشت'],
        },
      ],
    },
    footer: {
      newsletterTitle: 'یادداشت‌های کوتاه قوانین و روال کار',
      newsletterSubtitle: 'هر زمان تغییرات مهمی در روال احراز هویت یا ابزارهای کار پیش بیاید، خلاصه آن را ارسال می‌کنیم.',
      emailPlaceholder: 'ایمیل خود را وارد کنید...',
      subscribeCta: 'ثبت عضویت',
      newsletterSuccess: 'ایمیل شما ثبت شد.',
      newsletterDuplicate: 'این ایمیل قبلاً ثبت شده است.',
      newsletterInvalid: 'لطفاً یک ایمیل معتبر وارد کنید.',
      colophonNote: 'راهنمای مستقل سونا · اطلاعات داخل کروشه پیش از آنلاین شدن نهایی با داده‌های واقعی پر می‌شود.',
      linksTitle: 'بخش‌های صفحه',
      contactTitle: 'راه‌های تماس (Placeholder)',
      languageLabel: 'زبان',
      copyright: '© ۱۴۰۵ سونا',
    },
    modal: {
      title: 'بررسی نقطه شروع و گفتگو با سونا',
      subtitle: 'وضعیت فعلی مهارت و تجربه‌تان را بگویید تا ببینیم بهترین مسیر شروع برایتان چیست.',
      tabNew: 'درخواست جدید',
      tabSaved: 'درخواست‌های ثبت‌شده',
      fullNameLabel: 'نام و نام خانوادگی',
      fullNamePlaceholder: 'نام و نام خانوادگی',
      contactLabel: 'تلگرام، واتساپ یا شماره تماس',
      contactPlaceholder: '@handle یا شماره',
      emailLabel: 'نشانی ایمیل',
      emailPlaceholder: 'name@example.com',
      packageLabel: 'مسیر مورد نظر',
      craftLabel: 'تخصص اصلی شما',
      crafts: [
        { id: 'dev', label: 'برنامه‌نویسی / فنی / دیتا' },
        { id: 'design', label: 'طراحی / UI-UX / تدوین' },
        { id: 'writing', label: 'تولید محتوا / ترجمه / سئو' },
        { id: 'other', label: 'سایر مهارت‌ها' },
      ],
      englishLabel: 'سطح مکاتبه و استفاده از AI',
      englishLevels: [
        { id: 'basic', label: 'کل مکاتبه و پیشنهادها را با کمک AI / GPT انجام می‌دهم' },
        { id: 'working', label: 'تسلط متوسط بر مکاتبه + کمک از AI' },
        { id: 'fluent', label: 'مسلط به مکاتبه و تماس مستقیم' },
      ],
      platformLabel: 'پلتفرم مورد نظر',
      platforms: [
        { id: 'upwork', label: 'آپورک' },
        { id: 'fiverr', label: 'فایور' },
        { id: 'freelancer', label: 'فریلنسر' },
        { id: 'paypal', label: 'فقط پی‌پل' },
      ],
      notesLabel: 'توضیح کوتاه درباره مهارت یا پرسش شما',
      notesPlaceholder: 'مثلاً چند وقت است کار می‌کنید یا برای بخش فنی سوالی دارید...',
      submitCta: 'ارسال درخواست',
      closeCta: 'بستن',
      errors: {
        nameRequired: 'نام خود را وارد کنید.',
        contactRequired: 'تلگرام، واتساپ یا شماره تماس لازم است.',
        emailInvalid: 'ایمیل معتبر نیست.',
      },
      confirmation: {
        heading: 'ثبت شد',
        message: 'درخواست شما ذخیره شد. در گفتگو، مهارت، نیاز فنی و مناسب‌ترین مسیر شروع را با هم بررسی می‌کنیم.',
        refLabel: 'کد پیگیری',
        packageLabel: 'مسیر انتخابی',
        newRequestCta: 'ثبت درخواست جدید',
      },
      savedEmpty: 'هنوز درخواستی ثبت نکرده‌اید.',
      clearSaved: 'پاک کردن همه',
    },
  },
  en: {
    meta: {
      title: 'Sona | Practical Guide to Global Freelancing from Iran (2026)',
      description:
        'A practical guide to working on Upwork and Fiverr from Iran: account safety habits, AI-assisted communication, learnable remote workflows, and monthly costs.',
    },
    nav: [
      { label: 'Playbook', href: '#straight-talk' },
      { label: 'Habits & Bills', href: '#reality' },
      { label: 'Tracks', href: '#packages' },
      { label: 'Proof Slots', href: '#records' },
      { label: 'FAQ', href: '#faq' },
    ],
    header: {
      cta: 'Check Fit',
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
    },
    hero: {
      sideHustleTag: 'Sona · Independent Freelancing Guide · 2026',
      draftNotice: 'Bracketed [PLACEHOLDER] slots will be replaced with verified live numbers before launch.',
      headlineBold: 'Build global freelance income ',
      headlineSerif: 'with a clear setup from Iran',
      subheadline:
        'Explore the practical playbook for working on Upwork and Fiverr from Iran—from daily account safety and real monthly costs to choosing your starting track.',
      searchPlaceholder: 'Try "English with GPT", "monthly VPS costs", "non-tech curve", or "PayPal holds"...',
      searchButtonLabel: 'Search',
      suggestedLabel: 'Suggested:',
      topics: [
        {
          id: 'ai-english',
          chip: 'English with AI / GPT',
          keywords: ['english', 'ai', 'gpt', 'language', 'chat'],
          title: 'AI makes English a smaller barrier',
          answer:
            'Modern AI tools help polish proposals and client replies so your core skill takes center stage in the 2026 playbook below.',
          ctaLabel: 'Read the 2026 Playbook',
          targetHref: '#straight-talk',
        },
        {
          id: 'non-tech',
          chip: 'Non-Tech Learning Curve',
          keywords: ['non-tech', 'tech', 'vps', 'learn', 'curve', 'browser'],
          title: 'Remote tools follow a learnable routine',
          answer:
            'Working inside a dedicated VPS and isolated browser feels new at first, and our starting checklist breaks it into simple steps.',
          ctaLabel: 'Open Starting Checklist',
          targetHref: '#packages',
        },
        {
          id: 'monthly-costs',
          chip: 'Monthly VPS Costs',
          keywords: ['cost', 'monthly', 'vps', 'proxy', 'connects', 'bill'],
          title: 'Three predictable bills to budget monthly',
          answer:
            'Before starting, account for dedicated VPS hosting, a clean residential IP, and Upwork Connects—each range is listed below.',
          ctaLabel: 'View Monthly Bills',
          targetHref: '#reality',
        },
        {
          id: 'payout-hold',
          chip: 'First Payout Hold',
          keywords: ['paypal', 'hold', 'payout', 'withdraw', 'cash', 'fee'],
          title: 'First payouts clear after an initial hold',
          answer:
            'New PayPal and Fiverr accounts hold early earnings while account trust settles—see the clearing window and fee notes below.',
          ctaLabel: 'Check Cashout Rules',
          targetHref: '#reality',
        },
      ],
      orText: 'or',
      helperNote: 'Share your skill and setup experience to map out the clearest next step.',
      primaryCta: 'Check Your Starting Point',
    },
    straightTalk: {
      kicker: '2026 Playbook',
      headingBold: 'Four realities behind ',
      headingSerif: 'the 2026 playbook',
      summary:
        'Select any tab below to review the four core principles that govern international freelancing from Iran.',
      ctaLabel: 'Explore Setup Tracks',
      portraitName: 'Sona',
      portraitRole: 'Side-hustle · Practical setup & guidance',
      cards: [
        {
          num: '01',
          tag: 'Access & Craft',
          title: 'Access opens doors; craft wins work',
          line: 'A clean account only gets you onto the platform—securing paid work still depends on real craft, strong portfolio samples, and reliable delivery.',
        },
        {
          num: '02',
          tag: 'AI & English',
          title: 'AI makes English a smaller barrier',
          line: 'You can use AI tools to structure proposals, translate briefs, and polish client replies so language fluency does not stall your start.',
        },
        {
          num: '03',
          tag: 'Remote Routine',
          title: 'Remote habits are straightforward to learn',
          line: 'Operating inside a dedicated VPS and isolated browser can feel unfamiliar for non-technical specialists at first, yet a clear daily checklist turns it into a simple routine step by step.',
        },
        {
          num: '04',
          tag: 'Realistic Runway',
          title: 'Momentum typically takes 2–4 months',
          line: 'Optimizing your profile, testing proposals, and building your first client reviews require steady weekly effort before consistent income takes shape.',
        },
      ],
    },
    realityRegister: {
      kicker: 'Practical Transparency',
      headingBold: 'Account safety, bills, ',
      headingSerif: 'and payouts in one place',
      summary:
        'Review the daily safety habits, recurring monthly expenses, and payout timing you should factor in before starting.',
      ctaLabel: 'Check Your Starting Point',
      tabs: [
        { id: 'kyc', label: 'Safety Habits' },
        { id: 'costs', label: 'Monthly Bills' },
        { id: 'payouts', label: 'Fees & Cashout' },
      ],
      kycItems: [
        {
          metric: 'Habit 01',
          title: 'Log In Strictly via Your VPS',
          detail: 'Avoid mobile apps and sign in exclusively from your dedicated VPS so your IP location stays consistent.',
        },
        {
          metric: 'Normal Step',
          title: 'First-Payout ID Verification',
          detail: 'Platforms routinely request identity checks around early withdrawals, so preparing clean documents ahead of time keeps the step smooth.',
        },
        {
          metric: 'Platform Rule',
          title: 'Keep Chats & Payments On-Platform',
          detail: 'Keep client messaging, agreements, and payments inside Upwork or Fiverr to stay compliant with platform terms.',
        },
      ],
      costItems: [
        {
          metric: '$12–$22 / mo',
          title: 'Dedicated VPS Hosting',
          detail: 'Your consistent remote workspace with a steady location, renewed on a monthly cycle.',
        },
        {
          metric: '$10–$25 / mo',
          title: 'Clean Residential IP Proxy',
          detail: 'Added connection stability during account onboarding, verification checks, and gig publishing.',
        },
        {
          metric: '$15–$40 / mo',
          title: 'Upwork Connects & SIM Upkeep',
          detail: 'Bidding credits for targeted Upwork proposals along with an active number for 2FA verification codes.',
        },
      ],
      payoutItems: [
        {
          metric: '14–21 Days',
          title: 'Early Order Clearing Window',
          detail: 'New PayPal and Fiverr accounts typically hold initial earnings for 2–3 weeks while account history settles.',
        },
        {
          metric: '10%–20%',
          title: 'Standard Marketplace Cut',
          detail: 'Fiverr takes 20% and Upwork roughly 10%, so build those platform fees into your project rates from the start.',
        },
        {
          metric: 'FX Spread',
          title: 'Local Exchange Conversion',
          detail: 'Converting PayPal balances into USDT or Toman carries an exchange spread, and we review reliable options during setup.',
        },
      ],
    },
    readinessAndPackages: {
      kicker: 'Readiness & Setup Tracks',
      headingBold: 'Choose your ',
      headingSerif: 'starting track',
      summary:
        'Check off what you already have ready—unchecked items can be learned or prepared before choosing a track below.',
      checkerTitle: 'Starting Readiness Checklist',
      checkerSubtitle: 'Select what you already have in place; anything else can be learned:',
      checks: [
        { id: 'skill', label: 'I have a sellable skill (or portfolio samples in progress)' },
        { id: 'ai_comm', label: 'Ready to use AI tools like ChatGPT for proposals and client chat' },
        { id: 'runway', label: 'Prepared to budget for monthly VPS, residential IP, and Upwork Connects' },
        { id: 'learn_tech', label: 'Willing to learn dedicated VPS and clean browser routines' },
      ],
      readyMessage: '4/4 Ready — strong starting position to choose your setup track.',
      partialMessage: 'Unchecked items are not blockers—each one can be prepared step by step.',
      checkerCta: 'Check Your Starting Point',
      tracksHeading: 'Setup Tracks & Clear Boundaries',
      tracksIntro: 'Bracketed fees and delivery windows will be updated with final live figures before launch.',
      placeholderBadge: 'Placeholder · Set Before Launch',
      includedLabel: 'Included',
      excludedToggle: 'View what is excluded',
      selectCta: 'Inquire About This Track',
    },
    fieldRecords: {
      kicker: 'Proof & Reference Slots',
      headingBold: 'Why honesty ',
      headingSerif: 'beats hype',
      intro: 'Zero made-up names or inflated screenshots. Clean slots reserved for real verified outcomes prior to launch.',
      placeholderTag: 'Pending Real Data',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'upwork', label: 'Upwork' },
        { id: 'fiverr', label: 'Fiverr' },
        { id: 'advisory', label: 'Advisory' },
      ],
      specialtyLabel: 'Specialty',
      timeframeLabel: 'Actual Timeline',
      outcomeLabel: 'Verified Outcome',
      referencesHeading: 'Client Reference Slots',
      referencesSubheading: 'Reserved for unedited client notes prior to launch.',
      ecosystemStripLabel: 'PLATFORMS & WORKFLOWS COVERED',
    },
    closingBanner: {
      headingBold: 'Start your global freelancing ',
      headingSerif: 'with a clear plan',
      subtitle: 'Review your skill, AI workflow, and setup requirements to map out a realistic first step.',
      cta: 'Check Your Starting Point',
    },
    faqSection: {
      kicker: 'How to Get Started',
      headingBold: 'Starting details & ',
      headingSerif: 'common questions',
      searchPlaceholder: 'Search questions (e.g., english, AI, non-tech, paypal)...',
      clearSearch: 'Clear',
      emptyTitle: 'No matching questions found.',
      emptyReset: 'Show all',
      items: [
        {
          id: 'english-ai',
          question: 'Can I still freelance if my English isn’t fluent?',
          answer: [
            'Yes. AI tools such as ChatGPT make English a smaller barrier by helping you understand project briefs, draft proposals, and refine client replies while your core skill leads.',
          ],
          keywords: ['english', 'ai', 'gpt', 'language', 'chat'],
        },
        {
          id: 'non-tech-curve',
          question: 'Is the VPS workflow hard for non-technical specialists?',
          answer: [
            'Using a dedicated VPS and isolated browser takes brief practice if it is new to you, yet the routine is straightforward to learn with a step-by-step checklist.',
          ],
          keywords: ['technical', 'non-tech', 'vps', 'curve', 'learn'],
        },
        {
          id: 'timeline',
          question: 'How long does it typically take to land a first project?',
          answer: [
            'Plan on typically 2–4 months to refine your profile, test proposals consistently, and build early momentum, though exact timing depends on your niche, portfolio, and outreach.',
          ],
          keywords: ['timeline', 'month', 'guarantee', 'first', 'project'],
        },
        {
          id: 'ongoing-costs',
          question: 'What recurring monthly bills should I plan for?',
          answer: [
            'Ongoing expenses include monthly VPS hosting, residential IP renewal, Upwork Connects, active SIM upkeep, and exchange conversion spreads—see the Monthly Bills section above for current estimates.',
          ],
          keywords: ['cost', 'monthly', 'vps', 'connects', 'proxy'],
        },
        {
          id: 'paypal-holds',
          question: 'When do early earnings clear for withdrawal?',
          answer: [
            'New PayPal and Fiverr accounts typically place an initial clearing hold on early orders while account history builds, and clearing speeds up afterward—check the Fees & Cashout tab above for details.',
          ],
          keywords: ['paypal', 'hold', 'withdraw', 'delay'],
        },
      ],
    },
    footer: {
      newsletterTitle: 'Short Platform & Workflow Updates',
      newsletterSubtitle: 'Occasional notes when Upwork, Fiverr, or remote verification practices change.',
      emailPlaceholder: 'Enter your email...',
      subscribeCta: 'Subscribe',
      newsletterSuccess: 'Subscribed.',
      newsletterDuplicate: 'Already subscribed.',
      newsletterInvalid: 'Please enter a valid email address.',
      colophonNote: 'Sona independent freelancing guide · Bracketed slots are reserved for verified launch data.',
      linksTitle: 'Sections',
      contactTitle: 'Contact Slots (Placeholder)',
      languageLabel: 'Language',
      copyright: '© 2026 Sona',
    },
    modal: {
      title: 'Check Your Starting Point',
      subtitle: 'Share your skill focus and comfort level so we can map out the simplest next step.',
      tabNew: 'New Inquiry',
      tabSaved: 'Saved',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Your name',
      contactLabel: 'Telegram, WhatsApp, or Phone',
      contactPlaceholder: '@handle or number',
      emailLabel: 'Email Address',
      emailPlaceholder: 'name@example.com',
      packageLabel: 'Track of Interest',
      craftLabel: 'Primary Skill',
      crafts: [
        { id: 'dev', label: 'Dev / Tech / Data' },
        { id: 'design', label: 'Design / UI-UX / Video' },
        { id: 'writing', label: 'Content / Translation / SEO' },
        { id: 'other', label: 'Other Craft' },
      ],
      englishLabel: 'Client Communication Style',
      englishLevels: [
        { id: 'basic', label: 'Using AI / GPT for proposals & chat' },
        { id: 'working', label: 'Working English + AI polish' },
        { id: 'fluent', label: 'Fluent direct chat & calls' },
      ],
      platformLabel: 'Target Platform',
      platforms: [
        { id: 'upwork', label: 'Upwork' },
        { id: 'fiverr', label: 'Fiverr' },
        { id: 'freelancer', label: 'Freelancer' },
        { id: 'paypal', label: 'PayPal Only' },
      ],
      notesLabel: 'Brief Background or Questions',
      notesPlaceholder: 'What do you work on, and any tech/setup questions you want help learning...',
      submitCta: 'Submit Inquiry',
      closeCta: 'Close',
      errors: {
        nameRequired: 'Please enter your name.',
        contactRequired: 'Telegram, WhatsApp, or phone is required.',
        emailInvalid: 'Enter a valid email address.',
      },
      confirmation: {
        heading: 'Saved',
        message: 'Your inquiry is saved. Together we’ll review your skill, setup needs, and the most suitable starting track.',
        refLabel: 'Ref ID',
        packageLabel: 'Selected Track',
        newRequestCta: 'Submit Another',
      },
      savedEmpty: 'No saved checks yet.',
      clearSaved: 'Clear All',
    },
  },
};
