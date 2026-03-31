import { ArrowRight, CheckCircle } from 'lucide-react'
import { useDemoModal } from '../App'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HeroSection() {
  const { openDemo } = useDemoModal()
  const leftRef = useScrollReveal<HTMLDivElement>(0)
  const rightRef = useScrollReveal<HTMLDivElement>(200)
  const propsRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section id="hero" className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column */}
          <div ref={leftRef}>
            <span className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <CheckCircle size={16} />
              Plateforme ESG pour PME et ETI
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Centralisez et organisez{' '}
              <span className="text-primary">toutes vos données ESG</span>{' '}
              en un seul endroit
            </h1>

            <p className="text-lg text-muted mb-8 max-w-xl">
              Solvid.ia vous aide à collecter, structurer et exporter vos données environnementales, sociales et de gouvernance — à partir de vos fichiers Excel ou en connectant directement votre ERP.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openDemo}
                className="inline-flex items-center gap-2 bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary-dark transition-colors cursor-pointer"
              >
                Essayer gratuitement
                <ArrowRight size={18} />
              </button>
              <a
                href="#comment-ca-marche"
                className="inline-flex items-center gap-2 border border-primary text-primary rounded-lg px-6 py-3 font-medium hover:bg-primary-light transition-colors"
              >
                Voir comment ça marche
              </a>
            </div>
          </div>

          {/* Right column */}
          <div ref={rightRef} className="mt-12 lg:mt-0">
            <div className="bg-primary-light rounded-2xl p-4 relative overflow-hidden">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/screenshot-dashboard.png"
                  alt="Dashboard Solvid.IA"
                  className="w-full block"
                  style={{ marginTop: '-6%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Simple value props */}
        <div ref={propsRef} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-primary shrink-0" />
            <p className="text-sm font-medium">Import Excel</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-primary shrink-0" />
            <p className="text-sm font-medium">Connexion ERP</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-primary shrink-0" />
            <p className="text-sm font-medium">Prêt pour l'audit</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-primary shrink-0" />
            <p className="text-sm font-medium">Conforme EFRAG</p>
          </div>
        </div>
      </div>
    </section>
  )
}
