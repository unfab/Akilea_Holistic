# Context — Akilea Holistični center

> Last updated: 2026-09-30. Read this first, then `leftover.md`, then `rules.md`.
> This repo is **public** on GitHub. Never put secrets, keys or customer data in `tasks/`.

## What this is

Website for Akilea Holistični center, Mirjana Groznik s.p., Koper (intuitive massage, workshops, lectures, blog, e-book).
Replaces her old Wix site.

| | |
|---|---|
| Live | https://akilea.netlify.app (production domain www.akilea.si, DNS cutover not done yet) |
| Repo | github.com/unfab/Akilea_Holistic (public), branch `main` = production |
| Hosting | Netlify project `akilea` (site id `4346de5b-8692-48a2-93f5-7e7c4ae70f39`). **Not git-connected**: pushing to GitHub does not deploy. Deploys go through the Netlify API (see "Deploying" below) |
| Stack | Next.js 16.3.7 (App Router, Turbopack), React 19, Tailwind 4, TypeScript. No database |
| Languages | SL (default), EN, HR, IT, SR — client-side dictionaries in `src/i18n/locales/*.ts` |
| Forms | Web3Forms (booking email + /posvet), MailerLite links (e-book, newsletter) |
| Booking source of truth | Google Calendar (Phase B code done, credentials **not yet configured**) |

## Status

- **Live since 2026-09-30** (latest deploy `6abd068c56e4b76c171bf9fd`, commit `8eae483`; first deploy `6abd001ffcbeb02d04d52a1a`): Phase A + Phase B code. Verified live: headers, real 404s, robots, OG images, 22 pages load, booking falls back to email (Web3Forms mocked in the check).
- **Phase A (launch prep): done** — A1–A11 from `plan.md`.
- **Phase B (no double-booking): code done (B1–B6), B7 blocked** on the Google Cloud setup (see `leftover.md`).
  Until `GOOGLE_*` env vars exist, the booking APIs answer 503 and the widget uses the old email-only flow.
- Homepage "latest blog" card now reads `BLOG_POSTS[0]` (newest post first in `src/data/blogs.ts`).
- Online payment (Stripe) is **off** behind `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT`.

Work history: `git log --oneline` (conventional commits, one per plan task).

## Map of the code

| Area | Files |
|---|---|
| Site config (URL, social links, Web3Forms key, payment flag, default OG image) | `src/config/site.ts` |
| Booking rules (slot times, durations 105/50/50 min, buffer, lead time, 90-day horizon, 3 per contact) | `src/config/booking.ts` |
| Slot maths (Europe/Ljubljana, DST) | `src/lib/slots.ts` + test |
| Google Calendar REST client (JWT via node:crypto, no googleapis) | `src/lib/google-calendar.ts` + test |
| Booking logic (availability, create booking, race handling) | `src/lib/booking-service.ts` + test |
| Env → deps wiring | `src/lib/booking-deps.ts` |
| API | `src/app/api/availability/route.ts`, `src/app/api/bookings/route.ts`, `src/app/api/checkout/route.ts` (Stripe, 404 while flag off) |
| Booking UI | `src/components/BookingWidget.tsx` |
| Real 404s for unknown blog slugs and `/uspesno` | `src/proxy.ts` |
| SEO | `src/app/layout.tsx`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, per-route `layout.tsx` metadata |
| Security headers | `next.config.ts` |
| Blog content | `src/data/blogs.ts`, images in `public/images/blog/` |

## Booking flow (Phase B)

```
Widget ──GET /api/availability?month=YYYY-MM&service=N──▶ freeBusy(primary + "Akilea rezervacije") ──▶ free times per day
Widget ──POST /api/bookings──▶ validate, honeypot, limit 3/contact, re-check freeBusy, insert event,
                               post-check (earliest event wins, loser deletes itself → 409)
       ◀── 200 ok | 409 slot_taken | 400 | 429 | 503 unavailable (→ email-only fallback)
Widget ──▶ Web3Forms email to Mirjana (client side, after the calendar confirmed)
```

## Environment variables

| Variable | Set on Netlify? | Notes |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | yes (2026-09-30) | Required. Build-time inlined. Public by design (client-side form key) |
| `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` | no (defaults off) | `"true"` re-enables Stripe UI; needs redeploy |
| `NEXT_PUBLIC_SITE_URL`, `STRIPE_SECRET_KEY` | no | Only when payments are re-enabled |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_BOOKING_CALENDAR_ID`, `GOOGLE_BUSY_CALENDAR_IDS` | no | Phase B. See `.env.example` |

Local: `.env.local` (git-ignored) holds the Web3Forms key.

## Deploying

1. Commit and push `main` to GitHub (source of truth).
2. Export only committed files: `git archive main | tar -x -C <empty dir>` — never deploy the working tree (the tool zips everything except `node_modules`/`.git`, including the ~900 MB `.next` cache and `.env.local`).
3. Netlify connector `deploy-site` with the site id → run the returned `npx @netlify/mcp … --site-id … --proxy-path …` command **inside the export dir**. It builds on Netlify and waits until ready.
4. Verify live: `curl -I https://akilea.netlify.app`, 404s, and a browser pass (see `lessons.md`).

Optional improvement: link the GitHub repo in Netlify (Site configuration → Build & deploy) so pushes to `main` deploy automatically.

## Commands

```bash
npm run dev          # local dev
npm test             # node --test, 47 unit tests (slots, google client, booking service, date)
npm run lint         # must be clean
npm run build        # must pass
npx next start -p 3123   # production server for curl / browser checks
```
