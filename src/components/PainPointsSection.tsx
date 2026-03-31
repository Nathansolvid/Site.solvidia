import { FileSpreadsheet, ShieldAlert, Clock } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: 'Vos données sont éparpillées',
    description:
      'Vos infos ESG sont dans des dizaines de fichiers Excel, emails et documents différents. Dur de s\'y retrouver.',
  },
  {
    icon: ShieldAlert,
    title: 'Impossible de prouver vos chiffres',
    description:
      'Si un auditeur vous demande d\'où vient un chiffre, vous ne pouvez pas le montrer facilement.',
  },
  {
    icon: Clock,
    title: 'Trop de temps perdu à compiler',
    description:
      'Vous passez des jours à copier-coller des données d\'un fichier à l\'autre pour faire vos rapports.',
  },
]

export default function PainPointsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const cardsRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="problemes" className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Le problème
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Gérer ses données ESG, c'est compliqué
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Aujourd'hui, la plupart des entreprises galèrent avec leurs données environnementales, sociales et de gouvernance.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="bg-card rounded-xl border border-border p-8"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-muted text-sm">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
