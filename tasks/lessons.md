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
- Browser checks: `playwright-core` installed in a scratch directory (not the project) driving the installed Chrome (`channel: "chrome"`). Mock `api.web3forms.com` so no real emails are sent.
- **Always read fetch response bodies**, even on error. An unread body on a 503 kept the request pending in Chrome (Playwright `networkidle` never fired).

## Google Calendar

- `freeBusy` returns `errors` per calendar when it is not shared. Treat that as a failure, never as "free".
- Race rule: earliest `created` wins, ties broken by event id; guard against missing `created` (NaN) or both racers back off.

## Tooling / environment

- The `block-no-verify` hook rejects any Bash command that contains `git commit` together with a `-n` flag anywhere (e.g. `grep -n`). Run commits as their own command.
- zsh: `echo =====` fails (`=` expansion). Use quotes.
- **Netlify is not linked to GitHub.** A push to `main` deployed nothing (previous deploys have `deploy_source: api`). Deploy with the connector's `deploy-site` command from a `git archive` export: running it in the working tree tried to upload ~900 MB (`.next`) plus `.env.local` and failed with `fetch failed`.
- Set required env vars on Netlify **before** the first build that needs them (`NEXT_PUBLIC_*` is baked in at build time). The site had no env vars at all before 2026-09-30.
- Wix image URLs: strip `/v1/fill/...` to get the original. Originals can be 15 MB; cap at 2400 px (`sips -Z 2400`).
