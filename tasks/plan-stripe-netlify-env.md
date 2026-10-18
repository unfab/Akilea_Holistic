# Stripe Keys + Netlify Environment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Steps marked **Aleksandar** are clicks in the Stripe or Netlify dashboard: give him the exact instructions from the step, wait for his "done", then run the agent's verification step.

**Goal:** The card-payment code from `tasks/plan-stripe-checkout.md` gets the right Stripe key in each environment. The sandbox key goes into local dev and the `feature/stripe-checkout` branch deploy. The live restricted key goes only into Netlify production, at go-live. No key ever lands in git, in chat or in the browser bundle.

**Architecture:** Values live in two places only: `.env.local` for `npm run dev`, and Netlify's environment variables (set in the UI) with a different value per deploy context. The Netlify branch deploy of `feature/stripe-checkout` runs the real Netlify Functions against the Stripe sandbox, so the whole card flow is tested on Netlify before production changes.

**Tech Stack:** Next.js 16.3.7 on Netlify (OpenNext adapter, Free plan `nf_team_dev`), `stripe` ^22.5, Stripe sandbox + live mode, Netlify UI for env vars, Netlify MCP (read-only use, see constraints).

**Spec:** `tasks/plan-stripe-checkout.md` (code changes, decisions 1–7 from 2026-10-15). This plan covers only keys, env vars, deploy contexts and verification. It **replaces** that plan's Task 0 Step 2 and Task 6 Steps 1–3.

## Execution order (both plans)

| # | Do | Where |
|---|---|---|
| 1 | Task 1: sandbox key + `.env.local` | this plan |
| 2 | Code Tasks 0 (Steps 1 and 3 only) to 5 (without Step 6 "merge") | `plan-stripe-checkout.md` |
| 3 | Task 2: Netlify branch deploy with sandbox values | this plan |
| 4 | Task 3: verify the branch deploy end to end | this plan |
| 5 | Task 4: merge to `main` with payment still off | this plan + code Task 5 Step 6 |
| 6 | Code Task 6 Mirjana checklist, then Task 5: go live | both |

The branch `feature/stripe-checkout` already exists (created 2026-10-16 from `main` at `fd46d26`). Code Task 0 Step 1 becomes: `git checkout feature/stripe-checkout && git merge main`.

## Facts this plan relies on (verified 2026-10-16)

**Can Netlify read a `.env` file? Not for this project.**
1. `.env*` is git-ignored (`.gitignore:34`). Netlify builds from GitHub, so it never sees `.env.local`.
2. Committing a `.env` or `.env.production` would publish the key: `unfab/Akilea_Holistic` is a **public** repo.
3. `netlify.toml` `[build.environment]` reaches builds only, not Functions (Netlify docs, "Configuration options and limitations"). `/api/checkout` and `/uspesno` run as Netlify Functions, so a key there would not reach them. A key there would also sit in the public repo, and toml values override the UI.

→ Netlify values are set **only in the Netlify UI**. `.env.local` is only for local dev.

**Netlify project**
- Project `akilea`, site id `4346de5b-8692-48a2-93f5-7e7c4ae70f39`, plan `nf_team_dev` (Free). Scopes are a Pro feature, so every variable has all scopes. Per-context values work.
- Env vars on 2026-10-16: only `NEXT_PUBLIC_WEB3FORMS_KEY` (context `all`, not secret). No Stripe vars. The flag is unset, so payment is off in production.
- Push to `main` = production deploy (~20 s). Push to any other branch builds only if branch deploys are enabled for it.
- Env var changes apply only to **new** deploys (builds and functions alike). `NEXT_PUBLIC_*` values are also inlined at build (`src/config/site.ts:1-2`). Every env change therefore needs a deploy of that context.
- Branch deploy URL pattern: the branch name with `/` replaced by `-`, followed by `--akilea.netlify.app`. That gives `https://feature-stripe-checkout--akilea.netlify.app`. Confirm the real URL in the Deploys list after the first build.
- `src/proxy.ts` has no host redirect, so the branch URL serves the site itself. `next.config.ts` has no CSP, so the redirect to `checkout.stripe.com` is not blocked.
- A1 Protekt sinkholes `akilea.si` on A1 networks. For production checks use `curl --resolve www.akilea.si:443:75.2.60.5 …` or `https://main--akilea.netlify.app`. `*.netlify.app` is not blocked.

