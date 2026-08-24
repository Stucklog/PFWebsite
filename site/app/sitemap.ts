import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const pages = [
  '',
  '/apps/queens-regalia/',
  '/queens-regalia-support/',
  '/queens-regalia-privacy/',
  '/support/',
  '/privacy/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://philosophy-forge.com${path}`,
    lastModified: new Date('2026-08-24'),
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path.includes('queens-regalia') ? 0.8 : 0.6,
  }));
}
