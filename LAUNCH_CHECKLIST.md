# Pre-Launch Checklist

Run `npm run check:launch` after editing `data/*.ts`. The site is ready to publish only when all placeholders below are replaced with verified data, legal/compliance copy decisions are finalized, figures are confirmed, and `DRAFT_MODE` in `data/placeholders.ts` is set to `false`.

---

## 1. Placeholder Slots to Replace (`file:key`)

### Profile & Contact (`data/placeholders.ts`)
- `PLACEHOLDER_PROFILE.yearsActive.fa` / `.en` — Verified years active & platform history (rendered under Sona's portrait card).
- `PLACEHOLDER_PROFILE.verifiedProfileNote.fa` / `.en` — Verified public profile link or personal track record.
- `PLACEHOLDER_PROFILE.contactEmail` — Live contact email address (rendered in Footer).
- `PLACEHOLDER_PROFILE.contactTelegram` — Live Telegram handle (rendered in Footer).
- `PLACEHOLDER_PROFILE.locationLabel.fa` / `.en` — Base city / online advisory region (rendered in Footer).
- `PLACEHOLDER_INFRA_BENCHMARKS.virtualSimNote.fa` / `.en` — Exact recurring SIM / virtual number upkeep note.

### Setup Tracks & Pricing (`data/placeholders.ts`)
- `PLACEHOLDER_PACKAGES[upwork-setup].priceDisplay.fa` / `.en` (`[قیمت نهایی: تکمیل قبل از انتشار]` / `[TBD — Final Setup Fee]`)
- `PLACEHOLDER_PACKAGES[upwork-setup].deliveryDisplay.fa` / `.en` (`[زمان تحویل: مثلاً ۷ تا ۱۴ روز کاری]` / `[TBD — Est. Provisioning Window]`)
- `PLACEHOLDER_PACKAGES[fiverr-setup].priceDisplay.fa` / `.en`
- `PLACEHOLDER_PACKAGES[fiverr-setup].deliveryDisplay.fa` / `.en`
- `PLACEHOLDER_PACKAGES[combined-setup].priceDisplay.fa` / `.en`
- `PLACEHOLDER_PACKAGES[combined-setup].deliveryDisplay.fa` / `.en`
- `PLACEHOLDER_PACKAGES[advisory-audit].priceDisplay.fa` / `.en` (`[قیمت جلسه / یا رایگان پیش از ثبت‌نام]` / `[TBD — Single Session Fee or Free Screening]`)
- `PLACEHOLDER_PACKAGES[advisory-audit].deliveryDisplay.fa` / `.en` (`[زمان هماهنگی: ۴۸ ساعت کاری]` / `[TBD — Scheduled within 48h]`)

### Case Record & Reference Slots (`data/placeholders.ts`)
- `PLACEHOLDER_CASE_RECORDS[case-slot-01]`: `.specialtyPlaceholder.{fa,en}`, `.timeframePlaceholder.{fa,en}`, `.outcomePlaceholder.{fa,en}`, `.notesPlaceholder.{fa,en}`
- `PLACEHOLDER_CASE_RECORDS[case-slot-02]`: `.specialtyPlaceholder.{fa,en}`, `.timeframePlaceholder.{fa,en}`, `.outcomePlaceholder.{fa,en}`, `.notesPlaceholder.{fa,en}`
- `PLACEHOLDER_CASE_RECORDS[case-slot-03]`: `.specialtyPlaceholder.{fa,en}`, `.timeframePlaceholder.{fa,en}`, `.outcomePlaceholder.{fa,en}`, `.notesPlaceholder.{fa,en}`
- `PLACEHOLDER_REFERENCES[ref-slot-01]`: `.authorPlaceholder.{fa,en}`, `.rolePlaceholder.{fa,en}`, `.datePlaceholder.{fa,en}`, `.quotePlaceholder.{fa,en}`
- `PLACEHOLDER_REFERENCES[ref-slot-02]`: `.authorPlaceholder.{fa,en}`, `.rolePlaceholder.{fa,en}`, `.datePlaceholder.{fa,en}`, `.quotePlaceholder.{fa,en}`

### Content Notices & Labels (`data/content.ts`)
- `DOSSIER_CONTENT.{fa,en}.hero.draftNotice` — Draft banner text shown while `DRAFT_MODE === true`.
- `DOSSIER_CONTENT.{fa,en}.readinessAndPackages.summary` & `.tracksIntro` — Mention bracketed pre-launch prices; update wording once track prices are published.
- `DOSSIER_CONTENT.{fa,en}.readinessAndPackages.placeholderBadge` — Shown on track price boxes while `DRAFT_MODE === true`.
- `DOSSIER_CONTENT.{fa,en}.fieldRecords.intro`, `.placeholderTag`, `.referencesSubheading` — Reference pending-data slots; replace when live case records are published.
- `DOSSIER_CONTENT.{fa,en}.footer.colophonNote` & `.contactTitle` — Still carry draft/placeholder framing (`Placeholder`); remove placeholder framing once live contact info is entered.

---

## 2. Rule 6 / Compliance Copy Decisions Needed Before Launch

Review and confirm legal/compliance wording in `data/placeholders.ts`:
- `PLACEHOLDER_PACKAGES[0].included.fa[1]`: `'راهنمایی و تامین پیش‌نیازهای احراز هویت (KYC) متناسب با لوکیشن هدف'`
- `PLACEHOLDER_PACKAGES[0].included.en[1]`: `'UK-aligned identity & proof-of-address KYC compliance preparation'`
- `PLACEHOLDER_PACKAGES[2].included.fa[0]`: `'تمامی موارد مسیر ۱ و ۲ در یک زیرساخت یکپارچه با آی‌پی و هویت هماهنگ'`
- `PLACEHOLDER_PACKAGES[2].included.en[0]`: `'Full provisioning for Upwork, Fiverr & PayPal under aligned credentials'`

Also confirm infrastructure operational framing (restored per U5 Part A1):
- `data/content.ts`: `kycItems[0]` (`fa` & `en`), `costItems[0..1]` (`fa` & `en`), and `faqSection.items[ongoing-costs]` (`fa` & `en`).

---

## 3. External Figures to Verify Before Publish

- **Upwork variable service fee (`0%–15%`)**: **Confirm on Upwork Help Center before publish** (`data/content.ts` `realityRegister.payoutItems[1]`). Verify current variable freelancer service fee structure and ensure wording reflects Upwork's live schedule.
- **Fiverr service fee (`20%`)**: Confirm seller fee in Fiverr Help Center (`realityRegister.payoutItems[1]` & `PLACEHOLDER_CASE_RECORDS[case-slot-02]`).
- **Monthly running cost estimates** (`realityRegister.costItems`):
  - Dedicated VPS hosting: `$12–$22 / mo` (`PLACEHOLDER_INFRA_BENCHMARKS.monthlyVpsUsdRange`)
  - Clean residential IP proxy: `$10–$25 / mo` (`PLACEHOLDER_INFRA_BENCHMARKS.monthlyProxyUsdRange`)
  - Upwork Connects & SIM upkeep: `$15–$40 / mo`
- **Early order payout holds** (`realityRegister.payoutItems[0]`): Confirm `14–21 Days` clearing window for new PayPal and Fiverr seller accounts.
- **Typical ramp timeline (`2–4 months`)**: Confirm alignment with historical client results (`straightTalk.cards[3]` and `faqSection.items[timeline]`).

---

## 4. Visitor-Visible Draft Notices Controlled by `DRAFT_MODE`

Toggle `export const DRAFT_MODE: boolean = false;` in `data/placeholders.ts` to hide all draft-only UI elements at once:
1. `components/HeroBento.tsx`: Top-of-hero `hero.draftNotice` pill note.
2. `components/HeroBento.tsx`: Third proof-strip pillar (`Data Transparency / شفافیت اعداد` citing bracketed placeholder slots).
3. `components/PackageLedger.tsx`: `placeholderBadge` label above each track's price block.
4. `components/FieldRecords.tsx`: `placeholderTag` label (`در انتظار داده واقعی` / `Pending Real Data`) and `.placeholder-shimmer` animation on case record and reference cards.