**Stripe**
- Sandbox keys: `rk_test_…` / `sk_test_…`. Live keys: `rk_live_…` / `sk_live_…`. Objects never cross modes.
- Use restricted keys (RAK). A secret key (`sk_`) can do everything in the account.
- The code calls only `stripe.checkout.sessions.create` and `stripe.checkout.sessions.retrieve(id)` without `expand` (code Tasks 2 and 4). Permission needed: **Checkout Sessions: Write**, which includes read. If Stripe rejects a call, its error message names the missing permission (Task 3 Step 8).
- A live key you create is shown **once**. Copy it straight into Netlify.
- Session ids start with `cs_test_` (sandbox) or `cs_live_` (live). This is how the agent proves which key a deploy uses without seeing the key.

## Global Constraints

- **Key values never appear** in git, chat, tool-call arguments (including Netlify MCP `envVarValue`), commit messages, logs or shared screenshots. Aleksandar pastes them only into `.env.local` in his editor and into the Netlify UI.
- The agent never reads `.env.local` with Read, `cat` or `grep` without `-c`/`-q` once a key is in it. Verify with `grep -c` or by behaviour.
- The agent may call Netlify MCP `manage-env-vars` with `getAllEnvVars` **only before** any Stripe key is on Netlify (Task 2 Step 1). It returns values. After that, verify by HTTP behaviour only.
- All Netlify env var writes are done by Aleksandar in the UI. The MCP upsert can't target one branch and may replace other contexts' values.
- Production context: no Stripe key and no flag until Task 5.
- Don't add env vars to `netlify.toml`.
- Pushing `main` needs Aleksandar's explicit OK (production deploy). Pushing `feature/stripe-checkout` is fine once he has approved this plan.
- Customer-facing text Slovenian. Code, comments, commits English, conventional commits.

## Review Focus

1. **Wrong key in a context** (live key on the branch deploy, or test key in production) means a test checkout hits real money, or real customers land in the sandbox. Pinned in Task 3 Step 2 (`cs_test_`) and Task 5 Step 4 (`cs_live_`).
2. **Key in the client JS bundle** (e.g. someone renames it to `NEXT_PUBLIC_STRIPE_…`) means a public key leak. Pinned by the bundle scan in Task 3 Step 7, Task 4 Step 3 and Task 5 Step 4.
3. **Env var changed but no redeploy** means the site keeps the old behaviour and the change looks "broken". Every task that changes env ends with a deploy step and a behaviour check.
4. **Restricted key lacks a permission** means `/api/checkout` returns 503 and the customer sees the card error. Pinned in Task 3 Step 2. The fix procedure is in Task 3 Step 8 and needs no redeploy.
5. **Payment switched on in production before Mirjana approved the terms** is a legal and trust problem. Pinned in Task 4 Step 2 (production still 404 after merge). Task 5 starts with the Mirjana checklist gate.

---

## File Structure

| File | Change | Who |
|---|---|---|
| `.env.local` | add 3 lines (git-ignored, never committed) | agent adds the non-secret lines, Aleksandar pastes the key |
| Netlify env vars (UI) | add `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT`, `NEXT_PUBLIC_SITE_URL` with per-context values | Aleksandar |
| Netlify branch deploy settings (UI) | enable branch deploys for `feature/stripe-checkout` | Aleksandar |
| `tasks/context.md` | env var table + Stripe state + rollback | agent |
| `tasks/leftover.md` | Stripe item state | agent |

No source files change in this plan.

