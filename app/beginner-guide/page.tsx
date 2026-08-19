import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Beginner Guide",
  description:
    "A practical first-10-minutes guide to Tank Game: controls, spawn immunity, early stats, and safe fights.",
  path: "/beginner-guide",
});

const timeline = [
  {
    time: "BEFORE MATCH",
    title: "Claim the current codes in the lobby",
    copy: "Use the blue checkmark on the left side of the screen. The game does not pause in the arena, so a quiet lobby is the safe place to redeem.",
    note: "Codes can change. Use the list checked against the official Roblox description.",
  },
  {
    time: "MIN 0–2",
    title: "Move, aim, and farm shapes",
    copy: "Use WASD to move. Shoot squares, triangles, pentagons, and other colored food shapes for XP while your short spawn-immunity window is active.",
    note: "Immunity is brief—not a reason to drift toward the busiest fight.",
  },
  {
    time: "MIN 2–5",
    title: "Give your bullets an edge",
    copy: "Press E to open the stats menu. A dependable start is bullet damage plus bullet health, followed by max HP or health regeneration.",
    note: "Stronger bullets are less likely to lose every trade once immunity ends.",
  },
  {
    time: "MIN 5–10",
    title: "Read the arena before fighting",
    copy: "Keep farming until you can survive a mistake. Press Q for tank upgrades and use the in-game Index when you want the current path to a specific tank.",
    note: "Destroying tanks earns gems, but an unnecessary early duel can erase your momentum.",
  },
];

const controls = [
  { key: "W A S D", label: "Move your tank" },
  { key: "E", label: "Open stat upgrades" },
  { key: "Q", label: "Open tank upgrades" },
];

export default function BeginnerGuidePage() {
  return (
    <main id="main-content">
      <div className="shell">
        <SiteHeader />
        <header className="page-hero guide-hero">
          <div>
            <span className="eyebrow">START HERE · 10 MIN READ</span>
            <h1>Your first spawn, without the panic.</h1>
            <p>
              Follow one simple opening: claim codes safely, farm under immunity,
              strengthen your shots, then choose your fights.
            </p>
          </div>
          <div className="quick-rule">
            <span>ONE RULE</span>
            <strong>Farm first.<br />Fight second.</strong>
          </div>
        </header>

        <section className="controls-strip" aria-label="Keyboard controls">
          {controls.map((control) => (
            <div key={control.key}>
              <kbd>{control.key}</kbd>
              <span>{control.label}</span>
            </div>
          ))}
        </section>

        <section className="timeline-section" id="first-spawn">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-kicker">OPENING SEQUENCE</span>
              <h2>Do this in order.</h2>
            </div>
            <p>
              Exact match speed varies. Treat these times as a decision order,
              not a speedrun promise.
            </p>
          </div>
          <ol className="timeline">
            {timeline.map((item, index) => (
              <li key={item.time}>
                <div className="timeline-rail">
                  <span>{index + 1}</span>
                </div>
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <small>{item.note}</small>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section stat-priority">
          <div>
            <span className="section-kicker">EARLY STAT PRIORITY</span>
            <h2>Make your first points boring—and useful.</h2>
            <p>
              A safe beginner opening favors shots that hit harder and survive
              bullet collisions. Once that base feels stable, add durability.
            </p>
          </div>
          <ol className="priority-stack">
            <li><span>1</span><strong>Bullet damage</strong><small>Raise pressure</small></li>
            <li><span>2</span><strong>Bullet health</strong><small>Win shot trades</small></li>
            <li><span>3</span><strong>Max HP / regen</strong><small>Recover from mistakes</small></li>
          </ol>
        </section>

        <section className="section danger-grid">
          <div className="danger-title">
            <span className="warning-badge">COMMON MISTAKES</span>
            <h2>Three fast ways to throw away a good start.</h2>
          </div>
          <div className="danger-list">
            <article>
              <span>01</span>
              <h3>Redeeming in combat</h3>
              <p>The code panel does not pause the match. Redeem in the lobby.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Ignoring bullet health</h3>
              <p>Damage alone is not enough when your shots disappear in every trade.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Trusting an old tank tree</h3>
              <p>Use the live in-game Index when a third-party path looks uncertain.</p>
            </article>
          </div>
        </section>

        <section className="section next-brief">
          <div>
            <span className="section-kicker">NEXT BRIEF</span>
            <h2>Bring a head start into the arena.</h2>
          </div>
          <Link className="button button-primary" href="/codes">
            Open the verified code list →
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
