import { FileSpreadsheet, ShieldAlert, Clock, AlertTriangle, Mail, FileWarning } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: 'Vos indicateurs sont éparpillés',
    description:
      'Consommation d\'énergie dans un Excel, données sociales dans un autre, justificatifs par email... Impossible de s\'y retrouver.',
  },
  {
    icon: ShieldAlert,
    title: 'Aucune traçabilité pour l\'auditeur',
    description:
      'D\'où vient ce chiffre ? Qui l\'a saisi ? Quelle preuve ? Quand un auditeur pose la question, c\'est la panique.',
  },
  {
    icon: Clock,
    title: 'Vous ne savez pas quoi collecter',
    description:
      'VSME, bilan carbone, questionnaires bancaires... Chaque cadre demande des indicateurs différents et c\'est difficile de s\'y retrouver.',
  },
]

export default function PainPointsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const leftRef = useScrollReveal<HTMLDivElement>(200)
  const rightRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section id="problemes" className="relative bg-background overflow-hidden py-24 lg:py-32">
      {/* Décoration */}
      <div
        className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(251,146,60,0.12) 0%, rgba(251,146,60,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div ref={headerRef} className="relative max-w-3xl mx-auto text-center px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-amber-500/20">
          <AlertTriangle size={14} />
          Le problème
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
          Collecter les bons indicateurs ESG,{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
            }}
          >
            c'est le vrai défi
          </span>
        </h2>
        <p className="text-lg text-muted leading-relaxed mt-5">
          Ce n'est pas le bilan en lui-même le problème — c'est d'avoir les bonnes données, au bon format, avec les bonnes preuves.
        </p>
      </div>

      {/* Split diagonal : illustration + liste */}
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left : illustration chaotique — documents éparpillés */}
        <div ref={leftRef} className="relative order-2 lg:order-1">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Fond cercle */}
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                background:
                  'radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0) 70%)',
              }}
              aria-hidden="true"
            />

            {/* Document 1 — rotated */}
            <div className="absolute top-[8%] left-[12%] w-40 bg-white rounded-lg shadow-xl border border-border p-4 -rotate-12 transition-transform hover:-rotate-6 duration-500">
              <div className="flex items-center gap-2 mb-2">
                <FileSpreadsheet size={14} className="text-emerald-600" />
                <span className="text-[10px] font-bold text-foreground">energie_2025.xlsx</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-border rounded w-full" />
                <div className="h-1 bg-border rounded w-3/4" />
                <div className="h-1 bg-border rounded w-5/6" />
              </div>
            </div>

            {/* Document 2 */}
            <div className="absolute top-[20%] right-[8%] w-36 bg-white rounded-lg shadow-xl border border-border p-4 rotate-6 transition-transform hover:rotate-2 duration-500">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={14} className="text-sky-600" />
                <span className="text-[10px] font-bold text-foreground truncate">RE: factures</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-border rounded w-5/6" />
                <div className="h-1 bg-border rounded w-2/3" />
              </div>
            </div>

            {/* Document 3 */}
            <div className="absolute top-[45%] left-[4%] w-44 bg-white rounded-lg shadow-xl border border-border p-4 rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="flex items-center gap-2 mb-2">
                <FileSpreadsheet size={14} className="text-violet-600" />
                <span className="text-[10px] font-bold text-foreground">RH_indic_v3.xlsx</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-border rounded w-full" />
                <div className="h-1 bg-border rounded w-1/2" />
                <div className="h-1 bg-border rounded w-3/4" />
                <div className="h-1 bg-red-300 rounded w-1/3" />
              </div>
            </div>

            {/* Document 4 — warning */}
            <div className="absolute bottom-[15%] right-[10%] w-40 bg-amber-50 rounded-lg shadow-xl border border-amber-200 p-4 -rotate-6 transition-transform hover:-rotate-3 duration-500">
              <div className="flex items-center gap-2 mb-2">
                <FileWarning size={14} className="text-amber-600" />
                <span className="text-[10px] font-bold text-amber-800">Manquant ?</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-amber-200 rounded w-full" />
                <div className="h-1 bg-amber-200 rounded w-2/3" />
              </div>
            </div>

            {/* Post-it collant */}
            <div className="absolute bottom-[32%] left-[35%] w-24 h-24 bg-yellow-200 shadow-lg rotate-[-8deg] p-3 flex items-center justify-center transition-transform hover:rotate-0 duration-500">
              <p className="text-[9px] font-bold text-yellow-900 text-center leading-tight">
                Demander au RH les chiffres ?
              </p>
            </div>

            {/* Interrogation visuelle au centre */}
            <div className="absolute top-1/2 right-[35%] -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl border-2 border-amber-300 flex items-center justify-center animate-pulse">
              <span className="text-2xl font-black text-amber-500">?</span>
            </div>
          </div>

          <p className="text-center text-sm text-muted italic mt-6 max-w-xs mx-auto">
            « Mes données ESG, elles sont où déjà ? »
          </p>
        </div>

        {/* Right : liste numérotée des problèmes */}
        <div ref={rightRef} className="order-1 lg:order-2 space-y-8">
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            const number = String(idx + 1).padStart(2, '0')
            return (
              <div
                key={point.title}
                className="group relative flex gap-5 pb-8 border-b border-border last:border-b-0 last:pb-0"
              >
                {/* Numéro géant */}
                <div className="shrink-0">
                  <span className="text-5xl lg:text-6xl font-black leading-none bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)' }}>
                    {number}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} className="text-primary" />
                    <h3 className="font-bold text-lg lg:text-xl leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-muted text-[15px] leading-relaxed">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
