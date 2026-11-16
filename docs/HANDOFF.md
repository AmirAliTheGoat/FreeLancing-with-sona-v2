# راهنمای تحویل و آماده‌سازی پیش از انتشار (`HANDOFF.md`)

این سند نقشه کامل جایگزینی داده‌های آزمایشی با اطلاعات واقعی، خاموش کردن حالت پیش‌نمایش (`DRAFT_MODE`) و فهرست ادعاهایی است که پیش از انتشار نهایی سایت باید از منابع رسمی تایید شوند.

---

## ۱. کلیدهایی که باید با داده‌های واقعی پر شوند

همه داده‌های جای‌گذاری به‌جز برچسب‌های عمومی رابط کاربری در فایل `data/placeholders.ts` متمرکز شده‌اند:

### اطلاعات هویتی، تماس و سابقه (`PLACEHOLDER_PROFILE` و `PLACEHOLDER_INFRA_BENCHMARKS`)
- `PLACEHOLDER_PROFILE.yearsActive.fa` / `.en`: سابقه واقعی فعالیت و کارنامه فریلنسری سونا (زیر کارت پرتره نمایش داده می‌شود).
- `PLACEHOLDER_PROFILE.verifiedProfileNote.fa` / `.en`: لینک یا توضیح تاییدشده پروفایل عمومی.
- `PLACEHOLDER_PROFILE.contactEmail`: نشانی ایمیل واقعی — پس از حذف براکت `[` به‌صورت خودکار به لینک `mailto:` در فوتر تبدیل می‌شود.
- `PLACEHOLDER_PROFILE.contactTelegram`: شناسه تلگرام واقعی (مثلاً `@username`) — پس از حذف براکت `[` به‌صورت خودکار به لینک `https://t.me/...` تبدیل می‌شود.
- `PLACEHOLDER_PROFILE.locationLabel.fa` / `.en`: شهر یا موقعیت ارائه مشاوره.
- `PLACEHOLDER_INFRA_BENCHMARKS.virtualSimNote.fa` / `.en`: هزینه دقیق نگهداری سیم‌کارت یا شماره مجازی.

### مسیرهای همکاری و قیمت‌ها (`PLACEHOLDER_PACKAGES`)
برای هر چهار مسیر زیر، مقادیر واقعی را جایگزین متن‌های داخل براکت کنید (`upwork-setup`، `fiverr-setup`، `combined-setup`، `advisory-audit`):
- `PLACEHOLDER_PACKAGES[<id>].priceDisplay.fa` / `.en`
- `PLACEHOLDER_PACKAGES[<id>].deliveryDisplay.fa` / `.en`
- همین‌طور بررسی نهایی سطرهای `included` و `excluded` مطابق تصمیم اتاق فرمان و قوانین پلتفرم‌ها (موارد پرچم‌گذاری‌شده بند ۶ را بازبینی کنید).

### پرونده‌های واقعی و نظرات مراجعین (`PLACEHOLDER_CASE_RECORDS` و `PLACEHOLDER_REFERENCES`)
- پرونده‌های واقعی (`case-slot-01` تا `case-slot-03`):
  - `specialtyPlaceholder.{fa,en}`
  - `timeframePlaceholder.{fa,en}`
  - `outcomePlaceholder.{fa,en}`
  - `notesPlaceholder.{fa,en}`
- نظرات تاییدشده مراجعین (`ref-slot-01` و `ref-slot-02`):
  - `authorPlaceholder.{fa,en}`
  - `rolePlaceholder.{fa,en}`
  - `datePlaceholder.{fa,en}`
  - `quotePlaceholder.{fa,en}`

### متن‌های تکمیلی وابسته به پیش‌نویس (`data/content.ts`)
پس از تکمیل قیمت‌ها و پرونده‌های واقعی، این متن‌ها را نیز متناسب با نسخه نهایی به‌روزرسانی کنید:
- `DOSSIER_CONTENT.{fa,en}.readinessAndPackages.summary` و `.tracksIntro`
- `DOSSIER_CONTENT.{fa,en}.fieldRecords.intro` و `.referencesSubheading`
- `DOSSIER_CONTENT.{fa,en}.footer.contactTitle` (حذف واژه `(Placeholder)`).

---

## ۲. روش خاموش کردن حالت پیش‌نویس (`DRAFT_MODE`)

