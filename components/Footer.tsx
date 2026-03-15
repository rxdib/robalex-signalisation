import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/nos-produits', label: 'Nos produits' },
  { href: '/nos-catalogues', label: 'Catalogues' },
  { href: '/nos-services', label: 'Nos services' },
  { href: '/location-feux-chantier', label: 'Location feux' },
  { href: '/contact', label: 'Contact' },
]

const productLinks = [
  { href: '/nos-produits', label: 'Signalisation temporaire' },
  { href: '/nos-produits', label: 'Signalisation permanente' },
  { href: '/nos-produits', label: 'Matériel de chantier' },
  { href: '/location-feux-chantier', label: 'Feux de chantier' },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-18 pb-6 text-white/72" role="contentinfo">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="mb-5 block">
              <Image src="/images/logo-white.svg" alt="Robalex Signalisation" width={156} height={40} sizes="156px" />
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed">
              Votre spécialiste en signalisation et sécurité routière pour toute la Suisse romande depuis plus de 20 ans.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+41216570705"
                className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <PhoneIcon />
                021 657 07 05
              </a>
              <a
                href="mailto:info@robalex-signalisation.ch"
                className="inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MailIcon />
                info@robalex-signalisation.ch
              </a>
            </div>
          </div>

          <FooterColumn title="Menu" links={navLinks} />
          <FooterColumn title="Nos produits" links={productLinks} />

          <div>
            <p className="mb-4 font-head text-sm font-700 uppercase tracking-[0.16em] text-white">Adresse</p>
            <address className="not-italic text-sm leading-relaxed text-white/78">
              Robalex Signalisation Sàrl
              <br />
              Chemin du Grandchamp 6
              <br />
              1018 Lausanne
              <br />
              Suisse
            </address>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded bg-red px-4 py-2.5 text-xs font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 Robalex Signalisation Sàrl - Tous droits réservés</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/mentions-legales" className="text-white/70 transition-colors hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-white/70 transition-colors hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: Array<{ href: string; label: string }> }) {
  return (
    <div>
      <p className="mb-4 font-head text-sm font-700 uppercase tracking-[0.16em] text-white">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
    </svg>
  )
}
