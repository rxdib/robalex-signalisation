import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.robalex-signalisation.ch'
  const pages = ['', '/a-propos', '/nos-produits', '/nos-services', '/location-feux-chantier', '/nos-catalogues', '/contact']

  return pages.map(path => ({
    url: `${base}${path}/`,
    lastModified: new Date('2026-03-10'),
    changeFrequency: (path === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '' ? 1 : path === '/location-feux-chantier' ? 0.9 : 0.8,
  }))
}