---

### Task 1: Sandbox restricted key + `.env.local`

Replaces code plan Task 0 Step 2.

- [x] **Step 1 (Aleksandar, Stripe): open a sandbox**

In Mirjana's Stripe account: account menu top left → **Sandboxes** → create one named `akilea-dev` (or open an existing one). The dashboard shows a sandbox banner.

If his role can't create a sandbox, use a sandbox in his own Stripe account. Behaviour is identical, and only Task 5 needs her account.

- [x] **Step 2 (Aleksandar, Stripe): create the restricted key**

In the sandbox: **Developers → API keys → Create restricted key**.
- Intended use: the option for your own integration/website backend. Not "agent access" and not "provide to another website".
- Name: `akilea-si-sandbox`
- Permissions: **Checkout Sessions → Write**. Everything else **None**.
- Create, then copy the `rk_test_…` value. In the key's note write `.env.local + Netlify branch deploys`.

Fallback: if restricted keys are not offered in the sandbox, use the sandbox **Secret key** (`sk_test_…`). This is acceptable for the sandbox only, never for live.

- [x] **Step 3 (agent): add the non-secret lines**

Check what is there without printing values:

```bash
cd "/Users/aleksandarbojic/Desktop/teta mirjana/Akilea_Holistic"
sed 's/=.*/=<set>/' .env.local
```

Expected: only `NEXT_PUBLIC_WEB3FORMS_KEY=<set>`. Append:

```bash
printf '\nNEXT_PUBLIC_ENABLE_ONLINE_PAYMENT=true\nNEXT_PUBLIC_SITE_URL=http://localhost:3000\nSTRIPE_SECRET_KEY=\n' >> .env.local
```

- [x] **Step 4 (Aleksandar): paste the key**

Open `.env.local` in the editor and paste the key after `STRIPE_SECRET_KEY=` (no quotes, no spaces). Save.

- [x] **Step 5 (agent): verify without seeing the key**

```bash
grep -cE '^STRIPE_SECRET_KEY=(rk|sk)_test_[A-Za-z0-9]+$' .env.local   # expected: 1
grep -c '_live_' .env.local                                         # expected: 0
git check-ignore -v .env.local                                      # expected: .gitignore:34:.env*	.env.local
git status --porcelain | grep -c env                                 # expected: 0
```

If the first count is 0: the paste has quotes, spaces or a wrong prefix. Ask Aleksandar to fix it without pasting the value into chat.

- [x] **Step 6 (agent): prove the key talks to Stripe**

```bash
node --env-file=.env.local -e '
const Stripe = require("stripe");
const key = process.env.STRIPE_SECRET_KEY;
new Stripe(key).checkout.sessions.list({ limit: 1 })
  .then(() => console.log("OK, sandbox key:", key.includes("_test_")))
  .catch((e) => console.log("FAIL", e.type, e.code, e.message));
'
```

Expected: `OK, sandbox key: true`. Stripe masks keys in its error messages, so a `FAIL` line is safe to read:
- `StripeAuthenticationError` → wrong key, repeat Step 4.
- `StripePermissionError` → add Checkout Sessions: Write in Stripe (Edit key), then re-run.

Continue with code plan Tasks 1–5. Local manual tests there use this key. Code Task 0 Step 3 expects **51** tests now (was 47).

---

### Task 2: Netlify branch deploy with sandbox values

Start only when code Tasks 1–5 (minus the merge) are committed on `feature/stripe-checkout` and `npm test && npm run lint && npx tsc --noEmit && npm run build` passes.

- [ ] **Step 1 (agent): baseline of Netlify env (last allowed MCP read)**

Netlify MCP `netlify-project-services-updater`, operation `manage-env-vars`, params `{ "siteId": "4346de5b-8692-48a2-93f5-7e7c4ae70f39", "getAllEnvVars": true }`.

