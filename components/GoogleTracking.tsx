'use client'

import { useEffect, useMemo } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import {
  getGoogleTrackingConfig,
  trackContactCtaClick,
  trackEmailClick,
  trackFormSubmit,
  trackPageView,
  trackPhoneClick,
} from '@/lib/googleTracking'

export default function GoogleTracking() {
  const pathname = usePathname()
  const { gaMeasurementId, googleAdsId, scriptTagId, isEnabled } = getGoogleTrackingConfig()

  const pagePath = useMemo(() => pathname, [pathname])

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    trackPageView(pagePath)
  }, [isEnabled, pagePath])

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      const link = target.closest('a[href]')

      if (!(link instanceof HTMLAnchorElement)) {
        return
      }

      const href = link.getAttribute('href') || ''
      const location = link.dataset.trackingLocation || 'site'

      if (href.startsWith('tel:')) {
        trackPhoneClick(location)
        return
      }

      if (href.startsWith('mailto:')) {
        trackEmailClick(location)
        return
      }

      if (link.hasAttribute('data-track-contact-cta')) {
        trackContactCtaClick(location)
      }
    }

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target

      if (!(form instanceof HTMLFormElement)) {
        return
      }

      const formLocation = form.dataset.trackLeadForm

      if (!formLocation) {
        return
      }

      trackFormSubmit(formLocation)
    }

    document.addEventListener('click', handleClick, true)
    document.addEventListener('submit', handleSubmit, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('submit', handleSubmit, true)
    }
  }, [isEnabled])

  if (!scriptTagId) {
    return null
  }

  const bootstrapScript = [
    'window.dataLayer = window.dataLayer || [];',
    'function gtag(){dataLayer.push(arguments);}',
    'window.gtag = gtag;',
    "gtag('js', new Date());",
    googleAdsId ? `gtag('config', '${googleAdsId}');` : '',
    gaMeasurementId ? `gtag('config', '${gaMeasurementId}', { send_page_view: false });` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${scriptTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {bootstrapScript}
      </Script>
    </>
  )
}
