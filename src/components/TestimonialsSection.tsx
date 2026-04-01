import { ArrowRight, Sparkles } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useForm, ValidationError } from '@formspree/react'

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
            Accès limité
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 max-w-3xl mx-auto">
            Rejoignez les premiers à tester Solvid.ia
          </h2>
          <p className="text-center text-muted mb-4 max-w-xl mx-auto">
            Accès limité — inscrivez-vous sur liste d'attente pour découvrir la plateforme en avant-première.
          </p>
        </div>

        <div ref={formRef} className="max-w-lg mx-auto">
          {!state.succeeded ? (
            <>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input type="hidden" name="_subject" value="Nouvelle inscription liste d'attente — Solvid.ia" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="flex-1 border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-6 py-3.5 font-semibold text-sm hover:bg-primary-dark transition-colors cursor-pointer shrink-0 disabled:opacity-60"
                >
                  {state.submitting ? (
                    'Envoi...'
                  ) : (
                    <>
                      Rejoindre la liste
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
