import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function VerseAndValeSupportContent() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader tone="light" />
      <main id="main-content" className="article-main">
        <div className="section-shell breadcrumbs" aria-label="Breadcrumb">
          <Link href="/support/">Support</Link>
          <span aria-hidden="true">/</span>
          <span>Verse &amp; Vale</span>
        </div>

        <section className="article-hero section-shell">
          <div className="article-app-badge">
            <Image src="/verse-and-vale-icon.png" alt="" width={76} height={76} />
          </div>
          <div>
            <p className="section-label">Official app support</p>
            <h1>Verse &amp; Vale support</h1>
            <p>Bible reading, subscriptions, and the optional Pax AI Scripture companion.</p>
          </div>
        </section>

        <div className="article-layout section-shell">
          <aside className="article-aside" aria-label="On this page">
            <p>On this page</p>
            <a href="#contact">Contact</a>
            <a href="#quick-help">Quick help</a>
            <a href="#subscriptions">Subscriptions</a>
            <a href="#pax">Pax AI</a>
            <a href="#privacy">Privacy and policies</a>
          </aside>

          <div className="article-content">
            <section id="contact">
              <p className="section-label">Contact</p>
              <h2>How can we help?</h2>
              <p>
                Email Philosophy Forge with your device model, operating-system version,
                Verse &amp; Vale version, and a short description of what happened. If the
                issue concerns a Bible edition, include its name and the book and chapter.
              </p>
              <a
                className="button button-ink"
                href="mailto:support@philosophy-forge.com?subject=Verse%20%26%20Vale%20support"
              >
                Email Verse &amp; Vale support
              </a>
              <p className="privacy-reminder">
                Do not send passwords, payment details, private notes, full chat exports,
                or sensitive personal information.
              </p>
            </section>

            <section id="quick-help" className="article-section-divider">
              <p className="section-label">Quick help</p>
              <h2>Frequently asked questions</h2>
              <div className="faq-list">
                <details>
                  <summary>Can I read without internet access?<span aria-hidden="true">+</span></summary>
                  <p>
                    Yes. Installed Bible editions, reading position, annotations, and local
                    chat history remain available offline. Pax generation, entitlement
                    refresh, reporting, and some downloads require a connection.
                  </p>
                </details>
                <details>
                  <summary>How do I restore my reading position?<span aria-hidden="true">+</span></summary>
                  <p>
                    Open the Read tab and use Continue Reading or the book-and-chapter
                    navigator. Verse &amp; Vale stores the exact local position and retains it
                    when you move among Today, Read, and Pax.
                  </p>
                </details>
                <details>
                  <summary>Where are notes and Pax conversations stored?<span aria-hidden="true">+</span></summary>
                  <p>
                    They are stored locally on your device and are not synchronized to a
                    Philosophy Forge account. Use the Pax conversation menu to rename,
                    archive, delete, or clear history.
                  </p>
                </details>
                <details>
                  <summary>How do I change or delete a Pax conversation?<span aria-hidden="true">+</span></summary>
                  <p>
                    Open Pax, select the conversation menu, and choose Rename, Archive, or
                    Delete. Clear All removes all local Pax conversations after confirmation.
                    These actions do not cancel a subscription.
                  </p>
                </details>
              </div>
            </section>

            <section id="subscriptions" className="article-section-divider">
              <p className="section-label">Subscriptions</p>
              <h2>Standard and Premium</h2>
              <p>
                Current daily AI allowances reset at 00:00 UTC: Free includes 3 requests,
                Standard 25, and Premium 100. All tiers use the same answer-quality
                configuration. Paid tiers increase the number of requests, not the quality
                of the answer.
              </p>
              <div className="faq-list">
                <details>
                  <summary>My purchase is not showing<span aria-hidden="true">+</span></summary>
                  <p>
                    Confirm that the device uses the same Apple ID or Google account that
                    made the purchase, then open Settings → Subscription and choose Restore
                    Purchases. Restart the app after a successful restore. If it still does
                    not appear, include the product tier and store in your support email,
                    but never send a full receipt or payment details.
                  </p>
                </details>
                <details>
                  <summary>How do I cancel or request a refund?<span aria-hidden="true">+</span></summary>
                  <p>
                    Manage or cancel the subscription in your Apple App Store or Google
                    Play subscriptions settings. Deleting Verse &amp; Vale does not cancel it.
                    Apple or Google decides refund eligibility under its policies.
                  </p>
                </details>
                <details>
                  <summary>Why did a canceled AI request count?<span aria-hidden="true">+</span></summary>
                  <p>
                    A request counts after generation begins, including if you cancel it or
                    explicitly retry it. A rejection or failure before generation begins
                    does not consume the daily allowance.
                  </p>
                </details>
              </div>
            </section>

            <section id="pax" className="article-section-divider">
              <p className="section-label">Pax AI</p>
              <h2>Permission, citations, and safety</h2>
              <p>
                Pax is optional. The first request shows a permission screen explaining
                that your message, bounded recent chat context, locale, and any Scripture
                you attach will be sent through Philosophy Forge to OpenAI. You can decline
                or later withdraw permission without losing offline reading.
              </p>
              <div className="faq-list">
                <details>
                  <summary>How do I withdraw AI permission?<span aria-hidden="true">+</span></summary>
                  <p>
                    Open Settings → Privacy and turn off Pax AI processing. This prevents
                    future AI transmissions. It does not erase local chat history; delete
                    conversations separately if you also want to remove them.
                  </p>
                </details>
                <details>
                  <summary>A citation looks wrong or will not open<span aria-hidden="true">+</span></summary>
                  <p>
                    Retry the answer, check the cited passage directly in Read, and report
                    the response if the issue remains. Citation chips open your selected
                    local edition when that book is available, with a public-domain WEBU
                    fallback where needed.
                  </p>
                </details>
                <details>
                  <summary>How do I copy, retry, or report a response?<span aria-hidden="true">+</span></summary>
                  <p>
                    Use the response action menu. Reporting asks for confirmation and sends
                    only the selected turn and diagnostic metadata—not your entire chat.
                    Reports are retained for up to 90 days.
                  </p>
                </details>
                <details>
                  <summary>Can Pax replace professional or pastoral help?<span aria-hidden="true">+</span></summary>
                  <p>
                    No. Pax is a fictional, non-clergy Scripture companion and can make
                    mistakes. It cannot provide divine revelation or replace pastoral,
                    medical, legal, mental-health, or emergency help. Contact local emergency
                    services or an appropriate qualified person for urgent needs.
                  </p>
                </details>
              </div>
            </section>

            <section id="privacy" className="article-section-divider">
              <p className="section-label">Policies and publisher</p>
              <h2>Privacy and terms</h2>
              <p>
                Read the <Link href="/pax/privacy/">Verse &amp; Vale Privacy Policy</Link>
                {' '}and <Link href="/pax/terms/">Terms and Conditions</Link>.
              </p>
              <p>
                Philosophy Forge<br />
                <a href="mailto:support@philosophy-forge.com">support@philosophy-forge.com</a><br />
                <a href="https://philosophy-forge.com">https://philosophy-forge.com</a>
              </p>
              <p className="privacy-reminder">Last updated 26 August 2026</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
