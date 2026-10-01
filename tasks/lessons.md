# Lessons

> Things that cost time or were surprising. Add one entry per lesson: what happened, why, what to do.

## Next.js 16

- **Read `node_modules/next/dist/docs/` before writing Next code** (per `AGENTS.md`). `middleware` is now `proxy` (`src/proxy.ts`, export `proxy`), GET route handlers are dynamic by default.
- **Root `loading.tsx` turns `notFound()` into a soft 404.** Every page streams inside Suspense, so the status is already 200 when `notFound()` throws (only `noindex` is added). Real 404 → decide before rendering, in `src/proxy.ts`, by rewriting to an unmatched path.
- **`NEXT_PUBLIC_*` is inlined at build time.** Changing it on Netlify needs a redeploy. `process.env.NEXT_PUBLIC_X` must be written literally for inlining to work.
- **Metadata merges shallowly.** A segment that sets `openGraph` loses the inherited `opengraph-image`. Spread `DEFAULT_OG_IMAGE` (`src/config/site.ts`) into any `openGraph` object.
- **React compiler lint (`react-hooks/immutability`, `set-state-in-effect`)** can flag old code after unrelated edits (e.g. declaring a helper after its use). `window.location.assign(url)` instead of `window.location.href = url`.

## Dates and time zones

- `date.toISOString().split('T')[0]` shifts local midnight back one day in Slovenia. Use `toLocalDateString` (`src/lib/date.ts`).
- Server-side slot maths must be in Europe/Ljubljana regardless of server TZ. `zonedDateTimeToUtc` uses Intl offsets with a second pass for DST. Tests cover 2026-03-29 and 2026-10-25; run them with another `TZ=` too.

## Testing without new dependencies

- `node --test` runs `.ts` directly (Node ≥ 22 type stripping). Imports inside files used by tests need explicit `.ts` extensions (`allowImportingTsExtensions` is on) and `import type` for types. `@/` aliases do not work under node --test — keep testable logic free of them and inject deps (see `booking-service.ts`).
- **Web3Forms cannot be tested by automation**: Cloudflare returns 403 to headless Chrome and curl, and it only allows client-side calls from real browsers. Mock it in Playwright; verify real delivery by hand in a normal browser.
- Browser checks: `playwright-core` installed in a scratch directory (not the project) driving the installed Chrome (`channel: "chrome"`). Mock `api.web3forms.com` so no real emails are sent.
- **Always read fetch response bodies**, even on error. An unread body on a 503 kept the request pending in Chrome (Playwright `networkidle` never fired).

## Google Calendar

- `freeBusy` returns `errors` per calendar when it is not shared. Treat that as a failure, never as "free".
- Race rule: earliest `created` wins, ties broken by event id; guard against missing `created` (NaN) or both racers back off.

## Tooling / environment

- The `block-no-verify` hook rejects any Bash command that contains `git commit` together with a `-n` flag anywhere (e.g. `grep -n`). Run commits as their own command.
- zsh: `echo =====` fails (`=` expansion). Use quotes.
- ~~Netlify is not linked to GitHub.~~ **Outdated since 2026-10-01: the site is linked, and a push to `main` deploys production within ~20 s** (`manual_deploy: false`, `branch: main`). Never push `main` with anything that should not go live. If the connector fallback is ever needed: deploy from a `git archive` export, never the working tree (it tried to upload ~900 MB `.next` plus `.env.local` and failed with `fetch failed`).
- Set required env vars on Netlify **before** the first build that needs them (`NEXT_PUBLIC_*` is baked in at build time). The site had no env vars at all before 2026-09-30.
- Wix image URLs: strip `/v1/fill/...` to get the original. Originals can be 15 MB; cap at 2400 px (`sips -Z 2400`).

## DNS cutover (2026-09-30)

- **Check who the nameservers are before assuming where DNS lives.** `dig NS akilea.si` showed Wix (`wixdns.net`) although the registrar is Domenca. The earlier notes said "DNS at Domenca" and were wrong; all mail records were in Wix's panel.
- Before moving nameservers, copy the **whole** zone (A, CNAME, TXT, MX, SRV, "other MX") from the old DNS host. Easy to forget: MailerLite DKIM CNAME `litesrv._domainkey`. Create the complete zone at the new host first, verify it with `dig @nsX.freedns.si ... +norecurse` on every nameserver, only then switch.
- Domenca FreeDNS record form: the "Naslov" field is a **prefix** and `.akilea.si` is appended. Apex = empty or `@`; typing `akilea.si` would create `akilea.si.akilea.si`. Priority is only editable for MX.
- Plain `dig @nsX` (recursion desired) on a FreeDNS server can return a stale partial answer; use `+norecurse` or `+tcp` to read the authoritative data.
- The `.si` registry updates slowly: check `dig @b.dns.si akilea.si NS +norecurse` (not just public resolvers) to see whether the delegation changed. Domenca's panel shows the new nameservers before the registry does.
- Netlify: adding the apex first makes the apex primary. "Set primary domain" is blocked while a certificate is being provisioned; set `www.akilea.si` as primary after DNS verifies (canonical in code is `www`).

