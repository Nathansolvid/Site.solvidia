import { useEffect, useRef, useState } from 'react'
import {
  FileCheck,
  Sparkles,
  BookOpen,
  Plus,
  HeartHandshake,
  Gavel,
  ShieldCheck,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ReferentialLogo, type LogoKey } from '@/components/ui/referential-logo'

/** Compteur animé au scroll */
function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(target * eased))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}

function AnimatedNumber({ value }: { value: number }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <span ref={ref} className="tabular-nums">
      {current}
    </span>
  )
}

/** Référentiels présentés comme mur de logos (style corporate Zei) */
interface Referential {
  name: string
  body: string
  logo: LogoKey
  /** Label court affiché dans certains logos (ex. "EU" default) */
  logoLabel?: string
}

const referentials: Referential[] = [
  { name: 'VSME', body: 'Standard EU · PME', logo: 'eu', logoLabel: 'VS' },
  { name: 'CSRD', body: 'Directive UE 2022', logo: 'eu', logoLabel: 'CS' },
  { name: 'ESRS', body: 'Datapoints CSRD', logo: 'eu', logoLabel: 'ES' },
  { name: 'Taxonomie UE', body: 'Règlement 2020/852', logo: 'eu', logoLabel: 'TX' },
  { name: 'DPEF', body: 'Rapport extra-financier', logo: 'eu', logoLabel: 'DP' },
  { name: 'Bilan Carbone®', body: 'ADEME', logo: 'ademe' },
  { name: 'GHG Protocol', body: 'Scope 1/2/3', logo: 'ghg' },
  { name: 'ISO 14001', body: 'Management envt.', logo: 'iso' },
  { name: 'SBTi', body: 'Science-Based Targets', logo: 'sbti' },
  { name: 'ODD', body: 'ONU · 17 objectifs', logo: 'un-sdg' },
  { name: 'Global Compact', body: 'ONU · 10 principes', logo: 'un-gc' },
  { name: 'Ecovadis', body: 'Évaluation tiers', logo: 'ecovadis' },
  { name: 'Questionnaire Bancaire', body: 'BPI · SG', logo: 'bank' },
  { name: 'Diagnostic Social', body: 'Index égalité · QVT', logo: 'social' },
]

