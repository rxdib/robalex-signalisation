import type { Metadata } from 'next'

export const SITE_URL = 'https://www.robalex-signalisation.ch'
export const SITE_NAME = 'Robalex Signalisation Sàrl'
export const DEFAULT_OG_IMAGE = '/images/triopan-bg.jpg'

type BuildMetadataOptions = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  noIndex?: boolean
}

export function absoluteUrl(path: string) {
  if (!path) return SITE_URL

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'fr_CH',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: imageUrl,
          alt: imageAlt ?? fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}
