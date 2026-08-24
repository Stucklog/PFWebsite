import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function QueensRegaliaPrivacyContent() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="legal-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/apps/queens-regalia/">Queen&apos;s Regalia</Link>
          <span aria-hidden="true">/</span>
          <span>Privacy</span>
        </div>

        <section className="legal-hero section-shell">
          <p className="section-label">Official app privacy</p>
          <h1>Privacy policy</h1>
          <p>Effective 24 August 2026 · Publisher: Philosophy Forge</p>
        </section>

        <div className="legal-layout section-shell">
          <aside>
            <p>Policy at a glance</p>
            <span>
              Queen&apos;s Regalia works offline. It has no account, publisher-operated
              backend, ads, analytics, crash reporting, or tracking.
            </span>
          </aside>

          <article>
            <section>
              <h2>Overview</h2>
              <p>
                Queen&apos;s Regalia is designed to work offline. It requires no account
                and has no publisher-operated backend or cloud save.
              </p>
            </section>

            <section>
              <h2>Data stored on your device</h2>
              <p>
                The app stores game information locally, including tutorial and Academy
                progress, story and puzzle progress, board marks, elapsed time, hints and
                checks, completion records, generated Just Puzzle sessions and statistics,
                unlocked content, Bestiary discoveries, viewed scenes, and settings.
              </p>
              <p>
                This information remains in the app&apos;s local storage. Philosophy Forge
                does not receive it or use it for analytics, advertising, attribution,
                profiling, or tracking.
              </p>
              <p>
                The app contains no advertising, analytics, crash-reporting, or tracking
                service and does not automatically transmit game data.
              </p>
            </section>

            <section>
              <h2>External pages and support</h2>
              <p>
                If you choose a Privacy Policy or Support action, the app opens a fixed
                Philosophy Forge webpage in your system browser. The app does not attach
                or send game data to that link.
              </p>
              <p>
                Website hosting providers may process ordinary request information, such
                as an IP address, browser details, and timestamps, to deliver and secure
                those webpages. The separate <Link href="/privacy/">Website Privacy Policy</Link>
                {' '}applies to that browser visit.
              </p>
              <p>
                If you email support, Philosophy Forge receives your email address,
                message, and any information or attachments you choose to provide. We use
                this information to answer and troubleshoot your request and retain it only
                as long as reasonably necessary for support or legal obligations. Do not
                send passwords, payment-card details, store credentials, or sensitive
                personal information.
              </p>
            </section>

            <section>
              <h2>Purchases</h2>
              <p>
                Apple processes App Store purchases under Apple&apos;s terms and privacy
                practices. Philosophy Forge does not receive your full payment-card details
                through Queen&apos;s Regalia.
              </p>
            </section>

            <section>
              <h2>Retention and deletion</h2>
              <p>
                Local game data remains on your device until you reset it, remove it through
                your operating system, or uninstall the app.
              </p>
              <p>
                To erase all in-app data, open <strong>Master settings</strong>, find
                {' '}<strong>All game data</strong>, choose <strong>Completely reset game</strong>,
                then confirm <strong>Continue</strong> and <strong>Erase everything</strong>.
              </p>
              <p>
                Apple backup or device-transfer services may retain or restore app data
                according to your device and account settings. Philosophy Forge does not
                operate those services and cannot retrieve your save.
              </p>
              <p>
                Because Queen&apos;s Regalia has no publisher-held account or game-save
                database, there is no remote game record for Philosophy Forge to delete. To
                request deletion of support correspondence, email{' '}
                <a href="mailto:support@philosophy-forge.com?subject=Queen%27s%20Regalia%20privacy">
                  support@philosophy-forge.com
                </a>. We will delete it unless retention is reasonably necessary for legal
                obligations.
              </p>
            </section>

            <section>
              <h2>Security</h2>
              <p>
                Game information remains in platform-local storage and is protected by your
                device and operating-system safeguards. The public Philosophy Forge pages
                use HTTPS, and reasonable measures are used to protect support correspondence.
                No storage or transmission method can be guaranteed completely secure.
              </p>
            </section>

            <section>
              <h2>Children</h2>
              <p>
                Queen&apos;s Regalia does not collect personal data through the app from
                users, including children.
              </p>
            </section>

            <section>
              <h2>Changes</h2>
              <p>
                We may update this policy if the app or applicable requirements change. The
                current effective date will always appear above.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Philosophy Forge<br />
                <a href="mailto:support@philosophy-forge.com?subject=Queen%27s%20Regalia%20privacy">
                  support@philosophy-forge.com
                </a><br />
                <a href="https://philosophy-forge.com">https://philosophy-forge.com</a>
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
