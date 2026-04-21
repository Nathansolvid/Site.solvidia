import { Upload, Download, Link, Eye, Plug, Sparkles } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: Download,
    title: 'Import Excel',
    description: 'Glissez vos fichiers existants. On vous dit quels indicateurs manquent.',
  },
  {
    icon: Plug,
    title: 'Connexion ERP',
    description: 'SAP, Oracle, Sage — récupération auto des données de votre SI.',
  },
  {
    icon: Link,
    title: 'Traçabilité totale',
    description: 'Chaque indicateur relié à sa source : qui, quand, avec quelle preuve.',
  },
  {
    icon: Eye,
    title: 'Prêt pour l\'audit',
    description: 'Données organisées par référentiel. L\'auditeur retrouve chaque preuve en quelques clics.',
  },
  {
    icon: Upload,
    title: 'Export structuré',
    description: 'PDF ou Excel, selon le cadre demandé (VSME, CSRD, banque…).',
  },
]

export default function DataRoomSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const listRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="solution" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(45,122,85,0.12) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div ref={headerRef} className="relative max-w-3xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-primary/20">
          <Sparkles size={14} />
          La solution
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
          Un seul endroit pour{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
            }}
          >
            tous vos indicateurs ESG
          </span>
        </h2>
        <p className="text-lg text-muted leading-relaxed mt-5">
          Importez vos fichiers existants, rattachez vos justificatifs et organisez tout selon les référentiels — sans repartir de zéro.
        </p>
      </div>

      {/* Liste numérotée 01 → 05 en 2 colonnes pour compacter */}
      <div ref={listRef} className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon
          const number = String(idx + 1).padStart(2, '0')
          return (
            <div
              key={feature.title}
              className="group relative flex gap-5 pb-6 border-b border-border md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+2)]:pb-0 last:border-b-0 last:pb-0"
            >
              <div className="shrink-0">
                <span
                  className="text-4xl lg:text-5xl font-black leading-none bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
                  }}
                >
                  {number}
                </span>
              </div>

              <div className="flex-1 pt-0.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon size={18} className="text-primary" />
                  <h3 className="font-bold text-lg leading-tight">{feature.title}</h3>
                </div>
                <p className="text-muted text-[15px] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
