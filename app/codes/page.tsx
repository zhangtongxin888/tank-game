import Link from "next/link";
import { CopyCodeButton } from "@/components/CopyCodeButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tank Game Codes (Nov 2026)",
  description:
    "Five official Tank Game 2.5 codes from the Roblox page (HUGEREBALANCE, FOODPHYSICS, VIPREMOVED, HALLOWEEN, 4TEAMSHYPE), checked Nov 5, 2026.",
  path: "/codes",
});

const codes = [
  { code: "HUGEREBALANCE", reward: "500,000 XP", type: "XP BOOST" },
  { code: "FOODPHYSICS", reward: "250,000 XP", type: "XP BOOST" },
  { code: "VIPREMOVED", reward: "150,000 XP", type: "XP BOOST" },
  { code: "HALLOWEEN", reward: "50,000 gems", type: "GEMS" },
  { code: "4TEAMSHYPE", reward: "25,000 gems", type: "GEMS" },
];

export default function CodesPage() {
  return (
    <main id="main-content">
      <div className="shell">
        <SiteHeader />
        <header className="page-hero codes-hero">
          <div>
            <span className="eyebrow">
              OFFICIAL PAGE CHECK · <time dateTime="2026-08-19">AUG 19, 2026</time>
            </span>
            <h1>Codes worth trying now.</h1>
            <p>
              These four were printed on the official Roblox description at our
              latest check. They can change or expire without warning.
            </p>
          </div>
          <div className="safe-card">
            <span>SAFE REDEMPTION</span>
            <strong>Do it in the lobby.</strong>
            <p>The arena keeps moving while the code menu is open.</p>
          </div>
        </header>

        <section className="code-list" aria-label="Tank Game codes">
          {codes.map((item, index) => (
            <article className="code-row" key={item.code}>
              <span className="code-index">0{index + 1}</span>
              <div className="code-value">
                <small>{item.type}</small>
                <code translate="no">{item.code}</code>
              </div>
              <strong>{item.reward}</strong>
              <CopyCodeButton code={item.code} />
            </article>
          ))}
        </section>

        <section className="section redeem-section">
          <div className="redeem-intro">
            <span className="section-kicker">HOW TO REDEEM</span>
            <h2>Three steps. Zero arena risk.</h2>
            <p>
              Reports indicate codes are not case-sensitive and each one can be
              claimed only once per account.
            </p>
          </div>
          <ol className="redeem-steps">
            <li><span>01</span><strong>Return to the lobby</strong><p>Leave the live fight before opening any menu.</p></li>
            <li><span>02</span><strong>Open the blue checkmark</strong><p>Find the tick icon on the left, near Settings.</p></li>
            <li><span>03</span><strong>Paste and redeem</strong><p>Enter one code, press Redeem, then repeat.</p></li>
          </ol>
        </section>

        <aside className="verification-note">
          <span>WHY ONLY FOUR?</span>
          <p>
            Older code lists disagree. We show only the codes printed on the
            official game description during the August 19 check—not a larger
            list copied from mixed sources.
          </p>
        </aside>

        <section className="section next-brief">
          <div>
            <span className="section-kicker">USE THE BOOST</span>
            <h2>Turn the head start into a clean opening.</h2>
          </div>
          <Link className="button button-primary" href="/beginner-guide">
            Follow the beginner sequence →
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
