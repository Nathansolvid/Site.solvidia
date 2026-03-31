import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { useDemoModal } from '../App'

const navLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Tarifs', href: '#tarifs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openDemo } = useDemoModal()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'border-b border-border shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <a href="#hero" className="shrink-0">
          <Logo className="h-11 w-auto" variant="dark" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={openDemo}
          className="hidden md:inline-flex bg-primary text-white rounded-lg px-5 py-2.5 font-medium hover:bg-primary-dark transition-colors text-sm cursor-pointer"
        >
          Demander une démo
        </button>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); openDemo() }}
            className="block w-full text-center bg-primary text-white rounded-lg px-5 py-2.5 font-medium hover:bg-primary-dark transition-colors text-sm cursor-pointer"
          >
            Demander une démo
          </button>
        </div>
      )}
    </nav>
  )
}
