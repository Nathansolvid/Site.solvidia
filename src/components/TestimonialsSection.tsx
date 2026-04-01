import { useState } from 'react'
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { submitForm, FORMSPREE_WAITLIST_ID } from '../lib/formspree'

export default function BetaAccessSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const formRef = useScrollReveal<HTMLDivElement>(200)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')

    try {
      await submitForm(FORMSPREE_WAITLIST_ID, {
        email,
        _subject: 'Nouvelle inscription liste d\'attente — Solvid.ia',
      })
      setSubmitted(true)
    } catch {
      setError('Une erreur est survenue. Réessayez.')
    } finally {
      setLoading(false)
    }
  }

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
          {!submitted ? (
            <>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-6 py-3.5 font-semibold text-sm hover:bg-primary-dark transition-colors cursor-pointer shrink-0 disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      Rejoindre la liste
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
              {error && (
                <p className="text-red-500 text-sm text-center mt-3">{error}</p>
              )}
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
