import { useDemoModal } from '../App'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCtaSection() {
  const { openDemo } = useDemoModal()
  const contentRef = useScrollReveal<HTMLDivElement>(0)

  return (
    <section className="py-20 bg-dark-green relative overflow-hidden">
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Prêt à simplifier votre gestion ESG ?
        </h2>
        <p className="text-white/70 text-center mb-8 max-w-xl mx-auto">
          Centralisez vos données, générez vos rapports et soyez prêt pour l'audit — en quelques clics.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 bg-white text-dark-green font-semibold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors cursor-pointer"
          >
            Essayer gratuitement &rarr;
          </button>
          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 border border-white/30 text-white rounded-lg px-6 py-3 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Demander une démo
          </button>
        </div>

        <p className="text-white/50 text-sm mt-6">
          Essai gratuit 14 jours · Aucune carte bancaire requise
        </p>
      </div>
    </section>
  )
}
