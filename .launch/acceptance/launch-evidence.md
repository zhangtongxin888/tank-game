# Tank Game Kimi v3 launch evidence

- Run: `tank-game-20260820-043000`
- Canonical domain: `https://tankgame.wiki`
- Current status: **待总控验收**
- Checked at: `2026-08-20T04:36:56Z`

The Vercel deployment URL below is evidence only. It is not the formal site address and must not be reported as the production domain.

| Check | Official URL / resource | Checked at | Actual result | Evidence |
|---|---|---:|---|---|
| Research handoff | `.launch/research/grok-research-v2.json` + `research-approved.json` | 2026-08-20T04:31:16Z | Pass | `validate_handoffs.mjs` passed; approved research SHA-256 is `c18be1e92416a7ffe8b05213ba71f82232e1769434fc63ab4f8dfa9018c1e190`. |
| Kimi design handoff | `.launch/design/kimi-design-v3.json` | 2026-08-20T04:31:16Z | Pass | Provider is Kimi / `kimi-code/k3`; design SHA-256 is `01f51b05d1f1c206f524d484b7af0ebb4adec7aa8b73576b390eff1b08dc2522`; the same handoff validator passed. |
| Candidate isolation | Candidate `public/` → formal `public/` | 2026-08-20T04:29:30Z | Pass | All 13 accepted production files are byte-identical to Kimi v3. No candidate Git metadata, remote settings, environment files, credentials, unrelated game files, or Next.js candidate source was copied. |
| Existing formal modules | Formal `app/`, `components/`, `lib/` | 2026-08-20T04:31:16Z | Preserved | The approved site is served from `public/`; existing Next.js and commercial-package files remain in the repository and were not modified by this launch. |
| Design approval | `.launch/acceptance/design-approved.json` | 2026-08-20T04:29:30Z | Approved | Fact scope, assets, accessibility, navigation, code prominence, candidate isolation, and production integration are recorded in the approval file. |
| 375 / 768 / 1440 render | All 8 public routes | 2026-08-20T04:28:54Z | Pass, 24/24 | At each width all 8 pages reported `scrollWidth === clientWidth`; representative captures are in `.launch/acceptance/screenshots/`. |
| Primary hero action | `https://tankgame.wiki/` | 2026-08-20T04:28:54Z | Pass | The largest orange homepage button is `Start the beginner guide` and targets `/beginner-guide/`; the official Roblox game remains a smaller footer link. |
| Current-code prominence | Homepage and `/codes/` | 2026-08-20T04:31:16Z | Pass | Only `REBALANCEAGAIN`, `HAVEFUN`, `NEWCURRENCY`, and `HEADSTART` appear as prominent chips or copy cards. |
| Lint / types / tests / build | `npm run check` | 2026-08-20T04:32:24Z | Pass | ESLint clean, TypeScript clean, 3/3 contract tests pass, and the static production validator confirms 8 routes and 8 sitemap URLs. |
| Vercel local production build | `vercel build --prod --yes` | 2026-08-20T04:32:24Z | Pass | Vercel CLI 58.9.1 built the repository with `framework: null`, `buildCommand: npm run build`, and `outputDirectory: public`. |
| GitHub source | `https://github.com/zhangtongxin888/tank-game` | 2026-08-20T04:32:29Z | Pass | Kimi v3 production commit `3918927586e0a54a4833f716b66ee84bfe63b1ff` and redirect fix `d0268722a90190cb292187beb67099d55401981d` are present on remote `main`. |
| Vercel production | Project `prj_HHCxPqXjc0DW5aiZQnTykvTRfUzA` | 2026-08-20T04:32:30Z | Ready | Deployment `dpl_CD4E1apgCzvUgQA9E5NRJMQKXVTC` is `target: production`, `readyState: READY`; evidence-only URL is `https://tank-game-rhu3xcx41-zhangtongxin888s-projects.vercel.app`. |
| Apex domain assignment | `tankgame.wiki` | 2026-08-20T04:16:55Z | Pass | Vercel domain verification reports `configured_correctly`, verified, `misconfigured: false`, and no conflicts; the complete rank-1 A set is still `216.198.79.1`, `64.29.17.1`. |
| `www` assignment and redirect | `www.tankgame.wiki` | 2026-08-20T04:33:00Z | Pass | Vercel reports verified and `misconfigured: false`; HTTPS returns `308` to apex while preserving `/path-check?keep=1`. |
| Formal HTTPS and security headers | `https://tankgame.wiki/` | 2026-08-20T04:33:00Z | Pass | HTTP/2 `200`, HSTS, Content-Security-Policy, Referrer-Policy, X-Content-Type-Options, and Vercel origin were observed. |
| Eight public pages | `/`, `/beginner-guide/`, `/codes/`, `/tanks/`, `/stats/`, `/badges/`, `/gems/`, `/faq/` | 2026-08-20T04:33:00Z | Pass | All 8 formal HTTPS URLs returned `200`. |
| Canonical metadata | Initial HTML on all 8 pages | 2026-08-20T04:33:00Z | Pass | Every page returned exactly one self-referencing `https://tankgame.wiki` canonical; titles, descriptions, Open Graph, Twitter metadata, and valid JSON-LD are in initial HTML. |
| Robots | `https://tankgame.wiki/robots.txt` | 2026-08-20T04:33:00Z | Pass | Returns `200`, allows crawling, and declares the one formal sitemap. |
| Sitemap | `https://tankgame.wiki/sitemap.xml` | 2026-08-20T04:33:00Z | Pass, 8 URLs | Returns `200` XML and lists exactly the 8 canonical HTML routes, including the new stats, badges, and gems pages. |
| End-to-end launch verifier | Formal domain | 2026-08-20T04:32:45Z | Pass | The required `verify_launch.py` run completed with 27 `PASS`, 0 `WARN`, and 0 `FAIL`, including sitemap-page and alternate-host checks. |
| GSC ownership | `sc-domain:tankgame.wiki` | 2026-08-20T04:35:57Z | Pass | In the existing property settings, Search Console displayed `所有权验证 您是经过验证的所有者`. Ownership was not recreated and DNS was not changed. |
| GSC Sitemap refresh | `https://tankgame.wiki/sitemap.xml` | 2026-08-20T04:35:25Z | Pass, 8 discovered pages | Search Console displayed `已成功提交站点地图`; after closing the success prompt, the submitted-sitemaps row showed status `成功` and `已发现的网页 8` (up from 5). |
| Homepage indexing request | `https://tankgame.wiki/` | 2026-08-20T04:35:57Z | Preserved, not repeated | The prior launch already requested homepage indexing once; this Kimi v3 update only refreshed the changed sitemap, avoiding a duplicate request. |
| Browser lock | Tank Game render + GSC refresh | 2026-08-20T04:36:20Z | Released | The coordinator granted the exclusive lock. The dedicated GSC tab was closed after verification; no DNS, ownership, or unrelated existing Chrome tab was changed. |

