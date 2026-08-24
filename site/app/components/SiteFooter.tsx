import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Philosophy Forge home">
            <span className="brand-mark" aria-hidden="true">PF</span>
            <span>Philosophy Forge</span>
          </Link>
          <p>Thoughtful games and useful tools, independently made.</p>
        </div>

        <div className="footer-column">
          <h2>Apps</h2>
          <Link href="/apps/queens-regalia/">Queen&apos;s Regalia</Link>
        </div>

        <div className="footer-column">
          <h2>Help</h2>
          <Link href="/support/">Support</Link>
          <Link href="/apps/queens-regalia/support/">Queen&apos;s Regalia support</Link>
        </div>

        <div className="footer-column">
          <h2>Legal</h2>
          <Link href="/privacy/">Website privacy</Link>
          <Link href="/apps/queens-regalia/privacy/">Queen&apos;s Regalia privacy</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Philosophy Forge. All rights reserved.</span>
        <a href="mailto:support@philosophy-forge.com">support@philosophy-forge.com</a>
      </div>
    </footer>
  );
}
