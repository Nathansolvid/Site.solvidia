import { Download, Columns, Paperclip, Upload, Sparkles, Wand2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: 1,
    icon: Download,
    title: 'Importez vos fichiers',
    description: 'Glissez-déposez vos Excel existants. Pas besoin de ressaisir.',
    accent: 'from-primary to-primary-dark',
  },
  {
    number: 2,
    icon: Columns,
    title: 'On classe par indicateur',
    description: 'La plateforme mappe vos données et détecte ce qui manque.',
    accent: 'from-primary-dark to-dark-green',
  },
  {
    number: 3,
    icon: Paperclip,
    title: 'Rattachez vos preuves',
    description: 'Chaque indicateur est relié à son justificatif.',
    accent: 'from-dark-green to-primary-dark',
  },
  {
    number: 4,
    icon: Upload,
    title: 'Exportez le dossier',
    description: 'Indicateurs + preuves, organisés par référentiel. Prêt.',
    accent: 'from-primary-dark to-primary',
  },
]

export default function ExcelImportSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const timelineRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="comment-ca-marche" className="relative overflow-hidden py-20">
      {/* Décoration */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse, rgba(45,122,85,0.08) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Header compact */}
      <div ref={headerRef} className="relative max-w-3xl mx-auto text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-primary/20">
          <Sparkles size={14} />
          Comment ça marche
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
          4 étapes simples,{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
            }}
          >
            à partir de vos fichiers existants
          </span>
        </h2>
      </div>

      {/* Timeline horizontale compacte */}
      <div ref={timelineRef} className="relative max-w-6xl mx-auto px-6">
        {/* Ligne de progression (desktop) */}
        <div className="hidden lg:block absolute top-[36px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 flex justify-between">
            {steps.map((_, idx) => (
              <span key={idx} className="w-2.5 h-2.5 rounded-full bg-white border-2 border-primary -translate-y-[5px]" />
            ))}
          </div>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="group relative flex flex-col items-center text-center">
                {/* Cercle numéroté plus compact */}
                <div className="relative z-10 mb-4">
                  <div className={`relative w-[72px] h-[72px] rounded-full bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                    <Icon size={28} className="text-white" strokeWidth={1.8} />
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center font-bold text-primary text-xs shadow-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-base lg:text-[17px] mb-1.5 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Callout unifié : résultat + nouveauté IA */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="group relative grid md:grid-cols-2 gap-0 bg-white border border-border rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
            {/* Gauche : résultat */}
            <div className="p-5 flex items-center gap-3 bg-gradient-to-r from-primary-light via-white to-primary-light/60 md:border-r border-border">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center shrink-0 shadow-md shadow-primary/25">
                <Sparkles size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm">Dossier ESG complet</p>
                <p className="text-xs text-muted leading-snug">
                  Tracé, exportable, prêt pour audit / banque / investisseur.
                </p>
              </div>
            </div>

            {/* Droite : nouveauté IA */}
            <div className="relative p-5 flex items-center gap-3 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden="true" />
              <div className="relative w-10 h-10 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Wand2 size={18} className="text-white" />
              </div>
              <div className="relative min-w-0">
                <p className="text-[9px] font-bold tracking-widest uppercase text-white/80">
                  Nouveauté IA
                </p>
                <p className="font-semibold text-white text-sm">Rapports design sur mesure</p>
                <p className="text-xs text-white/80 leading-snug">
                  Générés à votre charte graphique, automatiquement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
