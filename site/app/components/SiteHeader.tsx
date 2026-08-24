import Link from 'next/link';

type SiteHeaderProps = {
  tone?: 'dark' | 'light';
};

export function SiteHeader({ tone = 'dark' }: SiteHeaderProps) {
  return (
    <header className={`site-header site-header-${tone}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Philosophy Forge home">
          <span className="brand-mark" aria-hidden="true">PF</span>
          <span>Philosophy Forge</span>
        </Link>
        <div className="nav-links">
          <Link href="/#apps">Apps</Link>
          <Link href="/#studio">Studio</Link>
          <Link href="/support/">Support</Link>
        </div>
      </nav>
    </header>
  );
}
