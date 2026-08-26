import type { Metadata } from 'next';
import { VerseAndValeTermsContent } from '../../components/VerseAndValeTermsContent';

export const metadata: Metadata = {
  title: 'Verse & Vale Terms and Conditions',
  description: 'Terms for the Verse & Vale reader, subscriptions, and optional Pax AI Scripture companion.',
  alternates: { canonical: '/pax/terms/' },
};

export default function VerseAndValeTermsPage() {
  return <VerseAndValeTermsContent />;
}
