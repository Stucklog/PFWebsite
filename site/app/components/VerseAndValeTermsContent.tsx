import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function VerseAndValeTermsContent() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="legal-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/support/">Support</Link>
          <span aria-hidden="true">/</span>
          <span>Verse &amp; Vale terms</span>
        </div>

        <section className="legal-hero section-shell">
          <p className="section-label">Official app terms</p>
          <h1>Verse &amp; Vale terms and conditions</h1>
          <p>Effective 26 August 2026 · Publisher: Philosophy Forge</p>
        </section>

        <div className="legal-layout section-shell">
          <aside>
            <p>Plain-language summary</p>
            <span>
              Read offline, use Pax thoughtfully, verify important information, and manage
              subscriptions through the store where you purchased them.
            </span>
          </aside>

          <article>
            <section>
              <h2>Agreement</h2>
              <p>
                These Terms govern your use of Verse &amp; Vale and its Pax AI Scripture
                companion. By downloading, purchasing, or using the app, you agree to these
                Terms and the <Link href="/pax/privacy/">Privacy Policy</Link>. If you do
                not agree, do not use the app or its AI features.
              </p>
            </section>

            <section>
              <h2>License and acceptable use</h2>
              <p>
                Philosophy Forge grants you a personal, limited, non-exclusive,
                non-transferable, revocable license to use Verse &amp; Vale on devices you
                own or control, subject to applicable Apple or Google store rules. You may
                not reverse engineer the service except where law permits, interfere with
                security or quotas, automate abusive requests, probe the backend, upload
                unlawful content, impersonate others, or use the app to harm another
                person.
              </p>
            </section>

            <section>
              <h2>Pax is an AI companion, not an authority</h2>
              <p>
                Pax is a fictional, non-clergy AI Scripture companion. It does not speak
                for God, provide divine revelation, establish doctrine, or replace a
                pastor, priest, rabbi, qualified scholar, counselor, doctor, lawyer,
                emergency service, or other professional. AI responses may be incomplete,
                inaccurate, biased, or inconsistent. Check cited passages in context and
                use independent judgment before relying on a response.
              </p>
              <p>
                Verse &amp; Vale respects differing Christian and canonical traditions.
                Explanations are informational and are not a declaration that one
                tradition is universally authoritative. In a crisis or emergency, contact
                local emergency services or an appropriate qualified person; do not rely
                on Pax for an urgent response.
              </p>
            </section>

            <section>
              <h2>Your messages and local content</h2>
              <p>
                You retain rights you already hold in messages and material you submit.
                You give Philosophy Forge and its processors a limited permission to
                process AI requests and confirmed reports only to provide, secure,
                troubleshoot, and improve the service as described in the Privacy Policy.
                Do not submit content you are not entitled to use or sensitive information
                you do not want processed. Local notes and conversations remain your
                responsibility to back up or delete.
              </p>
            </section>

            <section>
              <h2>Subscriptions and usage allowances</h2>
              <p>
                Verse &amp; Vale may offer Free, Standard, and Premium access. Current AI
                allowances are 3 requests per UTC day for Free, 25 for Standard, and 100
                for Premium. All tiers use the same answer-quality configuration; paid
                tiers provide higher usage allowances. A request may count once generation
                begins, including after cancellation or an explicit retry. Rejected or
                failed requests before generation begins do not count.
              </p>
              <p>
                Subscription prices, billing periods, trials, taxes, and availability are
                shown by Apple or Google before purchase. Subscriptions automatically renew
                unless canceled through your store account under the store&apos;s applicable
                deadlines and terms. Deleting the app does not cancel a subscription.
                Restore Purchases can recheck an eligible subscription. Apple or Google
                handles billing disputes and refunds under its policies.
              </p>
              <p>
                Philosophy Forge may adjust prospective plan features, allowances, or
                prices for sustainability or legal reasons. Store-required notice will be
                provided for price changes, and changes will not remove rights already
                granted by mandatory consumer law.
              </p>
            </section>

            <section>
              <h2>Availability, changes, and suspension</h2>
              <p>
                Offline reading can continue without Pax, but AI, purchase verification,
                reporting, downloads, or other network features may be unavailable because
                of maintenance, network conditions, provider outages, safety controls,
                spending limits, or legal requirements. Philosophy Forge may suspend AI
                access for abuse or material violation of these Terms while preserving
                locally available reading where practical. Features may change as the app
                is improved.
              </p>
            </section>

            <section>
              <h2>Scripture editions and third-party services</h2>
              <p>
                Bible text may be provided under public-domain declarations or licenses
                identified with each edition. Third-party names and content remain the
                property of their owners. Apple, Google, RevenueCat, Firebase, OpenAI, and
                linked websites have separate terms. Philosophy Forge is not responsible
                for third-party services outside its control.
              </p>
            </section>

            <section>
              <h2>Disclaimers and liability</h2>
              <p>
                To the fullest extent permitted by law, Verse &amp; Vale is provided “as is”
                and “as available,” without guarantees that AI responses, citations,
                translations, availability, or operation will always be complete, accurate,
                uninterrupted, or error-free. Nothing in these Terms excludes warranties,
                remedies, or liability that cannot legally be excluded.
              </p>
              <p>
                To the fullest extent permitted by law, Philosophy Forge is not liable for
                indirect, incidental, special, consequential, or punitive loss arising from
                use of the app. Any remaining aggregate liability will not exceed the amount
                you paid Philosophy Forge for Verse &amp; Vale during the 12 months before the
                event giving rise to the claim. These limits do not apply where prohibited
                by law.
              </p>
            </section>

            <section>
              <h2>Termination and changes to these Terms</h2>
              <p>
                You may stop using the app at any time; store cancellation is required to
                stop a renewing subscription. We may update these Terms when the service or
                applicable requirements change. Material changes will be identified by a
                new effective date and, when appropriate, an in-app notice. Continued use
                after updated Terms take effect constitutes acceptance where permitted by
                law.
              </p>
            </section>

            <section>
              <h2>Applicable law and contact</h2>
              <p>
                Applicable consumer-protection and platform rules continue to apply. Any
                dispute will be handled under the law and jurisdiction that validly applies
                to the parties; these Terms do not waive mandatory rights available where
                you live. Questions can be sent to Philosophy Forge at{' '}
                <a href="mailto:support@philosophy-forge.com">support@philosophy-forge.com</a>.
                See <Link href="/pax/support/">Verse &amp; Vale support</Link> for billing,
                privacy, and troubleshooting help.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
