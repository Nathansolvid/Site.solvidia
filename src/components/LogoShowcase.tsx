interface LogoVariantProps {
  variant?: 'dark' | 'light'
  className?: string
}

/* ─── Composant feuille réutilisable ─── */
function Leaf({ cx, cy, angle, size = 1, fill }: { cx: number; cy: number; angle: number; size?: number; fill: string }) {
  return (
    <path
      d={`M0,-${5 * size} C${3 * size},-${3 * size} ${3 * size},${2 * size} 0,${5 * size} C-${3 * size},${2 * size} -${3 * size},-${3 * size} 0,-${5 * size}Z`}
      fill={fill}
      transform={`translate(${cx},${cy}) rotate(${angle})`}
    />
  )
}

/* ─── OPTION A : Arbre fidèle à l'original ─── */
export function LogoOptionA({ variant = 'dark', className = '' }: LogoVariantProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1A2E24'
  const darkGreen = '#2B5E3F'
  const medGreen = '#3D8B56'
  const lightGreen = '#6BA044'
  const oliveGreen = '#8BB050'
  const circleColor = variant === 'light' ? 'rgba(255,255,255,0.25)' : '#5A8B4A'
  const circleColor2 = variant === 'light' ? 'rgba(255,255,255,0.15)' : '#3D6B3A'

  return (
    <svg viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Dashed orbit circles */}
      <circle cx="25" cy="25" r="23" stroke={circleColor} strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
      <circle cx="25" cy="25" r="19.5" stroke={circleColor2} strokeWidth="1" strokeDasharray="3 3" fill="none" />

      {/* Trunk - wider at base, splits into Y */}
      <path
        d="M25 40 C25 40 23 36 22 34 C21 32 22 28 25 25 C28 28 29 32 28 34 C27 36 25 40 25 40Z"
        fill={darkGreen}
      />
      {/* Left branch */}
      <path
        d="M25 25 C23 23 20 21 17 18"
        stroke={darkGreen}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right branch */}
      <path
        d="M25 25 C27 23 30 21 33 18"
        stroke={darkGreen}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left sub-branch */}
      <path
        d="M19 20 C17.5 17 16 15 14 14"
        stroke={darkGreen}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right sub-branch */}
      <path
        d="M31 20 C32.5 17 34 15 36 14"
        stroke={darkGreen}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Center upward branch */}
      <path
        d="M25 25 C25 22 25 18 25 14"
        stroke={darkGreen}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Center sub-branches */}
      <path d="M25 17 C23 14 21 12 20 11" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M25 17 C27 14 29 12 30 11" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Leaves - individual teardrop shapes at branch tips */}
      {/* Top center */}
      <Leaf cx={25} cy={10} angle={0} size={1.1} fill={oliveGreen} />
      {/* Upper left pair */}
      <Leaf cx={20} cy={9} angle={-30} size={1} fill={lightGreen} />
      <Leaf cx={17} cy={12} angle={-45} size={0.9} fill={medGreen} />
      {/* Upper right pair */}
      <Leaf cx={30} cy={9} angle={30} size={1} fill={lightGreen} />
      <Leaf cx={33} cy={12} angle={45} size={0.9} fill={darkGreen} />
      {/* Mid left */}
      <Leaf cx={14} cy={13} angle={-50} size={1} fill={oliveGreen} />
      <Leaf cx={16} cy={17} angle={-35} size={0.9} fill={darkGreen} />
      {/* Mid right */}
      <Leaf cx={36} cy={13} angle={50} size={1} fill={medGreen} />
      <Leaf cx={34} cy={17} angle={35} size={0.9} fill={darkGreen} />
      {/* Lower accent leaves */}
      <Leaf cx={18} cy={21} angle={-25} size={0.8} fill={lightGreen} />
      <Leaf cx={32} cy={21} angle={25} size={0.8} fill={oliveGreen} />

      {/* Text: Solvid */}
      <text x="56" y="32" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill={textColor}>
        Solvid
      </text>
      {/* Text: .ia */}
      <text x="129" y="32" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill={lightGreen}>
        .ia
      </text>
    </svg>
  )
}

