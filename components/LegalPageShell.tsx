import Badge from './Badge'
import CtaBand from './CtaBand'

interface LegalSection {
  title: string
  content: React.ReactNode
}

interface LegalPageShellProps {
  badge: string
  title: React.ReactNode
  subtitle: string
  sections: LegalSection[]
}

export default function LegalPageShell({ badge, title, subtitle, sections }: LegalPageShellProps) {
  return (
    <>
      <section className="bg-navy pb-18 pt-32">
        <div className="container max-w-4xl">
          <div className="mb-10 sm:mb-12">
            <Badge white>{badge}</Badge>
            <h1 className="mb-3 font-head text-2xl font-800 leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <div className="mb-4 h-1 w-12 bg-red" />
            <p className="max-w-2xl text-sm text-white/70 sm:text-base">{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-light">
        <div className="container max-w-4xl">
          <article className="rounded-xl border border-gray-light bg-white p-8 shadow-card lg:p-10">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  className={index < sections.length - 1 ? 'border-b border-gray-light pb-10' : ''}
                >
                  <h2 className="mb-4 font-head text-xl font-700 text-dark lg:text-2xl">{section.title}</h2>
                  <div className="prose max-w-none text-[15px] leading-7 text-gray-dark prose-headings:font-head prose-headings:text-dark prose-p:mb-3 prose-a:text-red prose-strong:text-dark lg:text-base">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
