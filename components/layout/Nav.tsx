import Link from "next/link";

export function Nav() {
  return (
    <header className="site-nav">
      <nav className="site-nav__inner" aria-label="Main navigation">
        <Link aria-label="CIVILIS home" className="site-wordmark" href="/">
          CIVILIS<span> / </span>ARCHIVE
        </Link>
        <div className="site-nav__links">
          <Link href="/#archive">Archive</Link>
          <Link href="/about">Methodology</Link>
        </div>
        <span className="site-nav__status">
          <span /> FIELD ARCHIVE · 07 TYPES
        </span>
      </nav>
    </header>
  );
}
