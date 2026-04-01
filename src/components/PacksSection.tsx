import {
  Leaf,
  Users,
  Scale,
  FileCheck,
  Landmark,
  Flame,
  type LucideIcon,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Workflow {
  icon: LucideIcon
  title: string
  description: string
  tag: string
}

const workflows: Workflow[] = [
  {
    icon: FileCheck,
    title: 'VSME',
    description: 'Collectez les 79 indicateurs du standard européen de durabilité pour PME, avec les bons justificatifs.',
    tag: 'Réglementaire',
  },
  {
    icon: Flame,
    title: 'Bilan Carbone',
    description: 'Rassemblez les données énergie, transports et achats nécessaires au calcul de votre empreinte.',
    tag: 'Environnement',
  },
  {
    icon: Users,
    title: 'Diagnostic Social',
    description: 'Enregistrez vos indicateurs emploi, formation et sécurité au travail de manière structurée.',
    tag: 'Social',
  },
  {
    icon: Scale,
    title: 'Gouvernance',
    description: 'Documentez vos pratiques d\'éthique, conformité et gestion des risques avec les preuves associées.',
    tag: 'Gouvernance',
  },
  {
    icon: Leaf,
    title: 'Diagnostic ESG PME',
    description: 'Un parcours guidé pour collecter rapidement l\'ensemble de vos indicateurs ESG. Le point de départ idéal.',
    tag: 'Environnement',
  },
  {
    icon: Landmark,
    title: 'Questionnaire Bancaire',
    description: 'Préparez les réponses et preuves ESG demandées par vos banques et investisseurs.',
    tag: 'Réglementaire',
  },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  Environnement: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  Social: { bg: 'bg-blue-50', text: 'text-blue-700' },
  Gouvernance: { bg: 'bg-purple-50', text: 'text-purple-700' },
  Réglementaire: { bg: 'bg-amber-50', text: 'text-amber-700' },
}

export default function PacksSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const featuredRef = useScrollReveal<HTMLDivElement>(200)
  const gridRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section id="parcours" className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            11 parcours de collecte
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            On vous guide sur ce qu'il faut collecter
          </h2>
          <p className="text-center text-muted mb-4 max-w-2xl mx-auto">
            Chaque parcours vous indique exactement quels indicateurs enregistrer et quels justificatifs joindre — selon le cadre qui vous concerne.
          </p>
        </div>

        {/* Featured: VSME */}
        <div ref={featuredRef} className="max-w-4xl mx-auto mb-10">
          <div className="bg-card rounded-xl border-2 border-primary p-8 relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              Le plus demandé
            </span>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <FileCheck size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VSME — Collecte des indicateurs de durabilité</h3>
                <p className="text-muted text-sm mt-1">
                  La plateforme vous guide indicateur par indicateur : quoi remplir, quel format, quelle preuve joindre. Vous n'avez pas besoin de lire la norme, on s'en charge.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">79</p>
                <p className="text-xs text-muted">indicateurs guidés</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">17</p>
                <p className="text-xs text-muted">modèles Excel fournis</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">E/S/G</p>
                <p className="text-xs text-muted">les 3 piliers couverts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other workflows grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {workflows.slice(1).map((wf) => {
            const Icon = wf.icon
            const tag = tagColors[wf.tag]
            return (
              <div
                key={wf.title}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 ${tag.bg} rounded-lg flex items-center justify-center shrink-0`}>
                    <Icon size={20} className={tag.text} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm leading-tight">{wf.title}</h3>
                    <span className={`inline-block text-xs font-medium mt-1 px-2 py-0.5 rounded-full ${tag.bg} ${tag.text}`}>
                      {wf.tag}
                    </span>
                  </div>
                </div>
                <p className="text-muted text-xs leading-relaxed">{wf.description}</p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-muted text-sm mt-8">
          + 5 autres parcours de collecte (CSRD, énergie, déchets, santé-sécurité…)
        </p>
      </div>
    </section>
  )
}
