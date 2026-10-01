# Akilea: Production Readiness Implementation Plan

Site: akilea.netlify.app (production domain www.akilea.si, DNS cutover later)
Client: Mirjana Groznik s.p.
Goal: launch without online payments, with a booking flow that cannot be double-booked.
Branches: `chore/production-readiness` (Phase A), `feature/booking-availability` (Phase B). No push, small commits.
Risk: MEDIUM overall. Dependency upgrade, Netlify config and the Google integration are the higher-risk steps.

Before writing code, read the relevant guides in `node_modules/next/dist/docs/` (per `AGENTS.md`): metadata, `not-found`, `opengraph-image`, `headers`, route handlers.

## Ground rules

- **No Slovenian copy changes.** Existing copy is never edited, including broken copy. Escaping `"` as `&quot;` in JSX is allowed because it renders identically. Any new visible text needs your approval first.
- No invented content, prices, testimonials or statistics.
- No new dependencies without asking. (Phase B is designed to need none.)
- MailerLite links (e-book form, newsletter) are confirmed working. Do not touch them.
- Git history is not rewritten. No secret was ever committed, so nothing needs rotating.

## Decisions already made

| Topic | Decision |
|---|---|
| Stripe Payment Links on `/storitve` | Hidden by the same flag as the widget button |
| Booking date bug | Fix only (Task A4). No Sunday blocking, no other Phase A widget changes |
| Next.js upgrade | Approved (16.3.0 to 16.3.7 plus `npm audit fix`) |
| Logo | Use `public/images/brand/akilea-emblem.png` (confirmed correct) |
| Domain / DNS | Later. Registrar is Domenca (Webtasy d.o.o.) but the nameservers are Wix's (corrected 2026-09-30, see `context.md` → "Domain and DNS"). No redirect config until cutover |
| Web3Forms | User tests the real submission |
| OG image | Built in code from the emblem plus existing site text only (see A7) |
| About photo | See A5c |
| Phase B outage behaviour | If Google is unreachable, fall back to email-only booking (no lost bookings) |
| Buffer between appointments | None extra. The fixed slots (09:00, 11:00, 13:30, 16:00, 18:00) are already 2 to 2.5 h apart, so even the longest service (1 h 45 min at 09:00, ends 10:45) leaves a 15 min gap before the next slot |
| Minimum lead time | Slots must simply be in the future. Kept as one constant (`MIN_LEAD_MINUTES`, default 0) so it can be raised later |
| "Slot taken" message (new copy, approved) | "Ta termin je zaseden. Prosimo, izberite drug termin." (period added to match the other messages) |
| Booking calendar | Dedicated calendar named "Akilea rezervacije". Busy times are read from her primary calendar and this one |
| Google setup | Done by you, logged in to her account (see the checklist in Phase B) |

## Phase A: launch prep

### A1. Dependency security
- Upgrade `next` and `eslint-config-next` to 16.3.7 (fixes 2 critical advisories). Run `npm audit fix` for `js-yaml` and `sharp`.
- Verify: `npm audit` has no critical or high; `npm run build` passes.
- Commit: `chore(deps): patch next and transitive vulns`

### A2. Config foundation
- New `src/config/site.ts`: site URL, social link constants (empty, marked TODO), helper `isOnlinePaymentEnabled()`.
- New `.env.example` with placeholders only. Fix `.gitignore`: `.env*` currently also ignores `.env.example`, so add `!.env.example`.
- Move the hardcoded Web3Forms key (`BookingWidget.tsx:122`, `posvet/page.tsx:26`) to `NEXT_PUBLIC_WEB3FORMS_KEY`.
- Verify: `git check-ignore .env.local` (ignored) and `git check-ignore .env.example` (not ignored); both forms still submit when the var is set.
- Commit: `chore: add env example and site config`