Expected: only `NEXT_PUBLIC_WEB3FORMS_KEY`. If any `STRIPE_*`, `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` or `NEXT_PUBLIC_SITE_URL` exists already: stop, report the keys and contexts (not values), and ask Aleksandar.

From here on, **no more `getAllEnvVars`**.

- [ ] **Step 2 (Aleksandar, Netlify): enable the branch deploy**

app.netlify.com → project `akilea` → **Project configuration → Build & deploy → Continuous deployment → Branches and deploy contexts → Configure**:
- Production branch: `main` (unchanged)
- Branch deploys: **Let me add individual branches** → add `feature/stripe-checkout`. If it already says "All", leave it: only the test key will be in the branch context.
- Deploy Previews: unchanged
- Save

- [ ] **Step 3 (Aleksandar, Netlify): sensitive variable policy (public repo)**

Same page, **Sensitive variable policy**: must be **Require approval** (or "Deploy without sensitive variables"). Never "Deploy without restrictions". This stops a fork's pull request from reading the key in a Deploy Preview.

- [ ] **Step 4 (Aleksandar, Netlify): add three variables**

**Project configuration → Environment variables → Add a variable → Add a single variable.** For each one, choose **Different value for each deploy context**. Scopes are locked to "All" on the Free plan, which is fine.

| Key | Contains secret values | Production | Deploy Previews | Branch deploys | Local development |
|---|---|---|---|---|---|
| `STRIPE_SECRET_KEY` | **tick it if the box is shown** | *empty* | *empty* | `rk_test_…` (same key as `.env.local`) | *empty* |
| `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` | no | *empty* | *empty* | `true` | *empty* |
| `NEXT_PUBLIC_SITE_URL` | no | `https://www.akilea.si` | *empty* | `https://feature-stripe-checkout--akilea.netlify.app` | *empty* |

Notes for Aleksandar:
- An empty Production field means the variable does not exist in production. That is the goal for the key and the flag until Task 5.
- `NEXT_PUBLIC_SITE_URL` in Production is harmless now: only the checkout route uses it, and that route returns 404 while the flag is off.
- With "Contains secret values" ticked, Netlify scans each build's output for the value and fails the build if it finds it. That is the bundle-leak safety net. A failed build saying "secrets scanning found secrets" means real leaked code, not a Netlify bug: stop and investigate.

- [ ] **Step 5 (agent): push the branch**

```bash
cd "/Users/aleksandarbojic/Desktop/teta mirjana/Akilea_Holistic"
git status -sb            # on feature/stripe-checkout, clean
git push -u origin feature/stripe-checkout
```

If the branch was pushed **before** Steps 2 and 4: the existing build has no test values. Ask Aleksandar to open Deploys, click the latest `feature/stripe-checkout` deploy and choose **Retry deploy → Deploy project without cache**. Fallback: `git commit --allow-empty -m "chore: rebuild branch deploy with env" && git push`.

- [ ] **Step 6 (agent): wait for the branch deploy**

Wait with the Monitor tool, using an until-loop (foreground `sleep` is blocked):

```bash
B=https://feature-stripe-checkout--akilea.netlify.app
until [ "$(curl -s -o /dev/null -w '%{http_code}' "$B/uspesno")" = "200" ]; do sleep 10; done; echo "branch deploy up, flag on"
```

`/uspesno` answers 200 only when the flag is on (`src/proxy.ts`). If the URL keeps returning 404 for over 5 minutes, the URL differs or branch deploys are off. Ask Aleksandar for the URL shown in Deploys and use that URL everywhere below and in `NEXT_PUBLIC_SITE_URL` (Branch deploys). Then retry the deploy.

---

### Task 3: Verify the branch deploy end to end (sandbox)

`B=https://feature-stripe-checkout--akilea.netlify.app`. Pick a future date and time from `OPEN_SLOTS` in `src/config/booking.ts` and use them as `<DATE>` / `<TIME>`.

- [ ] **Step 1: page and flag**

