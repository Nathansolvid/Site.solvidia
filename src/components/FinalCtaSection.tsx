import { ArrowRight, Sparkles, ShieldCheck, MapPin, Rocket } from 'lucide-react'
import { useDemoModal } from '../App'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCtaSection() {
  const { openDemo } = useDemoModal()
  const contentRef = useScrollReveal<HTMLDivElement>(0)

  return (
    <section className="relative overflow-hidden bg-dark-green py-24 lg:py-28">
      {/* Grid pattern très discret */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Glow primaire derrière */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse, rgba(45,122,85,0.35) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Orbes lumineuses décoratives */}
      <div className="absolute top-20 left-16 w-2 h-2 rounded-full bg-white/40 animate-pulse" aria-hidden="true" />
      <div className="absolute top-32 right-24 w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
      <div className="absolute bottom-24 left-1/3 w-2 h-2 rounded-full bg-white/35 animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
      <div className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      <div ref={contentRef} className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          Beta privée ouverte
        </div>

        {/* Headline massive */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-6">
          Prêt à avoir vos indicateurs ESG
          <br />
          <span
            className="bg-clip-text text-transparent inline-block"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #87DBB3 0%, #FFFFFF 50%, #87DBB3 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 6s ease infinite',
            }}
          >
            en ordre ?
          </span>
        </h2>

        <p className="text-white/70 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Collectez les bonnes données, rattachez vos preuves et soyez prêt quand l'auditeur appelle — dès les premières semaines.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={openDemo}
            className="group relative inline-flex items-center justify-center gap-2 bg-white text-dark-green font-bold rounded-xl px-8 py-4 text-base hover:bg-white/95 transition-all cursor-pointer shadow-2xl shadow-primary/30 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Demander l'accès beta</span>
            <ArrowRight
              size={18}
              className="relative transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={openDemo}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white rounded-xl px-8 py-4 font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all cursor-pointer backdrop-blur-sm"
          >
            Demander une démo
          </button>
        </div>

        {/* Trust signals répétés */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <div className="inline-flex items-center gap-2">
            <Rocket size={16} className="text-white/80" />
            <span>Beta privée · places limitées</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <ShieldCheck size={16} className="text-white/80" />
            <span>Conforme VSME &amp; CSRD</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-white/80" />
            <span>Hébergement France</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Sparkles size={16} className="text-white/80" />
            <span>Sans engagement</span>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}