/* ─── OPTION B : Même arbre, plus compact et net ─── */
export function LogoOptionB({ variant = 'dark', className = '' }: LogoVariantProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1A2E24'
  const darkGreen = '#2B5E3F'
  const medGreen = '#3D8B56'
  const lightGreen = '#6BA044'
  const oliveGreen = '#8BB050'
  const circleColor = variant === 'light' ? 'rgba(255,255,255,0.2)' : '#5A8B4A'

  return (
    <svg viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Single dashed circle */}
      <circle cx="25" cy="25" r="22" stroke={circleColor} strokeWidth="1.3" strokeDasharray="4 3" fill="none" />

      {/* Trunk - clean Y shape */}
      <path
        d="M25 39 L25 26"
        stroke={darkGreen}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Trunk base flare */}
      <path
        d="M22 39 Q25 37 28 39"
        stroke={darkGreen}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Main Y split */}
      <path d="M25 26 Q20 20 16 16" stroke={darkGreen} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M25 26 Q30 20 34 16" stroke={darkGreen} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M25 26 L25 13" stroke={darkGreen} strokeWidth="2.2" strokeLinecap="round" />
      {/* Sub branches */}
      <path d="M25 18 Q22 14 19 11" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M25 18 Q28 14 31 11" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M19 19 Q16 16 13 15" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M31 19 Q34 16 37 15" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Leaves */}
      <Leaf cx={25} cy={9} angle={0} size={1.15} fill={oliveGreen} />
      <Leaf cx={19} cy={8.5} angle={-25} size={1} fill={lightGreen} />
      <Leaf cx={31} cy={8.5} angle={25} size={1} fill={lightGreen} />
      <Leaf cx={14} cy={14} angle={-50} size={1.05} fill={oliveGreen} />
      <Leaf cx={36} cy={14} angle={50} size={1.05} fill={medGreen} />
      <Leaf cx={16} cy={15} angle={-40} size={0.9} fill={darkGreen} />
      <Leaf cx={34} cy={15} angle={40} size={0.9} fill={darkGreen} />
      <Leaf cx={13} cy={18} angle={-55} size={0.85} fill={lightGreen} />
      <Leaf cx={37} cy={18} angle={55} size={0.85} fill={oliveGreen} />
      <Leaf cx={22} cy={12} angle={-15} size={0.85} fill={medGreen} />
      <Leaf cx={28} cy={12} angle={15} size={0.85} fill={darkGreen} />

      {/* Text */}
      <text x="56" y="32" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill={textColor}>
        Solvid
      </text>
      <text x="129" y="32" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill={lightGreen}>
        .ia
      </text>
    </svg>
  )
}

/* ─── OPTION C : Arbre original avec fond cercle vert ─── */
export function LogoOptionC({ variant = 'dark', className = '' }: LogoVariantProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1A2E24'
  const darkGreen = '#2B5E3F'
  const medGreen = '#3D8B56'
  const lightGreen = '#6BA044'
  const oliveGreen = '#8BB050'
  const bgCircle = variant === 'light' ? 'rgba(255,255,255,0.1)' : '#EDF7F1'

  return (
    <svg viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Soft background circle */}
      <circle cx="25" cy="25" r="22" fill={bgCircle} />
      {/* Subtle dashed ring */}
      <circle cx="25" cy="25" r="22" stroke={variant === 'light' ? 'rgba(255,255,255,0.15)' : '#C5DEC8'} strokeWidth="1" strokeDasharray="3 4" fill="none" />

      {/* Trunk */}
      <path d="M25 39 L25 26" stroke={darkGreen} strokeWidth="3" strokeLinecap="round" />
      <path d="M22 39 Q25 37 28 39" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Y split */}
      <path d="M25 26 Q20 20 16 16" stroke={darkGreen} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M25 26 Q30 20 34 16" stroke={darkGreen} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M25 26 L25 13" stroke={darkGreen} strokeWidth="2.2" strokeLinecap="round" />
      {/* Sub branches */}
      <path d="M25 18 Q22 14 19 11" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M25 18 Q28 14 31 11" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M19 19 Q16 16 13 15" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M31 19 Q34 16 37 15" stroke={darkGreen} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Leaves */}
      <Leaf cx={25} cy={9} angle={0} size={1.15} fill={oliveGreen} />
      <Leaf cx={19} cy={8.5} angle={-25} size={1} fill={lightGreen} />
      <Leaf cx={31} cy={8.5} angle={25} size={1} fill={lightGreen} />
      <Leaf cx={14} cy={14} angle={-50} size={1.05} fill={oliveGreen} />
      <Leaf cx={36} cy={14} angle={50} size={1.05} fill={medGreen} />
      <Leaf cx={16} cy={15} angle={-40} size={0.9} fill={darkGreen} />
      <Leaf cx={34} cy={15} angle={40} size={0.9} fill={darkGreen} />
      <Leaf cx={13} cy={18} angle={-55} size={0.85} fill={lightGreen} />
      <Leaf cx={37} cy={18} angle={55} size={0.85} fill={oliveGreen} />
      <Leaf cx={22} cy={12} angle={-15} size={0.85} fill={medGreen} />
      <Leaf cx={28} cy={12} angle={15} size={0.85} fill={darkGreen} />

      {/* Text */}
      <text x="56" y="32" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill={textColor}>
        Solvid
      </text>
      <text x="129" y="32" fontFamily="'DM Sans', sans-serif" fontWeight="700" fontSize="22" fill={lightGreen}>
        .ia
      </text>
    </svg>
  )
}

