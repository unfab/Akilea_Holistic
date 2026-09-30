# Privacy policy, terms and cookie notice

> Status 2026-09-30: **rewritten and committed** (commit "fix(legal): ..."). Aleksandar approved the changes; **Mirjana has not reviewed them yet** and nobody qualified in Slovenian data-protection law has checked the wording. This is not legal advice.

## What was changed (all Slovenian unless noted)

| Where | Change |
|---|---|
| `/pravilnik-o-zasebnosti` | Full rewrite: controller identified (AKILEA, Mirjana Groznik s.p., Šmarska cesta 5B, 6000 Koper, MŠ 9489983000, DŠ 28773977, mirjana@akilea.si, 040 863 594); purposes and legal bases per data flow; processors named (Netlify, Web3Forms, Google Workspace, MailerLite); transfers outside EU; retention; cookies and local storage table; rights incl. complaint to Informacijski pooblaščenec (Dunajska cesta 22, Ljubljana); health-data notice; "no analytics / no profiling / fonts self-hosted". Date 30. september 2026. |
| `/pogoji-poslovanja` | Provider identity added (address, MŠ, DŠ, not VAT-liable); cancellation channel added (phone / email); false sentence about online card payment (Stripe) replaced with "Plačilo se opravi na lokaciji."; new section 6 linking to the privacy policy; date updated. |
| Cookie banner (all 5 languages) | Removed the false "analytics" claim. Now says the site stores only the chosen language and the acknowledgement, and uses no analytics/advertising cookies. Link text put into the correct grammatical case (sl, hr, sr). |

## Data inventory (source for the policy — keep in sync with the code)

| Data flow | What | Where it goes | Code |
|---|---|---|---|
| Booking form | name, email and/or phone, service, date, time, payment method | Web3Forms → email; Google Workspace calendar "Akilea rezervacije" (after B7), plus hashed email/phone keys for the 3-per-contact limit | `BookingWidget.tsx`, `booking-service.ts` |
| /posvet form | name, email, phone (optional), message | Web3Forms → email | `posvet/page.tsx` |
| E-book / newsletter | whatever the MailerLite form asks | MailerLite hosted form | `page.tsx`, `e-knjiga`, `Footer.tsx` |
| Hosting | IP, user agent in server logs | Netlify | — |
| Browser storage | cookie `app_lang` (1 year), localStorage `akilea_lang`, `cookieConsent` | visitor's browser only | `LanguageContext.tsx`, `CookieBanner.tsx` |
| Online payment | OFF. Would add Stripe | — | `api/checkout` |

No analytics, no tracking pixels, no third-party fonts or images (all self-hosted since 2026-09-30).

## Update the policy when any of these change

- **Google Calendar goes live (B7):** the policy already says appointments are written to the calendar — true only after B7.
- **Stripe re-enabled:** add Stripe as processor + card data note, and restore the payment sentence in the terms.
- **Web3Forms recipient / other email tools change**, analytics added, new form, new embed, new third-party script.
- Update the date at the top of both pages.

## Open items

- [ ] Mirjana reads both pages and confirms they describe how she works. Ask her whether she wants a **fixed retention period** for bookings (now: "until no longer needed, unless law requires longer, e.g. accounting records").
- [ ] Web3Forms currently delivers to Aleksandar's Gmail. Change the recipient to Mirjana **before launch**, otherwise the policy ("we receive it by email") describes a mailbox that is not hers.
- [ ] Terms section 3 still says prices are "informativne narave" (informational). Consumer law expects the displayed price to be the price charged. Business decision for Mirjana; suggested wording: "Cene storitev so navedene na spletni strani v evrih."
- [ ] Have someone qualified check the consumer-law side of the terms (distance-contract information such as right of withdrawal for online bookings, cancellation fee of 50 %, complaints handling). Not covered by this rewrite.
- [ ] Not done on purpose: a consent-choice cookie banner. Only functional storage is used, so a notice is enough. Add real consent choices only if analytics or marketing tools are ever added.

## Research 2026-09-30 (AI-written checklist pasted by Aleksandar, then spot-checked online)

Verified against sources (search results; primary sites ip-rs.si and web3forms.com block automated fetching, so read them by hand if it matters):
- **Cookies:** ZEKom-2 Art. 225 — consent is not needed for cookies strictly necessary for a service the user asked for; if a site uses only exempt cookies, an information notice is enough (IP-RS). Our setup (language + notice acknowledgement) fits. The language cookie is only written when the user picks a language (`LanguageContext.setLanguage`), never on load.
- **Withdrawal:** ZVPot-1 Art. 134 gives 14 days for distance contracts; Art. 135 lists exceptions incl. leisure services performed on a precisely fixed date/time. Whether Mirjana's services count as "storitve za prosti čas" is not settled (massage probably yes; consulting unclear).
- **Out-of-court dispute resolution:** ZIsRPS Art. 32 — a business that recognises no IRPS provider must say so on its website / terms. Every online seller must also link the EU ODR platform (4th paragraph) — **check first**: the EU ODR platform was, to my knowledge, shut down in 2025, so a link may now be wrong.
- **Web3Forms** (per its DPA/privacy pages via search): company operates from India, infrastructure on AWS, Cloudflare, Hetzner; DPA with SCCs exists; **it stores submissions on its servers up to 3 years**, shorter if set per form (free plan: down to 7 days).

