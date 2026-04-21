import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useForm, ValidationError } from '@formspree/react'
import { AnimatedText } from '@/components/ui/animated-text'

const earlyAdopterBenefits = [
  'Accès complet et gratuit pendant la beta',
  'Accompagnement personnalisé par l\'équipe',
  'Tarif préférentiel garanti au lancement',
]

export default function BetaAccessSection() {
  const [state, handleSubmit] = useForm('mlgoljpv')
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const formRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="beta" className="relative overflow-hidden py-24 lg:py-32">
      {/* Décorations : gros glows diffus */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(ellipse, rgba(45,122,85,0.15) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Headline typographique massive */}
      <div ref={headerRef} className="relative max-w-5xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-8 border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Beta privée — places limitées
        </div>

        {/* Titre principal animé lettre par lettre (AnimatedText — 21st.dev) */}
        <AnimatedText
          text="Rejoignez la beta."
          textClassName="text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-foreground"
          underlineGradient="from-primary via-primary-dark to-primary"
          underlineHeight="h-[6px]"
          underlineOffset="-bottom-3"
          underlineClassName="rounded-full"
          duration={0.04}
          delay={0.02}
          className="mb-4"
        />
        <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] mb-8 text-foreground/80">
          Façonnez l'outil.
        </h2>

        <p className="text-lg lg:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Testez Solvid.ia en avant-première, contribuez à la roadmap, gardez votre tarif préférentiel au lancement officiel.
        </p>
      </div>

      {/* Formulaire centré avec bénéfices en ligne au-dessus */}
      <div ref={formRef} className="relative max-w-xl mx-auto px-6">
        {/* Bénéfices en pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {earlyAdopterBenefits.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 bg-white border border-primary/15 rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
            >
              <CheckCircle2 size={12} className="text-primary" />
              {b}
            </span>
          ))}
        </div>

        {!state.succeeded ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-border p-6 lg:p-8 shadow-xl shadow-primary/5 space-y-4"
            >
              <input type="hidden" name="_subject" value="Early Adopter — Solvid.ia" />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="prenom"
                  required
                  placeholder="Prénom"
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                />
                <input
                  type="text"
                  name="nom"
                  required
                  placeholder="Nom"
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="votre@email.com"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
              />

              <select
                name="taille"
                required
                defaultValue=""
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
              >
                <option value="" disabled>Taille de l'entreprise...</option>
                <option value="moins-50">Moins de 50 salariés</option>
                <option value="50-250">50 à 250 salariés</option>
                <option value="250-500">250 à 500 salariés</option>
                <option value="plus-500">Plus de 500 salariés</option>
              </select>

              <button
                type="submit"
                disabled={state.submitting}
                className="group relative w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-6 py-4 font-semibold text-base hover:bg-primary-dark transition-all cursor-pointer disabled:opacity-60 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">
                  {state.submitting ? 'Envoi...' : 'Rejoindre la beta'}
                </span>
                {!state.submitting && (
                  <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </form>
            <ValidationError
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm text-center mt-2"
            />
            <p className="text-center text-muted text-xs mt-4">
              Aucun spam. Nous vous contacterons uniquement pour votre accès beta.
            </p>
          </>
        ) : (
          <div className="text-center bg-white rounded-2xl border border-primary/20 p-10 shadow-xl shadow-primary/10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/30">
              <Sparkles size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-2xl mb-2">Vous êtes sur la liste !</h3>
            <p className="text-muted">
              Nous vous contacterons dès que votre accès sera prêt.
            </p>
          </div>
        )}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}
