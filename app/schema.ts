// app/schema.ts
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Robalex Signalisation Sàrl',
  description: 'Spécialiste en signalisation routière et sécurité en Suisse romande. Fourniture, pose et location de matériel de signalisation temporaire et permanente.',
  url: 'https://www.robalex-signalisation.ch',
  telephone: '+41216570705',
  email: 'info@robalex-signalisation.ch',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chemin de Grandchamp 6',
    addressLocality: 'Lausanne',
    addressRegion: 'Vaud',
    postalCode: '1018',
    addressCountry: 'CH',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 46.5197, longitude: 6.6323 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' }
  ],
  areaServed: 'Suisse romande',
  foundingDate: '2004',
}
