import { ArrowRight } from 'lucide-react'
import { useDemoModal } from '../App'

export default function HeroSection() {
  const { openDemo } = useDemoModal()

  return (
    <section id="hero" className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left column */}
          <div className="animate-hero-in">
            <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-8 tracking-wide">
              Plateforme ESG pour PME et ETI
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              Centralisez vos données ESG,{' '}
              <span className="text-primary">simplifiez vos rapports.</span>
            </h1>

            <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
              Collectez, structurez et exportez toutes vos données environnementales, sociales et de gouvernance — à partir de vos fichiers Excel ou de votre ERP.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openDemo}
                className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-7 py-3.5 font-semibold text-base hover:bg-primary-dark transition-colors cursor-pointer shadow-lg shadow-primary/20"
              >
                Demander l'accès beta
                <ArrowRight size={18} />
              </button>
              <a
                href="#comment-ca-marche"
                className="inline-flex items-center gap-2 border-2 border-border text-foreground rounded-xl px-7 py-3.5 font-semibold text-base hover:border-primary hover:text-primary transition-colors"
              >
                Voir comment ça marche
              </a>
            </div>
          </div>

          {/* Right column — Dashboard */}
          <div className="mt-16 lg:mt-0 animate-hero-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary/5 rounded-3xl p-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/10">
                <img
                  src="/images/screenshot-dashboard.png"
                  alt="Dashboard Solvid.IA"
                  className="w-full block"
                  style={{ marginTop: '-6%' }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📊</span>
                </div>
                <div>
                  <p className="text-xs text-muted">Rapports générés</p>
                  <p className="font-bold text-sm">Prêt pour l'audit</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🔗</span>
                </div>
                <div>
                  <p className="text-xs text-muted">Sources connectées</p>
                  <p className="font-bold text-sm">Excel, ERP, API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
