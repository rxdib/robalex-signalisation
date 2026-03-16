import SmartLink from '@/components/SmartLink'
import SectionHeader from '@/components/SectionHeader'

export default function NotFound() {
  return (
    <section className="section-pad bg-bg-light">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-light bg-white px-6 py-14 shadow-card sm:px-10 sm:py-16">
          <div className="mb-6 text-center font-head text-6xl font-900 leading-none text-red/20 sm:text-7xl lg:text-8xl">
            404
          </div>

          <SectionHeader
            badge="Erreur 404"
            title="Page introuvable"
            subtitle="La page que vous recherchez n&apos;existe pas ou n&apos;est plus disponible."
            centered
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <SmartLink
              href="/"
              className="flex min-h-11 w-full items-center justify-center rounded bg-red px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red sm:w-auto"
            >
              Retour à l&apos;accueil
            </SmartLink>
            <SmartLink
              href="/nos-produits/"
              className="flex min-h-11 w-full items-center justify-center rounded border-2 border-navy px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
            >
              Voir nos produits
            </SmartLink>
            <SmartLink
              href="/contact/"
              className="flex min-h-11 w-full items-center justify-center rounded border-2 border-gray-light px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-dark transition-colors hover:border-red hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red sm:w-auto"
            >
              Contact
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  )
}
