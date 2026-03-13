export default function CtaBand() {
  return (
    <section className="bg-red py-16" aria-label="Appel à l'action">
      <div className="container text-center">
        <h2 className="font-head font-800 text-3xl text-white mb-3">
          Un projet spécifique ou une demande particulière ?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Nous sommes à votre disposition pour répondre à vos questions et établir votre devis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-white text-red hover:bg-gray-light font-head font-700 text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-colors">
            Demander un devis
          </a>
          <a href="tel:+41216570705" className="border-2 border-white text-white hover:bg-white hover:text-red font-head font-700 text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-colors flex items-center gap-2">
            021 657 07 05
          </a>
        </div>
      </div>
    </section>
  )
}
