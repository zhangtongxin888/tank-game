# Tank Game launch evidence

- Run: `tank-game-20260819-224500`
- Canonical domain: `https://tankgame.wiki`
- Current status: **待总控验收；DNS、TLS、GSC 和三档渲染检查等待浏览器锁**
- Checked at: `2026-08-19T15:48:06Z`

The Vercel deployment URL below is evidence only. It is not the formal site address and must not be reported as the production domain.

| Check | Official URL / resource | Checked at | Actual result | Evidence |
|---|---|---:|---|---|
| Research handoff | `.launch/research/grok-research-v1.json` + `research-approved.json` | 2026-08-19T15:48:06Z | Pass | Handoff validator passed; approval SHA-256 is `5d99b07f4f4bea049056212b38a65aa91c5e139be507ea96a53bcae64bd106df`. |
| Design handoff | `.launch/design/codex-design-v1.json` | 2026-08-19T15:48:06Z | Pass with recorded fallback | Kimi file was absent because the coordinator reassigned the stage to Codex; the Codex design package passed the same validator and has SHA-256 `e8e41fa3912359e843bcbd9a9516e5e86d94491189ea7d26af1c39352a4722d6`. |
| Candidate isolation | Candidate and formal repository paths | 2026-08-19T15:48:06Z | Pass | Only Tank Game frontend files were selected; no candidate `.launch/research`, credentials, remote metadata, or unrelated game files were copied. |
| 375 / 768 / 1440 render | `https://tankgame.wiki/` | 2026-08-19T15:48:06Z | Blocked | Source-level responsive rules passed review, but the coordinator did not grant the browser lock and explicitly prohibited opening Chrome. Exact results are recorded as pending in `design-approved.json`. |
| UI and accessibility source review | `app/**`, `components/**`, `app/globals.css` | 2026-08-19T15:48:06Z | Pass | Checked against the current Vercel Web Interface Guidelines: semantic controls, skip link, focus states, live copy feedback, reduced motion, mobile menu, and no zoom restriction. |
| Primary hero action | `https://tankgame.wiki/` | 2026-08-19T15:48:06Z | Pass in source and tests | The visually largest hero button targets `/beginner-guide`; the Roblox link is a smaller secondary text link. |
| GitHub source | `https://github.com/zhangtongxin888/tank-game` | 2026-08-19T15:48:06Z | Pass | Production code commit `b66c23ffc877089e87471dc8e8c382fe2001e317` is present in the remote `main` history; the evidence files are committed afterward. |
| Vercel project | `tank-game` / `prj_HHCxPqXjc0DW5aiZQnTykvTRfUzA` | 2026-08-19T15:48:06Z | Pass | Framework `nextjs`, Node `24.x`, GitHub repository `zhangtongxin888/tank-game`, production branch `main`. |
| Production deployment | Deployment `dpl_2BLRrzoeBnaCrJ1WLa16yWGhaQgY` | 2026-08-19T15:48:06Z | Ready | Vercel reports `target: production`, `readyState: READY`; evidence-only URL is `https://tank-game-nr8y5ovq6-zhangtongxin888s-projects.vercel.app`. |
| Preview key pages | Deployment routes `/`, `/beginner-guide`, `/codes`, `/tanks`, `/faq` | 2026-08-19T15:48:06Z | Pass | Vercel-protected deployment requests returned HTTP 200 for sampled key routes; local production verification returned 200 for all five routes. |
| Build route ↔ sitemap parity | `.next/server/app-paths-manifest.json` and `/sitemap.xml` | 2026-08-19T15:48:06Z | Pass | Five public HTML routes are listed and all five appear in the sitemap; internal error routes and metadata endpoints are excluded. |
| Canonical and social metadata | Initial HTML on all five indexable routes | 2026-08-19T15:48:06Z | Pass before domain cutover | Each route emits one self-referencing `https://tankgame.wiki` canonical plus route-specific title/description and an absolute Open Graph image URL. |
| Robots on deployment | `/robots.txt` | 2026-08-19T15:48:06Z | Pass before domain cutover | Returns 200 and declares `Sitemap: https://tankgame.wiki/sitemap.xml`. |
| Sitemap on deployment | `/sitemap.xml` | 2026-08-19T15:48:06Z | Pass before domain cutover | Returns 200 XML with 5 canonical URLs: home, beginner guide, codes, tanks, FAQ. |
| Dependency security | npm registry audit | 2026-08-19T15:48:06Z | Pass | Next.js upgraded to `16.3.1`; `npm install` reports 0 vulnerabilities. |
| Lint / types / tests / build | `npm run check` | 2026-08-19T15:48:06Z | Pass | ESLint clean, TypeScript clean, 3/3 contract tests pass, Next.js 16.3.1 production build completes with all public routes static. |
| Apex domain assignment | `tankgame.wiki` → Vercel project | 2026-08-19T15:48:06Z | Attached, DNS misconfigured | Vercel ownership is verified, but current public A records still point to Spaceship parking (`54.149.79.189`, `34.216.117.25`). |
| `www` assignment and redirect | `www.tankgame.wiki` | 2026-08-19T15:48:06Z | Vercel redirect configured; live DNS blocked | Vercel project domain is configured with `308` redirect to `tankgame.wiki`; public `www` DNS is currently NXDOMAIN. |
| Main-domain HTTPS | `https://tankgame.wiki/` | 2026-08-19T15:48:06Z | Not passed | HTTPS did not serve the new deployment before DNS cutover; HTTP currently serves a Spaceship parking page. |
| Formal robots / sitemap / key pages | `https://tankgame.wiki/robots.txt`, `/sitemap.xml`, guide routes | 2026-08-19T15:48:06Z | Blocked by DNS | Must be rechecked only after DNS and TLS complete. Preview success is not counted as formal-domain success. |
| GSC ownership | `sc-domain:tankgame.wiki` | 2026-08-19T15:48:06Z | Not attempted | Browser lock was not granted; no Chrome, Spaceship, DNS, or GSC action was taken. |
| GSC Sitemap | `https://tankgame.wiki/sitemap.xml` | 2026-08-19T15:48:06Z | Not submitted | Requires formal HTTPS, live robots/sitemap, and GSC ownership first. |
| Homepage indexing request | `https://tankgame.wiki/` | 2026-08-19T15:48:06Z | Not requested | Requires completed GSC setup after the domain is live. |

