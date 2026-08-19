import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/metadata";
import { GAME_URL, SITE_URL } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Clear answers about Tank Game controls, leveling, gems, codes, tank paths, and the official Roblox experience.",
  path: "/faq",
});

const faqs = [
  {
    question: "Who made Tank Game?",
    answer:
      "Tank Game is made by the verified Roblox group 7x3. This website is an independent player guide and is not operated by Roblox or 7x3.",
  },
  {
    question: "Which Roblox experience is this guide about?",
    answer:
      "It covers Tank Game at Roblox place ID 119789365111500, not similarly named tank simulator experiences.",
  },
  {
    question: "How do I level up?",
    answer:
      "Shoot arena food—such as squares, triangles, and pentagons—for XP. Spend stat points as you level, then fight tanks when your build is ready.",
  },
  {
    question: "What are the keyboard controls?",
    answer:
      "Use WASD to move, E to open stat upgrades, and Q to open tank upgrades.",
  },
  {
    question: "How do I earn gems?",
    answer:
      "The official game description says destroying tanks earns gems. Guides sometimes call the shop currency diamonds; current naming and prices should be checked in-game.",
  },
  {
    question: "Where do I redeem codes?",
    answer:
      "Use the blue checkmark on the left side of the game screen. Redeem from the lobby because the match does not pause while the menu is open.",
  },
  {
    question: "Where is the complete tank upgrade tree?",
    answer:
      "Use the in-game Index for the current route to a tank. Third-party trees can be incomplete or outdated, so this guide does not present one as definitive.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: `${SITE_URL}/faq`,
  };

  return (
    <main id="main-content">
      <div className="shell">
        <SiteHeader />
        <header className="page-hero faq-hero">
          <div>
            <span className="eyebrow">FIELD QUESTIONS · STRAIGHT ANSWERS</span>
            <h1>Know before you roll out.</h1>
            <p>
              Quick answers for the details players search mid-match—without
              pretending uncertain upgrade paths are settled facts.
            </p>
          </div>
          <div className="quick-rule faq-rule">
            <span>BEST FIRST READ</span>
            <strong>Start with the opening sequence.</strong>
            <Link href="/beginner-guide">Open beginner guide →</Link>
          </div>
        </header>

        <section className="faq-list" aria-labelledby="faq-heading">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-kicker">FAQ</span>
              <h2 id="faq-heading">The useful answers.</h2>
            </div>
            <p>
              Details were checked on <time dateTime="2026-08-19">August 19, 2026</time>.
              Live codes, menus, and balance can change.
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((item, index) => (
              <article key={item.question}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section next-brief">
          <div>
            <span className="section-kicker">READY TO PLAY?</span>
            <h2>Learn the opening before entering the arena.</h2>
          </div>
          <div className="stacked-actions">
            <Link className="button button-primary" href="/beginner-guide">
              Read the Beginner Guide →
            </Link>
            <a className="text-link" href={GAME_URL} target="_blank" rel="noreferrer">
              Open Official Game ↗
            </a>
          </div>
        </section>
        <SiteFooter />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