## DNS preservation record

- Authoritative nameservers remain `launch1.spaceship.net` and `launch2.spaceship.net`; no nameserver or Spaceship DNS change was made in this run.
- Apex A remains the complete Vercel rank-1 set: `216.198.79.1`, `64.29.17.1`.
- `www` remains CNAME `5f23b550acda4f64.vercel-dns-017.com.` with Vercel-managed `308` redirect to the apex.
- The Google ownership TXT record remains at the apex. Its full value is intentionally omitted from repository evidence.
- There are no MX, AAAA, or CAA answers at the apex. Existing verification and unrelated records were not removed or replaced.
- Vercel reports both apex and `www` verified, correctly configured, and free of conflicts.

## Formal launch completion record

1. Kimi v3's isolated `public/` implementation is the formal Vercel output, while retained Next.js and commercial-package modules remain untouched.
2. Handoff validation, lint, type checking, contract tests, static build validation, and Vercel production build all passed.
3. Remote `main` contains the production commits, and final deployment `dpl_CD4E1apgCzvUgQA9E5NRJMQKXVTC` is production `READY` with apex and `www` aliases.
4. Formal HTTPS, redirects, all 8 pages, robots, sitemap, canonical metadata, structured data, social metadata, and security headers passed live checks.
5. The existing GSC Domain Property remains verified; its sitemap was resubmitted successfully and now shows status `成功` with 8 discovered pages.
6. Remaining state: **待总控验收**. This worker does not declare final launch success.

## Provider record

- Research: Grok / `grok-4.6`
- Research review: Codex
- Design: Kimi / `kimi-code/k3`
- Formal implementation, deployment, and acceptance: Codex / `gpt-5.6-sol`
- Hosting: Vercel
- Fallback reason: none
