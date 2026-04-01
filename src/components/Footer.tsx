import { useState } from 'react'
import Logo from './Logo'
import MentionsLegalesModal from './MentionsLegalesModal'

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
    ],
  },
]

export default function Footer() {
  const [mentionsOpen, setMentionsOpen] = useState(false)

  return (
    <>
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

          {/* Divider + copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center sm:text-left">
              &copy; 2026 Solvid.ia. Tous droits réservés.
            </p>
            <button
              onClick={() => setMentionsOpen(true)}
              className="text-white/40 hover:text-white/70 text-sm transition-colors underline underline-offset-2"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </footer>

      <MentionsLegalesModal open={mentionsOpen} onClose={() => setMentionsOpen(false)} />
    </>
  )
}
