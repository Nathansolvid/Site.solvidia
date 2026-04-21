import { ArrowRight, BarChart3, Link2, Sparkles, ShieldCheck, MapPin, Rocket } from 'lucide-react'
import { useDemoModal } from '../App'

export default function HeroSection() {
  const { openDemo } = useDemoModal()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gros glow vert en haut à droite */}
      <div
        className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(45,122,85,0.35) 0%, rgba(45,122,85,0) 60%)',
        }}
        aria-hidden="true"
      />

      {/* Glow vert clair en bas à gauche */}
      <div
        className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(45,122,85,0.22) 0%, rgba(45,122,85,0) 65%)',
        }}
        aria-hidden="true"
      />

      {/* Orbes flottantes décoratives */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/40 animate-pulse" aria-hidden="true" />
      <div className="absolute top-40 right-1/4 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
      <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column */}
          <div className="animate-hero-in">
            {/* Badge amélioré avec halo */}
            <span className="relative inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-primary/5 text-primary rounded-full px-5 py-2 text-sm font-semibold mb-8 tracking-wide border border-primary/20 shadow-sm shadow-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <Sparkles size={14} className="text-primary" />
              Plateforme ESG pour PME et ETI
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 text-foreground tracking-tight">
              Les bons indicateurs,{' '}
              <span
                className="relative inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #2D7A55 0%, #0D3B27 50%, #2D7A55 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 6s ease infinite',
                }}
              >
                prêts pour l'audit.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 Q 75 2, 150 6 T 298 4"
                    stroke="#2D7A55"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              Solvid.ia vous aide à collecter, organiser et tracer les indicateurs ESG dont vos auditeurs, banques et investisseurs ont besoin — sans refaire vos fichiers de zéro.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={openDemo}
                className="group relative inline-flex items-center gap-2 bg-primary text-white rounded-xl px-7 py-4 font-semibold text-base hover:bg-primary-dark transition-all cursor-pointer shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Demander l'accès beta</span>
                <ArrowRight
                  size={18}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </button>
              <a
                href="#comment-ca-marche"
                className="group inline-flex items-center gap-2 bg-white border-2 border-border text-foreground rounded-xl px-7 py-4 font-semibold text-base hover:border-primary hover:text-primary hover:bg-primary-light transition-all"
              >
                Voir comment ça marche
                <ArrowRight
                  size={18}
                  className="opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0"
                />
              </a>
            </div>

            {/* Trust signals — pre-launch honnête */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <div className="inline-flex items-center gap-2">
                <Rocket size={16} className="text-primary" />
                <span>
                  <span className="font-semibold text-foreground">Beta privée</span>
                  {' · '}places limitées
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>Conforme VSME &amp; CSRD</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Hébergement France</span>
              </div>
            </div>
          </div>

          {/* Right column — Dashboard */}
          <div
            className="mt-16 lg:mt-0 animate-hero-in relative"
            style={{ animationDelay: '0.2s' }}
          >
            {/* GROS halo vert derrière le mockup */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none -z-10 scale-110"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(45,122,85,0.55) 0%, rgba(45,122,85,0.15) 40%, rgba(45,122,85,0) 70%)',
              }}
              aria-hidden="true"
            />

            <div className="group relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-5 transition-all duration-500 hover:scale-[1.02] hover:rotate-[-0.5deg]">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 border border-primary/15 ring-1 ring-white/50">
                <img
                  src="/images/screenshot-dashboard.png"
                  alt="Dashboard Solvid.IA"
                  className="w-full block"
                  style={{ marginTop: '-6%' }}
                />
              </div>

              {/* Floating badges avec icônes Lucide + glassmorphism visible */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-primary/20 border border-white px-5 py-4 items-center gap-3 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <BarChart3 size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Indicateurs collectés</p>
                  <p className="font-bold text-sm text-foreground">Tracés et vérifiables</p>
                </div>
              </div>
              <div className="hidden sm:flex absolute -top-6 -right-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-primary/20 border border-white px-5 py-4 items-center gap-3 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary/20 rounded-xl flex items-center justify-center border border-primary/20">
                  <Link2 size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Sources connectées</p>
                  <p className="font-bold text-sm text-foreground">Excel, ERP, API</p>
                </div>
              </div>

              {/* Badge supplémentaire "Audit-ready" */}
              <div className="hidden lg:flex absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-full shadow-xl shadow-primary/20 border border-primary/10 px-4 py-2 items-center gap-2 transition-all duration-500 group-hover:translate-x-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-foreground">Audit-ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS custom */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}
