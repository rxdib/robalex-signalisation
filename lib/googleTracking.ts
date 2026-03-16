declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const PHONE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL
const EMAIL_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_CONVERSION_LABEL
const FORM_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL

export function getGoogleTrackingConfig() {
  return {
    gaMeasurementId: GA_MEASUREMENT_ID,
    googleAdsId: GOOGLE_ADS_ID,
    phoneConversionLabel: PHONE_CONVERSION_LABEL,
    emailConversionLabel: EMAIL_CONVERSION_LABEL,
    formConversionLabel: FORM_CONVERSION_LABEL,
    scriptTagId: GA_MEASUREMENT_ID || GOOGLE_ADS_ID,
    isEnabled: Boolean(GA_MEASUREMENT_ID || GOOGLE_ADS_ID),
  }
}

function runGtag(...args: unknown[]) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag(...args)
}

function sendAdsConversion(label: string | undefined) {
  if (!GOOGLE_ADS_ID || !label) {
    return
  }

  runGtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
  })
}

function sendLeadEvent(method: 'phone' | 'email' | 'form', location: string) {
  if (!GA_MEASUREMENT_ID && !GOOGLE_ADS_ID) {
    return
  }

  runGtag('event', 'generate_lead', {
    event_category: 'lead',
    event_label: location,
    method,
  })
}

export function trackPageView(pagePath: string) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return
  }

  runGtag('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  })
}

export function trackPhoneClick(location: string) {
  sendLeadEvent('phone', location)
  sendAdsConversion(PHONE_CONVERSION_LABEL)
}

export function trackEmailClick(location: string) {
  sendLeadEvent('email', location)
  sendAdsConversion(EMAIL_CONVERSION_LABEL)
}

export function trackFormSubmit(location: string) {
  sendLeadEvent('form', location)
  sendAdsConversion(FORM_CONVERSION_LABEL)
}

export function trackContactCtaClick(location: string) {
  if (!GA_MEASUREMENT_ID && !GOOGLE_ADS_ID) {
    return
  }

  runGtag('event', 'contact_cta_click', {
    event_category: 'engagement',
    event_label: location,
  })
}