### A3. Stripe feature flag
`NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` (default `false`). When false:
- `BookingWidget.tsx`: the card button is not rendered; only "Rezerviraj (Plačilo na lokaciji)" remains.
- `ServiceAccordion.tsx` (fed by `storitve/page.tsx`): the Payment Links button is not rendered. The 3 `buy.stripe.com` links stay in the data.
- `api/checkout/route.ts`: returns 404 before touching Stripe.
- `uspesno/page.tsx`: calls `notFound()`.
- All Stripe code and the `stripe` packages stay in place, so re-enabling is a one-variable change plus a redeploy. `NEXT_PUBLIC_` values are inlined at build time.
- Verify: flag off means no Stripe UI and the API returns 404; flag on brings both buttons back.
- Commit: `feat: gate online payment behind feature flag`

### A4. Booking date bug
- `date.toISOString().split('T')[0]` shifts the date back one day in Slovenia (UTC+1/+2). Add `src/lib/date.ts` with a local `YYYY-MM-DD` formatter and use it in `BookingWidget.tsx` (lines 66 and 250).
- Verify: script run with `TZ=Europe/Ljubljana` (picking 15 Oct yields `2026-10-15`), plus a browser click-through with the Web3Forms request mocked.
- Commit: `fix(booking): send local date instead of UTC`

### A5. Self-hosted images
- **A5a.** Download all 13 unique `static.wixstatic.com` images at original size (strip the `/v1/fill/...` suffix) into `/public/images/...`. Open each one to name it in descriptive kebab-case. Update `page.tsx`, `storitve/page.tsx`, the three workshop pages and the `image:` fields in `blogs.ts` (no text fields).
- **A5b.** Navbar and Footer logo use `akilea-emblem.png`. Drop `unoptimized`, add `sizes` and dimensions. Existing alt text is kept as is. Delete the 5 unused starter SVGs.
- **A5c. About photo.** The photo at `page.tsx:389` (Google thumbnail, 547x365) is a real photo of Mirjana. It stays as is, marked with a TODO comment, until a replacement file arrives. It is the one remaining external host. When the file arrives (3:4, at least 1200x1600), swap it in and remove the last external reference.
- Verify: `grep -rE "wixstatic|gstatic" src` returns only the A5c TODO; visual check of every page; build passes.
- Commits: `chore(images): self-host wix images`, `chore: use local logo, remove unused assets`

### A6. Social links
- Footer Facebook and Instagram items read their URLs from `src/config/site.ts`. An empty URL means the `<li>` is not rendered. Link text is not changed.
- Verify: neither item renders now; setting a URL makes it appear.
- Commit: `fix(footer): hide social links until urls are set`

### A7. SEO
- Per-page canonicals for `pravilnik-o-zasebnosti` and `pogoji-poslovanja` (both currently inherit the homepage canonical). `noindex` on `/uspesno`.
- `robots.ts`: disallow `/api/` and `/uspesno`. `sitemap.ts`: remove the fake `lastModified: new Date()`.
- **OG image.** Add `src/app/opengraph-image.tsx` (built into Next, no dependency): 1200x630, cream background, `akilea-emblem.png`, and the existing site title text "Holistični center & intuitivna masaža Koper". No new copy. The emblem already carries "z ravnovesjem do zdravja". Verify č/š/ž render; if not, fall back to a static PNG. Twitter card becomes `summary_large_image`. Blog posts use their local images for OG.
- Verify: `curl` the built pages for canonical, robots and `og:image`.
- Commits: `fix(seo): canonicals, robots, noindex`, `feat(seo): add default og image`

### A8. 404 page
- `src/app/not-found.tsx` already exists and stays as is (copy untouched). Add `metadata` (title, `noindex`).
- Verify with `curl -I` on the production server: unknown route and unknown blog slug both return HTTP 404.
- Commit: `fix: noindex 404 page`

