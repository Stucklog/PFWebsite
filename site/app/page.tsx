import Link from 'next/link';
import { CrownArtwork } from './components/CrownArtwork';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="home-hero-wrap">
        <SiteHeader />
        <main id="main-content">
          <section className="hero-section">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span aria-hidden="true" /> Independent app studio</p>
                <h1>Ideas, shaped<br />into apps.</h1>
                <p className="hero-intro">
                  Philosophy Forge creates thoughtful games and useful tools—each
                  built with care, a clear point of view, and respect for the people
                  who use it.
                </p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/apps/queens-regalia/">
                    Meet Queen&apos;s Regalia <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className="button button-quiet" href="/support/">Get support</Link>
                </div>
              </div>

              <div className="featured-window">
                <span className="window-kicker">Now forging</span>
                <CrownArtwork compact />
                <div className="window-copy">
                  <p>Featured game</p>
                  <h2>Queen&apos;s Regalia</h2>
                  <span>A puzzle game in a playful 16-bit JRPG style</span>
                </div>
              </div>
            </div>

            <div className="hero-foot" aria-hidden="true">
              <span>Thoughtful by design</span><span>·</span><span>Made with care</span><span>·</span><span>Here after launch</span>
            </div>
          </section>
        </main>
      </div>

      <section className="featured-section" id="apps" aria-labelledby="featured-title">
        <div className="section-shell feature-layout">
          <div className="section-number" aria-hidden="true">01 / Current release</div>
          <div className="feature-copy">
            <p className="section-label">Featured app</p>
            <h2 id="featured-title">A little puzzle. A lot of regalia.</h2>
            <p>
              Queen&apos;s Regalia brings satisfying puzzle play into the colorful
              spirit of a classic 16-bit role-playing game.
            </p>
            <div className="inline-actions">
              <a className="text-link" href="https://queensregalia.com/" target="_blank" rel="noreferrer">
                Play on the web <span aria-hidden="true">↗</span>
              </a>
              <Link className="text-link text-link-muted" href="/apps/queens-regalia/">Explore the game</Link>
            </div>
          </div>

          <Link className="app-card" href="/apps/queens-regalia/" aria-label="Explore Queen's Regalia">
            <div className="app-card-art">
              <img src="/queens-regalia-icon.png" alt="" width="192" height="192" />
            </div>
            <div className="app-card-copy">
              <span>Queen&apos;s Regalia</span>
              <small>Puzzle game · Playable on the web</small>
            </div>
            <span className="app-card-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="studio-section" id="studio" aria-labelledby="studio-title">
        <div className="section-shell">
          <div className="studio-heading">
            <p className="section-label">The studio</p>
            <h2 id="studio-title">Small studio.<br />Carefully made software.</h2>
            <p>
              Philosophy Forge is an independent app studio building a growing
              collection of games and tools. Every project has its own character,
              with the same focus on thoughtful design and dependable craft.
            </p>
          </div>

          <div className="principles-grid">
            <article>
              <span className="principle-icon" aria-hidden="true">✦</span>
              <p>01</p>
              <h3>Thoughtful by design</h3>
              <span>Every product begins with a clear idea and a reason to exist.</span>
            </article>
            <article>
              <span className="principle-icon" aria-hidden="true">◆</span>
              <p>02</p>
              <h3>Made with care</h3>
              <span>Small details should make an experience clearer and more enjoyable.</span>
            </article>
            <article>
              <span className="principle-icon" aria-hidden="true">↗</span>
              <p>03</p>
              <h3>Here after launch</h3>
              <span>Support and privacy information stays easy to find for every app.</span>
            </article>
          </div>
        </div>
      </section>

      <section className="support-band" aria-labelledby="support-title">
        <div className="support-band-sparks" aria-hidden="true"><i /><i /><i /></div>
        <div className="section-shell support-band-content">
          <div>
            <p className="section-label">Support that stays visible</p>
            <h2 id="support-title">Need a hand?</h2>
            <p>Find official help and privacy information for every Philosophy Forge app in one place.</p>
          </div>
          <Link className="button button-primary" href="/support/">Visit support <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
