import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../../../components/SiteFooter';
import { SiteHeader } from '../../../components/SiteHeader';

export const metadata: Metadata = {
  title: "Queen's Regalia Support",
  description: "Get official help, troubleshooting guidance, and contact information for Queen's Regalia.",
  alternates: { canonical: '/apps/queens-regalia/support/' },
  openGraph: {
    title: "Queen's Regalia Support — Philosophy Forge",
    description: "Official help and contact information for Queen's Regalia.",
    url: '/apps/queens-regalia/support/',
    images: [{ url: '/queens-regalia-icon.png', width: 192, height: 192, alt: "Queen's Regalia golden crown" }],
  },
  twitter: { card: 'summary', images: ['/queens-regalia-icon.png'] },
};

export default function QueensRegaliaSupportPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="article-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/support/">Support</Link><span aria-hidden="true">/</span><span>Queen&apos;s Regalia</span>
        </div>

        <section className="article-hero section-shell">
          <div className="article-app-badge"><img src="/queens-regalia-icon.png" alt="" width="76" height="76" /></div>
          <div><p className="section-label">Official app support</p><h1>Queen&apos;s Regalia support</h1><p>Having trouble with the game or want to share feedback? You&apos;re in the right place.</p></div>
        </section>

        <div className="article-layout section-shell">
          <aside className="article-aside" aria-label="On this page">
            <p>On this page</p>
            <a href="#quick-steps">Quick steps</a>
            <a href="#report">Report a problem</a>
            <a href="#faq">Frequently asked questions</a>
          </aside>

          <div className="article-content">
            <section id="quick-steps">
              <p className="section-label">Start here</p>
              <h2>Try these quick steps</h2>
              <ol className="step-list">
                <li><span>1</span><div><h3>Refresh the game</h3><p>Close the browser tab or app completely, then open Queen&apos;s Regalia again.</p></div></li>
                <li><span>2</span><div><h3>Check for updates</h3><p>Use the latest available browser, app version, and operating-system update.</p></div></li>
                <li><span>3</span><div><h3>Restart the device</h3><p>A restart can clear temporary memory or connection problems.</p></div></li>
              </ol>
            </section>

            <section id="report" className="article-section-divider">
              <p className="section-label">Contact support</p>
              <h2>Report a problem</h2>
              <p>Include as much of the following as you can:</p>
              <ul>
                <li>Your device model and operating-system version</li>
                <li>Your browser or Queen&apos;s Regalia app version, if available</li>
                <li>The steps that led to the problem</li>
                <li>What you expected and what happened instead</li>
                <li>A screenshot, if it helps explain the issue</li>
              </ul>
              <a className="button button-ink" href="mailto:support@philosophy-forge.com?subject=Queen%27s%20Regalia%20support">Email Queen&apos;s Regalia support</a>
              <p className="privacy-reminder">Please do not send passwords, payment details, or other sensitive information.</p>
            </section>

            <section id="faq" className="article-section-divider">
              <p className="section-label">FAQ</p>
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                <details><summary>Where can I play Queen&apos;s Regalia?<span aria-hidden="true">+</span></summary><p>The current web build is available at <a href="https://queensregalia.com/" target="_blank" rel="noreferrer">queensregalia.com</a>. Official store links will appear on the app page when confirmed.</p></details>
                <details><summary>How do I report a bug or share feedback?<span aria-hidden="true">+</span></summary><p>Use the support email above and include “Queen&apos;s Regalia” in the subject line.</p></details>
                <details><summary>Where can I read the privacy policy?<span aria-hidden="true">+</span></summary><p>Read the <Link href="/apps/queens-regalia/privacy/">Queen&apos;s Regalia privacy policy</Link>.</p></details>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
