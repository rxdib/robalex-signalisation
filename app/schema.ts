import { absoluteUrl, SITE_NAME, SITE_URL } from './seo'

const organizationId = `${SITE_URL}/#organization`
const localBusinessId = `${SITE_URL}/#local-business`
const websiteId = `${SITE_URL}/#website`

const serviceAreas = [
  'Vaud',
  'Genève',
  'Valais',
  'Fribourg',
  'Neuchâtel',
  'Jura',
].map((name) => ({
  '@type': 'AdministrativeArea',
  name,
  containedInPlace: {
    '@type': 'Country',
    name: 'Suisse',
  },
}))

function createBrandedImageObject(imagePath: string) {
  return {
    '@type': 'ImageObject',
    url: absoluteUrl(imagePath),
    creator: { '@id': organizationId },
    creditText: SITE_NAME,
    copyrightNotice: `© ${SITE_NAME}`,
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: SITE_NAME,
  url: SITE_URL,
  logo: createBrandedImageObject('/images/logo-robalex.png'),
  image: absoluteUrl('/images/triopan-bg.jpg'),
  email: 'info@robalex-signalisation.ch',
  telephone: '+41216570705',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+41216570705',
      email: 'info@robalex-signalisation.ch',
      contactType: 'customer service',
      areaServed: 'CH-VD',
      availableLanguage: ['fr'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+41216570705',
      email: 'info@robalex-signalisation.ch',
      contactType: 'sales',
      areaServed: 'CH',
      availableLanguage: ['fr'],
    },
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': localBusinessId,
  name: SITE_NAME,
  description:
    'Spécialiste en signalisation et sécurité routière en Suisse romande. Fourniture, installation, location et maintenance de matériel pour chantiers et équipements permanents.',
  url: SITE_URL,
  parentOrganization: { '@id': organizationId },
  image: [
    createBrandedImageObject('/images/triopan-bg.jpg'),
    createBrandedImageObject('/images/signalisation-chantier-hd.jpg'),
  ],
  telephone: '+41216570705',
  email: 'info@robalex-signalisation.ch',
  priceRange: '$$',
  paymentAccepted: ['Facture', 'Virement bancaire'],
  currenciesAccepted: 'CHF',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chemin du Grandchamp 6',
    addressLocality: 'Lausanne',
    addressRegion: 'Vaud',
    postalCode: '1018',
    addressCountry: 'CH',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: serviceAreas,
  serviceArea: serviceAreas,
  foundingDate: '2004',
  hasMap: 'https://maps.google.com/?q=Chemin+du+Grandchamp+6,+1018+Lausanne',
  knowsAbout: [
    'Signalisation temporaire',
    'Signalisation permanente',
    'Location de feux de chantier',
    'Marquage routier',
    'Mobilier urbain',
    'Sécurité routière',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'fr-CH',
  publisher: { '@id': organizationId },
}

type BreadcrumbItem = {
  name: string
  path: string
}

type BasePageSchemaOptions = {
  type: string
  name: string
  description: string
  path: string
  image?: string
}

function createPageSchema({ type, name, description, path, image }: BasePageSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: 'fr-CH',
    isPartOf: { '@id': websiteId },
    about: { '@id': localBusinessId },
    primaryImageOfPage: image ? createBrandedImageObject(image) : undefined,
  }
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function createWebPageSchema(options: Omit<BasePageSchemaOptions, 'type'>) {
  return createPageSchema({ ...options, type: 'WebPage' })
}

export function createAboutPageSchema(options: Omit<BasePageSchemaOptions, 'type'>) {
  return createPageSchema({ ...options, type: 'AboutPage' })
}

export function createCollectionPageSchema(options: Omit<BasePageSchemaOptions, 'type'>) {
  return createPageSchema({ ...options, type: 'CollectionPage' })
}

export function createContactPageSchema(options: Omit<BasePageSchemaOptions, 'type'>) {
  return {
    ...createPageSchema({ ...options, type: 'ContactPage' }),
    mainEntity: { '@id': localBusinessId },
  }
}

type ServiceSchemaOptions = {
  name: string
  description: string
  path: string
  image: string
}

export function createServiceSchema({ name, description, path, image }: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    image: createBrandedImageObject(image),
    provider: { '@id': localBusinessId },
    areaServed: serviceAreas,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl(path),
      servicePhone: '+41216570705',
    },
  }
}

type FAQItem = {
  q: string
  a: string
}

export function createFaqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
