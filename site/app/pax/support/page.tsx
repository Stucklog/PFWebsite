import type { Metadata } from 'next';
import { VerseAndValeSupportContent } from '../../components/VerseAndValeSupportContent';

export const metadata: Metadata = {
  title: 'Verse & Vale Support',
  description: 'Official Verse & Vale help for reading, subscriptions, privacy, and the optional Pax AI companion.',
  alternates: { canonical: '/pax/support/' },
  openGraph: {
    title: 'Verse & Vale Support — Philosophy Forge',
    description: 'Official help and contact information for Verse & Vale and Pax.',
    url: '/pax/support/',
    images: [{ url: '/verse-and-vale-icon.png', width: 1024, height: 1024, alt: 'Verse & Vale cross and open Bible icon' }],
  },
  twitter: { card: 'summary', images: ['/verse-and-vale-icon.png'] },
};

export default function VerseAndValeSupportPage() {
  return <VerseAndValeSupportContent />;
}
