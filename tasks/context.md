# Context — Akilea Holistični center

> Last updated: 2026-09-30 23:30. Read this first, then `leftover.md` (section 0 = DNS recheck), then `rules.md`.
> This repo is **public** on GitHub. Never put secrets, keys or customer data in `tasks/`.

## What this is

Website for Akilea Holistični center, Mirjana Groznik s.p., Koper (intuitive massage, workshops, lectures, blog, e-book).
Replaces her old Wix site.

| | |
|---|---|
| Live | https://akilea.netlify.app (production domain www.akilea.si, DNS cutover not done yet — see "Domain and DNS") |
| Repo | github.com/unfab/Akilea_Holistic (public), branch `main` = production |
| Hosting | Netlify project `akilea` (site id `4346de5b-8692-48a2-93f5-7e7c4ae70f39`). **Not git-connected**: pushing to GitHub does not deploy. Deploys go through the Netlify API (see "Deploying" below) |
| Stack | Next.js 16.3.7 (App Router, Turbopack), React 19, Tailwind 4, TypeScript. No database |
| Languages | SL (default), EN, HR, IT, SR — client-side dictionaries in `src/i18n/locales/*.ts` |
| Forms | Web3Forms (booking email + /posvet), MailerLite links (e-book, newsletter) |
| Booking source of truth | Google Calendar (Phase B code done, credentials **not yet configured**) |

## Status

- **Live since 2026-09-30** (latest deploy `6abd0d9862ca8482a79ef1db`, commit `f658325`; first deploy `6abd001ffcbeb02d04d52a1a`). 2026-09-30 evening: booking fix, social links, self-hosted about photo, rewritten privacy policy / terms / cookie notice: Phase A + Phase B code. Verified live: headers, real 404s, robots, OG images, 22 pages load, booking falls back to email (Web3Forms mocked in the check).
- **Phase A (launch prep): done** — A1–A11 from `plan.md`.
- **Phase B (no double-booking): code done (B1–B6), B7 blocked** on the Google Cloud setup (see `leftover.md`).
  Until `GOOGLE_*` env vars exist, the booking APIs answer 503 and the widget uses the old email-only flow.
- Homepage "latest blog" card now reads `BLOG_POSTS[0]` (newest post first in `src/data/blogs.ts`).
- Online payment (Stripe) is **off** behind `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT`.
- **2026-10-01, deployed (commit `53ab16f`, pushed to `main` 2026-10-01 ~20:10, verified live):** nine blog posts restored to Mirjana's full original Wix text (the earlier versions were shortened summaries). Verified by a word-level diff against the Wix pages. Post 8 (notranji otrok) deliberately omits the paragraphs announcing the 19.03.2026 tea party (past event). Inline photos restored (`dermatitis/`, new `moja-izkusnja-z-bolecinami-v-krizu/`). Blog text supports `**bold**` and `__italic__`, and a new `image` block type exists (`BlogPostView.tsx`). Čajanka 15.10 page now shows the poster (`public/images/delavnice/cajanka-balon-med-kaktusi.png`).
- **2026-10-01, same deploy:** Mirjana now sends her free slots for the next two weeks and everything else is closed. The daily grid `SLOT_TIMES` is replaced by `OPEN_SLOTS` (date → times) in `src/config/booking.ts`; the widget greys out every other day and `/api/bookings` rejects any other date/time. Poster also on the homepage Delavnice card and the `/delavnice` list card.
- **2026-10-01 evening, branch `fix/testimonials-layout-shift` → `main`:** homepage reviews carousel no longer moves the page on mobile. The slides differed in height (e.g. 1080/1095/1052 px at 375 px wide), so every 2 s rotation pushed everything below (booking calendar) up and down by 15–60 px. All slides now share one grid cell (`TestimonialsCarousel.tsx`), so the section keeps the tallest slide's height; inactive slides are `opacity-0`, `aria-hidden`, `inert`. Verified at 320–1280 px: booking widget position constant while slides rotate.

Work history: `git log --oneline` (conventional commits, one per plan task).

## Domain and DNS (cutover not done — snapshot taken 2026-09-30 ~22:50)

**Correction of earlier notes:** DNS does *not* sit at Domenca. Domenca is only the **registrar**; the nameservers point to **Wix** (`ns2.wixdns.net`, `ns3.wixdns.net`, TTL 1 day, not editable in Wix), so every record below lives in Wix's DNS panel. If the Wix plan is cancelled while the nameservers still point there, the site **and Mirjana's Google Workspace mail** stop resolving.

### Who holds what

| | |
|---|---|
| Domain | `akilea.si`, renewal due **28.5.2027** |
| Registrar | Domenca.com (Webtasy d.o.o.). Owner and payer: AKILEA, Mirjana Groznik s.p. (her personal Gmail is on the account; not recorded here, repo is public). Account has 1 domain, 0 hosting packages, 0 SSL certs. Whois privacy, expiry protection and active management show "Naroči" (not ordered) |
| Current DNS host | Wix (nameservers above) |
| Old site | Wix **Premium** plan, site "Akilea", domain listed as "Managed by third party / Connected by DNS", primary `https://www.akilea.si/` |
| New site | Netlify project `akilea`, team `aleksandar-bojic12's team`. Dashboard now shows "Deploys from GitHub with Next.js", so the repo looks linked since the earlier notes were written. **Verify a push to `main` really deploys** before dropping the `git archive` method |
| Canonical URL in code | `SITE_URL = "https://www.akilea.si"` (`src/config/site.ts`), so no code change is needed for the cutover |

