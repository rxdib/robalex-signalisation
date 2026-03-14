import SmartLink from './SmartLink'

export default function CtaBand() {
  return (
    <section className="bg-red py-16" aria-label="Appel à l'action">
      <div className="container text-center">
        <h2 className="mb-3 font-head text-3xl font-800 text-white lg:text-[2.1rem]">
          Un projet spécifique ou une demande particulière ?
        </h2>
        <p className="mb-8 text-base text-white sm:text-lg">
          Nous sommes à votre disposition pour répondre à vos questions et établir votre devis.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <SmartLink
            href="/contact"
            className="flex w-full items-center justify-center rounded bg-white px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-red transition-colors hover:bg-gray-light sm:w-auto"
          >
            Demander un devis
          </SmartLink>
          <SmartLink
            href="tel:+41216570705"
            className="flex w-full items-center justify-center gap-2 rounded border-2 border-white px-7 py-3.5 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-red sm:w-auto"
          >
            021 657 07 05
          </SmartLink>
        </div>
      </div>
    </section>
  )
}
