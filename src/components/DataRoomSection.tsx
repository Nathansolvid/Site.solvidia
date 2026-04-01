import { Download, Link, Eye, FileOutput, Plug } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: Download,
    title: 'Import Excel',
    description:
      'Glissez vos fichiers existants. On vous dit quels indicateurs manquent et comment les compléter.',
  },
  {
    icon: Plug,
    title: 'Connexion ERP',
    description:
      'Connectez SAP, Oracle, Sage pour récupérer automatiquement les données déjà présentes dans votre SI.',
  },
  {
    icon: Link,
    title: 'Traçabilité totale',
    description:
      'Chaque indicateur est relié à sa source : qui l\'a saisi, quand, avec quel justificatif en preuve.',
  },
  {
    icon: Eye,
    title: 'Prêt pour l\'audit',
    description:
      'Vos données sont organisées par référentiel. Un auditeur retrouve chaque preuve en quelques clics.',
  },
  {
    icon: FileOutput,
    title: 'Export structuré',
    description:
      'Exportez vos indicateurs en PDF ou Excel, organisés selon le cadre demandé (VSME, CSRD, banque…).',
  },
]

export default function DataRoomSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const topRef = useScrollReveal<HTMLDivElement>(200)
  const bottomRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section id="solution" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            La solution
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Un seul endroit pour tous vos indicateurs ESG
          </h2>
          <p className="text-center text-muted mb-4 max-w-2xl mx-auto">
            Importez vos fichiers existants, rattachez vos justificatifs et organisez tout selon les référentiels — sans repartir de zéro.
          </p>
        </div>

        {/* Top row: 2 highlighted cards */}
        <div ref={topRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {features.slice(0, 2).map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card rounded-xl border border-border p-8 flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div ref={bottomRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.slice(2).map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