## DNS snapshot and prepared cutover

- Authoritative nameservers: `launch1.spaceship.net`, `launch2.spaceship.net`.
- Existing apex A records: `54.149.79.189`, `34.216.117.25` (Spaceship parking).
- Existing apex AAAA, MX, TXT, and CAA: none returned at the check time.
- Existing `www`: NXDOMAIN.
- Vercel highest-priority apex recommendation: both A records `216.198.79.1` and `64.29.17.1`.
- Vercel highest-priority `www` recommendation: CNAME `5f23b550acda4f64.vercel-dns-017.com.`.
- Vercel currently reports both domains as attached and ownership-verified, but `misconfigured: true` until those records are applied.
- Rollback values are the two original Spaceship parking A records above; do not remove any new mail or verification record that appears before the cutover.

## Browser-lock blocker and exact continuation point

The coordinator denied the lock because **Trade A Jellycat!** currently holds it and **Tap Squishies and Trade** is next. The explicit instruction was: do not open Chrome, Spaceship, or Google Search Console; finish evidence and report the site for coordinator review with DNS/GSC marked blocked.

When the lock is eventually granted, continue in this order:

1. Render-check 375, 768, and 1440 widths and update `design-approved.json` with observed results.
2. In Spaceship, replace only the two parking A records with both recommended Vercel A records; add the recommended `www` CNAME; preserve unrelated records.
3. Verify public DNS from authoritative nameservers, `1.1.1.1`, and `8.8.8.8`; rerun Vercel domain verification for apex and `www`.
4. Wait for apex and `www` TLS, then verify the live 308, formal key pages, canonical, robots, sitemap, and the production launch script.
5. Create or reuse the `sc-domain:tankgame.wiki` property, retain Google's verification record, submit the full sitemap URL, confirm GSC shows success, and request indexing for the canonical homepage once.

## Provider record

- Research: Grok / `grok-4.6`
- Research review: Codex
- Design: Codex / `gpt-5.6-sol` (explicit fallback; Kimi artifact absent)
- Formal implementation and deployment: Codex / `gpt-5.6-sol`
- Hosting: Vercel
- Remaining fallback reason: shared browser lock unavailable; no model or platform substitution was made for DNS/GSC.
