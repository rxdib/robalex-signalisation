import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Robalex Signalisation',
  robots: { index: false, follow: false },
}

export default function PolitiqueConf() {
  return (
    <main className="pt-24 pb-20">
      <div className="container max-w-3xl">
        <h1 className="font-head font-800 text-3xl text-dark mb-2">Politique de confidentialité</h1>
        <div className="w-12 h-1 bg-red mb-8" />
        <div className="prose prose-sm max-w-none text-gray-dark leading-relaxed space-y-6">
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Responsable du traitement</h2>
            <p>Robalex Signalisation Sàrl — Chemin du Grand Champ 6, 1018 Lausanne. Email : info@robalex-signalisation.ch</p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez via le formulaire de contact : nom, prénom, adresse email, numéro de téléphone (optionnel) et message. Ces données sont utilisées exclusivement pour répondre à votre demande.</p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Base légale</h2>
            <p>Le traitement est basé sur votre consentement (art. 6 al. 1 lit. a nLPD) et sur notre intérêt légitime à répondre aux demandes commerciales.</p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Durée de conservation</h2>
            <p>Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées dans un délai de 12 mois.</p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Vos droits</h2>
            <p>Conformément à la loi fédérale suisse sur la protection des données (nLPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Contactez-nous à info@robalex-signalisation.ch.</p>
          </section>
          <section>
            <h2 className="font-head font-700 text-xl text-dark mb-2">Cookies</h2>
            <p>Ce site ne dépose aucun cookie de suivi ou publicitaire. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
