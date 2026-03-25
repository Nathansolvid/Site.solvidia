interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const color = variant === 'light' ? 'text-white' : 'text-foreground'
  return (
    <span className={`${className} ${color} font-semibold text-xl tracking-tight`}>
      Solvid<span className="text-primary">.ia</span>
    </span>
  )
}
