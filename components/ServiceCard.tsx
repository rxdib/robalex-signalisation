import SmartLink from './SmartLink'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  linkLabel: string
  linkHref: string
}

export default function ServiceCard({ icon, title, description, linkLabel, linkHref }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-light bg-white p-6 transition-shadow hover:shadow-card">
      <div className="w-12 h-12 bg-red/10 text-red rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-head font-700 text-lg text-dark mb-2">{title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-dark">{description}</p>
      <SmartLink href={linkHref} className="inline-flex items-center gap-2 text-sm font-head font-700 text-red transition-colors hover:text-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red">
        {linkLabel} <span aria-hidden="true">→</span>
      </SmartLink>
    </article>
  )
}
