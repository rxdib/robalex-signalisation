import type { Metadata } from 'next'
import LegalPageShell from '@/components/LegalPageShell'
import { buildMetadata } from '@/app/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description: 'Informations sur la collecte et le traitement des données personnelles par Robalex Signalisation Sàrl.',
  path: '/politique-confidentialite/',
  noIndex: true,
})

const sections = [
  {
    title: 'Responsable du traitement',
    content: (
      <p>
        Robalex Signalisation Sàrl
        <br />
        Chemin du Grand Champ 6
        <br />
        1018 Lausanne
        <br />
        Email : <a href="mailto:info@robalex-signalisation.ch">info@robalex-signalisation.ch</a>
      </p>
    ),
  },
  {
    title: 'Données collectées',
    content: (
      <p>
        Nous collectons uniquement les informations que vous nous transmettez via le formulaire de contact : nom,
        prénom, adresse email, numéro de téléphone éventuel et message. Ces données sont utilisées exclusivement pour
        répondre à votre demande.
      </p>
    ),
  },
  {
    title: 'Finalité du traitement',
    content: (
      <p>
        Les données reçues nous permettent de vous répondre, d&apos;établir un devis ou de traiter une demande relative
        à nos produits et services en signalisation et sécurité routière.
      </p>
    ),
  },
  {
    title: 'Durée de conservation',
    content: (
      <p>
        Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées dans
        un délai maximal de 12 mois si aucun suivi commercial ou administratif ne justifie une conservation plus longue.
      </p>
    ),
  },
  {
    title: 'Vos droits',
    content: (
      <p>
        Conformément à la législation suisse sur la protection des données, vous disposez d&apos;un droit d&apos;accès,
        de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à{' '}
        <a href="mailto:info@robalex-signalisation.ch">info@robalex-signalisation.ch</a>.
      </p>
    ),
  },
  {
    title: 'Cookies',
    content: (
      <p>
        Ce site ne dépose aucun cookie publicitaire ou de suivi. Seuls les éléments techniques nécessaires au bon
        fonctionnement du site peuvent être utilisés.
      </p>
    ),
  },
]

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageShell
      badge="Protection des données"
      title={
        <>
          Politique de <span className="text-red">confidentialité</span>
        </>
      }
      subtitle="La manière dont nous collectons, utilisons et conservons les données transmises via le site."
      sections={sections}
    />
  )
}