export default function PacksSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const featuredRef = useScrollReveal<HTMLDivElement>(200)
  const wallRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section id="parcours" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div
        className="absolute bottom-1/4 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(45,122,85,0.10) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-primary/20">
            <ShieldCheck size={14} />
            Conformité
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight leading-tight">
            Couverture{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
              }}
            >
              des principaux référentiels ESG
            </span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            VSME pour le volontariat, CSRD pour l'obligation — et tous les autres référentiels institutionnels que vos banques, auditeurs et investisseurs exigent.
          </p>
        </div>

        {/* Duo vedette VSME + CSRD */}
        <div ref={featuredRef} className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
          {/* VSME */}
          <article className="group relative bg-white rounded-3xl border-2 border-primary/40 p-7 lg:p-8 overflow-hidden shadow-xl shadow-primary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
            <div
              className="absolute inset-0 pointer-events-none opacity-50 rounded-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at top right, rgba(45,122,85,0.15) 0%, rgba(45,122,85,0) 60%)',
              }}
              aria-hidden="true"
            />

            <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
              <HeartHandshake size={12} />
              Volontaire
            </span>

            <div className="relative">
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 rounded-2xl shadow-lg shadow-primary/30 overflow-hidden">
                  <ReferentialLogo type="eu" label="VSME" size={56} />
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight">VSME</h3>
                  <p className="text-sm text-primary font-semibold mt-0.5">
                    Standard européen pour PME
                  </p>
                </div>
              </div>

              <p className="text-muted text-[14px] leading-relaxed mb-5">
                Pour les <strong className="text-foreground">PME qui choisissent</strong> de structurer leur démarche ESG — souvent sous la demande d'une banque, d'un donneur d'ordre ou d'un investisseur.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                <div className="text-center">
                  <p
                    className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent leading-none mb-1"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
                    }}
                  >
                    <AnimatedNumber value={79} />
                  </p>
                  <p className="text-[11px] font-semibold text-foreground">indicateurs</p>
                </div>
                <div className="text-center">
                  <p
                    className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent leading-none mb-1"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
                    }}
                  >
                    <AnimatedNumber value={17} />
                  </p>
                  <p className="text-[11px] font-semibold text-foreground">modèles Excel</p>
                </div>
                <div className="text-center">
                  <p
                    className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent leading-none mb-1"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
                    }}
                  >
                    E/S/G
                  </p>
                  <p className="text-[11px] font-semibold text-foreground">3 piliers</p>
                </div>
              </div>
            </div>
          </article>

          {/* CSRD */}
          <article className="group relative bg-gradient-to-br from-primary-dark to-dark-green text-white rounded-3xl border-2 border-primary-dark p-7 lg:p-8 overflow-hidden shadow-xl shadow-primary-dark/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-dark/40">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" aria-hidden="true" />

            <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-200 border border-amber-400/40 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
              <Gavel size={12} />
              Obligation
            </span>

            <div className="relative">
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 rounded-2xl shadow-xl shadow-black/20 overflow-hidden ring-2 ring-white/20">
                  <ReferentialLogo type="eu" label="CSRD" size={56} />
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight">CSRD</h3>
                  <p className="text-sm text-white/80 font-semibold mt-0.5">
                    Directive européenne — ESRS
                  </p>
                </div>
              </div>

              <p className="text-white/85 text-[14px] leading-relaxed mb-5">
                Pour les <strong className="text-white">ETI et grandes entreprises soumises à l'obligation</strong> de rapport de durabilité. On gère les datapoints ESRS, la double matérialité et l'export CSRD-ready.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15">
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold leading-none mb-1 text-white">
                    <AnimatedNumber value={12} />
                  </p>
                  <p className="text-[11px] font-semibold text-white/80">ESRS</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold leading-none mb-1 text-white">
                    <AnimatedNumber value={82} />
                  </p>
                  <p className="text-[11px] font-semibold text-white/80">disclosures</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold leading-none mb-1 text-white">
                    E/S/G
                  </p>
                  <p className="text-[11px] font-semibold text-white/80">3 piliers</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Mur de référentiels — style Zei */}
        <div ref={wallRef} className="max-w-6xl mx-auto">
          {/* Sous-header du mur */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-border">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-1">
                Tous les standards
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                <AnimatedNumber value={referentials.length} />
                <span className="text-primary">+</span> référentiels couverts
              </h3>
            </div>
            <p className="text-sm text-muted max-w-sm sm:text-right">
              Des normes européennes aux cadres internationaux — nous parlons le langage de vos auditeurs.
            </p>
          </div>

          {/* Grid de logos + nom */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {referentials.map((ref) => (
              <div
                key={ref.name}
                className="group relative bg-white border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <ReferentialLogo type={ref.logo} label={ref.logoLabel} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-foreground text-[13px] leading-tight truncate group-hover:text-primary transition-colors">
                      {ref.name}
                    </p>
                    <p className="text-[10px] text-muted leading-tight truncate mt-0.5">
                      {ref.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Sur demande */}
            <div className="group relative bg-primary-light/30 border-2 border-dashed border-primary/30 rounded-xl p-4 transition-all duration-300 hover:border-primary hover:bg-primary-light/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-primary/30 shrink-0">
                  <Plus size={18} className="text-primary" strokeWidth={2.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-primary text-[13px] leading-tight truncate">
                    Sur demande
                  </p>
                  <p className="text-[10px] text-muted leading-tight truncate mt-0.5">
                    Votre référentiel spécifique
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer : mention légale / trust */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
            <div className="inline-flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-primary" />
              <span>Mises à jour automatiques selon l'évolution des normes</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Sparkles size={12} className="text-primary" />
              <span>Exports directs pour auditeurs &amp; commissaires aux comptes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
