interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  linkLabel: string
  linkHref: string
}

export default function ServiceCard({ icon, title, description, linkLabel, linkHref }: ServiceCardProps) {
  return (
    <article className="bg-white border border-gray-light rounded-xl p-6 hover:shadow-card transition-shadow">
      <div className="w-12 h-12 bg-red/10 text-red rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-head font-700 text-lg text-dark mb-2">{title}</h3>
      <p className="text-gray-dark text-sm leading-relaxed mb-4">{description}</p>
      <a href={linkHref} className="text-red font-head font-700 text-sm hover:text-red-dark transition-colors">
        {linkLabel} →
      </a>
    </article>
  )
}