### A9. Netlify config
- `netlify.toml`: pinned `NODE_VERSION` (Next 16 needs Node 20.9+), security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`).
- No CSP (inline JSON-LD, Web3Forms and MailerLite would break). No domain redirect until DNS is decided.
- Risk: Netlify's secrets scanner may flag `NEXT_PUBLIC_WEB3FORMS_KEY` because it appears in the client bundle. If the deploy fails on that, set `SECRETS_SCAN_OMIT_KEYS=NEXT_PUBLIC_WEB3FORMS_KEY`.
- Verify: deploy preview, `curl -I` for the headers.
- Commit: `chore: add netlify.toml`

### A10. Lint to zero
- Currently 17 errors and 3 warnings. Escape `"` as `&quot;` (identical rendering), remove unused variables and `Link`, replace `error: any`.
- `CookieBanner.tsx:15` and `LanguageContext.tsx:24` (`set-state-in-effect`): targeted disable with a comment. Refactoring risks hydration mismatches in the language switcher.
- Verify: `npm run lint` is clean.
- Commit: `chore(lint): fix lint errors`

### A11. Final verification
- Fresh `npm ci`, lint, build. Production server: click through all 22 sitemap URLs, the booking flow with Web3Forms mocked, flag on and off. Grep for secrets and external hosts. Closing summary with TODO list and Netlify env list.

## Phase B: no double-booking (Google Calendar as the source of truth)

**Goal:** keep the current booking UI exactly as it is. Booked times disappear from the widget. A booking appears in Mirjana's Google Calendar automatically. Deleting the event frees the slot.

### How it works

```
Widget                     Site server (Next route handlers)            Google Calendar
  |  GET /api/availability?month=2026-10&service=1
  |------------------------->  freebusy query (Europe/Ljubljana)  ---->  busy intervals
  |<-- free times per day ----  remove slots that overlap busy time
  |  POST /api/bookings
  |------------------------->  validate, re-check freebusy, insert event ---> event created
  |<-- ok (or 409 slot_taken)
  |  then Web3Forms email to Mirjana (client-side, as today)
```

- The five fixed times (09:00, 11:00, 13:30, 16:00, 18:00) stay. A slot is free if `[start, start + service duration + buffer)` does not overlap any busy event on her calendar, and the start is in the future. Because every event counts as busy, Mirjana can also block time (holiday, appointment) simply by adding an event.
- A fully booked day is greyed out like a past day. No new text.
- Service durations become a numeric config (the site has "1 h 45 min" as text). Confirm against the `servicesPage.items` order in `sl.ts`.
- **Auth without dependencies:** Google service account, signed JWT (RS256 via `node:crypto`), REST calls with `fetch`. No `googleapis` package.
- Web3Forms email stays client-side (its free plan blocks server-side calls) and is sent only after the server confirms the slot.
- **Failure mode (decided):** if Google is unreachable, the widget falls back to today's behaviour (all slots shown, email only). Double-booking protection is off during the outage, but Mirjana never loses a booking.
- **Booking hours:** only the five fixed slots are offered, on every day of the week, as today. No new business-hours rules.
- **New copy:** on a 409 the widget shows "Ta termin je zaseden. Prosimo, izberite drug termin." (approved), refreshes availability and keeps the customer's details.
- **Race condition:** two people confirming the same slot at the same moment. The server re-checks freebusy immediately before inserting. After inserting, it re-checks once more and removes its own event if another one overlaps, and returns 409. This is not perfectly atomic but is good enough for this traffic.
- **Abuse:** a public form that writes to a calendar can be spammed. Mitigations: server-side validation and honeypot check, slot must be on the allowed list within a booking horizon (default 90 days), and a maximum of 3 upcoming bookings per email or phone. Residual risk: someone can still fill slots with fake bookings. Mirjana would delete the events. Cloudflare Turnstile is the next step if this happens.
- **Privacy:** the event holds name, phone and email, which is stored in Mirjana's Google Workspace calendar. The privacy policy page should mention this. That copy is yours and Mirjana's to change; I will not edit it.

### Google setup checklist (you, logged in to mirjana@akilea.si; can happen in parallel with Phase A)
Do this with Mirjana's knowledge, since it grants an app access to her calendar.

