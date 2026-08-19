# Tank Game launch evidence

- Run: `tank-game-20260819-224500`
- Canonical domain: `https://tankgame.wiki`
- Current status: **待总控验收**
- Checked at: `2026-08-19T19:00:18Z`

The Vercel deployment URL below is evidence only. It is not the formal site address and must not be reported as the production domain.

| Check | Official URL / resource | Checked at | Actual result | Evidence |
|---|---|---:|---|---|
| Research handoff | `.launch/research/grok-research-v1.json` + `research-approved.json` | 2026-08-19T15:48:06Z | Pass | Handoff validator passed; approval SHA-256 is `5d99b07f4f4bea049056212b38a65aa91c5e139be507ea96a53bcae64bd106df`. |
| Design handoff | `.launch/design/codex-design-v1.json` | 2026-08-19T15:48:06Z | Pass with recorded fallback | Kimi file was absent because the coordinator reassigned the stage to Codex; the Codex design package passed the same validator and has SHA-256 `e8e41fa3912359e843bcbd9a9516e5e86d94491189ea7d26af1c39352a4722d6`. |
| Candidate isolation | Candidate and formal repository paths | 2026-08-19T15:48:06Z | Pass | Only Tank Game frontend files were selected; no candidate `.launch/research`, credentials, remote metadata, or unrelated game files were copied. |
| 375 / 768 / 1440 render | `https://tankgame.wiki/` | 2026-08-19T18:38:26Z | Pass | The formal homepage was visually inspected at 375×812, 768×1024, and 1440×900. All three layouts rendered cleanly without horizontal overflow; details are recorded in `design-approved.json`. |
| UI and accessibility source review | `app/**`, `components/**`, `app/globals.css` | 2026-08-19T15:48:06Z | Pass | Checked against the current Vercel Web Interface Guidelines: semantic controls, skip link, focus states, live copy feedback, reduced motion, mobile menu, and no zoom restriction. |
| Primary hero action | `https://tankgame.wiki/` | 2026-08-19T18:38:26Z | Pass live | At all three widths, the largest button is `START THE BEGINNER BRIEFING`; following it opened `https://tankgame.wiki/beginner-guide`. The Roblox link remains a smaller secondary text link. |
| GitHub source | `https://github.com/zhangtongxin888/tank-game` | 2026-08-19T15:48:06Z | Pass | Production code commit `b66c23ffc877089e87471dc8e8c382fe2001e317` is present in the remote `main` history; the evidence files are committed afterward. |
| Vercel project | `tank-game` / `prj_HHCxPqXjc0DW5aiZQnTykvTRfUzA` | 2026-08-19T15:48:06Z | Pass | Framework `nextjs`, Node `24.x`, GitHub repository `zhangtongxin888/tank-game`, production branch `main`. |
| Production deployment | Deployment `dpl_2BLRrzoeBnaCrJ1WLa16yWGhaQgY` | 2026-08-19T15:48:06Z | Ready | Vercel reports `target: production`, `readyState: READY`; evidence-only URL is `https://tank-game-nr8y5ovq6-zhangtongxin888s-projects.vercel.app`. |
| Preview key pages | Deployment routes `/`, `/beginner-guide`, `/codes`, `/tanks`, `/faq` | 2026-08-19T15:48:06Z | Pass | Vercel-protected deployment requests returned HTTP 200 for sampled key routes; local production verification returned 200 for all five routes. |
| Build route ↔ sitemap parity | `.next/server/app-paths-manifest.json` and `/sitemap.xml` | 2026-08-19T15:48:06Z | Pass | Five public HTML routes are listed and all five appear in the sitemap; internal error routes and metadata endpoints are excluded. |
| Canonical and social metadata | Initial HTML on all five indexable routes | 2026-08-19T15:48:06Z | Pass before domain cutover | Each route emits one self-referencing `https://tankgame.wiki` canonical plus route-specific title/description and an absolute Open Graph image URL. |
| Robots on deployment | `/robots.txt` | 2026-08-19T15:48:06Z | Pass before domain cutover | Returns 200 and declares `Sitemap: https://tankgame.wiki/sitemap.xml`. |
| Sitemap on deployment | `/sitemap.xml` | 2026-08-19T15:48:06Z | Pass before domain cutover | Returns 200 XML with 5 canonical URLs: home, beginner guide, codes, tanks, FAQ. |
| Dependency security | npm registry audit | 2026-08-19T15:48:06Z | Pass | Next.js upgraded to `16.3.1`; `npm install` reports 0 vulnerabilities. |
| Lint / types / tests / build | `npm run check` | 2026-08-19T18:42:14Z | Pass | Final rerun: ESLint clean, TypeScript clean, 3/3 contract tests pass, Next.js 16.3.1 production build completes with all public routes static. |
| Apex domain assignment | `tankgame.wiki` → Vercel project | 2026-08-19T18:40:50Z | Pass | Spaceship parking A values `54.149.79.189` and `34.216.117.25` were replaced with the complete rank-1 Vercel set `216.198.79.1` and `64.29.17.1`. Vercel reports `configured_correctly` and `misconfigured: false`. |
| `www` assignment and redirect | `www.tankgame.wiki` | 2026-08-19T18:40:50Z | Pass | Added CNAME `5f23b550acda4f64.vercel-dns-017.com.`. Vercel reports `configured_correctly` and `misconfigured: false`; HTTPS returns `308` to apex while preserving `/path-check?keep=1`. |
| Main-domain HTTPS | `https://tankgame.wiki/` | 2026-08-19T18:40:50Z | Pass | Apex returns HTTP/2 `200` from Vercel with HSTS. Certificate `cert_3lqzQKIkqVKqangcbN28NxYC` covers apex and `www`, renews automatically, and expires in 90 days. |
| Formal robots / sitemap / key pages | `https://tankgame.wiki/robots.txt`, `/sitemap.xml`, guide routes | 2026-08-19T19:00:18Z | Pass | `/`, `/beginner-guide`, `/codes`, `/tanks`, `/faq`, `/robots.txt`, and `/sitemap.xml` each returned `200` on the formal domain. The required launch verifier's final clean-cache run returned 26 `PASS`, 1 non-blocking `WARN` for a missing Content-Security-Policy header, and 0 `FAIL`. |
| GSC ownership | `sc-domain:tankgame.wiki` | 2026-08-19T18:36:38Z | Pass | The complete Google TXT record was appended at the apex and retained. Search Console displayed the exact ownership result `已完成所有权验证` using `域名提供商`. |
| GSC Sitemap | `https://tankgame.wiki/sitemap.xml` | 2026-08-19T18:37:24Z | Pass | Search Console first displayed `已成功提交站点地图`; the submitted-sitemaps table then displayed the exact status `成功` and discovered 5 pages. |
| Homepage indexing request | `https://tankgame.wiki/` | 2026-08-19T18:37:49Z | Pass | Requested once. Search Console displayed the exact result `已请求编入索引` and confirmed that the URL was added to the priority crawl queue. |

