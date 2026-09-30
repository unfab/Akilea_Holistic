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
