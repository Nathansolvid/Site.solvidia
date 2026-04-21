import { useState } from 'react'
import { Mail, Linkedin, ShieldCheck, MapPin } from 'lucide-react'
import Logo from './Logo'
import MentionsLegalesModal from './MentionsLegalesModal'

const footerColumns = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '#solution' },
      { label: 'Parcours', href: '#parcours' },
      { label: 'Comment ça marche', href: '#comment-ca-marche' },
      { label: 'Tarifs', href: '#tarifs' },
    ],
  },
  {
    title: 'Référentiels',
    links: [
      { label: 'VSME', href: '#parcours' },
      { label: 'CSRD / ESRS', href: '#parcours' },
      { label: 'Bilan Carbone', href: '#parcours' },
      { label: 'Sur demande', href: '#parcours' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '#a-propos' },
      { label: 'Contact', href: 'mailto:contact@solvidia.fr' },
      { label: 'Rejoindre la beta', href: '#beta' },
    ],
  },
]

export default function Footer() {
  const [mentionsOpen, setMentionsOpen] = useState(false)

  return (
    <>
      <footer className="relative bg-dark-green overflow-hidden">
        {/* Gradient subtil au-dessus */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(ellipse, rgba(45,122,85,0.30) 0%, rgba(45,122,85,0) 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
          {/* Bloc principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
            {/* Branding + pitch */}
            <div className="lg:col-span-4">
              <Logo className="h-11 w-auto" variant="light" animate={false} />
              <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-sm">
                La plateforme ESG pour PME et ETI françaises : collectez, tracez et transmettez vos indicateurs de durabilité sans refaire vos fichiers.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
                <div className="inline-flex items-center gap-1.5 text-xs text-white/60">
                  <ShieldCheck size={13} className="text-white/70" />
                  <span>VSME &amp; CSRD</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-white/60">
                  <MapPin size={13} className="text-white/70" />
                  <span>Hébergement France</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="mailto:contact@solvidia.fr"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all"
                >
                  <Mail size={16} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/solvid-ia/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all"
                >
                  <Linkedin size={16} className="text-white" />
                </a>
              </div>
            </div>

            {/* Colonnes de liens */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full" />
                    {column.title}
                  </h4>
                  <nav className="space-y-2">
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="group text-white/60 hover:text-white text-sm block transition-colors"
                      >
                        <span className="inline-block transition-transform group-hover:translate-x-0.5">
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="relative border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs text-center sm:text-left">
              &copy; 2026 Solvid.ia. Tous droits réservés.
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => setMentionsOpen(true)}
                className="text-white/40 hover:text-white/80 text-xs transition-colors"
              >
                Mentions légales
              </button>
              <button
                onClick={() => setMentionsOpen(true)}
                className="text-white/40 hover:text-white/80 text-xs transition-colors"
              >
                Confidentialité
              </button>
            </div>
          </div>
        </div>
      </footer>

      <MentionsLegalesModal open={mentionsOpen} onClose={() => setMentionsOpen(false)} />
    </>
  )
}
