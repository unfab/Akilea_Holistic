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
- Legal pages (`/pravilnik-o-zasebnosti`, `/pogoji-poslovanja`) and the cookie banner text are Mirjana's to change. Draft in `tasks/privacy-policy.md`, never edit the page directly.
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
- Booking constants live in `src/config/booking.ts`; site constants in `src/config/site.ts`. Do not hardcode them elsewhere.
- Testable logic stays framework-free with injected deps and relative `.ts` imports (see `lessons.md`).
- Production = push to `main` (Netlify auto-deploys). Push only when Aleksandar says so, and check the deploy afterwards.
