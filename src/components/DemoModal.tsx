import { useState } from 'react'
import { X, Send, Loader2 } from 'lucide-react'
import { submitForm, FORMSPREE_DEMO_ID } from '../lib/formspree'

interface DemoModalProps {
  open: boolean
  onClose: () => void
}

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      prenom: (form.elements.namedItem('prenom') as HTMLInputElement).value,
      nom: (form.elements.namedItem('nom') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      entreprise: (form.elements.namedItem('entreprise') as HTMLInputElement).value,
      besoin: (form.elements.namedItem('besoin') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      _subject: 'Nouvelle demande de démo — Solvid.ia',
    }

    try {
      await submitForm(FORMSPREE_DEMO_ID, data)
      setSubmitted(true)
    } catch {
      setError('Une erreur est survenue. Réessayez ou contactez-nous directement.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Merci !</h3>
            <p className="text-muted">
              Nous avons bien reçu votre demande. Un consultant vous recontactera sous 24h.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-primary text-white rounded-lg px-6 py-2.5 font-medium hover:bg-primary-dark transition-colors text-sm"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-1">Demander une démo</h3>
            <p className="text-muted text-sm mb-6">
              Un consultant Solvid.ia vous recontactera sous 24h pour organiser une démonstration personnalisée.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Prénom</label>
                  <input
                    name="prenom"
                    type="text"
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nom</label>
                  <input
                    name="nom"
                    type="text"
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email professionnel</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="jean@entreprise.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Entreprise</label>
                <input
                  name="entreprise"
                  type="text"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Votre besoin</label>
                <select
                  name="besoin"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="decouverte">Découvrir la plateforme</option>
                  <option value="vsme">Rapport VSME</option>
                  <option value="bilan-carbone">Bilan Carbone</option>
                  <option value="accompagnement">Accompagnement consultant</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message (optionnel)</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  placeholder="Décrivez brièvement votre situation ESG..."
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary-dark transition-colors text-sm disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer ma demande'
                )}
              </button>

              <p className="text-muted text-xs text-center">
                Vos données sont traitées conformément au RGPD.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
