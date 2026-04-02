import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useForm, ValidationError } from '@formspree/react'

const earlyAdopterBenefits = [
  'Accès complet et gratuit à la plateforme pendant la phase beta',
  'Accompagnement personnalisé par l\'équipe',
  'Tarif préférentiel garanti au lancement officiel',
]

export default function BetaAccessSection() {
  const [state, handleSubmit] = useForm('mlgoljpv')
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const formRef = useScrollReveal<HTMLDivElement>(200)

  return (
    <section id="beta" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div ref={headerRef} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Accès limité — 6 places
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Rejoignez les 6 Early Adopters
          </h2>
          <p className="text-center text-muted mb-4 max-w-xl mx-auto">
            Testez Solvid.ia en avant-première et contribuez à façonner la plateforme.
          </p>
        </div>

        {/* Proposition de valeur */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
            <ul className="space-y-3">
              {earlyAdopterBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={formRef} className="max-w-lg mx-auto">
          {!state.succeeded ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                >
                  <option value="">Taille de l'entreprise...</option>
                  <option value="moins-50">Moins de 50 salariés</option>
                  <option value="50-250">50 à 250 salariés</option>
                  <option value="250-500">250 à 500 salariés</option>
                  <option value="plus-500">Plus de 500 salariés</option>
                </select>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-xl px-6 py-3.5 font-semibold text-sm hover:bg-primary-dark transition-colors cursor-pointer disabled:opacity-60"
                >
                  {state.submitting ? (
                    'Envoi...'
                  ) : (
                    <>
                      Rejoindre le programme Early Adopters
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
              <ValidationError field="email" errors={state.errors} className="text-red-500 text-sm text-center mt-2" />
            </>
          ) : (
            <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Vous êtes sur la liste !</h3>
              <p className="text-muted text-sm">
                Nous vous contacterons dès que votre accès sera prêt.
              </p>
            </div>
          )}
          <p className="text-center text-muted text-xs mt-4">
            Aucun spam. Nous vous contacterons uniquement pour votre accès beta.
          </p>
        </div>
      </div>
    </section>
  )
}
