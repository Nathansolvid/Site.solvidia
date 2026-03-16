export default function FinalCtaSection() {
  return (
    <section className="py-20 bg-dark-green relative overflow-hidden">
      {/* Decorative tree watermarks */}
      <img
        src="/tree-icon.svg"
        alt=""
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 h-56 opacity-[0.08] brightness-0 invert pointer-events-none"
      />
      <img
        src="/tree-icon.svg"
        alt=""
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 h-56 opacity-[0.08] brightness-0 invert pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <img
          src="/tree-icon.svg"
          alt=""
          className="h-16 mx-auto mb-6 brightness-0 invert opacity-30"
        />
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Prêt à simplifier votre gestion ESG ?
        </h2>
        <p className="text-white/70 text-center mb-8 max-w-xl mx-auto">
          Centralisez vos données, générez vos rapports et soyez prêt pour l'audit — en quelques clics.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-white text-dark-green font-semibold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors"
          >
            Essayer gratuitement &rarr;
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white rounded-lg px-6 py-3 hover:bg-white/10 transition-colors"
          >
            Demander une démo
          </a>
        </div>

        <p className="text-white/50 text-sm mt-6">
          Essai gratuit 14 jours · Aucune carte bancaire requise
        </p>
      </div>
    </section>
  )
}
