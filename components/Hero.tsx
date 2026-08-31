import SmartLink from './SmartLink'
import ResponsivePicture from './ResponsivePicture'

interface HeroBackgroundSource {
  srcSet: string
  type: string
  media?: string
  sizes?: string
}

interface HeroProps {
  bgImage: string
  bgImageSrcSet?: string
  bgImageSizes?: string
  bgSources?: HeroBackgroundSource[]
  bgPosition?: string
  bgFlip?: boolean
  badge?: string
  title: React.ReactNode
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({
  bgImage,
  bgImageSrcSet,
  bgImageSizes = '100vw',
  bgSources,
  bgPosition = 'center',
  bgFlip = false,
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <header className="relative flex min-h-[64vh] items-center overflow-hidden pt-20 sm:min-h-[72vh]" aria-label="En-tête principale">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <ResponsivePicture
          src={bgImage}
          srcSet={bgImageSrcSet}
          sizes={bgImageSizes}
          sources={bgSources}
          alt=""
          width={1780}
          height={632}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          pictureClassName="block h-full w-full"
          className={`h-full w-full object-cover ${bgFlip ? '-scale-x-100' : ''}`}
          style={{ objectPosition: bgPosition }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(22,14,55,0.9) 0%, rgba(22,14,55,0.82) 42%, rgba(22,14,55,0.7) 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />

      <div className="container relative z-10 py-20 sm:py-24 lg:py-28">
        {badge && (
          <span className="mb-5 inline-block rounded bg-white/15 px-3 py-1 text-xs font-head font-700 uppercase tracking-[0.18em] text-white">
            {badge}
          </span>
        )}
        <h1 className="mb-5 max-w-3xl font-head text-3xl font-900 leading-tight text-white sm:text-4xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <SmartLink href={primaryCta.href} className="flex w-full items-center justify-center rounded bg-red px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto">
            {primaryCta.label}
          </SmartLink>
          {secondaryCta && (
            <SmartLink href={secondaryCta.href} className="flex w-full items-center justify-center rounded border-2 border-white px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto">
              {secondaryCta.label}
            </SmartLink>
          )}
        </div>
      </div>
    </header>
  )
}
