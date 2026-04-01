import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MentionsLegalesModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-2">Mentions légales</h2>

        <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-6">
          <p className="text-amber-800 text-xs font-medium">
            ⚠️ Mentions provisoires — en attente de l'immatriculation de Solvid.ia
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900">Éditeur du site</h3>
            <ul className="space-y-1.5">
              <li><span className="font-medium">Dénomination :</span> Clement Marinho Développement</li>
              <li><span className="font-medium">Forme juridique :</span> SASU au capital de 1 000 €</li>
              <li><span className="font-medium">SIREN :</span> 930 695 895</li>
              <li><span className="font-medium">SIRET :</span> 930 695 895 00015</li>
              <li><span className="font-medium">RCS :</span> Versailles</li>
              <li><span className="font-medium">TVA intracommunautaire :</span> FR24930695895</li>
              <li><span className="font-medium">Siège social :</span> 5 avenue de l'Abreuvoir, 78170 La Celle-Saint-Cloud</li>
              <li><span className="font-medium">Dirigeant :</span> Clément Marinho</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900">Hébergement</h3>
            <p>
              Ce site est hébergé par <span className="font-medium">Vercel Inc.</span>,
              340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900">Propriété intellectuelle</h3>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de Solvid.ia.
              Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-gray-900">Contact</h3>
            <p>Pour toute question : <span className="font-medium">contact@solvidia.fr</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
