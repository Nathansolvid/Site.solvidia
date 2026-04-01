import { ShieldCheck, FileSpreadsheet, Users, Brain } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Traçabilité complète',
    description:
      'Chaque indicateur est relié à sa preuve : qui l\'a saisi, quand, quel document en justificatif. Exactement ce qu\'un auditeur vérifie.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Partez de vos Excel',
    description:
      'Pas besoin de tout ressaisir. Importez vos fichiers existants, on vous dit ce qui manque.',
  },
  {
    icon: Users,
    title: 'Chacun remplit sa partie',
    description:
      'Le DAF remplit les données financières, le RH les indicateurs sociaux, le responsable site les données énergie. Tout converge au même endroit.',
  },
  {
    icon: Brain,
    title: 'Guidé pas à pas',
    description:
      'Pour chaque indicateur, on vous explique quoi remplir, dans quel format et quelle preuve joindre. Pas besoin de lire les normes.',
  },
]

export default function BenefitsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const cardsRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Pourquoi Solvid.ia
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            On ne fait pas le bilan à votre place — on vous aide à collecter les bonnes données
          </h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
