# Rules

> Project rules for anyone (human or AI) working on this repo. They override defaults.

## Session workflow (MPC)

1. **Start:** read `tasks/context.md`, `tasks/leftover.md`, this file, and `tasks/lessons.md` before touching code. Check `git status` and `git log --oneline -10`.
2. **Plan** anything beyond a trivial fix; risky items (Netlify config, env vars, Google, payments, legal text) need Aleksandar's approval first.
3. **Build** on a branch (`fix/…`, `feat/…`, `chore/…`), small commits, conventional commit messages.
4. **Verify** (all must pass): `npm test`, `npm run lint`, `npm run build`, then a production-server check (`npx next start`) of the pages you touched.
5. **End:** update `context.md` (status), `leftover.md` (tick / add), `debt.md` (new shortcuts), `lessons.md` (new surprises).

## Content rules

- **No Slovenian copy changes without approval.** Existing text is Mirjana's, even when it has typos. Escaping `"` as `&quot;` is fine (renders identically).
- **No invented content**: no prices, testimonials, statistics, dates or claims that Mirjana did not provide.
- Any **new visible text** (including alerts, titles, alt text) needs approval. Reuse existing strings when possible.
- Legal pages (`/pravilnik-o-zasebnosti`, `/pogoji-poslovanja`) and the cookie banner text are Mirjana's. They were rewritten on 2026-09-30 with Aleksandar's approval (see `tasks/privacy-policy.md`). Further wording changes need his approval and should be shown to Mirjana; keep the pages in sync with the data inventory in that file.
- MailerLite links (e-book, newsletter) work. Do not touch them.

## Adding a blog post

- Add the post **at the top** of `BLOG_POSTS` in `src/data/blogs.ts` (newest first — the homepage card shows `BLOG_POSTS[0]`).
- Image in `public/images/blog/<slug>.jpg`, `image: "/images/blog/<slug>.jpg"`. Keep images ≤ 2400 px long side.
- Build and open `/`, `/blog`, `/blog/<slug>` before pushing.

## Engineering rules

- **No new dependencies** without asking. Phase B is dependency-free on purpose (no `googleapis`).
- **Secrets never in the repo** (it is public). Keys live in Netlify env vars and `.env.local` (git-ignored). `.env.example` documents every variable with empty values.
- `NEXT_PUBLIC_WEB3FORMS_KEY` must exist on Netlify before any production build, or both forms break.
- Keep the Stripe flag **off** until the items in `debt.md` D2 are done.
- Booking constants live in `src/config/booking.ts`, including `OPEN_SLOTS` (the only bookable dates/times; update when Mirjana sends new ones); site constants in `src/config/site.ts`. Do not hardcode them elsewhere.
- Testable logic stays framework-free with injected deps and relative `.ts` imports (see `lessons.md`).
- Production deploys only when Aleksandar says so. **Pushing `main` is a production deploy** (Netlify is linked to GitHub since 2026-10-01), so work on a branch and merge/push only after his OK; then verify the live site (steps in `context.md` → Deploying).
