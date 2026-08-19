import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tank Tactics",
  description:
    "Practical Tank Game build logic for ranged, melee, farming, and PvP without relying on a stale upgrade tree.",
  path: "/tanks",
});

const roles = [
  {
    label: "RANGED PRESSURE",
    title: "Aim your damage",
    stats: ["Damage", "Fire rate", "Penetration / range when relevant"],
    note: "Frontal barrels make concentrated damage easier to aim in direct PvP.",
    tone: "orange",
  },
  {
    label: "CLOSE COMBAT",
    title: "Survive contact",
    stats: ["Health", "Body damage", "Speed"],
    note: "Close-range builds need enough movement and durability to choose the engagement.",
    tone: "teal",
  },
  {
    label: "ARENA FARMING",
    title: "Cover more space",
    stats: ["Sustained damage", "Safe positioning", "Clear coverage"],
    note: "Side and rear barrels can farm well, but split damage is harder to focus in a 1v1.",
    tone: "yellow",
  },
];

export default function TanksPage() {
  return (
    <main id="main-content">
      <div className="shell">
        <SiteHeader />
        <header className="page-hero tactics-hero">
          <div>
            <span className="eyebrow">BUILD LOGIC · NOT A STALE TREE</span>
            <h1>Pick a job before you pick a tank.</h1>
            <p>
              The strongest choice depends on what you want to do: focus damage,
              survive close contact, or clear the arena efficiently.
            </p>
          </div>
          <div className="index-card">
            <span>LIVE SOURCE OF TRUTH</span>
            <strong>Use the in-game Index.</strong>
            <p>Upgrade paths change. The Index shows the route available now.</p>
          </div>
        </header>

        <section className="role-grid">
          {roles.map((role, index) => (
            <article className={`role-card role-${role.tone}`} key={role.label}>
              <div className="role-card-head">
                <span>0{index + 1}</span>
                <small>{role.label}</small>
              </div>
              <h2>{role.title}</h2>
              <ul>
                {role.stats.map((stat) => <li key={stat}>{stat}</li>)}
              </ul>
              <p>{role.note}</p>
            </article>
          ))}
        </section>

        <section className="section decision-board">
          <div className="decision-title">
            <span className="section-kicker">QUICK DECISION BOARD</span>
            <h2>Ask these before spending into a build.</h2>
          </div>
          <div className="decision-list">
            <div><span>01</span><p><strong>Can I aim most of my damage?</strong> Concentrated frontal fire is more reliable in direct PvP.</p></div>
            <div><span>02</span><p><strong>Can my bullets survive contact?</strong> Bullet health matters when both players are firing through the same lane.</p></div>
            <div><span>03</span><p><strong>Can I leave a bad fight?</strong> Durability helps, but speed and positioning decide whether you can reset.</p></div>
            <div><span>04</span><p><strong>Is this path still current?</strong> Confirm the actual route in the in-game Index before committing.</p></div>
          </div>
        </section>

        <section className="section currency-callout">
          <div className="currency-symbol" aria-hidden="true">◆</div>
          <div>
            <span className="section-kicker">GEMS / DIAMONDS</span>
            <h2>Earned from tank fights. Spent on long-term options.</h2>
          </div>
          <p>
            Guides use both “gems” and “diamonds” for the shop currency. Use it
            for tank unlocks and raising stat capacity, but verify current prices
            inside the game.
          </p>
        </section>

        <aside className="verification-note danger-note">
          <span>NO FAKE CERTAINTY</span>
          <p>
            We do not publish a “complete” upgrade tree, fixed gem prices, or an
            exact late-game route. Those details are contested or change over
            time; the live Index is the safer answer.
          </p>
        </aside>

        <section className="section next-brief">
          <div>
            <span className="section-kicker">BACK TO BASICS</span>
            <h2>A good build still needs a good opening.</h2>
          </div>
          <Link className="button button-primary" href="/beginner-guide">
            Review the first 10 minutes →
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
