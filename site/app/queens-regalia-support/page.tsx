import type { Metadata } from 'next';
import { QueensRegaliaSupportContent } from '../components/QueensRegaliaSupportContent';

export const metadata: Metadata = {
  title: "Queen's Regalia Support",
  description: "Official Queen's Regalia help, troubleshooting, privacy, and contact information.",
  alternates: { canonical: '/queens-regalia-support/' },
  openGraph: {
    title: "Queen's Regalia Support — Philosophy Forge",
    description: "Official help and contact information for Queen's Regalia.",
    url: '/queens-regalia-support/',
    images: [{ url: '/queens-regalia-icon.png', width: 192, height: 192, alt: "Queen's Regalia golden crown" }],
  },
  twitter: { card: 'summary', images: ['/queens-regalia-icon.png'] },
};

export default function QueensRegaliaSupportPage() {
  return <QueensRegaliaSupportContent />;
}
