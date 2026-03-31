import { useState } from 'react'
import { X, Send } from 'lucide-react'

interface DemoModalProps {
  open: boolean
  onClose: () => void
}

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
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
                    type="text"
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Nom</label>
                  <input
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
                  type="email"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="jean@entreprise.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Entreprise</label>
                <input
                  type="text"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Votre besoin</label>
                <select
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
                  rows={3}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  placeholder="Décrivez brièvement votre situation ESG..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary-dark transition-colors text-sm"
              >
                Envoyer ma demande
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
