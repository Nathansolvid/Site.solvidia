interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Solvid.ia"
      className={`${className} ${variant === 'light' ? 'brightness-0 invert' : ''}`}
    />
  )
}
