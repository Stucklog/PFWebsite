import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Website Privacy Policy',
  description: 'How the Philosophy Forge website handles information.',
  alternates: { canonical: '/privacy/' },
};

export default function WebsitePrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="legal-main">
        <section className="legal-hero section-shell">
          <p className="section-label">Legal</p>
          <h1>Website privacy policy</h1>
          <p>Effective 24 August 2026</p>
        </section>

        <div className="legal-layout section-shell">
          <aside><p>Policy scope</p><span>This policy covers philosophy-forge.com. Individual apps have their own policies.</span></aside>
          <article>
            <section><h2>Overview</h2><p>Philosophy Forge respects your privacy. The website is designed to provide studio, app, support, and policy information without requiring an account.</p></section>
            <section><h2>Information handled by this website</h2><p>Philosophy Forge does not use this website for behavioral advertising and does not intentionally set analytics or advertising cookies. The hosting provider may process basic technical request information—such as an IP address, browser information, requested page, and request time—to deliver and secure the website.</p></section>
            <section><h2>When you contact support</h2><p>If you contact Philosophy Forge by email, we receive your email address and the information you choose to provide. We use it to reply, provide support, protect against misuse, and meet legal obligations.</p></section>
            <section><h2>Retention and sharing</h2><p>Support messages are kept only as long as reasonably necessary for those purposes. Philosophy Forge does not sell personal information. Information may be disclosed when required by law or to service providers that help deliver the website or email support, subject to appropriate safeguards.</p></section>
            <section><h2>Individual apps</h2><p>Data practices inside an app are described in that app&apos;s policy. See the <Link href="/queens-regalia-privacy/">Queen&apos;s Regalia privacy policy</Link>.</p></section>
            <section><h2>Changes</h2><p>This policy may be updated as the website changes. The effective date at the top will be revised when material changes are made.</p></section>
            <section><h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:support@philosophy-forge.com">support@philosophy-forge.com</a>.</p></section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
