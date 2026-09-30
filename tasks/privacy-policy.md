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

### Gaps found in what is live now (not yet changed)

1. **Privacy policy omits the Web3Forms copy.** It says data goes by email; in fact Web3Forms keeps a copy (max 3 years) and is based in India. Fix the text and set a short retention in the Web3Forms dashboard for the key `NEXT_PUBLIC_WEB3FORMS_KEY`.
2. **The Web3Forms account belongs to Aleksandar's email.** Mirjana's customers' data sits in his account. Move the key/account to Mirjana (or a shared AMS Solutions account with a DPA) before launch.
3. **Terms lack:** withdrawal-right information (missing information can extend the withdrawal period by 12 months, per the paste — verify Art. 136), ZIsRPS statement, complaints contact and reply time, VAT wording ("nisem zavezanec za DDV" — current text says "nismo zavezanci").
4. **Language cookie lives 1 year** and is redundant (localStorage already holds it). Shorten to ≤ 30 days or drop the cookie; then update section 5 of the policy.
5. **Health data:** the policy asks people not to send health details; the paste additionally says the form itself should carry that instruction. Needs new visible text near the booking/posvet forms (Mirjana's approval).
6. **Withdrawal consent at booking** (a checkbox for services not covered by the leisure exception) would be new UI text and a change to the booking flow — only if the legal check says so.
