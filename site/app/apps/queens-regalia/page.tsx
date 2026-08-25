import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Queen’s Regalia',
  description:
    'Rule the grid. Restore the Regalia. Play an offline crown-logic journey through illustrated pixel-art worlds.',
  alternates: { canonical: '/apps/queens-regalia/' },
  openGraph: {
    title: 'Queen’s Regalia — Philosophy Forge',
    description:
      'An offline crown-logic journey where careful deduction opens illustrated worlds and brings pixel-art encounters to life.',
    url: '/apps/queens-regalia/',
    images: [
      {
        url: '/regalia/key-art.jpg',
        width: 1798,
        height: 875,
        alt: 'A radiant eclipsed star above a blue crystal citadel, waterfalls, and ancient stone bridges.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Queen’s Regalia — Philosophy Forge',
    description: 'Rule the grid. Restore the Regalia.',
    images: ['/regalia/key-art.jpg'],
  },
};

const rules = [
  ['Row', 'Place exactly one crown in every row.'],
  ['Column', 'Place exactly one crown in every column.'],
  ['Region', 'Place exactly one crown in every colored region.'],
  ['Distance', 'Crowns cannot touch—not even diagonally.'],
] as const;

const fullEditionStats = [
  ['11', 'story worlds'],
  ['88', 'chapters'],
  ['792', 'crafted puzzles'],
  ['264', 'animated foes'],
] as const;

const screenshots = [
  {
    src: '/regalia/01-rule-the-grid.jpg',
    alt: 'A Queen’s Regalia puzzle board with gold crowns placed across colored regions while a pixel-art knight faces a fantasy opponent above the grid.',
    title: 'Rule the grid',
    body: 'One crown per row, column, and region. No touching.',
  },
  {
    src: '/regalia/02-eleven-story-worlds.jpg',
    alt: 'The Queen’s Regalia story selector, showing the Origin Story realm and a second illustrated cosmic adventure.',
    title: 'Eleven story worlds',
    body: 'A different cast, landscape, and challenge in every arc.',
  },
  {
    src: '/regalia/03-stories-in-motion.jpg',
    alt: 'An illustrated Queen’s Regalia cinematic with three travelers aboard a sun-sailed vessel beneath an eclipse and a glowing city.',
    title: 'Stories in motion',
    body: 'Illustrated prologues, chapter scenes, and finales frame the journey.',
  },
  {
    src: '/regalia/04-endless-offline-puzzles.jpg',
    alt: 'The Just Puzzle mode selector with Easy, Medium, Hard, Expert, and 12-by-12 Extreme offline puzzle runs.',
    title: 'Endless. Offline.',
    body: 'Fresh boards are generated and verified entirely on your device.',
  },
  {
    src: '/regalia/05-master-the-logic.jpg',
    alt: 'The six-lesson Academy screen with mastered and locked crown-logic deduction lessons.',
    title: 'Master the logic',
    body: 'A guided tutorial and six-lesson Academy teach each deduction.',
  },
  {
    src: '/regalia/06-collect-every-foe.jpg',
    alt: 'The Crown-Bearer’s Bestiary listing defeated pixel-art creatures from multiple Queen’s Regalia realms.',
    title: 'Collect every foe',
    body: 'Defeated story adversaries join a replayable animated Bestiary.',
  },
] as const;

export default function QueensRegaliaPage() {
  const gameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Queen’s Regalia',
    url: 'https://philosophy-forge.com/apps/queens-regalia/',
    image: 'https://philosophy-forge.com/regalia/key-art.jpg',
    description:
      'An offline crown-logic journey where careful deduction opens illustrated worlds and brings pixel-art encounters to life.',
    genre: ['Puzzle', 'Logic'],
    playMode: 'SinglePlayer',
    gamePlatform: 'Web browser',
    publisher: {
      '@type': 'Organization',
      name: 'Philosophy Forge',
    },
  };

  return (
    <div className="regalia-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="regalia-header-overlay">
        <SiteHeader />
      </div>

      <main id="main-content">
        <section className="regalia-page-hero" aria-labelledby="regalia-title">
          <img
            className="regalia-hero-art"
            src="/regalia/key-art.jpg"
            alt=""
            width="1798"
            height="875"
            fetchPriority="high"
          />
          <div className="section-shell regalia-hero-inner">
            <div className="regalia-hero-copy">
              <p className="eyebrow"><span aria-hidden="true" /> Offline logic puzzle journey</p>
              <h1 id="regalia-title">Queen’s<br />Regalia</h1>
              <p className="regalia-hero-kicker">Rule the grid. Restore the Regalia.</p>
              <p className="regalia-hero-intro">
                A crown-logic adventure where careful deduction opens illustrated
                worlds and brings pixel-art encounters to life.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://queensregalia.com/" target="_blank" rel="noreferrer">
                  Play the web edition <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-quiet" href="#how-to-play">Learn the rules</a>
              </div>
              <ul className="regalia-hero-facts" aria-label="Web edition features">
                <li><strong>72</strong><span>Origin Story puzzles</span></li>
                <li><strong>6</strong><span>endless run modes</span></li>
                <li><strong>0</strong><span>accounts or ads</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="regalia-availability" aria-label="Queen’s Regalia availability">
          <div className="section-shell regalia-availability-grid">
            <article>
              <span className="regalia-status regalia-status-live" aria-hidden="true" />
              <div>
                <p>Web edition <span>Playable now</span></p>
                <small>Origin Story, the Academy, and Just Puzzle.</small>
              </div>
            </article>
            <article>
              <span className="regalia-status" aria-hidden="true" />
              <div>
                <p>Native edition <span>Release in preparation</span></p>
                <small>Eleven complete story worlds. Store links will appear once live.</small>
              </div>
            </article>
          </div>
        </section>

        <section className="regalia-rules-section" id="how-to-play" aria-labelledby="rules-title">
          <div className="section-shell regalia-rules-grid">
            <div className="regalia-rules-copy">
              <p className="section-label">How it plays</p>
              <h2 id="rules-title">Four rules.<br />One answer.</h2>
              <p className="large-body">
                Every board is a clean test of deduction. Mark impossible cells,
                follow the regions, and place each crown without guessing.
              </p>
              <ol className="regalia-rule-list">
                {rules.map(([title, body], index) => (
                  <li key={title}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{title}</h3><p>{body}</p></div>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="regalia-board-figure">
              <div className="regalia-board-frame">
                <img
                  src="/regalia/completed-board.png"
                  alt="A completed ten-by-ten Queen’s Regalia board with one gold crown in every row, column, and colored region."
                  width="680"
                  height="680"
                />
              </div>
              <figcaption>Every crafted story board is uniquely solvable.</figcaption>
            </figure>
          </div>
        </section>

        <section className="regalia-worlds-section" aria-labelledby="worlds-title">
          <div className="section-shell">
            <div className="regalia-worlds-heading">
              <div>
                <p className="section-label">The complete native edition</p>
                <h2 id="worlds-title">A quiet logic game<br />with an adventurous heart.</h2>
              </div>
              <p>
                Queen’s Regalia keeps the puzzle board at the center. Illustrated
                scenes establish each realm, while story encounters make your own
                moves visible on a synchronized battle stage. Every defeated
                adversary becomes part of a growing Bestiary.
              </p>
            </div>

            <dl className="regalia-stats">
              {fullEditionStats.map(([value, label]) => (
                <div key={label}><dt>{value}</dt><dd>{label}</dd></div>
              ))}
            </dl>

            <p className="regalia-edition-note">
              These figures describe the complete installed edition now in release
              preparation. The current web edition contains the full 72-puzzle
              Origin Story and previews of the ten worlds that follow.
            </p>
          </div>

          <div
            className="regalia-shot-rail"
            role="list"
            aria-label="Queen’s Regalia feature gallery"
            tabIndex={0}
          >
            {screenshots.map((shot, index) => (
              <figure className="regalia-shot-card" role="listitem" key={shot.src}>
                <div className="regalia-shot-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width="720"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>{shot.title}</h3>
                  <p>{shot.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="regalia-depth-section" aria-labelledby="depth-title">
          <div className="section-shell">
            <div className="regalia-depth-heading">
              <p className="section-label">Beyond the story</p>
              <h2 id="depth-title">Play your way.<br />Learn at your pace.</h2>
            </div>
            <div className="regalia-depth-grid">
              <article>
                <span aria-hidden="true">∞</span>
                <p className="regalia-card-kicker">Just Puzzle</p>
                <h3>A fresh board waits behind this one.</h3>
                <p>
                  Puzzles are generated and verified on your device across Easy,
                  Medium, Hard, Expert, 12×12 Extreme, and rotating Mixed runs.
                </p>
              </article>
              <article>
                <span aria-hidden="true">06</span>
                <p className="regalia-card-kicker">The Academy</p>
                <h3>Help that teaches the next idea.</h3>
                <p>
                  Start with the guided tutorial, then learn one deduction at a
                  time through six focused lessons and practice boards.
                </p>
              </article>
              <article>
                <span aria-hidden="true">✦</span>
                <p className="regalia-card-kicker">Story encounters</p>
                <h3>Your puzzle moves drive the battle.</h3>
                <p>
                  Enemies react as you solve. Chapter victories resolve in
                  full-screen finishers, then live on in the Bestiary.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="regalia-offline-section" aria-labelledby="offline-title">
          <div className="section-shell regalia-offline-grid">
            <div>
              <p className="section-label">Built offline from the core</p>
              <h2 id="offline-title">Your progress stays yours.</h2>
              <p>
                Queen’s Regalia is designed to work without a publisher account,
                cloud save, advertising, or analytics. Story progress, puzzle runs,
                Bestiary discoveries, and preferences stay in local storage on
                your device.
              </p>
              <Link className="text-link" href="/queens-regalia-privacy/">Read the privacy policy</Link>
            </div>
            <ul aria-label="Privacy and offline features">
              <li><span aria-hidden="true">01</span><strong>No account or sign-in</strong></li>
              <li><span aria-hidden="true">02</span><strong>No ads or analytics</strong></li>
              <li><span aria-hidden="true">03</span><strong>No publisher cloud save</strong></li>
              <li><span aria-hidden="true">04</span><strong>Progress stored locally</strong></li>
            </ul>
          </div>
        </section>

        <section className="regalia-links-section" aria-labelledby="regalia-links-title">
          <div className="section-shell regalia-links-grid">
            <div>
              <p className="section-label">Ready for the first crown?</p>
              <h2 id="regalia-links-title">Enter the Regalia.</h2>
              <p>Play Origin Story now, or find official help and privacy information.</p>
            </div>
            <div className="link-cards">
              <a href="https://queensregalia.com/" target="_blank" rel="noreferrer">
                <span>Play the web edition</span><small>Launch Queen’s Regalia</small><b aria-hidden="true">↗</b>
              </a>
              <Link href="/queens-regalia-support/">
                <span>Support</span><small>Troubleshooting and contact</small><b aria-hidden="true">→</b>
              </Link>
              <Link href="/queens-regalia-privacy/">
                <span>Privacy policy</span><small>How local game data is handled</small><b aria-hidden="true">→</b>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
