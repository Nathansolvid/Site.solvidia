/**
 * Logos stylisés des référentiels ESG.
 * Chaque logo est un SVG inline qui évoque le brand officiel (couleur + motif)
 * sans reproduire à l'identique (pour éviter les soucis de marque).
 * Remplaçable plus tard par les logos officiels obtenus via press kit.
 */
import { Users, Landmark } from 'lucide-react'

type LogoKey =
  | 'eu'
  | 'ademe'
  | 'ghg'
  | 'iso'
  | 'sbti'
  | 'un-sdg'
  | 'un-gc'
  | 'ecovadis'
  | 'bank'
  | 'social'

const DEFAULT_SIZE = 40

interface LogoProps {
  size?: number
}

/** Étoile 5 branches (logos EU) */
function Star({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const points = Array.from({ length: 10 }).map((_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2
    const radius = i % 2 === 0 ? r : r * 0.4
    return `${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`
  })
  return <polygon points={points.join(' ')} fill="#FFCC00" />
}

function EULogo({ label = 'EU', size = DEFAULT_SIZE }: LogoProps & { label?: string }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <rect width="40" height="40" rx="6" fill="#003399" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2
        const cx = 20 + Math.cos(angle) * 11
        const cy = 20 + Math.sin(angle) * 11
        return <Star key={i} cx={cx} cy={cy} r={1.8} />
      })}
      <text
        x="20"
        y="23.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="900"
        fill="#FFCC00"
        fontFamily="system-ui,sans-serif"
      >
        {label}
      </text>
    </svg>
  )
}

function UNSDGLogo({ size = DEFAULT_SIZE }: LogoProps) {
  const sdgColors = [
    '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
    '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
    '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
    '#00689D', '#19486A',
  ]
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#ddd" strokeWidth="0.5" />
      {sdgColors.map((c, i) => {
        const a1 = (Math.PI * 2 * i) / 17 - Math.PI / 2
        const a2 = (Math.PI * 2 * (i + 1)) / 17 - Math.PI / 2
        const r = 17
        const x1 = 20 + Math.cos(a1) * r
        const y1 = 20 + Math.sin(a1) * r
        const x2 = 20 + Math.cos(a2) * r
        const y2 = 20 + Math.sin(a2) * r
        return (
          <path
            key={i}
            d={`M20,20 L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
            fill={c}
          />
        )
      })}
      <circle cx="20" cy="20" r="5.5" fill="#FFFFFF" />
    </svg>
  )
}

function ISOLogo({ size = DEFAULT_SIZE }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <rect width="40" height="40" rx="6" fill="#CE1126" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="#FFFFFF"
        fontFamily="system-ui,sans-serif"
        letterSpacing="1"
      >
        ISO
      </text>
    </svg>
  )
}

function ADEMELogo({ size = DEFAULT_SIZE }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <rect width="40" height="40" rx="6" fill="#008659" />
      <path d="M20 10 C 14 15, 14 22, 20 30 C 26 22, 26 15, 20 10 Z" fill="#FFFFFF" opacity="0.25" />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontSize="11"
        fontWeight="900"
        fill="#FFFFFF"
        fontFamily="system-ui,sans-serif"
      >
        BC
      </text>
    </svg>
  )
}

function GHGLogo({ size = DEFAULT_SIZE }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <rect width="40" height="40" rx="6" fill="#0A7E8C" />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontSize="11"
        fontWeight="900"
        fill="#FFFFFF"
        fontFamily="system-ui,sans-serif"
        letterSpacing="-0.5"
      >
        GHG
      </text>
    </svg>
  )
}

function SBTiLogo({ size = DEFAULT_SIZE }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <rect width="40" height="40" rx="6" fill="#005F30" />
      <circle cx="20" cy="20" r="9" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
    </svg>
  )
}

function UNGCLogo({ size = DEFAULT_SIZE }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <rect width="40" height="40" rx="6" fill="#009EDB" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
      <ellipse cx="20" cy="20" rx="10" ry="4" fill="none" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="20" y1="10" x2="20" y2="30" stroke="#FFFFFF" strokeWidth="1" />
      <text
        x="20"
        y="36"
        textAnchor="middle"
        fontSize="5"
        fontWeight="700"
        fill="#FFFFFF"
        fontFamily="system-ui,sans-serif"
      >
        UN GC
      </text>
    </svg>
  )
}

function EcovadisLogo({ size = DEFAULT_SIZE }: LogoProps) {
  const gradId = `ecovadis-grad-${size}`
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#009FE3" />
          <stop offset="100%" stopColor="#3CB371" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="6" fill={`url(#${gradId})`} />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="16"
        fontWeight="900"
        fill="#FFFFFF"
        fontFamily="system-ui,sans-serif"
      >
        e
      </text>
    </svg>
  )
}

function BankLogo({ size = DEFAULT_SIZE }: LogoProps) {
  const iconSize = size * 0.5
  return (
    <div
      className="flex items-center justify-center rounded-md"
      style={{ width: size, height: size, backgroundColor: '#1B3A6B' }}
    >
      <Landmark size={iconSize} color="#FFFFFF" />
    </div>
  )
}

function SocialLogo({ size = DEFAULT_SIZE }: LogoProps) {
  const iconSize = size * 0.5
  return (
    <div
      className="flex items-center justify-center rounded-md"
      style={{ width: size, height: size, backgroundColor: '#7C3AED' }}
    >
      <Users size={iconSize} color="#FFFFFF" />
    </div>
  )
}

export function ReferentialLogo({
  type,
  label,
  size,
}: {
  type: LogoKey
  label?: string
  size?: number
}) {
  switch (type) {
    case 'eu':
      return <EULogo label={label} size={size} />
    case 'ademe':
      return <ADEMELogo size={size} />
    case 'ghg':
      return <GHGLogo size={size} />
    case 'iso':
      return <ISOLogo size={size} />
    case 'sbti':
      return <SBTiLogo size={size} />
    case 'un-sdg':
      return <UNSDGLogo size={size} />
    case 'un-gc':
      return <UNGCLogo size={size} />
    case 'ecovadis':
      return <EcovadisLogo size={size} />
    case 'bank':
      return <BankLogo size={size} />
    case 'social':
      return <SocialLogo size={size} />
  }
}

export type { LogoKey }
