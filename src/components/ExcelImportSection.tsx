import { Upload, Columns, Paperclip, Download, FileSpreadsheet } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: 1,
    icon: Upload,
    title: 'Importez vos fichiers',
    description:
      'Glissez-déposez vos fichiers Excel existants (.xlsx, .csv). Pas besoin de tout ressaisir.',
  },
  {
    number: 2,
    icon: Columns,
    title: 'On classe par indicateur',
    description:
      'La plateforme mappe vos données aux bons indicateurs ESG et vous dit ce qui manque.',
  },
  {
    number: 3,
    icon: Paperclip,
    title: 'Rattachez vos justificatifs',
    description:
      'Factures, certificats, photos… Chaque indicateur est relié à sa preuve. C\'est ça que l\'auditeur vérifie.',
  },
  {
    number: 4,
    icon: Download,
    title: 'Exportez le dossier complet',
    description:
      'Indicateurs + preuves, organisés par référentiel. Prêt à transmettre à votre auditeur, banque ou investisseur.',
  },
]

export default function ExcelImportSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const stepsRef = useScrollReveal<HTMLDivElement>(200)
  const visualRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section id="comment-ca-marche" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            4 étapes simples, à partir de vos fichiers existants
          </h2>
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Pas de formation nécessaire. Vous partez de ce que vous avez déjà.
          </p>
        </div>

        {/* Two columns */}
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Steps */}
          <div ref={stepsRef} className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={18} className="text-primary" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Decorative visualization */}
          <div ref={visualRef} className="mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileSpreadsheet size={40} className="text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="h-2 w-16 bg-primary/20 rounded-full" />
                    <div className="h-2 w-24 bg-primary/30 rounded-full" />
                    <div className="h-2 w-12 bg-primary/20 rounded-full" />
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <div className="h-2 w-20 bg-primary/30 rounded-full" />
                    <div className="h-2 w-14 bg-primary/20 rounded-full" />
                    <div className="h-2 w-18 bg-primary/30 rounded-full" />
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <div className="h-2 w-12 bg-primary/20 rounded-full" />
                    <div className="h-2 w-28 bg-primary/30 rounded-full" />
                    <div className="h-2 w-10 bg-primary/20 rounded-full" />
                  </div>
                </div>
                <p className="text-primary/60 text-xs mt-4 font-medium">
                  Vos fichiers &rarr; Indicateurs tracés &rarr; Prêt pour l'audit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
