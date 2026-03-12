import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Contact — Robalex Signalisation Lausanne',
  description: 'Contactez Robalex Signalisation à Lausanne. Demande de devis, questions sur nos produits et services. Tél : 021 657 07 05.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/contact/' },
  openGraph: {
    title: 'Contactez Robalex Signalisation — Lausanne',
    description: 'Demande de devis, questions sur nos produits et services de signalisation routière. Tél : 021 657 07 05.',
    url: 'https://www.robalex-signalisation.ch/contact/',
    images: [{ url: '/images/signalisation-chantier-hd.jpg' }],
  },
}

const faq = [
  {
    q: 'Comment obtenir un devis ?',
    a: 'Remplissez notre formulaire de contact ci-dessous ou appelez-nous au 021 657 07 05. Nous vous répondons rapidement.',
  },
  {
    q: 'Proposez-vous la livraison et l\'installation ?',
    a: 'Oui, nous prenons en charge la livraison et l\'installation sur site pour l\'ensemble de nos services.',
  },
  {
    q: 'Quels sont les moyens de paiement ?',
    a: 'Nous acceptons le paiement par facture à 30 jours ou par virement bancaire anticipé. Nous n\'acceptons pas les paiements par carte de crédit.',
  },
]

export default function Contact() {
  return (
    <>
      <Hero
        bgImage="/images/signalisation-chantier-hd.jpg"
        badge="Contact"
        title={<>Contactez <span className="text-red">Robalex Signalisation</span></>}
        subtitle="Nous sommes à votre disposition pour répondre à toutes vos questions et établir votre devis."
        primaryCta={{ label: '021 657 07 05', href: 'tel:+41216570705' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact info */}
            <div>
              <SectionHeader badge="Nos coordonnées" title={<>Trouvez-<span className="text-red">nous</span></>} />

              <dl className="flex flex-col gap-5 mb-8">
                {[
                  { label: 'Adresse', value: 'Chemin du Grand Champ 6\n1018 Lausanne' },
                  { label: 'Téléphone', value: '021 657 07 05', href: 'tel:+41216570705' },
                  { label: 'Email', value: 'info@robalex-signalisation.ch', href: 'mailto:info@robalex-signalisation.ch' },
                  { label: 'Heures de bureau', value: 'Lu–Ve : 08h00 – 17h00' },
                  { label: 'Disponibilité téléphonique', value: 'Lu–Ve : 07h30 – 17h30' },
                ].map(item => (
                  <div key={item.label}>
                    <dt className="text-xs font-head font-700 uppercase tracking-widest text-gray mb-1">{item.label}</dt>
                    <dd className="text-dark font-500 whitespace-pre-line">
                      {item.href ? <a href={item.href} className="text-red hover:text-red-dark transition-colors">{item.value}</a> : item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Google Maps iframe */}
              <div className="rounded-xl overflow-hidden border border-gray-light h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Chemin+du+Grand+Champ+6,+1018+Lausanne&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Robalex Signalisation — Chemin du Grand Champ 6, 1018 Lausanne"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <SectionHeader badge="Formulaire" title={<>Envoyez-nous un <span className="text-red">message</span></>} />
              <form action="https://formspree.io/f/xqeyqzdv" method="POST" className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Nom *</label>
                    <input id="nom" name="nom" type="text" required className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Prénom *</label>
                    <input id="prenom" name="prenom" type="text" required className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Email *</label>
                  <input id="email" name="email" type="email" required className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Téléphone</label>
                  <input id="telephone" name="telephone" type="tel" className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Message *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red transition-colors resize-none" />
                </div>
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <button type="submit" className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-8 py-4 rounded transition-colors">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-bg-light">
        <div className="container max-w-3xl">
          <SectionHeader badge="FAQ" title={<>Questions <span className="text-red">fréquentes</span></>} centered />
          <div className="flex flex-col gap-4">
            {faq.map(item => (
              <div key={item.q} className="bg-white border border-gray-light rounded-xl p-6">
                <h3 className="font-head font-700 text-base text-dark mb-2">{item.q}</h3>
                <p className="text-gray-dark text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
