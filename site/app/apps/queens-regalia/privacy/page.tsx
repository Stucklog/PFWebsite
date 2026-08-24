import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../../../components/SiteFooter';
import { SiteHeader } from '../../../components/SiteHeader';

export const metadata: Metadata = {
  title: "Queen's Regalia Privacy Policy",
  description: "Privacy information for Queen's Regalia by Philosophy Forge.",
  alternates: { canonical: '/apps/queens-regalia/privacy/' },
  openGraph: {
    title: "Queen's Regalia Privacy Policy — Philosophy Forge",
    description: "Privacy information for Queen's Regalia by Philosophy Forge.",
    url: '/apps/queens-regalia/privacy/',
    images: [{ url: '/queens-regalia-icon.png', width: 192, height: 192, alt: "Queen's Regalia golden crown" }],
  },
  twitter: { card: 'summary', images: ['/queens-regalia-icon.png'] },
};

export default function QueensRegaliaPrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="legal-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/apps/queens-regalia/">Queen&apos;s Regalia</Link><span aria-hidden="true">/</span><span>Privacy</span>
        </div>
        <section className="legal-hero section-shell">
          <p className="section-label">Queen&apos;s Regalia</p>
          <h1>Privacy policy</h1>
          <p>Last updated 24 August 2026</p>
        </section>

        <div className="policy-notice section-shell" role="note">
          <span aria-hidden="true">!</span>
          <div><h2>Pre-release policy notice</h2><p>This is the permanent policy URL for Queen&apos;s Regalia. The disclosures for future App Store and Google Play builds will be finalized when those release builds and their third-party services are confirmed. This page should not be used for store submission until that review is complete.</p></div>
        </div>

        <div className="legal-layout section-shell">
          <aside><p>Policy scope</p><span>This policy currently covers the public Queen&apos;s Regalia web experience at queensregalia.com.</span></aside>
          <article>
            <section><h2>Overview</h2><p>Queen&apos;s Regalia is a puzzle game developed by Philosophy Forge. The public web experience can be opened without submitting contact details to Philosophy Forge through the game page.</p></section>
            <section><h2>Website delivery information</h2><p>The hosting provider may process technical request information, such as IP address, browser information, requested resources, and request time, to deliver and secure the web experience. Philosophy Forge does not use the game page for behavioral advertising.</p></section>
            <section><h2>Support information</h2><p>If you contact support, Philosophy Forge receives your email address and any device, app, screenshot, or diagnostic information you choose to provide. It is used to answer your request, troubleshoot problems, improve the game, prevent misuse, and meet legal obligations.</p></section>
            <section><h2>Third-party services and store builds</h2><p>Any analytics, crash reporting, advertising, purchases, platform services, or other third-party software included in a future release build will be identified here before that build is submitted to an app store. The final policy will describe the data each service handles and why.</p></section>
            <section><h2>Retention and deletion</h2><p>Support correspondence is retained only as long as reasonably necessary to resolve requests, improve support, prevent misuse, and satisfy legal obligations. To ask about or request deletion of support information, email the address below. Separate account-deletion instructions will be added if Queen&apos;s Regalia introduces user accounts.</p></section>
            <section><h2>Children&apos;s privacy</h2><p>Philosophy Forge does not knowingly ask children to provide personal information through the public game page. The age rating and any child-directed features of future store builds will be reviewed before release.</p></section>
            <section><h2>Security and rights</h2><p>Reasonable measures are used to protect information handled for support. Depending on where you live, you may have rights to access, correct, delete, or restrict use of personal information. Contact Philosophy Forge to make a request.</p></section>
            <section><h2>Changes</h2><p>This policy will be updated when Queen&apos;s Regalia changes or when a release build is finalized. The date at the top will show the latest revision.</p></section>
            <section><h2>Contact</h2><p>Privacy and support questions can be sent to <a href="mailto:support@philosophy-forge.com?subject=Queen%27s%20Regalia%20privacy">support@philosophy-forge.com</a>.</p></section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
