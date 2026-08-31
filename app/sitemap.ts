import type { MetadataRoute } from 'next'
import { SITE_URL } from './seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', lastModified: '2026-08-31', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/location-feux-chantier/', lastModified: '2026-06-16', changeFrequency: 'weekly' as const, priority: 0.95 },
    { path: '/nos-services/', lastModified: '2026-08-31', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/signalisation-temporaire/', lastModified: '2026-08-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/signalisation-permanente/', lastModified: '2026-08-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/marquage-routier/', lastModified: '2026-08-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/nos-produits/', lastModified: '2026-08-31', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/contact/', lastModified: '2026-08-31', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/nos-catalogues/', lastModified: '2026-06-16', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/a-propos/', lastModified: '2026-06-16', changeFrequency: 'monthly' as const, priority: 0.75 },
  ]

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