Registrar panel (Domenca → domain row → "Uredi DNS strežnike") offers: (1) cPanel `cdns1.controlpanel.si`, `cdns2.controlpanel.si`; (2) **FreeDNS.si** `ns1.freedns.si`, `ns2.freedns.si`, `ns3.freedns.si` (zone editor = the "FreeDNS" button on the domain row); (3) other nameservers (currently `ns2.wixdns.net`, `ns3.wixdns.net`). Up to 6 custom NS fields.

### Complete Wix DNS zone (copied from Wix "Manage DNS Records"; also confirmed with `dig`)

| Type | Host | Value | Priority | TTL |
|---|---|---|---|---|
| A | `akilea.si` | `185.230.63.171` | | 1 h |
| A | `akilea.si` | `185.230.63.186` | | 1 h |
| A | `akilea.si` | `185.230.63.107` | | 1 h |
| CNAME | `www.akilea.si` | `cdn3.wixdns.net` | | 1 h |
| CNAME | `litesrv._domainkey.akilea.si` | `litesrv._domainkey.mlsend.com` | | 600 |
| TXT | `akilea.si` | `v=spf1 a mx include:_spf.mlsend.com include:_spf.google.com ~all` | | 600 |
| TXT | `akilea.si` | `mailerlite-domain-verification=47ddb3315292c381e3a9a159269b1d28c44da724` | | 600 |
| MX | `akilea.si` | `aspmx.l.google.com` | 10 | 1 h |
| MX | `akilea.si` | `alt1.aspmx.l.google.com` | 20 | 1 h |
| MX | `akilea.si` | `alt2.aspmx.l.google.com` | 30 | 1 h |
| MX | `akilea.si` | `alt3.aspmx.l.google.com` | 40 | 1 h |
| MX | `akilea.si` | `alt4.aspmx.l.google.com` | 50 | 1 h |
| NS | `akilea.si` | `ns2.wixdns.net`, `ns3.wixdns.net` | | 1 day |

- SRV and "Other MX records" sections in Wix are empty.
- `dig` (2026-09-30): no `google._domainkey` TXT (Google DKIM not set up), no `_dmarc` TXT. Optional hardening after cutover, not required.
- Wix A/CNAME records (first four rows) are **replaced**; everything else must be recreated unchanged. The `litesrv._domainkey` CNAME is MailerLite's DKIM — forgetting it hurts newsletter deliverability.

### Target zone (same records, only web records change)

| Type | Host | Value |
|---|---|---|
| A | `@` | Netlify load balancer `75.2.60.5` (confirm in Netlify → Domain management) |
| CNAME | `www` | `akilea.netlify.app` |
| CNAME | `litesrv._domainkey` | `litesrv._domainkey.mlsend.com` |
| TXT | `@` | SPF string and MailerLite verification string exactly as in the table above |
| MX | `@` | the five Google records, priorities 10/20/30/40/50 |

### Progress log (2026-09-30 ~23:10)

- Netlify: `akilea.si` (apex) and `www.akilea.si` added; apex is currently primary, www redirects to it, both "Pending DNS verification", certificate not provisioned yet (expected). Setting www as primary was blocked/pending while the certificate is being provisioned; redo after DNS points at Netlify. Netlify suggests apex `ALIAS → apex-loadbalancer.netlify.com` (if the DNS host supports it), fallback `A → 75.2.60.5`.
- Domenca FreeDNS zone for `akilea.si` already exists (Domenca → FreeDNS button → "Dodaj zapis" adds a record). Pre-existing content: SOA, NS ns1/ns2/ns3.freedns.si (TTL 3600), and **one TXT that is not in the Wix zone: `google-site-verification=DxedwP8iNy0askfzhhWbiWJ_rm1b-sp_N4ODRq21xGI`** (Google Workspace domain verification) — keep it.
- FreeDNS nameserver IPs: ns1 212.44.101.101 (Ljubljana), ns2 178.218.162.218 (Zagreb), ns3 5.144.175.1 (Milano).
- Nameservers at Domenca are still `ns2/ns3.wixdns.net`; the FreeDNS.si radio was only selected, not applied (**do not apply until the zone is complete**).

