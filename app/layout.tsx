import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400','500','600','700','800','900'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['400','500','600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.robalex-signalisation.ch'),
  openGraph: { type: 'website', locale: 'fr_CH' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
