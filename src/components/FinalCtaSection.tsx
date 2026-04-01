import { useDemoModal } from '../App'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCtaSection() {
  const { openDemo } = useDemoModal()
  const contentRef = useScrollReveal<HTMLDivElement>(0)

  return (
    <section className="py-20 bg-dark-green relative overflow-hidden">
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Prêt à avoir vos indicateurs ESG en ordre ?
        </h2>
        <p className="text-white/70 text-center mb-8 max-w-xl mx-auto">
          Collectez les bonnes données, rattachez vos preuves et soyez prêt quand l'auditeur appelle.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 bg-white text-dark-green font-semibold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors cursor-pointer"
          >
            Demander l'accès beta &rarr;
          </button>
          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 border border-white/30 text-white rounded-lg px-6 py-3 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Demander une démo
          </button>
        </div>
      </div>
    </section>
  )
}
