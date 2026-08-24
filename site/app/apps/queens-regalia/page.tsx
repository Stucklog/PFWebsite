import type { Metadata } from 'next';
import Link from 'next/link';
import { CrownArtwork } from '../../components/CrownArtwork';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: "Queen's Regalia",
  description: "Meet Queen's Regalia, a puzzle game from Philosophy Forge with a fun, old-school 16-bit JRPG style.",
  alternates: { canonical: '/apps/queens-regalia/' },
  openGraph: {
    title: "Queen's Regalia — Philosophy Forge",
    description: "A puzzle game in a playful 16-bit JRPG style.",
    url: '/apps/queens-regalia/',
    images: [{ url: '/queens-regalia-icon.png', width: 192, height: 192, alt: "Queen's Regalia golden crown" }],
  },
  twitter: { card: 'summary', images: ['/queens-regalia-icon.png'] },
};

export default function QueensRegaliaPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="app-page-hero">
        <SiteHeader />
        <main id="main-content">
          <section className="section-shell app-hero-grid">
            <div className="app-hero-copy">
              <p className="eyebrow"><span aria-hidden="true" /> A game by Philosophy Forge</p>
              <h1>Queen&apos;s<br />Regalia</h1>
              <p className="hero-intro">A puzzle game presented in a fun, old-school 16-bit JRPG style.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://queensregalia.com/" target="_blank" rel="noreferrer">
                  Play on the web <span aria-hidden="true">↗</span>
                </a>
                <Link className="button button-quiet" href="/queens-regalia-support/">Get support</Link>
              </div>
              <p className="availability-note">Mobile store release details will be added when confirmed.</p>
            </div>
            <CrownArtwork />
          </section>
        </main>
      </div>

      <section className="app-intro-section">
        <div className="section-shell app-intro-grid">
          <div>
            <p className="section-label">The game</p>
            <h2>Puzzles with retro spirit.</h2>
            <p className="large-body">
              Queen&apos;s Regalia pairs puzzle play with the look and spirit of
              role-playing games from the 16-bit era. Play the current web build
              now, with platform and store details to follow as release information
              is confirmed.
            </p>
          </div>
          <dl className="facts-list">
            <div><dt>Type</dt><dd>Puzzle game</dd></div>
            <div><dt>Visual style</dt><dd>16-bit JRPG-inspired</dd></div>
            <div><dt>Developer</dt><dd>Philosophy Forge</dd></div>
            <div><dt>Current access</dt><dd>Playable on the web</dd></div>
          </dl>
        </div>
      </section>

      <section className="feature-pillars-section" aria-labelledby="feature-pillars-title">
        <div className="section-shell">
          <p className="section-label">At a glance</p>
          <h2 className="visually-hidden" id="feature-pillars-title">Queen&apos;s Regalia features</h2>
          <div className="feature-pillars">
            <article><span>01</span><h3>Puzzle-first</h3><p>Built around satisfying puzzle play.</p></article>
            <article><span>02</span><h3>Retro spirit</h3><p>Presented in a playful style inspired by the 16-bit JRPG era.</p></article>
            <article><span>03</span><h3>Independently made</h3><p>Developed and supported by Philosophy Forge.</p></article>
          </div>
        </div>
      </section>

      <section className="app-links-section">
        <div className="section-shell app-links-grid">
          <div><p className="section-label">Official links</p><h2>Everything in one place.</h2></div>
          <div className="link-cards">
            <a href="https://queensregalia.com/" target="_blank" rel="noreferrer"><span>Play Queen&apos;s Regalia</span><small>Launch the web build</small><b aria-hidden="true">↗</b></a>
            <Link href="/queens-regalia-support/"><span>Support</span><small>Troubleshooting and contact</small><b aria-hidden="true">→</b></Link>
            <Link href="/queens-regalia-privacy/"><span>Privacy policy</span><small>How information is handled</small><b aria-hidden="true">→</b></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
