import Link from 'next/link';
import Image from 'next/image';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function QueensRegaliaSupportContent() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="article-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/support/">Support</Link>
          <span aria-hidden="true">/</span>
          <span>Queen&apos;s Regalia</span>
        </div>

        <section className="article-hero section-shell">
          <div className="article-app-badge">
            <Image src="/queens-regalia-icon.png" alt="" width={76} height={76} />
          </div>
          <div>
            <p className="section-label">Official app support</p>
            <h1>Queen&apos;s Regalia support</h1>
            <p>An offline crown-logic puzzle adventure published by Philosophy Forge.</p>
          </div>
        </section>

        <div className="article-layout section-shell">
          <aside className="article-aside" aria-label="On this page">
            <p>On this page</p>
            <a href="#contact">Contact</a>
            <a href="#quick-help">Quick help</a>
            <a href="#purchases">Purchases and refunds</a>
            <a href="#privacy">Privacy and publisher</a>
          </aside>

          <div className="article-content">
            <section id="contact">
              <p className="section-label">Contact</p>
              <h2>How can we help?</h2>
              <p>
                Email Philosophy Forge and include the details below when reporting a
                problem. Queen&apos;s Regalia has no app account or password.
              </p>
              <ul>
                <li>Your device model and iOS version</li>
                <li>Your app version, if known</li>
                <li>The story or puzzle mode involved</li>
                <li>What you expected and what happened</li>
                <li>A screenshot, if it contains no private information</li>
              </ul>
              <a
                className="button button-ink"
                href="mailto:support@philosophy-forge.com?subject=Queen%27s%20Regalia%20support"
              >
                Email Queen&apos;s Regalia support
              </a>
              <p className="privacy-reminder">
                Never send passwords, payment-card details, store credentials, backup
                files, or sensitive personal information.
              </p>
            </section>

            <section id="quick-help" className="article-section-divider">
              <p className="section-label">Quick help</p>
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                <details>
                  <summary>How do the puzzles work?<span aria-hidden="true">+</span></summary>
                  <p>
                    Place exactly one crown in every row, every column, and every colored
                    region. Crowns cannot touch, including diagonally. The tutorial and
                    Academy contain guided lessons.
                  </p>
                </details>
                <details>
                  <summary>Does the game require internet access?<span aria-hidden="true">+</span></summary>
                  <p>
                    No. The game and story content are bundled for offline play. Opening
                    the Privacy Policy or Support webpage requires an internet connection.
                  </p>
                </details>
                <details>
                  <summary>Are there accounts, ads, subscriptions, or in-app purchases?<span aria-hidden="true">+</span></summary>
                  <p>
                    No. The complete native game is included with the one-time paid
                    download. There are no accounts, ads, subscriptions, or in-app
                    purchases.
                  </p>
                </details>
                <details>
                  <summary>Where is progress stored?<span aria-hidden="true">+</span></summary>
                  <p>
                    Progress, puzzle runs, Bestiary discoveries, viewed scenes, and
                    preferences are stored locally on your device. There is no Philosophy
                    Forge cloud save or cross-device account sync.
                  </p>
                </details>
                <details>
                  <summary>How do I reset a puzzle?<span aria-hidden="true">+</span></summary>
                  <p>
                    On a puzzle screen, choose the <strong>Reset</strong> tool and confirm
                    {' '}<strong>Reset</strong>. This clears that attempt&apos;s marks and
                    elapsed time.
                  </p>
                </details>
                <details>
                  <summary>How do I reset one story?<span aria-hidden="true">+</span></summary>
                  <p>
                    Open <strong>Master settings</strong>, choose the story arc, select
                    {' '}<strong>Reset this story arc</strong>, then confirm
                    {' '}<strong>Reset this arc</strong>.
                  </p>
                </details>
                <details>
                  <summary>How do I delete all local data?<span aria-hidden="true">+</span></summary>
                  <p>
                    Open <strong>Master settings</strong> → <strong>All game data</strong> →
                    {' '}<strong>Completely reset game</strong> → <strong>Continue</strong> →
                    {' '}<strong>Erase everything</strong>. This deletes every story arc,
                    puzzle-only run, unlock, tutorial and Academy progress, and master
                    setting. It cannot be undone.
                  </p>
                </details>
                <details>
                  <summary>Can support restore progress?<span aria-hidden="true">+</span></summary>
                  <p>
                    No. Philosophy Forge does not receive game saves. Apple backup or
                    device-transfer features may restore data depending on your settings,
                    but they are not a Queen&apos;s Regalia account service.
                  </p>
                </details>
                <details>
                  <summary>A puzzle appears stuck or incorrect<span aria-hidden="true">+</span></summary>
                  <p>
                    Use <strong>Check progress</strong> or <strong>Hint</strong>, undo recent
                    marks, or reset the attempt. If the problem remains, email the story,
                    puzzle or mode, board size, and a screenshot.
                  </p>
                </details>
                <details>
                  <summary>How do I reduce motion?<span aria-hidden="true">+</span></summary>
                  <p>
                    From the home screen, open <strong>Master settings</strong> and enable
                    {' '}<strong>Reduce motion</strong>.
                  </p>
                </details>
              </div>
            </section>

            <section id="purchases" className="article-section-divider">
              <p className="section-label">Purchases and refunds</p>
              <h2>App Store billing</h2>
              <p>
                Apple processes purchases and eligible refunds. Visit{' '}
                <a href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">
                  Apple&apos;s Report a Problem
                </a>{' '}
                for purchase history or refund requests.
              </p>
            </section>

            <section id="privacy" className="article-section-divider">
              <p className="section-label">Policies and publisher</p>
              <h2>Privacy information</h2>
              <p>
                Read the public{' '}
                <Link href="/queens-regalia-privacy/">Queen&apos;s Regalia Privacy Policy</Link>.
              </p>
              <p>
                Philosophy Forge<br />
                <a href="mailto:support@philosophy-forge.com">support@philosophy-forge.com</a><br />
                <a href="https://philosophy-forge.com">https://philosophy-forge.com</a>
              </p>
              <p className="privacy-reminder">Last updated 24 August 2026</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
