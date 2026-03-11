'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/',                       label: 'Accueil' },
  { href: '/a-propos',               label: 'À propos' },
  { href: '/nos-produits',           label: 'Nos produits' },
  { href: '/nos-catalogues',         label: 'Catalogues' },
  { href: '/nos-services',           label: 'Nos services' },
  { href: '/location-feux-chantier', label: 'Location feux' },
  { href: '/contact',                label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-navy shadow-card-lg" aria-label="Navigation principale">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" aria-label="Robalex Signalisation — Accueil" className="flex-shrink-0">
          <Image src="/images/logo-white.svg" alt="Robalex Signalisation" width={170} height={44} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-head font-600 text-white/75 hover:text-white transition-colors uppercase tracking-wider whitespace-nowrap py-1 border-b-2 border-transparent hover:border-red"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone CTA */}
        <a href="tel:+41216570705" className="hidden xl:flex items-center gap-2 bg-red hover:bg-red-dark text-white text-sm font-head font-700 px-5 py-2.5 rounded transition-colors flex-shrink-0">
          <PhoneIcon /> 021 657 07 05
        </a>

        {/* Burger (visible below xl) */}
        <button
          className="xl:hidden text-white p-2 ml-auto"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : 'mb-1.5'}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-navy-dark border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white font-head font-600 text-sm uppercase tracking-wider py-1 border-l-2 border-transparent hover:border-red hover:pl-3 transition-all"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+41216570705" className="mt-2 flex items-center gap-2 bg-red text-white font-head font-700 text-sm px-4 py-3 rounded w-fit">
            <PhoneIcon /> 021 657 07 05
          </a>
        </div>
      )}
    </nav>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
    </svg>
  )
}
