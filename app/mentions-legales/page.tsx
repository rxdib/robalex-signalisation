import type { Metadata } from 'next'
import LegalPageShell from '@/components/LegalPageShell'
import { buildMetadata } from '@/app/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Mentions légales',
  description: 'Informations légales relatives au site internet de Robalex Signalisation Sàrl.',
  path: '/mentions-legales/',
  noIndex: true,
})

const sections = [
  {
    title: 'Éditeur du site',
    content: (
      <>
        <p>Robalex Signalisation Sàrl</p>
        <p>Chemin du Grand Champ 6<br />1018 Lausanne<br />Suisse</p>
        <p>
          Tél.: <a href="tel:+41216570705">021 657 07 05</a><br />
          Email: <a href="mailto:info@robalex-signalisation.ch">info@robalex-signalisation.ch</a>
        </p>
      </>
    ),
  },
  {
    title: 'Hébergement',
    content: (
      <p>
        Vercel Inc.<br />
        340 Pine Street, Suite 900<br />
        San Francisco, CA 94104<br />
        États-Unis<br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>
    ),
  },
  {
    title: 'Propriété intellectuelle',
    content: (
      <p>
        L&apos;ensemble du contenu de ce site, notamment les textes, images, logos et éléments graphiques,
        est la propriété de Robalex Signalisation Sàrl. Toute reproduction ou diffusion sans autorisation
        préalable est interdite.
      </p>
    ),
  },
  {
    title: 'Responsabilité',
    content: (
      <p>
        Robalex Signalisation Sàrl s&apos;efforce de maintenir les informations de ce site à jour et exactes,
        sans pouvoir garantir en permanence leur exhaustivité ou l&apos;absence d&apos;erreur.
      </p>
    ),
  },
]

export default function MentionsLegales() {
  return (
    <LegalPageShell
      badge="Informations légales"
      title={<>Mentions <span className="text-red">légales</span></>}
      subtitle="Les informations essentielles relatives à l'éditeur, à l'hébergement et à l'utilisation du site."
      sections={sections}
    />
  )
}
