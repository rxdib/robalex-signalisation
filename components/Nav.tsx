'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/nos-produits', label: 'Nos produits' },
  { href: '/nos-catalogues', label: 'Catalogues' },
  { href: '/nos-services', label: 'Nos services' },
  { href: '/location-feux-chantier', label: 'Location feux' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-navy shadow-card-lg" aria-label="Navigation principale">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Robalex Signalisation — Accueil" className="flex min-w-[120px] flex-shrink-0 sm:min-w-[160px]">
          <Image src="/images/logo-white.svg" alt="Robalex Signalisation" width={160} height={42} priority sizes="(max-width: 639px) 120px, 160px" className="h-auto w-[120px] sm:w-[160px]" />
        </Link>

        <ul className="hidden xl:flex flex-1 items-center justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="border-b-2 border-transparent py-1 text-xs font-head font-600 uppercase tracking-wide text-white/75 transition-colors hover:border-red hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+41216570705"
          className="hidden xl:flex flex-shrink-0 items-center gap-2 rounded bg-red px-5 py-2.5 text-sm font-head font-700 text-white transition-colors hover:bg-red-dark"
        >
          <PhoneIcon />
          021 657 07 05
        </a>

        <button
          type="button"
          className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-controls="site-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <span className="relative block h-5 w-5">
            <span className={`absolute left-0 top-0 block h-0.5 w-5 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 block h-0.5 w-5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-4 block h-0.5 w-5 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`xl:hidden fixed inset-0 top-20 bg-navy/55 backdrop-blur-[2px] transition-opacity ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`xl:hidden fixed right-0 top-20 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto border-l border-white/10 bg-navy-dark shadow-card-lg transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex min-h-full flex-col px-6 py-6">
          <div className="mb-6 border-b border-white/10 pb-5">
            <p className="mb-2 text-[11px] font-head font-700 uppercase tracking-[0.18em] text-white/65">Navigation</p>
            <p className="max-w-[18rem] text-sm leading-relaxed text-white/80">
              Accédez rapidement aux pages principales, à nos catalogues et à la demande de devis.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center rounded-lg border border-transparent px-4 py-3 text-sm font-head font-700 uppercase tracking-[0.14em] text-white/85 transition-colors hover:border-white/10 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <a
              href="tel:+41216570705"
              className="mb-3 flex min-h-11 w-full items-center justify-center gap-2 rounded bg-red px-4 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <PhoneIcon />
              021 657 07 05
            </a>
            <a
              href="/contact"
              className="flex min-h-11 w-full items-center justify-center rounded border border-white/30 px-4 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
    </svg>
  )
}