```bash
curl -s -o /dev/null -w '%{http_code}\n' "$B/"          # 200
curl -s -o /dev/null -w '%{http_code}\n' "$B/uspesno"   # 200 (flag on)
```

- [ ] **Step 2: checkout session is created in the sandbox**

```bash
curl -s -X POST "$B/api/checkout" -H 'Content-Type: application/json' \
  -d '{"serviceId":1,"price":1,"date":"<DATE>","time":"<TIME>","name":"Test","email":"t@example.com","phone":"","honeypot":""}' \
  | grep -oE 'cs_(test|live)_|"error":"[a-z_]+"'
```

Expected: `cs_test_`.
- `cs_live_` → **STOP**. A live key is in the branch context. Aleksandar replaces the Branch deploys value with the sandbox key, then retry the deploy (Task 2 Step 5).
- `"error":"unavailable"` → Step 8.
- `"error":"invalid"` → the date/time is not open. Pick another slot.

- [ ] **Step 3: tampered request is rejected**

```bash
curl -s -o /dev/null -w '%{http_code}\n' -X POST "$B/api/checkout" -H 'Content-Type: application/json' \
  -d '{"serviceId":99,"date":"<DATE>","time":"<TIME>","name":"Test","email":"t@example.com","phone":"","honeypot":""}'   # 400
curl -s -o /dev/null -w '%{http_code}\n' -X POST "$B/api/checkout" -H 'Content-Type: application/json' -d 'nope'          # 400
```

- [ ] **Step 4 (Aleksandar, browser): full card flow on `$B`**

| # | Action | Expected |
|---|---|---|
| a | Book service 1 by card, card `4242 4242 4242 4242`, any future expiry, any CVC | Stripe page shows **85,00 €** and the right service. Afterwards lands on `$B/uspesno?session_id=cs_test_…` with "Plačilo prejeto". This proves `NEXT_PUBLIC_SITE_URL` (Branch deploys) is right. |
| b | Book service 2 by card with 3-D Secure card `4000 0027 6000 3184` and complete the challenge | 50,00 €, "Plačilo prejeto" |
| c | Card `4000 0000 0000 0002` (declined) | Stripe shows the decline and stays on its page |
| d | On the Stripe page press back | Back on `$B/#rezervacija` |
| e | Book "on location" | Unchanged behaviour, email with "Plačilo na lokaciji" |

