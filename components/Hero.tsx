interface HeroProps {
  bgImage: string
  bgPosition?: string
  bgFlip?: boolean
  badge?: string
  title: React.ReactNode
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({ bgImage, bgPosition = 'center', bgFlip = false, badge, title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <header className="relative min-h-[72vh] flex items-center pt-20" aria-label="En-tête principale">
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${bgFlip ? '-scale-x-100' : ''}`}
        style={{ backgroundImage: `url('${bgImage}')`, backgroundPosition: bgPosition }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/75" aria-hidden="true" />

      <div className="container relative z-10 py-20">
        {badge && (
          <span className="inline-block bg-white/15 text-white text-xs font-head font-700 uppercase tracking-widest px-3 py-1 rounded mb-5">
            {badge}
          </span>
        )}
        <h1 className="font-head font-900 text-4xl lg:text-6xl text-white leading-tight max-w-3xl mb-5">
          {title}
        </h1>
        <p className="text-white/80 text-lg max-w-xl mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <a href={primaryCta.href} className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-colors">
            {primaryCta.label}
          </a>
          {secondaryCta && (
            <a href={secondaryCta.href} className="border-2 border-white text-white hover:bg-white hover:text-navy font-head font-700 text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-colors">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
