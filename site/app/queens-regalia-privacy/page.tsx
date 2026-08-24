import type { Metadata } from 'next';
import { QueensRegaliaPrivacyContent } from '../components/QueensRegaliaPrivacyContent';

export const metadata: Metadata = {
  title: "Queen's Regalia Privacy Policy",
  description: "How Queen's Regalia handles game data, support correspondence, retention, and deletion.",
  alternates: { canonical: '/queens-regalia-privacy/' },
  openGraph: {
    title: "Queen's Regalia Privacy Policy — Philosophy Forge",
    description: "Official privacy information for Queen's Regalia by Philosophy Forge.",
    url: '/queens-regalia-privacy/',
    images: [{ url: '/queens-regalia-icon.png', width: 192, height: 192, alt: "Queen's Regalia golden crown" }],
  },
  twitter: { card: 'summary', images: ['/queens-regalia-icon.png'] },
};

export default function QueensRegaliaPrivacyPage() {
  return <QueensRegaliaPrivacyContent />;
}
