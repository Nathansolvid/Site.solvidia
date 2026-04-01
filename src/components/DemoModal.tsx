import { X, Send, CheckCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

interface DemoModalProps {
  open: boolean
  onClose: () => void
}

const earlyAdopterBenefits = [
  'Accès complet et gratuit à la plateforme pendant la phase beta',
  'Accompagnement personnalisé par l'équipe',
  'Tarif préférentiel garanti au lancement officiel',
]

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [state, handleSubmit] = useForm('mlgoljpv')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {state.succeeded ? (
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
            <h3 className="text-2xl font-bold mb-1">Rejoignez les 10 Early Adopters</h3>
            <p className="text-muted text-sm mb-5">
              Testez Solvid.ia en avant-première et contribuez à façonner la plateforme.
            </p>

            {/* Proposition de valeur */}
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 mb-6">
              <ul className="space-y-2.5">
                {earlyAdopterBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="Early Adopter — Solvid.ia" />

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
                  <ValidationError field="prenom" errors={state.errors} className="text-red-500 text-xs mt-1" />
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
                  <ValidationError field="nom" errors={state.errors} className="text-red-500 text-xs mt-1" />
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
                <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
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
                <ValidationError field="entreprise" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Taille de l'entreprise</label>
                <select
                  name="taille"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="moins-50">Moins de 50 salariés</option>
                  <option value="50-250">50 à 250 salariés</option>
                  <option value="250-500">250 à 500 salariés</option>
                  <option value="plus-500">Plus de 500 salariés</option>
                </select>
                <ValidationError field="taille" errors={state.errors} className="text-red-500 text-xs mt-1" />
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
                <ValidationError field="besoin" errors={state.errors} className="text-red-500 text-xs mt-1" />
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

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary-dark transition-colors text-sm disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {state.submitting ? 'Envoi en cours...' : 'Rejoindre le programme Early Adopters'}
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
