import type { MetadataRoute } from 'next'
import { SITE_URL } from './seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-13')
  const pages = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/location-feux-chantier/', changeFrequency: 'weekly' as const, priority: 0.95 },
    { path: '/nos-services/', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/nos-produits/', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/contact/', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/nos-catalogues/', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/a-propos/', changeFrequency: 'monthly' as const, priority: 0.75 },
  ]

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
