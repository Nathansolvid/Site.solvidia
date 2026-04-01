import { Check, ArrowRight } from 'lucide-react'
import { useDemoModal } from '../App'
import { useScrollReveal } from '../hooks/useScrollReveal'

const includes = [
  'Accès complet à la plateforme',
  'Tous les parcours ESG (VSME, Bilan Carbone, CSRD…)',
  'Import Excel illimité',
  'Stockage de vos justificatifs',
  'Utilisateurs illimités',
]

export default function PricingSection() {
  const { openDemo } = useDemoModal()
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const cardRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="tarifs" className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Un accompagnement adapté à votre maturité ESG
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Chaque entreprise est différente. Contactez-nous pour un accompagnement sur mesure.
          </p>
        </div>

        {/* Single pricing card */}
        <div ref={cardRef} className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border-2 border-primary p-10 text-center">
            <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
              Plateforme + Accompagnement
            </p>

            <div className="mb-2">
              <span className="text-4xl font-bold">Tarifs sur demande</span>
            </div>

            <p className="text-muted text-sm mb-8">
              Adapté à votre taille, vos besoins et votre niveau de maturité ESG
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

            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-8 py-3.5 font-semibold hover:bg-primary-dark transition-colors text-sm cursor-pointer"
            >
              Demander une démo
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
