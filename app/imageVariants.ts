export const homeHeroImage = {
  fallback: '/images/optimized/triopan-bg-home-960.jpg',
  jpgSrcSet: [
    '/images/optimized/triopan-bg-home-640.jpg 640w',
    '/images/optimized/triopan-bg-home-960.jpg 960w',
    '/images/optimized/triopan-bg-home-1440.jpg 1440w',
    '/images/optimized/triopan-bg-home-1780.jpg 1780w',
  ].join(', '),
  webpSrcSet: [
    '/images/optimized/triopan-bg-home-640.webp 640w',
    '/images/optimized/triopan-bg-home-960.webp 960w',
    '/images/optimized/triopan-bg-home-1440.webp 1440w',
    '/images/optimized/triopan-bg-home-1780.webp 1780w',
  ].join(', '),
  sizes: '100vw',
}

export const autorouteGeneveDisplayImage = {
  fallback: '/images/optimized/autoroute-geneve-display-800.jpg',
  jpgSrcSet: [
    '/images/optimized/autoroute-geneve-display-400.jpg 400w',
    '/images/optimized/autoroute-geneve-display-800.jpg 800w',
    '/images/optimized/autoroute-geneve-display-1200.jpg 1200w',
  ].join(', '),
  webpSrcSet: [
    '/images/optimized/autoroute-geneve-display-400.webp 400w',
    '/images/optimized/autoroute-geneve-display-800.webp 800w',
    '/images/optimized/autoroute-geneve-display-1200.webp 1200w',
  ].join(', '),
  sizes: '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 560px',
}

const serviceDisplayImage = (fallback: string, name: string) => ({
  fallback,
  webpSrcSet: [
    `/images/optimized/${name}-768.webp 768w`,
    `/images/optimized/${name}-1280.webp 1280w`,
  ].join(', '),
  sizes: '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px',
})

export const panneauCandelabreImage = serviceDisplayImage('/images/panneau-candelabre.jpg', 'panneau-candelabre')
export const marquageParkingImage = serviceDisplayImage('/images/travaux-marquage-parking.jpg', 'travaux-marquage-parking')
export const installationTemporaireImage = serviceDisplayImage(
  '/images/installation-signalisation-temporaire-location.jpg',
  'installation-signalisation-temporaire-location',
)
export const signauxPliantsTriopanImage = serviceDisplayImage(
  '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Signaux-pliants-Triopan.jpg',
  'signaux-pliants-triopan',
)
export const socleBetonImage = serviceDisplayImage(
  '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Socle-béton-50kg-prefabriqué.jpg',
  'socle-beton-50kg-prefabrique',
)