## DNS cutover record

- Authoritative nameservers: `launch1.spaceship.net`, `launch2.spaceship.net`.
- Nameservers were not changed. Existing NS and unrelated records were preserved; no MX, pre-existing TXT, CAA, AAAA, or unrelated subdomain record was present in the pre-write check.
- Previous apex A records: `54.149.79.189`, `34.216.117.25` (Spaceship parking).
- Current apex A records: `216.198.79.1`, `64.29.17.1` (the complete Vercel rank-1 recommendation).
- Previous `www`: NXDOMAIN.
- Current `www`: CNAME `5f23b550acda4f64.vercel-dns-017.com.`.
- Google ownership was added as a new apex TXT record; its full value is intentionally omitted from this repository evidence.
- `launch1.spaceship.net`, `launch2.spaceship.net`, `1.1.1.1`, and `8.8.8.8` all returned the two apex A records, the `www` CNAME, and the Google verification TXT record.
- Vercel reports both domains attached, verified, `configured_correctly`, and `misconfigured: false`, with no conflicts.
- Rollback values are the two original Spaceship parking A records above. Do not remove the retained Google ownership TXT record during unrelated DNS maintenance.

## Formal launch completion record

The coordinator granted exclusive access for this site's DNS/GSC run. A dedicated Chrome window was used only for Tank Game, then closed after ownership, sitemap, and indexing were confirmed. The isolated rendering session was also closed.

1. `npm run check` passed ESLint, TypeScript, 3/3 contract tests, and the production build.
2. Formal URLs and redirects passed live checks; apex and `www` TLS are active.
3. `python3 "$HOME/.codex/skills/production-website-launch/scripts/verify_launch.py" tankgame.wiki` completed with 26 `PASS`, 1 non-blocking CSP `WARN`, and 0 `FAIL`; both alternate-host checks passed with path and query preserved.
4. GSC ownership, sitemap status `成功`, and one homepage indexing request were confirmed in the interface.
5. Remaining state: **待总控验收**.

## Provider record

- Research: Grok / `grok-4.6`
- Research review: Codex
- Design: Codex / `gpt-5.6-sol` (explicit fallback; Kimi artifact absent)
- Formal implementation and deployment: Codex / `gpt-5.6-sol`
- Hosting: Vercel
- Remaining fallback reason: none for DNS/GSC; only coordinator acceptance remains.
