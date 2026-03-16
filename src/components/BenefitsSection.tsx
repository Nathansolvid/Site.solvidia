import { ShieldCheck, FileSpreadsheet, Users, Brain } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Prêt pour l\'audit',
    description:
      'Chaque donnée est traçable : on sait qui l\'a saisie, quand, et avec quel document en preuve.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Compatible Excel',
    description:
      'Importez vos fichiers existants. 17 modèles prêts à l\'emploi fournis avec la plateforme.',
  },
  {
    icon: Users,
    title: 'Travail en équipe',
    description:
      'Chacun remplit sa partie. Consultants, auditeurs et collaborateurs ont chacun leur accès.',
  },
  {
    icon: Brain,
    title: 'Assisté par l\'IA',
    description:
      'L\'intelligence artificielle vous aide à rédiger vos rapports. Vous gardez toujours le contrôle.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Pourquoi Solvid.ia
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Simple, fiable et fait pour les PME
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
