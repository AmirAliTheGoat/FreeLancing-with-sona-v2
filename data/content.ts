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
      title: 'Sona | راهنمای عملی فریلنسری بین‌المللی از ایران ۱۴۰۵',
      description:
        'پروژه جانبی و راهنمای صادقانه سونا برای کار در آپورک و فایور از ایران: نکات به‌روز ۲۰۲۶، کار با ابزارهای هوش مصنوعی و هزینه‌های واقعی ماهانه.',
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
      sideHustleTag: 'پروژه مستقل سونا · آپدیت ۲۰۲۶ / ۱۴۰۵',
      draftNotice: 'جایگاه‌های قیمت و سوابق با برچسب [جای‌گذاری] پیش از انتشار با داده‌های واقعی تکمیل می‌شوند.',
      headlineBold: 'برای شروع فریلنسری دلاری ',
      headlineSerif: 'چه سوالی ذهنتان را درگیر کرده؟',
      subheadline:
        'بدون ترس و رویافروشی: ببینید زبان با AI چطور حل می‌شود، چه عادت‌هایی یادگرفتنی هستند و هزینه‌های ماهانه واقعاً چقدرند.',
      searchPlaceholder: 'جستجو کنید (مثلاً: انگلیسی با GPT، هزینه VPS، افراد غیرفنی، تسویه اول)...',
      searchButtonLabel: 'ببینم',
      suggestedLabel: 'پیشنهادها:',
      topics: [
        {
          id: 'ai-english',
          chip: 'انگلیسی با AI / GPT',
          keywords: ['انگلیسی', 'زبان', 'gpt', 'ai', 'هوش مصنوعی'],
          title: 'زبان انگلیسی در ۲۰۲۶ تقریباً اختیاری شده',
          answer:
            'با وجود GPT توی جیب همه، نوشتن پروپوزال و مکاتبه روان با کارفرما کاملاً شدنی است و افراد زیادی همین‌طور قرارداد می‌بندند.',
          ctaLabel: 'دیدن نقشه‌راه کامل',
          targetHref: '#straight-talk',
        },
        {
          id: 'non-tech',
          chip: 'منحنی یادگیری غیرفنی‌ها',
          keywords: ['غیرفنی', 'فنی', 'vps', 'یادگیری', 'مرورگر'],
          title: 'کار با ابزارهای ریموت در چند روز یادگرفتنی است',
          answer:
            'اگر پیش‌زمینه فنی ندارید روزهای اول کمی جدید به نظر می‌رسد، اما با چک‌لیست مرحله‌به‌مرحله خیلی سریع عادی می‌شود.',
          ctaLabel: 'چک‌لیست نقطه شروع',
          targetHref: '#packages',
        },
        {
          id: 'monthly-costs',
          chip: 'هزینه‌های ماهانه VPS',
          keywords: ['هزینه', 'ماهانه', 'vps', 'پروکسی', 'کانکت'],
          title: 'بودجه جاری شفاف از همان روز اول',
          answer:
            'به‌طور میانگین حدود ۱۲–۲۲ دلار سرور اختصاصی، ۱۰–۲۵ دلار آی‌پی مسکونی و ۱۵–۴۰ دلار کانکت آپورک در ماه کنار بگذارید.',
          ctaLabel: 'جزئیات کامل هزینه‌ها',
          targetHref: '#reality',
        },
        {
          id: 'payout-hold',
          chip: 'تاخیر تسویه ۱۴ تا ۲۱ روزه',
          keywords: ['پی پل', 'تسویه', 'بلوکه', 'برداشت', 'نقد'],
          title: 'درآمد سفارش‌های اول با کمی صبر آزاد می‌شود',
          answer:
            'حساب‌های تازه فایور و پی‌پل حدود ۲ تا ۳ هفته زمان تایید دارند؛ بعد از شکل گرفتن چند تراکنش سرعت برداشت بالا می‌رود.',
          ctaLabel: 'مشاهده روال پرداخت',
          targetHref: '#reality',
        },
      ],
      orText: 'یا',
      helperNote: 'وضعیت فعلی مهارت و هدفتان را بگویید تا بهترین مسیر را با هم بچینیم',
      primaryCta: 'بررسی نقطه شروع من',
    },
    straightTalk: {
      kicker: 'نقشه راه ۲۰۲۶',
      headingBold: 'نکات واقعی ۲۰۲۶ ',
      headingSerif: 'بدون ترس و اغراق',
      summary:
        'لازم نیست از روز اول همه‌چیز را بلد باشید. روی کارت‌های روبه‌رو کلیک کنید تا هر نکته کاربردی را ببینید.',
      ctaLabel: 'ادامه و انتخاب مسیر',
      portraitName: 'سونا',
      portraitRole: 'پروژه جانبی · راه‌اندازی و همراهی عملی',
      cards: [
        {
          num: '۰۱',
          tag: 'مهارت + دسترسی',
          title: 'اکانت در را باز می‌کند، مهارت برنده می‌شود',
          line: 'زیرساخت امن فقط مسیر ورود است؛ وقتی کنار مهارت واقعی و نمونه‌کار قرار بگیرد نتیجه می‌دهد.',
        },
        {
          num: '۰۲',
          tag: 'AI در جیب شما',
          title: 'انگلیسی با کمک GPT حل شده است',
          line: 'دیگر نیاز به تسلط کامل زبان نیست؛ با ابزارهای AI خیلی‌ها مکاتبه و قرارداد دلاری می‌بندند.',
        },
        {
          num: '۰۳',
          tag: 'منحنی یادگیری',
          title: 'برای افراد غیرفنی کمی تمرین می‌خواهد',
          line: 'کار با سرور ریموت و مرورگر تمیز برای غیرفنی‌ها اولش جدید است، ولی ظرف چند روز یاد گرفته می‌شود.',
        },
        {
          num: '۰۴',
          tag: 'ریتم واقعی',
          title: 'به خودتان ۲ تا ۴ ماه زمان بدهید',
          line: 'جا افتادن پروفایل، ارسال پروپوزال و رسیدن به اولین نقدینگی نیاز به صبر پیوسته دارد.',
        },
      ],
    },
    realityRegister: {
      kicker: 'شفافیت کاربردی',
      headingBold: 'امنیت حساب و ',
      headingSerif: 'هزینه‌های ماهانه یکجا',
      summary:
        'هر عادت ساده و هزینه جاری را پیش از شروع ببینید تا با خیال راحت و بدون غافلگیری جلو بروید.',
      ctaLabel: 'بررسی آمادگی من',
      tabs: [
        { id: 'kyc', label: 'عادت‌های امنیت' },
        { id: 'costs', label: 'هزینه ماهانه' },
        { id: 'payouts', label: 'تسویه و تبدیل' },
      ],
      kycItems: [
        {
          metric: 'عادت ۰۱',
          title: 'ورود یکدست فقط با VPS',
          detail: 'اپ موبایل را نصب نکنید و فقط از داخل سرور اختصاصی وارد شوید تا آی‌پی شما همیشه یکدست بماند.',
        },
        {
          metric: 'طبیعی و رایج',
          title: 'احراز هویت برداشت اول',
          detail: 'در برداشت‌های اولیه تایید مدرک عادی است؛ با آماده‌سازی دقیق مدارک این مرحله راحت رد می‌شود.',
        },
        {
          metric: 'قانون پلتفرم',
          title: 'مکاتبه و پرداخت درون پلتفرم',
          detail: 'تا بسته شدن قرارداد، پیام‌ها و تسویه را داخل خود آپورک یا فایور نگه دارید.',
        },
      ],
      costItems: [
        {
          metric: '$12–$22 / ماه',
          title: 'سرور مجازی اختصاصی (VPS)',
          detail: 'محیط ثابت کار شما با آی‌پی مشخص و دسترسی همیشگی.',
        },
        {
          metric: '$10–$25 / ماه',
          title: 'آی‌پی مسکونی تمیز',
          detail: 'کمک می‌کند مراحل ثبت‌نام، تایید هویت و تنظیم گیگ‌ها بدون حساسیت انجام شود.',
        },
        {
          metric: '$15–$40 / ماه',
          title: 'کانکت آپورک و شماره فعال',
          detail: 'اعتبار ارسال پیشنهاد در آپورک و نگهداری شماره برای دریافت پیامک تایید.',
        },
      ],
      payoutItems: [
        {
          metric: '۱۴ تا ۲۱ روز',
          title: 'دوره آزادسازی سفارش اول',
          detail: 'پی‌پل و فایور در تراکنش‌های نخست ۲ تا ۳ هفته صبر می‌خواهند تا حساب جا بیفتد.',
        },
        {
          metric: '۱۰٪ تا ۲۰٪',
          title: 'کارمزد استاندارد پلتفرم',
          detail: 'فایور ۲۰٪ و آپورک ۱۰٪ برمی‌دارد؛ موقع نرخ‌گذاری این سهم را لحاظ کنید.',
        },
        {
          metric: 'تبدیل صرافی',
          title: 'نقد کردن پی‌پل به تتر یا ریال',
          detail: 'صرافی‌های معتبر با چند درصد کارمزد تبدیل، موجودی پی‌پل را نقد می‌کنند.',
        },
      ],
    },
    readinessAndPackages: {
      kicker: 'قدم اول و مسیرها',
      headingBold: 'نقطه شروع خودتان را ',
      headingSerif: 'قدم‌به‌قدم انتخاب کنید',
      summary:
        'چک‌لیست سمت چپ را بزنید؛ هیچ موردی بن‌بست نیست و مسیرهای زیر پیش از انتشار با قیمت واقعی پر می‌شوند.',
      checkerTitle: 'چک‌لیست سریع نقطه شروع',
      checkerSubtitle: 'هر کدام که هنوز آماده نیست، قابل یادگیری است:',
      checks: [
        { id: 'skill', label: 'مهارت بازارپسند دارم (یا در حال تکمیل نمونه‌کارم)' },
        { id: 'ai_comm', label: 'با ابزارهای AI مثل ChatGPT برای پروپوزال راحتم' },
        { id: 'runway', label: 'بودجه VPS و کانکت چند ماه اول را در نظر گرفته‌ام' },
        { id: 'learn_tech', label: 'حاضرم روال کار با VPS و مرورگر امن را یاد بگیرم' },
      ],
      readyMessage: '۴ از ۴ آماده — وضعیتتان عالی است، بیایید مسیر دقیق را بچینیم.',
      partialMessage: 'هیچ نگرانی ندارد — موارد باقی‌مانده کاملاً یادگرفتنی هستند.',
      checkerCta: 'مشورت درباره وضعیت من',
      tracksHeading: 'مسیرهای همکاری و حدود مسئولیت',
      tracksIntro: 'قیمت‌ها و زمان‌های داخل کروشه پیش از آنلاین شدن نهایی در فایل مرکزی جای‌گذاری تکمیل می‌شوند.',
      placeholderBadge: 'جای‌گذاری · تکمیل قبل از انتشار',
      includedLabel: 'شامل می‌شود',
      excludedToggle: 'بخش‌هایی که بر عهده خودتان است',
      selectCta: 'گفتگو درباره این مسیر',
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
      headingBold: 'فریلنسری بین‌المللی ',
      headingSerif: 'را با خیال راحت شروع کنید',
      subtitle: 'بیایید ببینیم با مهارت و شرایط فعلی شما، هوشمندانه‌ترین قدم اول چیست — بدون فشار و اغراق.',
      cta: 'بررسی نقطه شروع من',
    },
    faqSection: {
      kicker: 'راهنمای شروع',
      headingBold: 'چطور شروع کنیم ',
      headingSerif: 'و سوالات پرتکرار',
      searchPlaceholder: 'جستجو در سوالات (مثلاً: انگلیسی، غیرفنی، هزینه، تسویه)...',
      clearSearch: 'پاک کردن',
      emptyTitle: 'نتیجه‌ای پیدا نشد.',
      emptyReset: 'نمایش همه',
      items: [
        {
          id: 'english-ai',
          question: 'اگر انگلیسی‌ام عالی نباشد هم می‌توانم کار کنم؟',
          answer: [
            'بله. امروز با کمک ChatGPT و ابزارهای هوش مصنوعی، نگارش پروپوزال و چت حرفه‌ای با کارفرما کاملاً شدنی است و افراد زیادی همین‌طور قرارداد می‌بندند.',
          ],
          keywords: ['انگلیسی', 'زبان', 'gpt', 'هوش مصنوعی', 'مکاتبه'],
        },
        {
          id: 'non-tech-curve',
          question: 'برای افراد غیرفنی یادگیری روال VPS سخت نیست؟',
          answer: [
            'یک منحنی یادگیری کوتاه (چند روز تمرین) دارد، ولی با راهنمای مرحله‌به‌مرحله خیلی سریع به یک عادت ساده روزانه تبدیل می‌شود.',
          ],
          keywords: ['فنی', 'غیرفنی', 'vps', 'یادگیری', 'سخت'],
        },
        {
          id: 'timeline',
          question: 'چقدر طول می‌کشد تا اولین پروژه گرفته شود؟',
          answer: [
            'معمولاً بین ۲ تا ۴ ماه زمان منطقی برای جا افتادن پروفایل، تست پیشنهادها و بستن اولین قراردادهاست.',
          ],
          keywords: ['زمان', 'ماه اول', 'پروژه', 'تضمین', 'درآمد'],
        },
        {
          id: 'ongoing-costs',
          question: 'هزینه‌های جاری ماهانه دقیقاً چه چیزهایی هستند؟',
          answer: [
            'تمدید ماهانه سرور مجازی (VPS)، پروکسی آی‌پی مسکونی، خرید Connects در آپورک و چند درصد کارمزد صرافی هنگام نقد کردن.',
          ],
          keywords: ['هزینه', 'ماهانه', 'vps', 'کانکت', 'تمدید'],
        },
        {
          id: 'paypal-holds',
          question: 'درآمد سفارش‌های اول چطور آزاد می‌شود؟',
          answer: [
            'حساب‌های تازه در پی‌پل و فایور معمولاً ۱۴ تا ۲۱ روز برای تسویه اول صبر دارند و بعد از شکل گرفتن سابقه سریع‌تر می‌شوند.',
          ],
          keywords: ['پی پل', 'نقد', 'بلوکه', 'hold', 'برداشت'],
        },
      ],
    },
    footer: {
      newsletterTitle: 'آپدیت‌های کوتاه قوانین و نکات جدید',
      newsletterSubtitle: 'هر وقت روال وریفای یا تکنیک جدیدی تغییر کند کوتاه اطلاع می‌دهیم.',
      emailPlaceholder: 'ایمیل شما...',
      subscribeCta: 'عضویت',
      newsletterSuccess: 'ثبت شد.',
      newsletterDuplicate: 'قبلاً ثبت شده است.',
      newsletterInvalid: 'ایمیل معتبر وارد کنید.',
      colophonNote: 'پروژه مستقل سونا · اطلاعات داخل کروشه پیش از آنلاین شدن نهایی با داده‌های واقعی پر می‌شود.',
      linksTitle: 'بخش‌ها',
      contactTitle: 'راه‌های تماس (Placeholder)',
      languageLabel: 'زبان',
      copyright: '© ۱۴۰۵ سونا',
    },
    modal: {
      title: 'بررسی نقطه شروع و گفتگو با سونا',
      subtitle: 'وضعیت فعلی مهارت و تجربه‌تان را بگویید تا ببینیم بهترین مسیر شروع برایتان چیست.',
      tabNew: 'فرم جدید',
      tabSaved: 'ثبت‌شده‌ها',
      fullNameLabel: 'نام شما',
      fullNamePlaceholder: 'نام و نام خانوادگی',
      contactLabel: 'تلگرام / واتساپ یا تلفن',
      contactPlaceholder: '@handle یا شماره',
      emailLabel: 'ایمیل',
      emailPlaceholder: 'name@example.com',
      packageLabel: 'مسیر مورد نظر',
      craftLabel: 'تخصص اصلی شما',
      crafts: [
        { id: 'dev', label: 'برنامه‌نویسی / فنی / دیتا' },
        { id: 'design', label: 'طراحی / UI-UX / تدوین' },
        { id: 'writing', label: 'تولید محتوا / ترجمه / سئو' },
        { id: 'other', label: 'سایر مهارت‌ها' },
      ],
      englishLabel: 'راحتی با ابزار و مکاتبه',
      englishLevels: [
        { id: 'basic', label: 'از AI / GPT برای کل مکاتبات کمک می‌گیرم' },
        { id: 'working', label: 'مکاتبه متوسط + کمک از AI' },
        { id: 'fluent', label: 'مسلط به مکاتبه و تماس مستقیم' },
      ],
      platformLabel: 'پلتفرم اولویت',
      platforms: [
        { id: 'upwork', label: 'آپورک' },
        { id: 'fiverr', label: 'فایور' },
        { id: 'freelancer', label: 'فریلنسر' },
        { id: 'paypal', label: 'فقط پی‌پل' },
      ],
      notesLabel: 'چند خط درباره مهارت یا سوالتان',
      notesPlaceholder: 'مثلاً چند وقت است کار می‌کنید یا برای بخش فنی سوالی دارید...',
      submitCta: 'ثبت و ارسال',
      closeCta: 'بستن',
      errors: {
        nameRequired: 'نام خود را وارد کنید.',
        contactRequired: 'تلگرام، واتساپ یا شماره تماس لازم است.',
        emailInvalid: 'ایمیل معتبر نیست.',
      },
      confirmation: {
        heading: 'ثبت شد',
        message: 'اطلاعات شما ذخیره شد. در گفتگو مرحله به مرحله بررسی می‌کنیم چه زیرساخت و تمرینی برایتان مناسب‌تر است.',
        refLabel: 'کد پیگیری',
        packageLabel: 'مسیر',
        newRequestCta: 'ثبت درخواست جدید',
      },
      savedEmpty: 'هنوز درخواستی ثبت نکرده‌اید.',
      clearSaved: 'پاک کردن همه',
    },
  },
  en: {
    meta: {
      title: 'Sona | Practical Side-Hustle Guide to Global Freelancing from Iran 2026',
      description:
        'A candid, encouraging guide to working on Upwork and Fiverr from Iran: 2026 AI-assisted workflow tips, learnable tech basics, and real monthly costs.',
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
      sideHustleTag: 'Sona · Independent Side-Hustle · 2026',
      draftNotice: 'Bracketed [PLACEHOLDER] slots will be replaced with verified live numbers before launch.',
      headlineBold: 'What do you need ',
      headlineSerif: 'figured out first?',
      subheadline:
        'Global freelancing from Iran works step by step—AI bridges the English gap, remote tools are learnable in days, and monthly bills stay transparent.',
      searchPlaceholder: 'Try "English with GPT", "monthly VPS costs", "non-tech curve", or "PayPal holds"...',
      searchButtonLabel: 'Search',
      suggestedLabel: 'Suggested:',
      topics: [
        {
          id: 'ai-english',
          chip: 'English with AI / GPT',
          keywords: ['english', 'ai', 'gpt', 'language', 'chat'],
          title: 'Fluent English is basically optional in 2026',
          answer:
            'With GPT in every pocket, writing strong proposals and replying smoothly to clients is completely doable—many active freelancers close deals using AI.',
          ctaLabel: 'See full 2026 playbook',
          targetHref: '#straight-talk',
        },
        {
          id: 'non-tech',
          chip: 'Non-Tech Learning Curve',
          keywords: ['non-tech', 'tech', 'vps', 'learn', 'curve', 'browser'],
          title: 'Remote workflows take a few days to learn',
          answer:
            'Using a dedicated VPS and isolated browser feels new if you aren’t technical, yet a simple step-by-step checklist makes it routine fast.',
          ctaLabel: 'Open starting checklist',
          targetHref: '#packages',
        },
        {
          id: 'monthly-costs',
          chip: 'Monthly VPS Costs',
          keywords: ['cost', 'monthly', 'vps', 'proxy', 'connects', 'bill'],
          title: 'Predictable monthly overhead upfront',
          answer:
            'Plan roughly $12–$22 for VPS, $10–$25 for residential IP stability, and $15–$40 for Upwork Connects while pitching jobs.',
          ctaLabel: 'View all monthly bills',
          targetHref: '#reality',
        },
        {
          id: 'payout-hold',
          chip: '14–21 Day First Hold',
          keywords: ['paypal', 'hold', 'payout', 'withdraw', 'cash', 'fee'],
          title: 'Expect a short hold on initial orders',
          answer:
            'New PayPal and Fiverr accounts hold early payouts for 2–3 weeks while trust builds, then clearing speeds up smoothly.',
          ctaLabel: 'See cashout rules',
          targetHref: '#reality',
        },
      ],
      orText: 'or',
      helperNote: 'Share where you stand and we’ll map out the simplest starting track together',
      primaryCta: 'Check My Starting Point',
    },
    straightTalk: {
      kicker: '2026 Playbook',
      headingBold: 'Discover ',
      headingSerif: 'the real 2026 playbook',
      summary:
        'You don’t need everything mastered on day one. Click any card to inspect the grounded reality—without the fear-mongering.',
      ctaLabel: 'Explore Setup Tracks',
      portraitName: 'Sona',
      portraitRole: 'Side-hustle · Practical setup & guidance',
      cards: [
        {
          num: '01',
          tag: 'Access + Craft',
          title: 'Setup opens the door, skill wins work',
          line: 'A clean account gives you access; pairing it with real craft and portfolio samples wins contracts.',
        },
        {
          num: '02',
          tag: 'AI in Your Pocket',
          title: 'English is AI-assisted now',
          line: 'With ChatGPT in every pocket, fluent English is almost optional—freelancers close deals daily using AI.',
        },
        {
          num: '03',
          tag: 'Tech Curve',
          title: 'A learnable curve for non-tech folks',
          line: 'VPS and browser isolation feel unfamiliar at first for non-technical beginners, yet most pick it up in days.',
        },
        {
          num: '04',
          tag: 'Real Ramp',
          title: 'Give yourself a 2–4 month runway',
          line: 'Building reviews and early pipeline takes steady outreach—pace it calmly like a real side hustle.',
        },
      ],
    },
    realityRegister: {
      kicker: 'Practical Transparency',
      headingBold: 'Safety & bills ',
      headingSerif: 'all in one place',
      summary:
        'Switch between everyday safety habits, monthly carrying costs, and cashout timing—plain numbers with zero guesswork.',
      ctaLabel: 'Check Starting Fit',
      tabs: [
        { id: 'kyc', label: 'Safety Habits' },
        { id: 'costs', label: 'Monthly Bills' },
        { id: 'payouts', label: 'Fees & Cashout' },
      ],
      kycItems: [
        {
          metric: 'Habit 01',
          title: 'Log In Strictly via Your VPS',
          detail: 'Skip mobile apps and keep logins inside your dedicated VPS so your IP footprint stays steady.',
        },
        {
          metric: 'Normal Step',
          title: 'First-Payout ID Verification',
          detail: 'Platforms routinely check ID around early withdrawals—preparing clean docs makes this smooth.',
        },
        {
          metric: 'Platform Rule',
          title: 'Keep Chats & Pay On-Platform',
          detail: 'Keep messaging and payments inside Upwork or Fiverr until a contract is officially active.',
        },
      ],
      costItems: [
        {
          metric: '$12–$22 / mo',
          title: 'Dedicated VPS Hosting',
          detail: 'Your consistent remote workspace with a steady location—easy to renew monthly.',
        },
        {
          metric: '$10–$25 / mo',
          title: 'Clean Residential IP Proxy',
          detail: 'Extra stability during onboarding, verification checks, and gig publishing.',
        },
        {
          metric: '$15–$40 / mo',
          title: 'Upwork Connects & SIM Upkeep',
          detail: 'Weekly bidding credits for selective proposals plus active 2FA SMS access.',
        },
      ],
      payoutItems: [
        {
          metric: '14–21 Days',
          title: 'Early Order Clearing Window',
          detail: 'New PayPal and Fiverr accounts hold early orders 2–3 weeks before faster clearing kicks in.',
        },
        {
          metric: '10%–20%',
          title: 'Standard Marketplace Cut',
          detail: 'Fiverr keeps 20% and Upwork ~10%—just build that cut into your quoted rate.',
        },
        {
          metric: 'FX Spread',
          title: 'Local Exchange Conversion',
          detail: 'Cashing out PayPal to Toman or USDT carries a small spread—we walk through clean options.',
        },
      ],
    },
    readinessAndPackages: {
      kicker: 'Step-by-Step Setup',
      headingBold: 'Map your ',
      headingSerif: 'readiness & tracks',
      summary:
        'Check off what you already have below—anything unchecked is simply something we help you prep or learn before picking a track.',
      checkerTitle: 'Quick Starting-Point Checklist',
      checkerSubtitle: 'Tap where you stand today—every item is learnable:',
      checks: [
        { id: 'skill', label: 'I have a marketable skill (or samples in progress)' },
        { id: 'ai_comm', label: 'Comfortable using AI (ChatGPT) for proposals & chat' },
        { id: 'runway', label: 'Budgeted for initial VPS, proxy, and early Connects' },
        { id: 'learn_tech', label: 'Willing to learn basic VPS & clean browser habits' },
      ],
      readyMessage: '4/4 Ready — great starting position. Let’s plan your track.',
      partialMessage: 'No stress—every unchecked item can be learned or prepped step by step.',
      checkerCta: 'Discuss My Starting Point',
      tracksHeading: 'Setup Tracks & Clear Boundaries',
      tracksIntro: 'Bracketed prices and delivery windows pull from one editable placeholder file before launch.',
      placeholderBadge: 'Placeholder · Set Before Launch',
      includedLabel: 'Included',
      excludedToggle: 'View what stays on you',
      selectCta: 'Ask About This Track',
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
      headingBold: 'Start building ',
      headingSerif: 'your global side hustle',
      subtitle: 'Get started with an honest check of your skill, AI workflow, and setup route—no sales pressure.',
      cta: 'Check My Starting Point',
    },
    faqSection: {
      kicker: 'How to Get Started',
      headingBold: 'How to get started ',
      headingSerif: 'on Sona',
      searchPlaceholder: 'Search answers (e.g., english, AI, non-tech, paypal)...',
      clearSearch: 'Clear',
      emptyTitle: 'No matching questions found.',
      emptyReset: 'Show all',
      items: [
        {
          id: 'english-ai',
          question: 'Can I still freelance if my English isn’t fluent?',
          answer: [
            'Yes. With ChatGPT and modern AI tools in every pocket, polishing proposals and replying clearly to clients is straightforward—many active freelancers close deals with AI assistance.',
          ],
          keywords: ['english', 'ai', 'gpt', 'language', 'chat'],
        },
        {
          id: 'non-tech-curve',
          question: 'Is the VPS/remote workflow hard for non-technical people?',
          answer: [
            'There is a short learning curve if you haven’t used remote desktops or isolated browsers before, but with a simple step-by-step checklist it becomes second nature within a few days.',
          ],
          keywords: ['technical', 'non-tech', 'vps', 'curve', 'learn'],
        },
        {
          id: 'timeline',
          question: 'How long does it usually take to land the first paid project?',
          answer: [
            'Expect roughly 2–4 months to build profile momentum, refine proposals, and win your first contracts. Treat it as a steady skill-plus-outreach ramp.',
          ],
          keywords: ['timeline', 'month', 'guarantee', 'first', 'project'],
        },
        {
          id: 'ongoing-costs',
          question: 'What recurring bills should I plan for?',
          answer: [
            'Monthly VPS hosting, residential IP renewal, Upwork Connects when pitching jobs, and local exchange conversion spreads when cashing out.',
          ],
          keywords: ['cost', 'monthly', 'vps', 'connects', 'proxy'],
        },
        {
          id: 'paypal-holds',
          question: 'When do early earnings clear to cash out?',
          answer: [
            'New PayPal and Fiverr accounts typically hold initial orders for 14–21 days while trust builds, after which payouts clear much faster.',
          ],
          keywords: ['paypal', 'hold', 'withdraw', 'delay'],
        },
      ],
    },
    footer: {
      newsletterTitle: 'Short Platform & AI Playbook Updates',
      newsletterSubtitle: 'Occasional notes when Upwork, Fiverr, or remote workflow best practices shift.',
      emailPlaceholder: 'Your email...',
      subscribeCta: 'Subscribe',
      newsletterSuccess: 'Subscribed.',
      newsletterDuplicate: 'Already subscribed.',
      newsletterInvalid: 'Enter a valid email.',
      colophonNote: 'Sona independent side-hustle · Bracketed slots are reserved for verified launch data.',
      linksTitle: 'Sections',
      contactTitle: 'Contact Slots (Placeholder)',
      languageLabel: 'Language',
      copyright: '© 2026 Sona',
    },
    modal: {
      title: 'Check Your Starting Point',
      subtitle: 'Share your skill focus and comfort level so we can map out the simplest next step.',
      tabNew: 'New Check',
      tabSaved: 'Saved',
      fullNameLabel: 'Name',
      fullNamePlaceholder: 'Your name',
      contactLabel: 'Telegram / WhatsApp / Phone',
      contactPlaceholder: '@handle or number',
      emailLabel: 'Email',
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
      submitCta: 'Submit Check',
      closeCta: 'Close',
      errors: {
        nameRequired: 'Please enter your name.',
        contactRequired: 'Telegram, WhatsApp, or phone is required.',
        emailInvalid: 'Enter a valid email address.',
      },
      confirmation: {
        heading: 'Saved',
        message: 'Your check-in is saved. We’ll review your craft, learning curve, and best setup route together.',
        refLabel: 'Ref ID',
        packageLabel: 'Track',
        newRequestCta: 'Submit Another',
      },
      savedEmpty: 'No saved checks yet.',
      clearSaved: 'Clear All',
    },
  },
};
