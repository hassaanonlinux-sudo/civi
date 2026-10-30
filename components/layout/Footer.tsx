import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-wordmark" href="/">
          CIVILIS<span> / </span>ARCHIVE
        </Link>
        <p>Conceptual models grounded in known physics. No claim of detection.</p>
        <Link href="/about">Read the methodology <span aria-hidden="true">↗</span></Link>
      </div>
    </footer>
  );
}