Booking emails go to the current Web3Forms recipient (Aleksandar's Gmail, see `tasks/leftover.md`).

- [ ] **Step 5: `/uspesno` refuses fake ids**

```bash
curl -s "$B/uspesno" | grep -o 'Plačilo ni bilo zaključeno' | head -1
curl -s "$B/uspesno?session_id=cs_test_aaaaaaaaaaaaaaaaaaaa" | grep -o 'Plačilo ni bilo zaključeno' | head -1
```

Both lines must print. If the page streams and grep finds nothing, open the URLs in the browser instead.

- [ ] **Step 6 (Aleksandar, Stripe sandbox): payments are recorded**

Sandbox → Payments: payments a and b exist with metadata `service, date, time, name, email` (and `phone` when filled).

- [ ] **Step 7 (agent): no key in the browser bundle**

```bash
B=https://feature-stripe-checkout--akilea.netlify.app
for page in / /storitve /uspesno; do
  for p in $(curl -s "$B$page" | grep -o '/_next/static/[^"]*\.js' | sort -u); do
    curl -s "$B$p" | grep -qE '(rk|sk)_(test|live)_[A-Za-z0-9]{10,}' && echo "LEAK in $p"
  done
done; echo "scan done"
```

Expected: only `scan done`. Any `LEAK` → **STOP**. Aleksandar rotates the sandbox key in Stripe (⋯ → Rotate key → Now). Find the code path that inlines it (usually a `NEXT_PUBLIC_` name or a client component importing `src/lib/stripe.ts`).

- [ ] **Step 8 (only if Step 2 returned `unavailable`): find the cause**

Ask Aleksandar for Netlify → project → **Logs → Functions** → the line `checkout: Stripe error` or `checkout: STRIPE_SECRET_KEY is not set`.
- `STRIPE_SECRET_KEY is not set` → the Branch deploys value is missing, or the deploy predates it. Fix in the UI, then retry the deploy.
- `does not have the required permissions … Having the '<permission>' permission would allow this request` → in the sandbox, Stripe → API keys → `akilea-si-sandbox` → ⋯ → Edit key → grant exactly that permission. **No redeploy needed**, because the key value is unchanged. Write the extra permission into this plan's Task 5 Step 1 so the live key gets it too.
- `Invalid API Key` → wrong value pasted. Aleksandar re-pastes, then retry the deploy.

- [ ] **Step 9: record**

Append one line to `tasks/context.md` under the Stripe state: `2026-MM-DD: branch deploy feature/stripe-checkout verified against Stripe sandbox (cs_test_, 85/50 €, 3DS, decline, fake ids, bundle scan clean).` Commit `docs(tasks): record Stripe sandbox verification on Netlify`.

---

### Task 4: Merge to `main` with payment still off

This is code plan Task 5 Step 6, plus production checks.

- [ ] **Step 1: Aleksandar's OK, then merge**

Ask: "Merge `feature/stripe-checkout` into `main`? This deploys production, but payment stays off there." Only after a yes:

```bash
git checkout main && git pull && git merge --no-ff feature/stripe-checkout && git push origin main
```

- [ ] **Step 2: production still has payment off**

Wait ~60 s for the deploy (Netlify → Deploys shows "Published"), then run the checks. `--resolve` bypasses A1 Protekt. Write it inline: zsh does not word-split a `$R` variable, so putting the option in a variable breaks curl.

```bash
curl -s --resolve www.akilea.si:443:75.2.60.5 -o /dev/null -w '%{http_code}\n' https://www.akilea.si/uspesno    # 404
curl -s --resolve www.akilea.si:443:75.2.60.5 -X POST https://www.akilea.si/api/checkout \
  -H 'Content-Type: application/json' -d '{}'                                                                   # {"error":"not_found"}
curl -s --resolve www.akilea.si:443:75.2.60.5 -o /dev/null -w '%{http_code}\n' https://www.akilea.si/            # 200
```

- [ ] **Step 3: bundle scan on production**

Same loop as Task 3 Step 7, with `B=https://main--akilea.netlify.app`. Expected: `scan done` only.

- [ ] **Step 4: Aleksandar's visual check**

www.akilea.si booking widget: no "Plačaj zdaj s kartico (Stripe)" button. `/pogoji-poslovanja` section 5 still says "Plačilo se opravi na lokaciji."

---

### Task 5: Go live

Replaces code plan Task 6 Steps 1–3. **Gate:** every Mirjana item in code plan Task 6 is ticked, including her approval of the terms paragraph. If not, stop here and say which items are open.

- [ ] **Step 1 (Aleksandar, Stripe live mode, Mirjana's account): live restricted key**

Toggle from sandbox to **live mode**. **Developers → API keys → Create restricted key**, using the same intended-use choice as Task 1 Step 2.
- Name: `akilea-si-live`
- Permissions: **Checkout Sessions → Write**, plus any permission added in Task 3 Step 8. Everything else **None**.
- Create. The value is shown **once**: keep the tab open and go straight to Step 2. Note field: `Netlify akilea → STRIPE_SECRET_KEY (Production)`.

If his role can't create live keys, Mirjana creates it while logged in on Aleksandar's computer, and he pastes it into Netlify in the same session. Never send it by email, SMS or chat (Stripe docs). Lost before saving → ⋯ → Expire key, create a new one.

- [ ] **Step 2 (Aleksandar, Netlify): production values**

Project configuration → Environment variables → each key → **Options → Edit**:

| Key | Production (new) | Branch deploys (keep) |
|---|---|---|
| `STRIPE_SECRET_KEY` | `rk_live_…` | `rk_test_…` |
| `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` | `true` | `true` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.akilea.si` (already set, check) | unchanged |

- [ ] **Step 3 (agent): deploy production**

Code plan Task 6 Step 4: set "Veljavnost od" (`src/app/pogoji-poslovanja/page.tsx`) and "Zadnja posodobitev" (`src/app/pravilnik-o-zasebnosti/page.tsx`) to today. Then commit `docs(legal): payment terms effective date` and push `main` after Aleksandar's OK. This push is the redeploy that picks up the new env values. If there is nothing to commit, Aleksandar uses Deploys → **Trigger deploy → Deploy project without cache**.

- [ ] **Step 4 (agent): live checks without paying**

```bash
curl -s --resolve www.akilea.si:443:75.2.60.5 -o /dev/null -w '%{http_code}\n' https://www.akilea.si/uspesno   # 200
curl -s --resolve www.akilea.si:443:75.2.60.5 -X POST https://www.akilea.si/api/checkout -H 'Content-Type: application/json' \
  -d '{"serviceId":2,"date":"<DATE>","time":"<TIME>","name":"Test","email":"t@example.com","phone":"","honeypot":""}' \
  | grep -oE 'cs_(test|live)_|"error":"[a-z_]+"'
```

Expected: `cs_live_`. An unpaid session costs nothing and expires after 24 h.
- `cs_test_` → the production value is still the sandbox key, or the deploy predates Step 2. Fix, then redeploy.
- `unavailable` → Task 3 Step 8 procedure, on production logs and the live key.

Then run the bundle scan from Task 3 Step 7 with `B=https://main--akilea.netlify.app`. Expected: `scan done` only.

- [ ] **Step 5 (Aleksandar): real smoke test**

Code plan Task 6 Step 5: book the cheapest service (50 €) by card with his own card. Check that Mirjana gets the email and the Stripe notification, and that `/uspesno` says "Plačilo prejeto". Then refund it in Stripe (Payments → payment → Refund). Stripe keeps its fee, about 1 €.

- [ ] **Step 6 (agent): record state and rollback**

`tasks/context.md`:
- Stripe line: `Online payment ON since <date> (Mirjana's Stripe, restricted key akilea-si-live).`
- Env var table: add rows for `STRIPE_SECRET_KEY` (secret, Production = live RAK, Branch deploys = sandbox RAK, never in git) and `NEXT_PUBLIC_SITE_URL` (Production `https://www.akilea.si`, Branch deploys = branch URL).
- New "Stripe rollback / key rotation" subsection with these exact steps:
  - **Switch payment off:** Netlify → `NEXT_PUBLIC_ENABLE_ONLINE_PAYMENT` → Production value empty (or `false`) → Deploys → Trigger deploy. Card button, `/api/checkout`, `/uspesno` and the legal paragraphs all switch back. Check: `/uspesno` 404.
  - **Key leaked or a person with access leaves:** Stripe live → API keys → `akilea-si-live` → ⋯ → Rotate key (Expiration: Now) → paste the new value into Netlify Production → Trigger deploy → Task 5 Step 4 check.

`tasks/leftover.md`: mark the "Before re-enabling Stripe" item done, with the date.

Commit `docs(tasks): Stripe live, env and rollback`. Push `main` with Aleksandar's OK; docs-only, but it still redeploys.

---

## Out of scope (decided, not done)

- **Stripe access policy** (ASN/country allow-list on the live key): Netlify Functions have no fixed IPs, and a wrong policy silently breaks checkout. Revisit only if Stripe reports unexpected key use.
- **Deploy Previews with payment**: Deploy Previews get no Stripe values, so the card path returns 404 there. Branch deploys are the test environment.
- **Netlify CLI**: not installed and not needed. All env changes go through the UI.
- **Webhook signing secret**: no webhook (decision 4 in the code plan).
