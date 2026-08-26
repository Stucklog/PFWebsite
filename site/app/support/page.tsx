import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Official support and privacy information for Philosophy Forge apps.',
  alternates: { canonical: '/support/' },
};

export default function SupportPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content">
        <section className="content-hero section-shell">
          <p className="eyebrow eyebrow-dark"><span aria-hidden="true" /> Official help</p>
          <h1>Support,<br />without the maze.</h1>
          <p>Choose an app to find troubleshooting guidance, contact details, and its privacy policy.</p>
        </section>

        <section className="support-directory section-shell" aria-labelledby="support-apps-title">
          <div className="directory-heading">
            <p className="section-label">Apps</p>
            <h2 id="support-apps-title">What can we help with?</h2>
          </div>
          <div className="support-app-list">
            <Link className="support-app-card" href="/pax/support/">
              <Image src="/verse-and-vale-icon.png" alt="" width={96} height={96} />
              <div><h3>Verse &amp; Vale</h3><p>Bible reading, subscriptions, privacy, and help with Pax.</p></div>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="support-app-card" href="/queens-regalia-support/">
              <Image src="/queens-regalia-icon.png" alt="" width={96} height={96} />
              <div><h3>Queen&apos;s Regalia</h3><p>Help, feedback, and privacy information for Queen&apos;s Regalia.</p></div>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="contact-panel section-shell">
          <div><p className="section-label">General support</p><h2>Not sure where to start?</h2></div>
          <div>
            <p>Email the studio and include the app name, device model, operating-system version, and a short description of what happened.</p>
            <a className="button button-ink" href="mailto:support@philosophy-forge.com">Email Philosophy Forge</a>
            <small>Please do not send passwords, payment details, or other sensitive information.</small>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
