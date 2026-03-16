import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    price: '990€',
    priceUnit: '/mois',
    subtitle: 'Pour bien démarrer',
    subtitle2: 'Idéal pour les PME qui veulent structurer leurs données ESG',
    features: [
      'Rapport VSME + Diagnostic PME',
      '79 indicateurs guidés pas à pas',
      '17 modèles Excel prêts à l\'emploi',
      'Import/Export Excel illimité',
      'Stockage de vos justificatifs',
      '5 utilisateurs inclus',
      'Support par email',
    ],
    cta: 'Essayer gratuitement',
    ctaStyle: 'primary' as const,
    highlighted: false,
  },
  {
    name: 'Professionnel',
    price: '2 490€',
    priceUnit: '/mois',
    subtitle: 'Reporting complet',
    subtitle2: 'Pour les entreprises qui veulent aller plus loin sur tous les sujets ESG',
    features: [
      'Tous les 11 parcours inclus',
      'Bilan Carbone complet',
      'Rapports CSRD',
      'Questionnaire bancaire ESG',
      'Connexion à votre logiciel comptable',
      'Rapports générés par l\'IA',
      '20 utilisateurs inclus',
      'Support prioritaire + accompagnement',
    ],
    cta: 'Essayer gratuitement',
    ctaStyle: 'primary' as const,
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    priceUnit: '',
    subtitle: 'Grands groupes',
    subtitle2: 'Pour les groupes multi-sites, cabinets de conseil et auditeurs',
    features: [
      'Utilisateurs illimités',
      'Parcours personnalisés',
      'Mode Audit (lecture + vérification)',
      'IA en mode Conseil',
      'API pour vos outils internes',
      'Consolidation multi-sites',
      'Interlocuteur dédié',
    ],
    cta: 'Nous contacter',
    ctaStyle: 'outline' as const,
    highlighted: false,
  },
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
            Un prix simple, adapté à vos besoins
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Pas de frais cachés. Commencez petit, évoluez à votre rythme.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-xl p-8 relative ${
                plan.highlighted
                  ? 'border-2 border-primary'
                  : 'border border-border'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Le plus populaire
                </span>
              )}

              <p className="text-sm font-semibold text-primary mb-4">
                {plan.name}
              </p>

              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.priceUnit && (
                  <span className="text-muted">{plan.priceUnit}</span>
                )}
              </div>

              <p className="font-medium text-sm mb-1">{plan.subtitle}</p>
              <p className="text-muted text-xs mb-6">{plan.subtitle2}</p>

              <hr className="border-border mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.ctaStyle === 'primary' ? (
                <a
                  href="#demo"
                  className="block text-center bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary-dark transition-colors text-sm w-full"
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="#contact"
                  className="block text-center border border-primary text-primary rounded-lg px-6 py-3 font-medium hover:bg-primary-light transition-colors text-sm w-full"
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles size={18} className="text-primary" />
            <p className="font-semibold text-sm">
              14 jours d'essai gratuit sur tous les plans
            </p>
          </div>
          <p className="text-muted text-xs">
            -20% sur l'abonnement annuel
          </p>
        </div>
      </div>
    </section>
  )
}
