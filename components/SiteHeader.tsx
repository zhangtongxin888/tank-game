import Link from "next/link";

const navItems = [
  { href: "/beginner-guide", label: "Start here" },
  { href: "/codes", label: "Codes" },
  { href: "/tanks", label: "Tank tactics" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Tank Game Wiki home">
        <span className="brand-mark" aria-hidden="true">
          TG
        </span>
        <span>
          <strong>Tank Game</strong>
          <small>Field Manual</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
