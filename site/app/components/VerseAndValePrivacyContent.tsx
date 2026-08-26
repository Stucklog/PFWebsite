import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function VerseAndValePrivacyContent() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="legal-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/support/">Support</Link>
          <span aria-hidden="true">/</span>
          <span>Verse &amp; Vale privacy</span>
        </div>

        <section className="legal-hero section-shell">
          <p className="section-label">Official app privacy</p>
          <h1>Verse &amp; Vale privacy policy</h1>
          <p>Effective 26 August 2026 · Publisher: Philosophy Forge</p>
        </section>

        <div className="legal-layout section-shell">
          <aside>
            <p>Policy at a glance</p>
            <span>
              Reading, annotations, preferences, and Pax chat history stay on your
              device. AI is optional and is sent only after you consent.
            </span>
          </aside>

          <article>
            <section>
              <h2>Overview</h2>
              <p>
                This policy explains how Verse &amp; Vale handles information. The app
                includes an offline Bible reader and the optional Pax AI Scripture
                companion. Offline reading remains available if you do not enable AI.
              </p>
            </section>

            <section>
              <h2>Information kept on your device</h2>
              <p>
                Verse &amp; Vale stores downloaded Bible editions, reading position,
                bookmarks, highlights, annotations, appearance and accessibility
                preferences, recent saves, daily-presence information, AI permission
                status, and Pax conversations locally on your device.
              </p>
              <p>
                Pax conversation titles and messages are stored in a separate protected
                local database. Chat history, notes, annotations, and reading state are
                not synchronized to Philosophy Forge or Firebase. Device backup or
                transfer services may handle local app data according to your operating
                system and account settings.
              </p>
            </section>

            <section>
              <h2>Anonymous identity, app security, and purchases</h2>
              <p>
                The app creates a Firebase anonymous identifier so the service can protect
                requests, apply usage limits, and associate an existing subscription with
                the same installation. Firebase Authentication and Firebase App Check
                process technical identifiers and integrity signals. You are not asked for
                a name, email address, birth date, or password to use the app.
              </p>
              <p>
                Apple or Google processes subscription purchases. RevenueCat receives a
                pseudonymous app-user identifier, store receipt and product information,
                subscription status, and related technical information so Verse &amp; Vale
                can verify entitlements and restore purchases. Philosophy Forge and
                RevenueCat do not receive your full payment-card number through the app.
              </p>
            </section>

            <section>
              <h2>Optional Pax AI requests</h2>
              <p>
                Before the first AI request, Verse &amp; Vale asks for separate permission.
                If you agree and send a request, the app sends it through a Philosophy
                Forge server to OpenAI. The transmitted data consists of your message,
                locale, up to the most recent 12 chat turns within a size limit, and any
                Scripture context you deliberately attach (up to 30 verses). The server
                may also retrieve public-domain World English Bible Updated passages to
                ground and validate citations.
              </p>
              <p>
                Verse &amp; Vale does not send your private notes, annotations, complete
                chat database, or unrestricted Bible library. Inputs and completed outputs
                may be checked for safety. OpenAI requests use the Responses API with
                storage disabled. OpenAI may nevertheless retain API data temporarily for
                abuse monitoring as described in its{' '}
                <a href="https://developers.openai.com/api/docs/guides/your-data" target="_blank" rel="noreferrer">
                  API data-controls documentation
                </a>.
              </p>
              <p>
                You can withdraw AI permission at any time in Privacy settings. That stops
                future transmissions but does not automatically erase local conversations;
                local history can be deleted separately. Withdrawing permission does not
                affect offline reading.
              </p>
            </section>

            <section>
              <h2>Operational records and reports</h2>
              <p>
                The server records limited operational metadata needed for reliability,
                security, quotas, and cost control: timestamps, latency, token usage,
                model and prompt versions, result status, entitlement tier, and hashed
                safety identifiers. Normal operational logs are designed not to contain
                messages, Scripture text, annotations, or conversation content.
              </p>
              <p>
                If you choose Report on a Pax response and confirm, the selected user and
                assistant turn plus diagnostic metadata is sent to a restricted Firebase
                collection for review. Reports are retained for no more than 90 days and
                then scheduled for deletion. Reporting is optional and never sends an
                entire conversation automatically.
              </p>
            </section>

            <section>
              <h2>Service providers and disclosure</h2>
              <p>
                Philosophy Forge uses Apple and Google for distribution and billing,
                RevenueCat for entitlement verification, Google Firebase for anonymous
                authentication, app integrity, server functions, quotas, and confirmed
                reports, OpenAI for optional AI generation and moderation, and website or
                email providers for support. These providers process information under
                their own terms and privacy obligations. Information may also be disclosed
                when required by law, to protect users or the service, or as part of a
                lawful business transfer. Philosophy Forge does not sell personal
                information or use app data for behavioral advertising.
              </p>
            </section>

            <section>
              <h2>Retention and deletion</h2>
              <p>
                Local reading and chat data remains until you delete it in the app, clear
                app storage, or uninstall the app. Confirmed reports are retained for up to
                90 days. Quota and security records are kept only as long as reasonably
                needed to operate, secure, audit, and comply with legal obligations.
                Purchase records remain with the stores and RevenueCat according to their
                retention requirements.
              </p>
              <p>
                Verse &amp; Vale provides controls to delete individual conversations,
                clear all local chat history, and withdraw AI permission. To request help
                with publisher-held support correspondence or a confirmed report, email{' '}
                <a href="mailto:support@philosophy-forge.com?subject=Verse%20%26%20Vale%20privacy">
                  support@philosophy-forge.com
                </a>. Store purchase history must be managed with Apple or Google.
              </p>
            </section>

            <section>
              <h2>Security and international processing</h2>
              <p>
                Verse &amp; Vale uses platform-protected local storage, encrypted network
                connections, authenticated server requests, app-integrity checks, scoped
                secrets, and restricted backend access. No security measure can guarantee
                absolute protection. Service providers may process information in
                countries other than your own, subject to their applicable safeguards.
              </p>
            </section>

            <section>
              <h2>Age</h2>
              <p>
                Verse &amp; Vale is intended for users aged 13 and older and is not directed
                to children under 13. Philosophy Forge does not knowingly collect a birth
                date through the app.
              </p>
            </section>

            <section>
              <h2>Your choices and rights</h2>
              <p>
                Depending on where you live, you may have rights to access, correct,
                delete, or restrict publisher-held personal information, or to object or
                complain to a data-protection authority. Because most app content remains
                only on your device and the account is anonymous, Philosophy Forge may
                need information from you to locate a report or support message.
              </p>
            </section>

            <section>
              <h2>Changes and contact</h2>
              <p>
                We may update this policy as Verse &amp; Vale, its providers, or legal
                requirements change. The effective date above will identify the current
                version. Questions and privacy requests can be sent to Philosophy Forge at{' '}
                <a href="mailto:support@philosophy-forge.com">support@philosophy-forge.com</a>.
                See also the <Link href="/pax/support/">Verse &amp; Vale support page</Link>
                {' '}and <Link href="/pax/terms/">Terms and Conditions</Link>.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