/* ─── Page de présentation ─── */
export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Propositions de logo Solvid.ia</h1>
        <p className="text-center text-muted mb-6">Inspiré de l'arbre original — 3 variations</p>

        {/* Original reference */}
        <div className="mb-16 text-center">
          <p className="text-xs text-muted uppercase tracking-wider mb-3">Logo original (référence)</p>
          <div className="bg-background rounded-xl p-6 inline-block">
            <img src="/images/logo.png" alt="Logo original" className="h-16 mx-auto" />
          </div>
        </div>

        {/* Option A */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">A</span>
            <div>
              <h2 className="font-bold text-lg">Arbre à feuilles — double cercle</h2>
              <p className="text-muted text-sm">Le plus fidèle : feuilles en goutte, branches en Y, 2 cercles pointillés</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-xl p-8 flex items-center justify-center">
              <LogoOptionA className="h-14 w-auto" variant="dark" />
            </div>
            <div className="bg-dark-green rounded-xl p-8 flex items-center justify-center">
              <LogoOptionA className="h-14 w-auto" variant="light" />
            </div>
          </div>
        </div>

        {/* Option B */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">B</span>
            <div>
              <h2 className="font-bold text-lg">Arbre à feuilles — cercle simple</h2>
              <p className="text-muted text-sm">Même arbre, un seul cercle, un peu plus aéré et net</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-xl p-8 flex items-center justify-center">
              <LogoOptionB className="h-14 w-auto" variant="dark" />
            </div>
            <div className="bg-dark-green rounded-xl p-8 flex items-center justify-center">
              <LogoOptionB className="h-14 w-auto" variant="light" />
            </div>
          </div>
        </div>

        {/* Option C */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">C</span>
            <div>
              <h2 className="font-bold text-lg">Arbre à feuilles — fond vert clair</h2>
              <p className="text-muted text-sm">Même arbre avec un cercle de fond vert clair, plus doux</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-xl p-8 flex items-center justify-center">
              <LogoOptionC className="h-14 w-auto" variant="dark" />
            </div>
            <div className="bg-dark-green rounded-xl p-8 flex items-center justify-center">
              <LogoOptionC className="h-14 w-auto" variant="light" />
            </div>
          </div>
        </div>

        {/* Size comparison */}
        <div className="mt-20">
          <p className="text-xs text-muted uppercase tracking-wider mb-6 text-center">Taille navbar (h-8)</p>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-lg px-6 py-3 flex items-center">
              <LogoOptionA className="h-8 w-auto" variant="dark" />
            </div>
            <div className="bg-white border border-border rounded-lg px-6 py-3 flex items-center">
              <LogoOptionB className="h-8 w-auto" variant="dark" />
            </div>
            <div className="bg-white border border-border rounded-lg px-6 py-3 flex items-center">
              <LogoOptionC className="h-8 w-auto" variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
