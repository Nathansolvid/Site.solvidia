import { Check, ArrowRight } from 'lucide-react'

const includes = [
  'Accès complet à la plateforme',
  'Tous les parcours ESG (VSME, Bilan Carbone, CSRD…)',
  'Import Excel illimité',
  'Stockage de vos justificatifs',
  'Utilisateurs illimités',
]

export default function PricingSection() {
  return (
    <section id="tarifs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Un accompagnement adapté à votre maturité ESG
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Un accompagnement sur mesure, adapté à votre niveau de maturité ESG.
          </p>
        </div>

        {/* Single pricing card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border-2 border-primary p-10 text-center">
            <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
              Plateforme + Accompagnement
            </p>

            <div className="mb-2">
              <span className="text-muted text-lg">À partir de </span>
              <span className="text-5xl font-bold">1 100€</span>
              <span className="text-muted text-lg"> /mois</span>
            </div>

            <p className="text-muted text-sm mb-8">
              Tarif ajusté sur devis selon votre profil
            </p>

            <hr className="border-border mb-8" />

            <h3 className="font-semibold text-sm mb-4 text-left">Toujours inclus :</h3>
            <ul className="space-y-3 mb-8">
              {includes.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-left">
                  <Check
                    size={18}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-primary text-white rounded-lg px-8 py-3.5 font-medium hover:bg-primary-dark transition-colors text-sm"
            >
              Demander un devis
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Why quote-based */}
        <div className="max-w-2xl mx-auto mt-10 text-center">
          <p className="text-muted text-sm leading-relaxed">
            <span className="font-semibold text-foreground">Pourquoi un devis ?</span> Chaque entreprise a un niveau de maturité ESG différent.
            Certaines ont juste besoin d'un accès à la plateforme, d'autres d'un consultant qui vérifie leurs données,
            d'autres encore d'un véritable accompagnement stratégique. Le devis nous permet d'évaluer vos besoins
            et de vous proposer le bon niveau d'accompagnement — ni plus, ni moins.
          </p>
        </div>
      </div>
    </section>
  )
}
