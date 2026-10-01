# Technical debt

> Known shortcuts and weak spots. Severity: HIGH = user-visible bug or risk, MED = worth fixing soon, LOW = cleanup.

| # | Sev | Where | Debt | Fix idea |
|---|---|---|---|---|
| D1 | HIGH | `src/components/BookingWidget.tsx` | `today` is computed during render of a statically prerendered page. When the visit date differs from the build date the server HTML disagrees with the client: React error #418 (hydration mismatch) when the month changed; within the same month, days between build date and today may still look clickable (click is ignored). Pre-existing, found 2026-09-30. | Render the calendar grid only after mount (`useSyncExternalStore` / mounted flag) or skeleton until mounted. |
| D2 | HIGH (if Stripe re-enabled) | `src/app/api/checkout/route.ts`, `uspesno/page.tsx` | Checkout trusts the price from the client; no webhook; `/uspesno` shows success without checking the session; card path does not reserve the calendar slot. | Server-side price from `servicesPage.items`, Stripe webhook, verify `session_id`, call `/api/bookings` before checkout. Keep the flag off until done. |
| D3 | MED | `src/lib/booking-service.ts` | Double-booking protection is "re-check + post-insert check", not atomic. Relies on Google listing the rival event in time. Fine for this traffic. | If it ever fails: per-slot lock (e.g. Netlify Blobs with conditional write). |
| D4 | MED | `/api/bookings` | Public endpoint writes to a calendar. Mitigated by validation, honeypot, 90-day horizon, 3 bookings per email/phone. Someone can still fill slots with fake data. | Cloudflare Turnstile if abuse appears. |
| D5 | MED | `/api/availability` | Until Google is configured every homepage visit logs a red 503 in the browser console. | Goes away with B7. Alternatively return 200 `{ available: false }`. |
| D6 | MED | `src/data/blogs.ts` `getBlogPost` | Fuzzy matching (`p.slug.startsWith(normalized)`) means very short slugs like `/blog/m` resolve to a post. Deliberate for old Wix links, but loose. | Replace with an explicit alias map of real Wix URLs (check Google Search Console for inbound links). |
| D7 | LOW | `src/proxy.ts` | Exists only because root `loading.tsx` makes `notFound()` a soft 404. Imports the whole blog data file. | If `loading.tsx` is ever removed, drop the proxy and use `dynamicParams = false` + aliases. |
| D8 | LOW | many `layout.tsx` / `page.tsx` | Canonical URLs hardcode `https://www.akilea.si` instead of `SITE_URL`. | Replace with relative canonicals (metadataBase is set) or `SITE_URL`. |
| D9 | LOW | `BookingWidget.tsx` | Alert texts are hardcoded Slovenian (pre-existing pattern), not in i18n. New slot-taken text follows the same pattern. | Move to `t.bookingWidget.*` with translations (needs approved copy per language). |
| D10 | LOW | homepage blog card | Title/excerpt of the latest post are Slovenian in all languages (same as `/blog`). Blog posts have no translations. | Only if blog translation is ever wanted. |
| D11 | LOW | `src/app/opengraph-image.tsx` | Emblem source is only 220×165, upscaled 1.5× → slightly soft. | Get a vector / high-res logo. |
| D12 | LOW | `npm test` | Node prints `MODULE_TYPELESS_PACKAGE_JSON` warning (no `"type"` in package.json). Harmless. | Leave, or set `"type": "module"` after checking config files. |
| D13 | LOW | security | No CSP (inline JSON-LD, Web3Forms, MailerLite). | Nonce-based CSP if the site ever handles logins/payments. |
| D14 | LOW | `generateStaticParams` in `blog/[slug]/page.tsx` | Contains hand-written alias slugs (`maternica`, `dam-tebi`, …) that duplicate `getBlogPost` logic. | Derive from the alias map (see D6). |
| D15 | MED | `src/config/booking.ts` `OPEN_SLOTS` | Free slots are hand-edited from Mirjana's messages and need a deploy each time; until B7 a booked slot stays bookable (accepted 2026-10-01: Mirjana confirms every booking). | After B7, read open slots from her calendar (e.g. "Prosto" events) instead of the config list. |
| D16 | LOW | `TestimonialsCarousel.tsx` | Auto-rotates every 2 s (hard to read a whole review) and ignores `prefers-reduced-motion`. | 6–8 s interval, pause on reduced motion. Needs Aleksandar's OK (changes the feel). |
