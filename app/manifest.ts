import type { MetadataRoute } from 'next'
import { SITE_NAME } from './seo'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Robalex',
    description: 'Signalisation et sécurité routière en Suisse romande.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14213d',
    icons: [
      {
        src: '/images/Favicon/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/Favicon/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
