import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>tankgame.wiki</strong>
        <p>An independent field guide for Tank Game players.</p>
      </div>
      <div className="footer-links">
        <Link href="/beginner-guide">Beginner guide</Link>
        <Link href="/codes">Codes</Link>
        <Link href="/tanks">Tank tactics</Link>
        <Link href="/faq">FAQ</Link>
      </div>
      <p className="disclaimer">
        Not affiliated with Roblox or 7x3. Game details can change; key facts were
        checked on August 19, 2026.
      </p>
    </footer>
  );
}
