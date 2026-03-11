import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/',                       label: 'Accueil' },
  { href: '/a-propos',               label: 'À propos' },
  { href: '/nos-produits',           label: 'Nos produits' },
  { href: '/nos-catalogues',         label: 'Catalogues' },
  { href: '/nos-services',           label: 'Nos services' },
  { href: '/location-feux-chantier', label: 'Location feux de chantier' },
  { href: '/contact',                label: 'Contact' },
]

const productLinks = [
  { href: '/nos-produits', label: 'Signalisation temporaire' },
  { href: '/nos-produits', label: 'Signalisation permanente' },
  { href: '/nos-produits', label: 'Matériel de chantier' },
  { href: '/location-feux-chantier', label: 'Feux de chantier' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 pt-16 pb-6" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="block mb-4">
              <Image src="/images/logo-white.svg" alt="Robalex Signalisation" width={150} height={38} />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Votre spécialiste en signalisation routière et sécurité pour toute la Suisse romande depuis plus de 20 ans.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+41216570705" className="hover:text-white transition-colors flex items-center gap-2">
                <PhoneIcon /> 021 657 07 05
              </a>
              <a href="mailto:info@robalex-signalisation.ch" className="hover:text-white transition-colors flex items-center gap-2">
                <MailIcon /> info@robalex-signalisation.ch
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-head font-700 text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map(l => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-head font-700 text-sm uppercase tracking-wider mb-4">Nos produits</h4>
            <ul className="flex flex-col gap-2">
              {productLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-head font-700 text-sm uppercase tracking-wider mb-4">Adresse</h4>
            <address className="not-italic text-sm leading-relaxed">
              Robalex Signalisation Sàrl<br />
              Chemin de Grandchamp 6<br />
              1018 Lausanne<br />
              Suisse
            </address>
            <Link href="/contact" className="inline-block mt-4 bg-red hover:bg-red-dark text-white text-xs font-head font-700 uppercase tracking-wide px-4 py-2 rounded transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Robalex Signalisation Sàrl — Tous droits réservés</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/></svg>
}
function MailIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
}
