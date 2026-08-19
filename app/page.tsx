import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TankDiagram } from "@/components/TankDiagram";

const fieldCards = [
  {
    number: "01",
    tag: "10 MIN",
    title: "Survive your first spawn",
    copy: "Learn the controls, use your short immunity window, and turn arena shapes into your first levels.",
    href: "/beginner-guide",
    link: "Open the beginner brief",
  },
  {
    number: "02",
    tag: "LIVE LIST",
    title: "Redeem without getting deleted",
    copy: "Use the four codes shown on the official page—and do it from the lobby, because the match will not pause.",
    href: "/codes",
    link: "See verified codes",
  },
  {
    number: "03",
    tag: "BUILD LOGIC",
    title: "Choose stats with a purpose",
    copy: "Start with reliable early stats, then shape your build for ranged pressure, close combat, or efficient farming.",
    href: "/tanks",
    link: "Plan a tank build",
  },
];

const loop = [
  { step: "Shoot", detail: "Break arena food" },
  { step: "Level", detail: "Earn XP" },
  { step: "Upgrade", detail: "Spend stat points" },
  { step: "Fight", detail: "Challenge tanks" },
  { step: "Unlock", detail: "Use earned gems" },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <div className="shell">
        <SiteHeader />

        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Field notes checked <time dateTime="2026-08-19">Aug 19, 2026</time>
            </div>
            <h1>
              DON&apos;T SPAWN
              <span>CLUELESS.</span>
            </h1>
            <p className="hero-lead">
              A fast, practical field manual for <strong>Tank Game</strong> by
              7x3. Learn what to shoot, where your first stats go, and when to
              pick a fight.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/beginner-guide">
                Start the beginner briefing
                <span aria-hidden="true">→</span>
              </Link>
              <a
                className="text-link"
                href="https://www.roblox.com/games/119789365111500/Tank-Game"
                target="_blank"
                rel="noreferrer"
              >
                Open official game ↗
              </a>
            </div>
            <dl className="hero-meta">
              <div>
                <dt>CREATOR</dt>
                <dd>7x3</dd>
              </div>
              <div>
                <dt>PLACE ID</dt>
                <dd>119789365111500</dd>
              </div>
              <div>
                <dt>SERVER</dt>
                <dd>Up to 20</dd>
              </div>
            </dl>
          </div>
          <div className="hero-visual">
            <div className="tape tape-top">NEW PLAYER DOSSIER</div>
            <TankDiagram />
            <div className="stamp">FIELD<br />READY</div>
          </div>
        </section>

        <section className="briefing-strip" aria-label="Game loop">
          <div className="section-kicker">THE CORE LOOP</div>
          <ol>
            {loop.map((item, index) => (
              <li key={item.step}>
                <span className="loop-index">0{index + 1}</span>
                <strong>{item.step}</strong>
                <small>{item.detail}</small>
              </li>
            ))}
          </ol>
        </section>

        <section className="section field-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">CHOOSE YOUR BRIEF</span>
              <h2>Three things worth learning first.</h2>
            </div>
            <p>
              Skip the giant spreadsheet. These short guides cover the decisions
              that matter before you chase a perfect build.
            </p>
          </div>
          <div className="field-grid">
            {fieldCards.map((card) => (
              <article className="field-card" key={card.number}>
                <div className="field-card-top">
                  <span className="field-number">{card.number}</span>
                  <span className="field-tag">{card.tag}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <Link href={card.href}>{card.link} →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-callout">
          <div className="callout-title">
            <span className="warning-badge">DON&apos;T MISS THIS</span>
            <h2>Your best early weapon is not a tank. It&apos;s timing.</h2>
          </div>
          <div className="callout-copy">
            <p>
              New tanks receive a short spawn-immunity window. Use it to farm
              shapes, build bullet damage and bullet health, and get settled
              before taking risky fights.
            </p>
            <Link className="button button-secondary" href="/beginner-guide#first-spawn">
              See the opening sequence →
            </Link>
          </div>
        </section>

        <section className="section truth-section">
          <div className="truth-mark" aria-hidden="true">!</div>
          <div>
            <span className="section-kicker">ACCURACY POLICY</span>
            <h2>The in-game Index beats a stale tank tree.</h2>
          </div>
          <p>
            Tank paths can change, and third-party trees disagree. This guide
            focuses on proven strategy and sends you to the in-game Index for
            the live route to a specific tank.
            <Link className="inline-arrow" href="/faq">
              Read the FAQ →
            </Link>
          </p>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
