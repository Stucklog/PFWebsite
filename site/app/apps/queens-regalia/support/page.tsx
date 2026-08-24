import type { Metadata } from 'next';
import { QueensRegaliaSupportContent } from '../../../components/QueensRegaliaSupportContent';

export const metadata: Metadata = {
  title: "Queen's Regalia Support",
  description: "Official Queen's Regalia help, troubleshooting, privacy, and contact information.",
  alternates: { canonical: '/queens-regalia-support/' },
};

export default function QueensRegaliaSupportCompatibilityPage() {
  return <QueensRegaliaSupportContent />;
}
