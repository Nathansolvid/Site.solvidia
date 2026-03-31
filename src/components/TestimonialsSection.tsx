import { Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    initials: 'MC',
    quote:
      'Avant Solvid.ia, on passait 3 semaines à compiler les données de nos filiales. Maintenant, c\'est fait en 2 jours.',
    name: 'Marie Chevallier',
    title: 'Directrice RSE, Groupe industriel',
  },
  {
    initials: 'PD',
    quote:
      'On réutilise nos réponses d\'un client à l\'autre. Notre base de preuves grandit à chaque projet, c\'est un vrai gain de temps.',
    name: 'Pierre Dubois',
    title: 'DG, PME sous-traitante',
  },
  {
    initials: 'SL',
    quote:
      'Pour nos audits ESG, on peut enfin présenter une documentation complète et bien organisée au régulateur.',
    name: 'Sophie Lemaire',
    title: 'Responsable Risques, Banque régionale',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-yellow-400 fill-yellow-400"
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const cardsRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="temoignages" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Ils utilisent déjà Solvid.ia
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl border border-border p-8"
            >
              <Stars />
              <p className="text-foreground text-sm mt-4 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