Not verified (article numbers and figures from the paste): retention numbers (10 years invoices, 3–5 years booking logs, 6–12 months inquiries), "8 working days" complaint deadline, ZDavP-2/ZDDV-1 article numbers, exact IP-RS guideline wording. Treat as leads, not as law.

### Gaps found — status

| # | Gap | Status |
|---|---|---|
| 1 | Policy omitted the Web3Forms copy (India, up to 3 years) | **Fixed 2026-09-30** (sections 3 and 4). After the dashboard retention is set (leftover.md), replace "največ tri leta oziroma krajše…" with the exact period. |
| 2 | Web3Forms account belongs to Aleksandar's email | **Open — Aleksandar** (leftover.md) |
| 3 | Terms lack withdrawal info, ZIsRPS statement, complaints handling, VAT wording | **Needs Mirjana** — drafts below |
| 4 | Language cookie lasted 1 year | **Fixed 2026-09-30** (30 days; policy section 5 updated). Set only after the user picks a language. |
| 5 | Health-data warning next to the forms | **Needs Mirjana** — draft below |
| 6 | Withdrawal consent checkbox at booking | **Needs Mirjana + legal check** — draft below |
| — | Invoicing / accounting purpose (Art. 6(1)(c)) missing | **Added 2026-09-30** ("Računi in računovodstvo") |

## Needs Mirjana's green light — draft wording

All drafts are Slovenian, unpublished, and **must be checked by someone qualified** before use. Article numbers come from the pasted checklist plus search; verify them. Once approved: paste into `src/app/pogoji-poslovanja/page.tsx` (and the forms), keep `Zadnja posodobitev/Veljavnost od` dates current, translate any new *form* text into en/hr/it/sr (`src/i18n/locales/*.ts`), deploy.

1. **Out-of-court dispute resolution (ZIsRPS Art. 32).** Mirjana chooses: recognise no provider (typical for a small business) or name one. Draft for "no provider":
   > „Podjetje v skladu z 32. členom Zakona o izvensodnem reševanju potrošniških sporov (ZIsRPS) ne priznava nobenega izvajalca izvensodnega reševanja potrošniških sporov kot pristojnega za reševanje potrošniškega spora, ki bi ga potrošnik lahko sprožil v skladu s tem zakonom.“
   Check the paragraph number, and whether a link to an EU/national dispute platform is still required (the EU ODR platform was, to my knowledge, shut down in 2025).
2. **Right of withdrawal (ZVPot-1 Art. 134/135).** Must be told to the customer *before* booking; missing info can extend the withdrawal period. Draft for the terms:
   > „Pravica do odstopa od pogodbe: Pri storitvah za prosti čas, ki jih izvedemo v točno določenem terminu (npr. intuitivna masaža), potrošnik v skladu z 135. členom ZVPot-1 nima pravice do odstopa od pogodbe, sklenjene na daljavo. Za druge storitve (npr. svetovanje) velja 14-dnevni rok za odstop; če potrošnik zahteva, da se storitev izvede v izbranem terminu, ob celotni izvedbi storitve pravico do odstopa izgubi.“
   Open: which of her services count as "leisure" (massage probably; consulting/posvet unclear). If some do not, a checkbox at booking may be needed (draft): „Strinjam se, da se storitev izvede v izbranem terminu, in potrjujem, da z njeno celotno izvedbo izgubim pravico do odstopa od pogodbe.“ — this changes the booking flow (new widget text + validation + translations); only implement on the legal check's advice.
3. **Complaints.** Mirjana decides the reply time (the checklist says 8 days is common practice — do not promise what she cannot keep). Draft:
   > „Pritožbe lahko pošljete na mirjana@akilea.si ali po pošti na naslov AKILEA, Mirjana Groznik s.p., Šmarska cesta 5B, 6000 Koper. Na pritožbo odgovorimo v [8] dneh.“
4. **VAT wording.** Terms say „nismo zavezanci za DDV“. The checklist suggests the statutory form: „Nisem zavezanka za DDV na podlagi 1. odstavka 94. člena ZDDV-1.“ Her accountant confirms the exact basis.
5. **Health warning next to the forms** (booking widget step 3 and /posvet). New visible text in 5 languages. Slovenian draft: „Prosimo, ne vpisujte podatkov o svojem zdravstvenem stanju; o tem se pogovoriva osebno.“ (The privacy policy already says this.)
6. **Prices ("informativne narave").** Consumer law expects the displayed price to be the price charged. Suggested: „Cene storitev so navedene na spletni strani v evrih.“ A voluntary tip does not need "informativne"; optional sentence: „Stranka lahko po lastni presoji doda napitnino.“ Aleksandar will ask her.
7. **Cancellation fee (50 %).** Legal in principle if proportionate; a high fee for early cancellation can be an unfair term. Confirm she is comfortable with 50 % and 24 h. Terms already say how to cancel.
8. **Retention.** Policy says "until no longer needed, unless law requires longer". Optional fixed periods to agree with her/accountant (the checklist's numbers are unverified): unbooked inquiries 6–12 months, booking logs 3–5 years, accounting records per tax law. Only promise what she will really delete.
9. **Who owns the customer data stream:** move the Web3Forms account to Mirjana (Aleksandar, leftover.md) — also matters for who is "processor" for AMS Solutions.
10. **Whole-page review** by Mirjana of privacy policy, terms and cookie notice; ideally by a lawyer.
