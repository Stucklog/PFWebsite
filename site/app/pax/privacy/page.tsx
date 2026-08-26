import type { Metadata } from 'next';
import { VerseAndValePrivacyContent } from '../../components/VerseAndValePrivacyContent';

export const metadata: Metadata = {
  title: 'Verse & Vale Privacy Policy',
  description: 'How Verse & Vale handles local reading data, subscriptions, optional Pax AI requests, reports, retention, and deletion.',
  alternates: { canonical: '/pax/privacy/' },
  openGraph: {
    title: 'Verse & Vale Privacy Policy — Philosophy Forge',
    description: 'Official privacy information for Verse & Vale and Pax.',
    url: '/pax/privacy/',
    images: [{ url: '/verse-and-vale-icon.png', width: 1024, height: 1024, alt: 'Verse & Vale cross and open Bible icon' }],
  },
  twitter: { card: 'summary', images: ['/verse-and-vale-icon.png'] },
};

export default function VerseAndValePrivacyPage() {
  return <VerseAndValePrivacyContent />;
}
