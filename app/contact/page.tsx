import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/app/seo'
import { createBreadcrumbSchema, createContactPageSchema, createFaqSchema } from '@/app/schema'

const pageTitle = 'Contact'
const pageDescription =
  'Contactez Robalex Signalisation à Lausanne pour votre demande de devis, vos questions produits ou vos besoins en signalisation et sécurité routière.'

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/contact/',
  image: '/images/signalisation-chantier-hd.jpg',
  imageAlt: 'Contact Robalex Signalisation à Lausanne',
})

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
      <JsonLd
        data={[
          createContactPageSchema({
            name: `${pageTitle} - Robalex Signalisation`,
            description: pageDescription,
            path: '/contact/',
            image: '/images/signalisation-chantier-hd.jpg',
          }),
          createFaqSchema(faq),
          createBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Contact', path: '/contact/' },
          ]),
        ]}
      />
      <Hero
        bgImage="/images/signalisation-chantier-hd.jpg"
        badge="Contact"
        title={<>Contactez <span className="text-red">Robalex Signalisation</span></>}
        subtitle="Nous sommes à votre disposition pour répondre à vos questions et établir votre devis."
        primaryCta={{ label: '021 657 07 05', href: 'tel:+41216570705' }}
      />

      <section className="section-pad bg-bg-light">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">

            {/* Contact info */}
            <div className="rounded-xl border border-gray-light bg-white p-8 shadow-card">
              <SectionHeader
                badge="Nos coordonnées"
                title={<>Parlons de votre <span className="text-red">projet</span></>}
                subtitle="Appelez-nous, écrivez-nous ou passez nous voir à Lausanne. Nous revenons vers vous rapidement."
              />

              <dl className="flex flex-col gap-5 mb-8">
                {[
                  { label: 'Adresse', value: 'Chemin du Grandchamp 6\n1018 Lausanne' },
                  { label: 'Téléphone', value: '021 657 07 05', href: 'tel:+41216570705' },
                  { label: 'Email', value: 'info@robalex-signalisation.ch', href: 'mailto:info@robalex-signalisation.ch' },
                  { label: 'Heures de bureau', value: 'Lu–Ve : 08h00 – 17h00' },
                  { label: 'Disponibilité téléphonique', value: 'Lu–Ve : 07h30 – 17h30' },
                ].map(item => (
                  <div key={item.label}>
                    <dt className="text-xs font-head font-700 uppercase tracking-widest text-gray mb-1">{item.label}</dt>
                    <dd className="text-dark font-500 whitespace-pre-line">
                      {item.href ? <a href={item.href} className="text-red hover:text-red-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red">{item.value}</a> : item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Google Maps iframe */}
              <div className="rounded-xl overflow-hidden border border-gray-light h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Chemin+du+Grandchamp+6,+1018+Lausanne&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Robalex Signalisation — Chemin du Grandchamp 6, 1018 Lausanne"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-xl border border-gray-light bg-white p-8 shadow-card">
              <SectionHeader
                badge="Formulaire"
                title={<>Envoyez-nous votre <span className="text-red">demande</span></>}
                subtitle="Décrivez votre besoin, votre chantier ou les produits recherchés. Nous vous répondrons dans les meilleurs délais."
              />
              <form action="https://formspree.io/f/xqeyqzdv" method="POST" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Nom *</label>
                    <input id="nom" name="nom" type="text" required className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm transition-colors focus:border-red focus:outline-none focus:ring-2 focus:ring-red/10" />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Prénom *</label>
                    <input id="prenom" name="prenom" type="text" required className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm transition-colors focus:border-red focus:outline-none focus:ring-2 focus:ring-red/10" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Email *</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm transition-colors focus:border-red focus:outline-none focus:ring-2 focus:ring-red/10" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Téléphone</label>
                  <input id="telephone" name="telephone" type="tel" className="w-full rounded-lg border border-gray-light px-4 py-3 text-sm transition-colors focus:border-red focus:outline-none focus:ring-2 focus:ring-red/10" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-head font-700 uppercase tracking-wide text-dark mb-1.5">Message *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full resize-none rounded-lg border border-gray-light px-4 py-3 text-sm transition-colors focus:border-red focus:outline-none focus:ring-2 focus:ring-red/10" />
                </div>
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <button type="submit" className="w-full rounded bg-red px-8 py-4 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red sm:w-fit">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container max-w-3xl">
          <SectionHeader badge="FAQ" title={<>Questions <span className="text-red">fréquentes</span></>} subtitle="Les réponses aux demandes qui reviennent le plus souvent avant un devis ou une intervention." centered />
          <div className="flex flex-col gap-4">
            {faq.map(item => (
              <div key={item.q} className="rounded-xl border border-gray-light bg-bg-light p-6">
                <h3 className="font-head font-700 text-base text-dark mb-2">{item.q}</h3>
                <p className="text-gray-dark text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
