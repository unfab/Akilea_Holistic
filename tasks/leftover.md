# Leftover — next session

> Ordered by priority. Tick items off here and move finished context into `context.md`.
> Owner: **me** = can be done by Claude in the repo, **you** = needs Aleksandar / Mirjana.

## 0. NEXT SESSION FIRST: DNS cutover recheck (me, then you)

State at end of 2026-09-30: nameserver change to FreeDNS.si submitted at Domenca and shown there; the `.si` registry still listed Wix (`ns2/ns3.wixdns.net`). FreeDNS zone is complete and verified. Full details and the record table: `context.md` → "Domain and DNS".

Recheck (me):
- [ ] `dig @b.dns.si akilea.si NS +norecurse +noall +authority +answer` → expect `ns1/2/3.freedns.si`. Then `dig @8.8.8.8` and `@1.1.1.1` for `NS`, `A` (expect `75.2.60.5`), `MX` (5 Google), `TXT` (SPF, MailerLite, Google verification), `www` CNAME (expect `akilea.netlify.app`), `litesrv._domainkey` CNAME.
- [ ] `curl -I https://akilea.si` → 301 to `https://www.akilea.si/` served by Netlify (not Wix: no `x-wix-*` / `x-meta-site-id` headers); `curl -I https://www.akilea.si` → 200; cert issued.
- [ ] If still Wix after ~24 h: check Domenca panel still shows FreeDNS, then contact Domenca support (04 58 35 444).

Then you:
- [ ] Netlify → Domain management: both domains verified, then **set `www.akilea.si` as primary** (apex redirects to it). Retry HTTPS certificate if it shows an error.
- [ ] Mail test both ways with `mirjana@akilea.si`; MailerLite → domain authentication check.
- [ ] **2–3 days after the flip:** cancel the Wix Premium plan (and check nothing else is still attached to the Wix account that she needs: contacts, inbox, blog export).
- [ ] Before/at launch: Web3Forms recipient → `mirjana@akilea.si` (section 1 below).
- [ ] Optional hardening: DMARC TXT and Google DKIM (neither exists today).

## 0b. A1 Protekt blocks akilea.si (you, urgent)

