import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Robalex Signalisation',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <main className="pt-24 pb-20">
      <div className="container max-w-3xl">
        <h1 className="font-head font-800 text-3xl text-dark mb-2">Mentions légales</h1>
        <div className="w-12 h-1 bg-red mb-8" />
        <div className="prose prose-sm max-w-none text-gray-dark leading-relaxed space-y-6">
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Éditeur du site</h2>
            <p>Robalex Signalisation Sàrl<br />Chemin de Grandchamp 6<br />1018 Lausanne<br />Suisse</p>
            <p>Tél. : <a href="tel:+41216570705" className="text-red hover:underline">021 657 07 05</a><br />Email : <a href="mailto:info@robalex-signalisation.ch" className="text-red hover:underline">info@robalex-signalisation.ch</a></p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Hébergeur</h2>
            <p>Vercel Inc.<br />340 Pine Street, Suite 900<br />San Francisco, CA 94104<br />États-Unis<br /><a href="https://vercel.com" className="text-red hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété de Robalex Signalisation Sàrl et est protégé par le droit d&apos;auteur suisse. Toute reproduction est interdite sans autorisation préalable.</p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Responsabilité</h2>
            <p>Robalex Signalisation Sàrl s&apos;efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir leur exhaustivité ou leur exactitude à tout moment.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
