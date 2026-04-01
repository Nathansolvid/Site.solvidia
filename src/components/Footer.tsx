import Logo from './Logo'

const footerColumns = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '#solution' },
      { label: 'Parcours', href: '#parcours' },
      { label: 'Tarifs', href: '#tarifs' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Blog', href: '#blog' },
      { label: 'Support', href: '#support' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '#a-propos' },
      { label: 'Contact', href: '#contact' },
      { label: 'Mentions légales', href: '#mentions-legales' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-green py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo column */}
          <div>
            <Logo className="h-11 w-auto" variant="light" />
            <p className="text-white/50 text-sm mt-3">
              La plateforme ESG pour les PME et ETI.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <nav className="space-y-0">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm block mb-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Divider + copyright + mentions légales */}
        <div className="border-t border-white/10 mt-12 pt-8 space-y-4">
          <p className="text-white/40 text-sm text-center">
            &copy; 2026 Solvid.ia. Tous droits réservés.
          </p>
          <div className="text-white/30 text-xs text-center leading-relaxed max-w-2xl mx-auto">
            <p className="font-semibold text-white/40 mb-1">Mentions légales — provisoires</p>
            <p>
              Dans l'attente du dépôt des statuts définitifs de Solvid.ia, ce site est édité par :{' '}
              <strong className="text-white/40">Clement Marinho Développement</strong> — SASU au capital de 1 000 €,
              immatriculée au RCS de Versailles sous le numéro{' '}
              <strong className="text-white/40">930 695 895</strong> (SIRET : 930 695 895 00015) —
              Siège social : 5 avenue de l'Abreuvoir, 78170 La Celle-Saint-Cloud —
              Dirigeant : Clément Marinho — TVA intracommunautaire : FR24930695895.
            </p>
            <p className="mt-2 italic">
              Ces mentions légales sont temporaires et seront mises à jour dès l'immatriculation de Solvid.ia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
