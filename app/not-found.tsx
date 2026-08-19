import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <main id="main-content">
      <div className="shell">
        <SiteHeader />
        <section className="not-found">
          <span className="eyebrow">404 · OUTSIDE THE MAP</span>
          <h1>This route left the arena.</h1>
          <p>The page does not exist, but the beginner route is still open.</p>
          <Link className="button button-primary" href="/beginner-guide">
            Open the Beginner Guide →
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