۱. فایل `constants.ts` را باز کنید.
۲. مقدار زیر را از `true` به `false` تغییر دهید:
```ts
export const DRAFT_MODE: boolean = false;
```
با `false` شدن این فلگ، هر چهار بخش مخصوص نسخه پیش‌نویس به‌طور خودکار پنهان می‌شوند:
- اعلان پیش‌نویس در بالای صفحه اول (`hero.draftNotice` در `HeroBento.tsx`)
- ستون سوم نوار اعتماد زیر صفحه اول (`heroPillars[2]` در `HeroBento.tsx`)
- برچسب پیش‌نمایش روی قیمت پکیج‌ها (`readinessAndPackages.placeholderBadge` در `PackageLedger.tsx`) و برچسب‌های `placeholderTag` / انیمیشن شیمر روی پرونده‌ها (`FieldRecords.tsx`)
- یادداشت پیش‌نویس فوتر (`footer.colophonNote` در `Footer.tsx`)

---

## ۳. چک‌لیست فنی پیش از انتشار نهایی

1. **حذف برچسب جلوگیری از ایندکس در `index.html`**:
   تگ `<meta name="robots" content="noindex" />` را در `<head>` (دارای کامنت `<!-- DRAFT: remove robots noindex before launch -->`) پیش از اتصال دامنه اصلی حذف کنید.
2. **تایید تکمیل تمام جای‌گذاری‌ها**:
   دستور زیر را اجرا کنید تا خروجی `0` بدهد:
   ```bash
   npm run check:launch
   ```
3. **خاموش کردن `DRAFT_MODE`**:
   مقدار `DRAFT_MODE` را در `constants.ts` برابر `false` قرار دهید.
4. **به‌روزرسانی متادیتای انتشار در `index.html`**:
   در صورت تغییر آدرس نهایی یا متن معرفی، تگ‌های `<title>`، `description`، `og:*`، `twitter:*` و JSON-LD را بررسی کنید (اطمینان یابید هیچ متن پیش‌نویس یا ادعای غیرقابل استناد در آن‌ها باقی نمانده است).
5. **کنترل نهایی بیلد و تایپ**:
   ```bash
   npm run lint
   NODE_ENV=production npm run build
   ```

---

## ۴. فهرست ادعاها و ارقام نیازمند تایید پیش از انتشار

پیش از آنلاین کردن سایت، صحت تمامی ارقام و سیاست‌های زیر را مستقیماً از مستندات رسمی پلتفرم‌ها و سوابق واقعی تایید کنید:

1. **کارمزد آپورک و فایور (`realityRegister.payoutItems[1]`)**:
   - بازه متغیر `0%–15%` کارمزد قراردادهای آپورک (بر اساس تعرفه به‌روز Help Center آپورک؛ نمایش‌داده‌شده پیش از ارسال پروپوزال).
   - کارمزد ثابت `20%` فایور (`Fiverr Help Center`).
2. **دوره انتظار تسویه سفارش‌های نخست (`realityRegister.payoutItems[0]` و `faqSection.items[paypal-holds]`)**:
   - بازه `14–21 Days` (`۱۴ تا ۲۱ روز`) برای آزادسازی درآمدهای اولیه در PayPal و Fiverr.
3. **برآورد هزینه‌های جاری ماهانه (`realityRegister.costItems[0..2]` و `PLACEHOLDER_INFRA_BENCHMARKS`)**:
   - سرور مجازی اختصاصی (VPS): `$12–$22 / mo`
   - آی‌پی مسکونی تمیز: `$10–$25 / mo`
   - اعتبار Connects آپورک و نگهداری سیم‌کارت: `$15–$40 / mo`
4. **بازه زمانی واقعی برای شکل‌گیری جریان درآمد (`straightTalk.cards[3]` و `faqSection.items[timeline]`)**:
   - ادعای معمول `2–4 months` (`۲ تا ۴ ماه`) برای تنظیم پروفایل، ارسال پیشنهاد و گرفتن اولین پروژه‌ها، منطبق با آمار واقعی مراجعین تاییدشده.
5. **بسته‌های زیرساخت و بند ۶ (`PLACEHOLDER_PACKAGES` و `realityRegister`)**:
   - مرور نهایی موارد مرتبط با KYC، لوکیشن هدف، VPS و آی‌پی مسکونی با اتاق فرمان پیش از عرضه عمومی.
