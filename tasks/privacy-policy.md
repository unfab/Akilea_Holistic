# Privacy policy — gap analysis and draft

> Status 2026-09-30: **nothing here is published.** The live page `/pravilnik-o-zasebnosti` is unchanged.
> Any change to the page needs Mirjana's approval (her text, her legal responsibility). This is not legal advice;
> for certainty have it checked against GDPR / ZVOP-2 by someone qualified.

## 1. What the site actually does with personal data (inventory from the code)

| Data flow | What | Where it goes | Code |
|---|---|---|---|
| Booking form | name, email and/or phone, service, date, time | Web3Forms (email relay) → Mirjana's inbox | `BookingWidget.tsx` |
| Booking → calendar (after B7) | same data as event title/description + hashed email/phone keys | Google Workspace calendar "Akilea rezervacije" (Google, US processor) | `booking-service.ts` |
| /posvet form | name, email, phone, message | Web3Forms → inbox | `posvet/page.tsx` |
| E-book / newsletter | whatever the MailerLite form asks | MailerLite (link to their hosted form) | `page.tsx`, `e-knjiga`, `Footer.tsx` |
| Hosting / logs | IP address, user agent (server logs) | Netlify (US) | — |
| About photo | visitor IP (image request) | Google (`encrypted-tbn0.gstatic.com`) — goes away when the photo is self-hosted | `page.tsx` |
| Online payment (currently OFF) | name, email, card data | Stripe | `api/checkout` |
| Browser storage | `localStorage.akilea_lang`, cookie `app_lang` (language), `localStorage.cookieConsent` | visitor's browser only | `LanguageContext.tsx`, `CookieBanner.tsx` |

**No analytics, no tracking pixels, no ads.** Fonts are self-hosted by Next.js (no Google Fonts requests).

## 2. Gaps in the current page

1. **Controller not identified** — no "Mirjana Groznik s.p., Šmarska cesta 5B, 6000 Koper" with contact.
2. **Processors not named** — Web3Forms, Google (calendar), MailerLite, Netlify, (Stripe). The page says data is never shared with third parties without consent; processors acting on her behalf should still be disclosed.
3. **Transfers outside the EU** (US providers) not mentioned.
4. **Legal basis** missing (booking = steps before/performance of a contract; newsletter = consent).
5. **Retention period** missing (how long bookings / emails / calendar events are kept).
6. **Right to complain** to the Informacijski pooblaščenec (www.ip-rs.si) missing; other rights (restriction, objection, portability) missing.
7. **Cookies/storage** not described; the cookie banner mentions "analitiko", which the site does not use.
8. Health-related context: massage bookings may reveal health information only if customers write it in the /posvet message. Worth a sentence asking not to send health details by form.

## 3. Draft additions (Slovenian, for Mirjana to review)

> PREDLOG — ni objavljeno. Oklepaji [ ] = Mirjana mora dopolniti.

**Upravljavec osebnih podatkov**
Upravljavec je Mirjana Groznik s.p., Šmarska cesta 5B, 6000 Koper, e-pošta: mirjana@akilea.si.

**Pravna podlaga**
Podatke iz obrazca za rezervacijo in posvet obdelujemo, ker so potrebni za dogovor o terminu in izvedbo storitve. Za prejemanje e-novic podatke obdelujemo na podlagi vaše privolitve, ki jo lahko kadarkoli prekličete.

**Obdelovalci**
Za delovanje spletne strani uporabljamo zunanje ponudnike, ki podatke obdelujejo v našem imenu:
- Netlify (gostovanje spletne strani),
- Web3Forms (posredovanje sporočil iz obrazcev na naš e-poštni naslov),
- Google Workspace (koledar, v katerega se zapišejo rezervacije),
- MailerLite (pošiljanje e-novic),
- [Stripe (spletno plačilo), če bo ponovno vključeno].
Nekateri ponudniki imajo sedež v ZDA; prenos poteka na podlagi ustreznih zaščitnih ukrepov (standardne pogodbene klavzule oziroma okvir EU-ZDA za zasebnost podatkov).

**Hramba**
Podatke o rezervacijah hranimo [npr. 2 leti po zadnjem obisku], nato jih izbrišemo. Podatke za e-novice hranimo do preklica prijave.

**Piškotki in lokalna shramba**
Spletna stran shrani le izbrani jezik (piškotek `app_lang` in lokalna shramba) in vašo potrditev obvestila o piškotkih. Analitičnih ali oglaševalskih piškotkov ne uporabljamo.

**Vaše pravice**
Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave, ugovora in prenosljivosti podatkov ter pravico do preklica privolitve. Pišite nam na mirjana@akilea.si. Če menite, da obdelava ni zakonita, lahko vložite pritožbo pri Informacijskem pooblaščencu (www.ip-rs.si).

**Zdravstveni podatki**
Prosimo, da v obrazce ne vpisujete podrobnosti o svojem zdravju; o tem se pogovoriva osebno.

## 4. Related

- Cookie banner (`sl.ts` → cookie text) says "analitiko" — suggest removing that word once Mirjana agrees.
- `/pogoji-poslovanja` section 3 says payment by card online is possible — not true while `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` is off. Mirjana to decide the wording.
- Update "Zadnja posodobitev" on the page when the text changes.