- **23:15** FreeDNS zone complete and verified with `dig` on ns1/ns2/ns3.freedns.si (A `75.2.60.5`, www CNAME, litesrv DKIM CNAME, SPF + MailerLite + Google TXT, 5 MX). No DNSSEC/DS at the registry.
- **23:25** Nameserver change to FreeDNS.si submitted: Domenca shows `ns1/ns2/ns3.freedns.si` as current. `.si` registry (`b.dns.si`) and public resolvers still return `ns2/ns3.wixdns.net` (TTL 7200) — waiting for propagation. Old Wix site still served meanwhile.
- **2026-10-01 17:35** Flip complete: registry and 1.1.1.1/8.8.8.8/Quad9/OpenDNS/AdGuard return FreeDNS NS, A `75.2.60.5`, www CNAME `akilea.netlify.app`, 5 Google MX. Netlify serves a Let's Encrypt cert (issued 2026-09-30 21:25 UTC) for `akilea.si` + `www.akilea.si`. By the evening `www.akilea.si` is primary (apex 301 → www).
- **A1 Protekt blocks the domain** (found 2026-10-01): A1's resolver (Whalebone) sinkholes `akilea.si` as "malware, phishing" to `109.239.187.96` (`blockpage.a1.si`), which presents a "Whalebone Sinkhole" cert → Chrome shows `NET::ERR_CERT_AUTHORITY_INVALID`, and HSTS blocks click-through. Affects A1 customers with A1 Protekt (seen on an iPhone hotspot, resolver 172.20.10.1). Not a site problem; needs a false-positive report to A1. **Report sent 2026-10-01 21:08** by Aleksandar via the a1.si contact form (copy to info@amssolutions.biz), quoting SinkholeID 3832. Only the domain is listed: on A1 DNS `akilea.netlify.app` resolves normally. Likely trigger: nameservers, IP and certificate all changed in one evening (looks like a hijacked domain).
- **Still to do after propagation:** verify `dig NS/A/MX/TXT akilea.si` via 8.8.8.8 and 1.1.1.1; Netlify "Pending DNS verification" clears and certificate issues; set `www.akilea.si` as primary in Netlify; mail test both directions; MailerLite domain check; cancel Wix Premium after 2–3 days.

### Cutover steps (Aleksandar)

1. Netlify → project `akilea` → Domain management → add `www.akilea.si` as **primary** (apex redirects to www once the apex A record points to Netlify).
2. Domenca → "FreeDNS" button → create the target zone above **while the nameservers are still Wix's**. Fallback if FreeDNS.si rejects a record type: Netlify DNS (zone then lives in Aleksandar's Netlify team).
3. Domenca → "Uredi DNS strežnike" → select **Storitev FreeDNS.si** → "Uveljavi". Same MX in both zones, so mail keeps flowing during propagation.
4. Verify: `dig +short NS/A/MX/TXT akilea.si`, `curl -I https://www.akilea.si` (Netlify certificate is issued automatically), apex → www redirect, a test mail to and from `mirjana@akilea.si`, a MailerLite domain-authentication check.
5. Only then cancel the Wix Premium plan (not before the nameservers have moved).
6. Update this file, `leftover.md`, and record the new DNS host. Decide later whether the Netlify site moves to a Netlify team Mirjana owns (site transfer; env vars must be re-entered).

Prerequisites from `leftover.md` before pointing the public domain at the new site: Web3Forms recipient (section 1) and, for online booking, B7 (section 2).

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

Only the dates and times in `OPEN_SLOTS` (`src/config/booking.ts`) are bookable. Mirjana sends free slots every ~2 weeks → edit `OPEN_SLOTS` → test, build, deploy. Without Google the widget still shows just those slots (no busy check), so a slot stays bookable after the first booking until it is removed from `OPEN_SLOTS`.

## Environment variables

| Variable | Set on Netlify? | Notes |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | yes (2026-09-30) | Required. Build-time inlined. Public by design (client-side form key) |
| `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` | no (defaults off) | `"true"` re-enables Stripe UI; needs redeploy |
| `NEXT_PUBLIC_SITE_URL`, `STRIPE_SECRET_KEY` | no | Only when payments are re-enabled |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_BOOKING_CALENDAR_ID`, `GOOGLE_BUSY_CALENDAR_IDS` | no | Phase B. See `.env.example` |

Local: `.env.local` (git-ignored) holds the Web3Forms key.

## Deploying

**Since 2026-10-01 the Netlify site is linked to GitHub: pushing `main` deploys production automatically** (verified: push of `53ab16f` was live ~20 s later; deploys show `manual_deploy: false`, `branch: main`). Push only what should go live. Then verify live (step 4).

Fallback (manual connector deploy), only if the GitHub link breaks:

1. Commit and push `main` to GitHub (source of truth).
2. Export only committed files: `git archive main | tar -x -C <empty dir>` — never deploy the working tree (the tool zips everything except `node_modules`/`.git`, including the ~900 MB `.next` cache and `.env.local`).
3. Netlify connector `deploy-site` with the site id → run the returned `npx @netlify/mcp … --site-id … --proxy-path …` command **inside the export dir**. It builds on Netlify and waits until ready.
4. Verify live: `curl -I https://akilea.netlify.app`, 404s, and a browser pass (see `lessons.md`).


## Commands

```bash
npm run dev          # local dev
npm test             # node --test, 47 unit tests (slots, google client, booking service, date)
npm run lint         # must be clean
npm run build        # must pass
npx next start -p 3123   # production server for curl / browser checks
```
