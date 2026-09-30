# Leftover — next session

> Ordered by priority. Tick items off here and move finished context into `context.md`.
> Owner: **me** = can be done by Claude in the repo, **you** = needs Aleksandar / Mirjana.

## 1. Verify the 2026-09-30 production deploy (me, first thing)

- [x] `/posvet` submission arrived by email (Aleksandar tested 2026-09-30, mail landed in aleksandar.bojic12@gmail.com).
- [x] **Booking widget → email** verified live by Aleksandar 2026-09-30 14:58 (service, price, date, time and payment method all correct; mail landed in his Gmail).
- [ ] **Where do Web3Forms emails go?** The test mail arrived in Aleksandar's Gmail, i.e. the access key is registered to that address. Decide with Mirjana: change the key's recipient in the Web3Forms dashboard to mirjana@akilea.si (or both) **before launch**, otherwise bookings never reach her.
- [x] Security headers, 404s (`/ne-obstaja`, `/blog/xyz`, `/uspesno`), robots, OG images, all 22 sitemap pages — verified live 2026-09-30.
- [x] `/api/availability` answers 503 (expected until Google is configured); booking falls back to email — verified live.
- [ ] Optional: link GitHub repo in Netlify so pushes deploy automatically (**you**, dashboard).

## 2. Phase B7 — Google Calendar go-live (you, then me)

Checklist for **you**, logged in as mirjana@akilea.si, with Mirjana's knowledge (full version in `plan.md`, "Google setup checklist"):

1. Google Cloud project (e.g. `akilea-booking`) → enable Google Calendar API.
2. Service account → JSON key. If key creation is blocked by org policy: allow `iam.disableServiceAccountKeyCreation` for this project, or fall back to OAuth refresh token (only `getAccessToken()` in `src/lib/google-calendar.ts` changes).
3. New calendar **"Akilea rezervacije"** → share with the service-account email, "Make changes to events" → copy its Calendar ID.
4. Share her **primary** calendar with the service account, "See only free/busy".
5. If sharing is refused: Admin console → Apps → Google Workspace → Calendar → Sharing settings → allow external sharing.
6. Netlify env vars (store only email + key, not the whole JSON; ~4 KB function env limit):
   `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` (with `\n`), `GOOGLE_BOOKING_CALENDAR_ID`, `GOOGLE_BUSY_CALENDAR_IDS` (primary ID + booking calendar ID, comma separated). Redeploy.

Then **me** (B7):
- [ ] Sandbox first: book → slot disappears → delete the event → slot returns. Also add a personal event on the primary calendar → slot disappears.
- [ ] Two parallel `POST /api/bookings` for one slot → exactly one 200, one 409.
- [ ] Check Netlify function logs for `Google Calendar unavailable` lines.
- [ ] Same on the real calendar, then write the report.

## 3. Content and decisions (you)

- [x] Facebook / Instagram URLs set in `SOCIAL_LINKS` (`src/config/site.ts`).
- [x] About photo self-hosted at `public/images/brand/mirjana-o-meni.jpg` — but it is only **547×365** (the old Google thumbnail), soft on retina. **you**: get the original file from Mirjana (3:4, min 1200×1600) and overwrite that path. No code change needed.
- [ ] **DNS for www.akilea.si**: keep at Domenca (Webtasy d.o.o.) or move to Netlify. After cutover: add domain in Netlify, apex → www redirect, re-check canonicals.
- [ ] **Privacy policy update** — see `privacy-policy.md`. Needs Mirjana's approval before any text changes on the site.
- [ ] **Cookie banner copy** mentions "analitiko" but the site has no analytics. Mirjana to decide wording (copy is hers).

## 4. Engineering follow-ups (me, after approval)

See `debt.md`. Highest value first:
- [ ] Booking calendar hydration mismatch (render calendar after mount).
- [ ] Before re-enabling Stripe: server-side price lookup, webhook, real success check, reserve calendar slot on the card path.