- [x] False-positive report sent to A1 2026-10-01 21:08 (a1.si contact form; copy in info@amssolutions.biz).
- [ ] **Recheck daily until fixed** (on A1 mobile data / hotspot: `dig +short akilea.si` → must be `75.2.60.5`, not `109.239.187.96`). If no answer in ~3 working days, call A1 support and quote SinkholeID 3832.
- Background: A1 customers with A1 Protekt get a certificate error instead of the site (A1's DNS sinkholes the domain as "malware, phishing"; details in `context.md` → Domain and DNS). Report the false positive to A1 (A1 Protekt page https://www.a1.si/a1-protekt / A1 support) and ask them to unlist `akilea.si` and `www.akilea.si`. Recheck: on A1 mobile data, `dig +short akilea.si` must give `75.2.60.5`, not `109.239.187.96`.
- [x] DNS flip done, `www.akilea.si` primary (2026-10-01). Remaining from section 0: mail test, MailerLite check, cancel Wix after 2–3 days.

## 0d. Legal terms — done 2026-10-03; open follow-ups

**All of Mirjana's legal answers are live** (2026-10-01 complaints/VAT/prices/health note; 2026-10-03 the rest, branch `feat/legal-terms-final`, terms "Veljavnost od: 3. oktober 2026"):
- Cancellation (her final rule, email 2. 10.): **first** cancel / reschedule / no-show is free at any time (new term, or full refund if prepaid); every **later** one needs ≥ 24 h notice, otherwise **70 %** "nadomestilo za rezerviran termin" (if prepaid: keep 70 %, refund 30 %); if she cancels → new term or full refund. Applies to every booking channel (web, e-mail, phone, SMS).
- Withdrawal section (ZVPot-1 134/135), no tick box at booking (she agreed: online booking only reserves, payment is after the treatment).
- ZIsRPS "ne priznava nobenega izvajalca" statement in section 7.
- Branch `feat/legal-terms-mirjana` is superseded (old drafts); can be deleted.

Open:
- [x] **Workshops** live 2026-10-05 (branch `feat/legal-workshops`, terms section 3, "Veljavnost od: 5. oktober 2026"), from her email 4./5. 10.: free sign-off up to **3 days** before (she answered "DA" to the 3-day example) → full refund, transfer to the next workshop, or a substitute (name + surname); later / no-show → she **keeps 30 %, refunds 70 %**; if she cancels → full refund or next workshop (added by us, mirrors the massage rule). Massage points 2/3 reworded so "on time = free" vs "late = 70 % fee, 30 % back" is explicit (no rule change).
- [x] Mirjana confirmed 2026-10-05: 3 days, 30 % kept for workshops (70 % for massage), and a late canceller who sends a substitute pays nothing (added to terms). Lectures are B2B ("po dogovoru") → conditions in the offer. E-book: if it becomes paid, add a digital-content line.
- [x] Google Forms (čajanka sign-up) added to `/pravilnik-o-zasebnosti` 2026-10-03 (section 2 purpose, section 3 processor, section 4 retention "do izvedbe dogodka"). **Tell Mirjana** she promises to delete sign-ups after each event (Google Forms → Odgovori → izbriši).
- [ ] Mirjana will have someone check the terms; apply their remarks. Lawyer question still open: is massage a "leisure service" (ZVPot-1 135)?
- [ ] `/posvet` placeholder "morebitne težave" next to the health note: ask her whether to drop those words (not approved yet).
- [ ] Accountant: how to invoice the 70 % fee (and the 30 % refund when prepaid); fixed retention periods (§8).
- [ ] Web3Forms account → Mirjana (3b). **SMS her first** (she asked 4. 10.), then send the request; she confirms. No meeting needed: Aleksandar requests a new access key for mirjana@akilea.si, she forwards the Web3Forms email with the key; then set `NEXT_PUBLIC_WEB3FORMS_KEY` on Netlify + `.env.local`, redeploy.

## 0c. Open slots (me, every ~2 weeks)

- [ ] When Mirjana sends new free slots, replace `OPEN_SLOTS` in `src/config/booking.ts` and deploy. Current list ends 22.10.2026 (2026-10-06: added 20.–22. 10., closed 8. and 10. 10. at her request; 2026-10-10: closed 22. 10. 18:00); after that the calendar shows no free day.
- Until B7 (Google) is live, a booked slot stays bookable. Aleksandar decided 2026-10-01 this is fine: Mirjana confirms every booking herself.

## 1. Verify the 2026-09-30 production deploy (me, first thing)

- [x] `/posvet` submission arrived by email (Aleksandar tested 2026-09-30, mail landed in aleksandar.bojic12@gmail.com).
- [x] **Booking widget → email** verified live by Aleksandar 2026-09-30 14:58 (service, price, date, time and payment method all correct; mail landed in his Gmail).
- [ ] **Where do Web3Forms emails go?** The test mail arrived in Aleksandar's Gmail, i.e. the access key is registered to that address. Decide with Mirjana: change the key's recipient in the Web3Forms dashboard to mirjana@akilea.si (or both) **before launch**, otherwise bookings never reach her.
- [x] Security headers, 404s (`/ne-obstaja`, `/blog/xyz`, `/uspesno`), robots, OG images, all 22 sitemap pages — verified live 2026-09-30.
- [x] `/api/availability` answers 503 (expected until Google is configured); booking falls back to email — verified live.
- [x] Push to `main` deploys automatically (verified 2026-10-01). Was: Netlify dashboard now shows "Deploys from GitHub" (seen 2026-09-30 evening), so the repo looks linked. Verify that a push to `main` really triggers a deploy and that the build has `NEXT_PUBLIC_WEB3FORMS_KEY`; then update the Deploying section in `context.md`.

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
- [ ] **DNS for www.akilea.si** (**you**): registrar is Domenca, but the nameservers are at **Wix**, which also hosts her Google mail records. Decided direction: recreate the zone in Domenca's FreeDNS, then switch the nameservers away from Wix, then cancel Wix. Full record table, target zone and cutover steps are in `context.md` → "Domain and DNS". Canonicals already use `https://www.akilea.si`.
- [ ] **Legal items that need Mirjana's green light** — full list with ready-to-paste Slovenian drafts in `privacy-policy.md` ("Needs Mirjana's green light"); **a Slovenian briefing to read to her, with law and article for each point, is `mirjana-pregled-sl.md`**: ZIsRPS statement, withdrawal-right information, complaints handling + reply time, VAT wording, health warning next to the forms (5 languages), price wording / tips, cancellation fee, fixed retention periods, whole-page review (ideally by a lawyer).

## 3b. Web3Forms (you, before launch)

- [ ] In the Web3Forms dashboard set the **retention of stored submissions** for the form key to a short period (e.g. 30 days — Mirjana gets each submission by email anyway). Then update the sentence in `/pravilnik-o-zasebnosti` section 4 ("največ tri leta oziroma krajše…") to the exact period.
- [ ] **Move the Web3Forms account to Mirjana** (her email as owner/recipient), create a new access key, set `NEXT_PUBLIC_WEB3FORMS_KEY` on Netlify (redeploy) and in `.env.local`. Until then customer data goes to your Gmail.
- [ ] Optionally save Web3Forms' DPA (https://web3forms.com/dpa) with the business records.

## 3c. Blog text restore (2026-10-01)

- [x] **Deployed** 2026-10-01 (`53ab16f`), nine posts + čajanka page verified live. Was: deploy branch `fix/blog-full-text` (Aleksandar approves; steps in `context.md` → Deploying) and check the nine posts + `/delavnice/cajanka-o-custvih` live.
- [ ] Mirjana said she will email corrected texts; apply them on top. The restored text is verbatim from Wix and **keeps her typos** (e.g. "odnosda", "doseglji", "stiuacijah", "Terorijo", "sde umaknejo", "13let"). Ask her whether to fix them.
- [ ] **Old Wix URLs `/post/<slug>` have no redirect to `/blog/<slug>`.** After the DNS cutover every old link (Facebook, Google) would 404. Add redirects in `next.config.ts` for the 9 posts (Wix slugs differ for two: `globoka-sprostitev-telesa-z-intuitivno-masažo-v-koper` → dermatitis, `odkrijte-prednosti-intuitivne-masaže-z-akileo-v-sloveniji` → 5 tipov). Do this **before** the nameserver flip completes.
- [ ] Post 8 omitted the 19.03.2026 tea party paragraphs (event is past). Add back only if she wants them.
- [ ] Dermatitis post: the invented image captions were removed (photos now sit inline in the original order; first photo is the cover).

## 4. Engineering follow-ups (me, after approval)

See `debt.md`. Highest value first:
- [ ] Booking calendar hydration mismatch (render calendar after mount).
- [ ] Before re-enabling Stripe: server-side price lookup, webhook, real success check, reserve calendar slot on the card path.