1. **Project and API.** Go to console.cloud.google.com, create a project (e.g. "akilea-booking"), then enable "Google Calendar API" under APIs & Services.
2. **Service account.** IAM & Admin, Service Accounts, Create. Note its email (`...@<project>.iam.gserviceaccount.com`). Then Keys, Add key, JSON. Keep the downloaded file out of the repo.
   - **If key creation is blocked** ("Service account key creation is disabled by organization policy"): an org policy admin has to allow it for this project (policy `iam.disableServiceAccountKeyCreation`). If that is not possible, use Plan B: an internal OAuth app for mirjana@akilea.si with a stored refresh token. The auth code sits behind one `getAccessToken()` function, so switching is contained.
3. **Booking calendar.** In Google Calendar create a new calendar called "Akilea rezervacije". Under its Settings and sharing, "Share with specific people", add the service account email with "Make changes to events". Copy the Calendar ID from "Integrate calendar".
4. **Primary calendar.** Share her primary calendar with the same service account email with "See only free/busy (hide details)". This is what makes her other events block slots.
5. **External sharing may be restricted.** The service account is outside the akilea.si domain. If Google refuses the share, in the Admin console go to Apps, Google Workspace, Calendar, Sharing settings, External sharing options and allow sharing outside the organisation.
6. **Netlify env vars:** `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_BOOKING_CALENDAR_ID` (the new calendar), `GOOGLE_BUSY_CALENDAR_IDS` (her primary calendar ID plus the booking calendar ID). Watch the Netlify total env-size limit for functions (about 4 KB): store only the email and the private key, not the whole JSON file.

### Tasks (tests first, with `node --test`, no new test framework)

| # | Task | Verify |
|---|---|---|
| B1 | `src/lib/slots.ts`: pure slot logic (overlap, duration, buffer, lead time, Europe/Ljubljana with DST) plus tests, including the DST days 2026-03-29 and 2026-10-25 | Unit tests pass |
| B2 | `src/lib/google-calendar.ts`: JWT auth, `freebusy`, `insertEvent`, `getAccessToken()` abstraction. Tests with mocked `fetch` | Unit tests pass |
| B3 | `GET /api/availability`: month view, no-store cache | Curl against a real test calendar |
| B4 | `POST /api/bookings`: validation, honeypot, per-contact limit, re-check, insert, post-insert check, 409 handling | Integration test, plus two parallel requests for one slot: exactly one wins |
| B5 | Wire `BookingWidget.tsx`: load availability on month change, grey out full days, hide taken times, call `/api/bookings` before the Web3Forms email. Layout and styling unchanged | Browser click-through against the test calendar |
| B6 | Failure mode (per your decision), env docs, `.env.example` entries | Kill the credentials and confirm the chosen behaviour |
| B7 | End-to-end on a sandbox calendar: book, see it vanish, delete the event, see it return; then the same on the real calendar | Full report |

Commits: one per task, prefixes `feat(booking):` and `test(booking):`.

## Open decisions

All Phase B decisions are recorded in the table at the top. Still open:

1. About photo: original file from Mirjana (recommended). Alt text names her ("Mirjana Groznik - Akilea Holistični center").
2. Facebook and Instagram URLs.
3. DNS: move the zone from Wix to Domenca FreeDNS (fallback Netlify DNS); steps in `context.md` → "Domain and DNS".
4. Whether the Google setup is done before Phase B starts (B3 onwards needs a real test calendar).

## Netlify environment variables

| Variable | Needed for | Notes |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Booking email, /posvet form | **Required before first deploy**; baked in at build time |
| `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` | Stripe flag | Default `false`; a change needs a redeploy |
| `NEXT_PUBLIC_SITE_URL` | Stripe return URLs | Only when re-enabling payments |
| `STRIPE_SECRET_KEY` | Stripe | Only when re-enabling payments |
| `GOOGLE_*` (4 vars, see Phase B) | Availability and calendar | Phase B only |
| `SECRETS_SCAN_OMIT_KEYS` | Netlify secrets scanner | Only if the deploy trips on the Web3Forms key |

## Remaining TODOs after launch prep

- About photo (A5c), Facebook and Instagram URLs (A6), DNS (see above).
- Before re-enabling Stripe: server-side price lookup (the checkout route currently trusts the client's price), a webhook, and a real success check on `/uspesno`.