## Booking widget fallback (found live 2026-09-30)

- When Google is unavailable the widget used to offer **all** slots. The server still applies its rules (future only, 90-day horizon) and answered 400 for e.g. today's 11:00 at 14:48 → generic error alert, booking lost. The widget now applies the same rules locally (`freeTimesForDay` with no busy times) whenever it has no calendar data. Keep client and server rules in sync (`src/lib/slots.ts` is shared).
- Test time-dependent UI with Playwright `ctx.clock.setFixedTime(...)` (see the scenario approach in earlier sessions) instead of hoping the real clock hits the case.

- **Right after a deploy, `/_next/image` URLs are cold** (~1 s each, many at once). A live browser check may flag some images as broken on the first run; curl one URL and re-run before assuming a real problem.

## Blog content (2026-10-01)

- **The posts on the new site were summaries, not Mirjana's text** — readers noticed. Before calling any content "migrated", diff it word-for-word against the source. Script used: extract `<article>` from the Wix page, normalise (`**`/`__` markup, links), multiset word diff against `BLOG_POSTS`.
- Wix `<article>` text is hard-wrapped mid-sentence and adjacent blocks glue together without a space (`TIPFizične`, `kovinokovina`). Rejoin by hand; never trust the raw extraction.
- Wix blog slugs can differ from the title (`globoka-sprostitev…` is the dermatitis post). The alias map in `getBlogPost` handles `/blog/…` only; `/post/…` has no route.

## DNS filter block after the cutover (2026-10-01)

- **Moving nameservers, IP and certificate in one evening can get a domain flagged as hijacked/phishing** by ISP DNS filters. A1 Protekt (Whalebone) sinkholed `akilea.si` the next day; Chrome showed `NET::ERR_CERT_AUTHORITY_INVALID` and HSTS blocked click-through. It looked like a broken certificate but the site was fine.
- Diagnose "certificate invalid" by checking **which resolver** answered: `scutil --dns`, `dig +short <domain>` vs `dig @1.1.1.1`, and the cert issuer at the IP returned (`openssl s_client -connect <ip>:443 -servername <domain>`). A "Sinkhole" issuer means a DNS filter.
- Test the live site from a blocked network with `curl --resolve www.akilea.si:443:75.2.60.5` or `main--akilea.netlify.app`.
- After any future domain move, check the site on Slovenian mobile networks (A1, Telekom, Telemach) the next day.

## Layout shift checks (2026-10-01)

- **Test layout stability at several widths, not one.** The reviews carousel was stable at exactly 390 px (all cards 296 px) but jumped 15–60 px per rotation at 320/360/375/393/414/430. Measure the next section's `offsetTop` over a few rotations at each width.
- Rotating content of different heights: stack all items in one grid cell (`[grid-area:1/1]`) and toggle opacity, instead of swapping the content.


## Legal text changes (2026-10-01)

- **Publish only what the owner explicitly approved, nothing else.** Mirjana confirmed 4 of 7 points; the other 3 stayed on a separate branch and only the approved ones went to `main`. Build the "approved only" branch fresh from `main` and bring in files from the draft branch (`git checkout <draft> -- <paths>`), rather than deleting from the draft.
- **Use her approved wording verbatim.** My own improvement ("DDV ni obračunan") differed from what she agreed to ("Storitve so oproščene DDV"); the live text is hers. Unapproved copy tweaks (e.g. the `/posvet` placeholder) stay out until she says yes.
- **Her questions can come from a word that has two meanings** ("računi" = invoices vs. Web3Forms user account). Answer in plain words with the two meanings spelled out.
- A late-cancel fee of 70 % must not apply to cancellations made well ahead (OZ 252 lets a court cut disproportionate penalties); the first late cancel being free is in her favour legally. Keep the distinction "late cancel / no-show" vs. "cancel in time".
