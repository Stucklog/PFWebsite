import type { Metadata } from 'next';
import { QueensRegaliaPrivacyContent } from '../../../components/QueensRegaliaPrivacyContent';

export const metadata: Metadata = {
  title: "Queen's Regalia Privacy Policy",
  description: "How Queen's Regalia handles game data, support correspondence, retention, and deletion.",
  alternates: { canonical: '/queens-regalia-privacy/' },
};

export default function QueensRegaliaPrivacyCompatibilityPage() {
  return <QueensRegaliaPrivacyContent />;
}
