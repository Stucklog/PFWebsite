import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://philosophy-forge.com'),
  title: {
    default: 'Philosophy Forge — Thoughtfully made apps and games',
    template: '%s — Philosophy Forge',
  },
  description:
    "Philosophy Forge is an independent app studio creating thoughtful games and useful tools, including the 16-bit JRPG-inspired puzzle game Queen's Regalia.",
  applicationName: 'Philosophy Forge',
  creator: 'Philosophy Forge',
  publisher: 'Philosophy Forge',
  alternates: { canonical: '/' },
  icons: { icon: '/queens-regalia-icon.png', apple: '/queens-regalia-icon.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Philosophy Forge',
    title: 'Philosophy Forge — Thoughtfully made apps and games',
    description: 'An independent app studio creating thoughtful games and useful tools.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Philosophy Forge — Ideas, shaped into apps.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philosophy Forge — Thoughtfully made apps and games',
    description: 'An independent app studio creating thoughtful games and useful tools.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#151d3b',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Philosophy Forge',
              url: 'https://philosophy-forge.com',
              email: 'support@philosophy-forge.com',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
