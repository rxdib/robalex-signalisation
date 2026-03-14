'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Logo {
  src: string
  alt: string
  href?: string
}

export default function LogoMarquee({ logos }: { logos: Logo[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldRenderTrack, setShouldRenderTrack] = useState(false)

  useEffect(() => {
    if (shouldRenderTrack || !containerRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setShouldRenderTrack(true)
        observer.disconnect()
      },
      { rootMargin: '320px 0px' }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [shouldRenderTrack])

  // Duplicate the set for a seamless infinite scroll once the section is near view.
  const track = shouldRenderTrack ? [...logos, ...logos] : []

  return (
    <div ref={containerRef} className="relative overflow-hidden" aria-label="Logos de nos clients">
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

      {shouldRenderTrack ? (
        <div className="flex marquee-track items-center py-2" style={{ width: 'max-content' }}>
          {track.map((logo, i) => {
            const inner = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={55}
                sizes="110px"
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
                    className="flex items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
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
      ) : (
        <div className="flex min-h-[72px] items-center justify-center gap-6 px-8 py-2" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-24 rounded-full bg-white/70"
            />
          ))}
        </div>
      )}
    </div>
  )
}
