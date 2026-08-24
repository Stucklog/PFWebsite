import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SiteHeader />
      <main>
        <p className="eyebrow"><span aria-hidden="true" /> 404 · Lost in the forge</p>
        <h1>That page<br />isn&apos;t here.</h1>
        <p>The link may be out of date, or the page may have moved.</p>
        <Link className="button button-primary" href="/">Return home <span aria-hidden="true">→</span></Link>
      </main>
    </div>
  );
}
