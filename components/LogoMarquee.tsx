'use client'

import Image from 'next/image'

interface Logo {
  src: string
  alt: string
  href?: string
}

export default function LogoMarquee({ logos }: { logos: Logo[] }) {
  // Duplicate the set for a seamless infinite scroll
  const track = [...logos, ...logos]

  return (
    <div className="relative overflow-hidden" aria-label="Logos de nos clients">
      {/* Soft fade on both edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--color-bg-light), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--color-bg-light), transparent)' }}
        aria-hidden="true"
      />

      <div className="flex marquee-track items-center py-2" style={{ width: 'max-content' }}>
        {track.map((logo, i) => {
          const inner = (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={110}
              height={55}
              className="object-contain max-h-12 w-auto"
            />
          )
          return (
            <div
              key={i}
              className="mx-6 flex-shrink-0 flex items-center justify-center"
              style={{ width: '120px' }}
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 flex items-center justify-center"
                >
                  {inner}
                </a>
              ) : (
                <div className="opacity-50 flex items-center justify-center">
                  {inner}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
