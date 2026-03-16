import { Download, Link, Eye, FileOutput, Plug } from 'lucide-react'

const features = [
  {
    icon: Download,
    title: 'Import Excel',
    description:
      'Glissez vos fichiers existants. 17 modèles fournis, prêts à remplir.',
  },
  {
    icon: Plug,
    title: 'Connexion ERP',
    description:
      'Connectez SAP, Oracle, Sage ou votre logiciel comptable pour récupérer vos données automatiquement.',
  },
  {
    icon: Link,
    title: 'Traçabilité totale',
    description:
      'Chaque donnée est reliée à sa source : qui l\'a saisie, quand, avec quel justificatif.',
  },
  {
    icon: Eye,
    title: 'Prêt pour l\'audit',
    description:
      'Tout est organisé selon les normes. Un auditeur peut vérifier en quelques clics.',
  },
  {
    icon: FileOutput,
    title: 'Export en 1 clic',
    description:
      'Générez des rapports PDF ou Excel complets, avec toutes les preuves jointes.',
  },
]

export default function DataRoomSection() {
  return (
    <section id="solution" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            La solution
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Un espace central pour toutes vos données ESG
          </h2>
          <p className="text-center text-muted mb-4 max-w-2xl mx-auto">
            Importez vos Excel, connectez votre ERP, ou saisissez directement. Tout est centralisé, tracé et exportable.
          </p>
        </div>

        {/* Top row: 2 highlighted cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
