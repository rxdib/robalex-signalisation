import Badge from './Badge'

interface SectionHeaderProps {
  badge?: string
  title: React.ReactNode   // allows <span> for accent word
  subtitle?: string
  centered?: boolean
  white?: boolean          // for dark backgrounds
}

export default function SectionHeader({ badge, title, subtitle, centered, white }: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && <Badge white={white}>{badge}</Badge>}
      <h2 className={`mb-3 font-head text-2xl font-800 leading-tight sm:text-3xl lg:text-4xl ${white ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      <div className={`w-12 h-1 bg-red mb-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`max-w-2xl text-sm sm:text-base ${centered ? 'mx-auto' : ''} ${white ? 'text-white/70' : 'text-gray-dark'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
