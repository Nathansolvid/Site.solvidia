import { AnimatedText } from '@/components/ui/animated-text'

interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
  /** Désactive l'animation (utile pour logo dans modale ou footer). */
  animate?: boolean
}

export default function Logo({
  className = '',
  variant = 'dark',
  animate = true,
}: LogoProps) {
  const mainColor = variant === 'light' ? 'text-white' : 'text-foreground'
  const accentColor = 'text-primary'

  // Version non-animée (fallback simple, identique à l'existant)
  if (!animate) {
    return (
      <span className={`${className} ${mainColor} font-semibold text-xl tracking-tight`}>
        Solvid<span className={accentColor}>.ia</span>
      </span>
    )
  }

  // Version animée : 2 AnimatedText côte à côte, ".ia" décalé pour apparaître après "Solvid"
  // Underline invisible (transparent) — on ne veut pas de soulignement sur le logo de navbar
  return (
    <span className={`${className} inline-flex items-baseline`} aria-label="Solvid.ia">
      <AnimatedText
        text="Solvid"
        textClassName={`${mainColor} font-semibold text-xl tracking-tight`}
        underlineGradient="from-transparent via-transparent to-transparent"
        underlineHeight="h-0"
        duration={0.04}
        delay={0.03}
        className="!flex-row !gap-0 !items-baseline"
      />
      <AnimatedText
        text=".ia"
        textClassName={`${accentColor} font-semibold text-xl tracking-tight`}
        underlineGradient="from-transparent via-transparent to-transparent"
        underlineHeight="h-0"
        duration={0.04}
        delay={0.25}
        className="!flex-row !gap-0 !items-baseline"
      />
    </span>
  )
}
