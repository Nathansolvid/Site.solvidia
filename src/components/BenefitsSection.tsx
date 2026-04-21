import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  FileWarning,
  Mail,
  RotateCcw,
  Sparkles,
  StickyNote,
  Hand,
  ShieldCheck,
  Layers3,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDemoModal } from '../App'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card'
import Bucket from '@/components/ui/bucket'

// ---------- Fichiers factices ----------
interface FakeFile {
  id: string
  label: string
  detail: string
  Icon: LucideIcon
  bgClass: string
  iconBgClass: string
  iconClass: string
  x: string
  y: string
  rotation: number
}

// Positions dans la MOITIÉ HAUTE du container (le carton est en bas)
const fakeFiles: FakeFile[] = [
  {
    id: 'energie',
    label: 'energie_2025.xlsx',
    detail: '3 feuilles',
    Icon: FileSpreadsheet,
    bgClass: 'bg-white border-emerald-200',
    iconBgClass: 'bg-emerald-100',
    iconClass: 'text-emerald-700',
    x: '4%',
    y: '2%',
    rotation: -10,
  },
  {
    id: 'factures',
    label: 'RE: factures Q3',
    detail: 'Gmail',
    Icon: Mail,
    bgClass: 'bg-white border-sky-200',
    iconBgClass: 'bg-sky-100',
    iconClass: 'text-sky-700',
    x: '70%',
    y: '4%',
    rotation: 9,
  },
  {
    id: 'rh',
    label: 'RH_indic_v3.xlsx',
    detail: 'incomplet',
    Icon: FileSpreadsheet,
    bgClass: 'bg-white border-violet-200',
    iconBgClass: 'bg-violet-100',
    iconClass: 'text-violet-700',
    x: '2%',
    y: '22%',
    rotation: 6,
  },
  {
    id: 'warn',
    label: 'Manquant ?',
    detail: '2 indic.',
    Icon: FileWarning,
    bgClass: 'bg-amber-50 border-amber-200',
    iconBgClass: 'bg-amber-100',
    iconClass: 'text-amber-700',
    x: '68%',
    y: '24%',
    rotation: -9,
  },
  {
    id: 'postit',
    label: 'Demander RH',
    detail: 'post-it',
    Icon: StickyNote,
    bgClass: 'bg-yellow-100 border-yellow-300',
    iconBgClass: 'bg-yellow-200',
    iconClass: 'text-yellow-800',
    x: '40%',
    y: '12%',
    rotation: -3,
  },
]

// ---------- Drop zone ----------
function InteractiveDropZone() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const [organized, setOrganized] = useState<string[]>([])
  const [shakeHub, setShakeHub] = useState(false)
  const [hubGlow, setHubGlow] = useState(false)
  const [draggingId, setDraggingId] = useState<string | null>(null)

  // Hub glow si un fichier est en cours de drag
  useEffect(() => {
    if (!draggingId) {
      setHubGlow(false)
      return
    }
    const check = () => {
      const fileEl = document.getElementById(`drag-${draggingId}`)
      const hub = hubRef.current
      if (!fileEl || !hub) return
      const fRect = fileEl.getBoundingClientRect()
      const hRect = hub.getBoundingClientRect()
      const d = Math.hypot(
        (fRect.left + fRect.width / 2) - (hRect.left + hRect.width / 2),
        (fRect.top + fRect.height / 2) - (hRect.top + hRect.height / 2)
      )
      setHubGlow(d < Math.max(hRect.width, hRect.height) * 0.8)
    }
    const id = window.setInterval(check, 60)
    return () => window.clearInterval(id)
  }, [draggingId])

  const tryDropOnHub = (fileId: string) => {
    const fileEl = document.getElementById(`drag-${fileId}`)
    const hub = hubRef.current
    if (!fileEl || !hub) return false
    const fileRect = fileEl.getBoundingClientRect()
    const hubRect = hub.getBoundingClientRect()
    const distance = Math.hypot(
      (fileRect.left + fileRect.width / 2) - (hubRect.left + hubRect.width / 2),
      (fileRect.top + fileRect.height / 2) - (hubRect.top + hubRect.height / 2)
    )
    const threshold = Math.max(hubRect.width, hubRect.height) * 0.6
    if (distance < threshold) {
      setOrganized((prev) => (prev.includes(fileId) ? prev : [...prev, fileId]))
      return true
    }
    return false
  }

  const reset = () => setOrganized([])
  const remaining = fakeFiles.filter((f) => !organized.includes(f.id))
  const progress = organized.length
  const total = fakeFiles.length
  const completed = progress === total

  return (
    <div className="relative max-w-md mx-auto w-full">
      {/* Instruction */}
      <div className="text-center mb-4 inline-flex items-center gap-2 bg-white border border-border rounded-full pl-3 pr-4 py-1.5 shadow-sm mx-auto w-fit left-1/2 relative -translate-x-1/2">
        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
          <Hand size={11} className="text-primary" />
        </div>
        <p className="text-xs font-semibold text-foreground">
          Glissez les fichiers dans le hub
        </p>
      </div>

      {/* Zone de drag — carton Solvid.ia en bas, files scattered au-dessus */}
      <DraggableCardContainer
        ref={containerRef}
        className="relative aspect-[655/520] overflow-hidden touch-none"
      >
        {/* Carton Solvid.ia au bas du container (zone de dépôt) */}
        <motion.div
          ref={hubRef}
          animate={
            shakeHub
              ? { x: [0, -6, 6, -4, 4, 0], rotate: [0, -1, 1, -0.5, 0.5, 0] }
              : hubGlow
                ? { scale: 1.03 }
                : completed
                  ? { scale: [1, 1.05, 1] }
                  : { scale: 1 }
          }
          transition={{ duration: shakeHub ? 0.42 : 0.3, type: shakeHub ? 'tween' : 'spring', damping: 14, stiffness: 200 }}
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
        >
          <Bucket
            className="w-full"
            label="Solvid.ia"
            sublabel="Glissez vos fichiers ici"
          >
            {/* Contenu superposé : barre de progression + compteur */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-1/2">
              <div className="bg-white/30 backdrop-blur-sm rounded-full h-1.5 w-full overflow-hidden mb-1.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                  animate={{ width: `${(progress / total) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
              </div>
              <p className="text-xs font-bold tabular-nums text-primary-dark">
                {progress} / {total} classés
              </p>
            </div>
          </Bucket>
        </motion.div>

        {/* Fichiers draggables (Aceternity DraggableCardBody : tilt 3D + glare + inertie) */}
        <AnimatePresence>
          {remaining.map((file) => {
            const Icon = file.Icon
            return (
              <motion.div
                key={file.id}
                style={{ left: file.x, top: file.y, position: 'absolute' }}
                className="z-10"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  transition: { duration: 0.35, ease: 'easeIn' },
                }}
                transition={{ type: 'spring', damping: 14, stiffness: 200 }}
              >
                <DraggableCardBody
                  id={`drag-${file.id}`}
                  dragConstraints={containerRef}
                  initialRotation={file.rotation}
                  onDragStart={() => setDraggingId(file.id)}
                  onDragEnd={() => {
                    setDraggingId(null)
                    const dropped = tryDropOnHub(file.id)
                    if (!dropped) {
                      setShakeHub(true)
                      setTimeout(() => setShakeHub(false), 420)
                    }
                  }}
                  className={`${file.bgClass} border rounded-lg shadow-lg hover:shadow-xl px-2.5 py-2`}
                >
                  {/* Header du fichier */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className={`w-5 h-5 ${file.iconBgClass} rounded-[4px] flex items-center justify-center shrink-0`}>
                      <Icon size={11} className={file.iconClass} strokeWidth={2.2} />
                    </div>
                    <span className="text-[10px] font-bold text-foreground whitespace-nowrap leading-none">
                      {file.label}
                    </span>
                  </div>
                  {/* Mini content lines */}
                  <div className="space-y-[3px] pl-[22px]">
                    <div className="h-[2px] w-16 bg-border/80 rounded-full" />
                    <div className="h-[2px] w-12 bg-border/60 rounded-full" />
                  </div>
                  <p className="text-[8px] text-muted italic pl-[22px] mt-1 leading-none">
                    {file.detail}
                  </p>
                </DraggableCardBody>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Confettis quand complete */}
        <AnimatePresence>
          {completed && (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 1,
                    x: Math.cos((i / 8) * Math.PI * 2) * 140,
                    y: Math.sin((i / 8) * Math.PI * 2) * 140,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary pointer-events-none z-30"
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </DraggableCardContainer>

      {/* Zone rangée */}
      <div className="mt-4 bg-white rounded-2xl border border-border p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-foreground flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full" />
            Dossier ESG organisé
          </p>
          {progress > 0 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted hover:text-primary transition-colors"
            >
              <RotateCcw size={11} />
              Reset
            </button>
          )}
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {fakeFiles.map((file, idx) => {
            const done = organized.includes(file.id)
            const Icon = file.Icon
            return (
              <motion.div
                key={`organized-${file.id}`}
                animate={
                  done
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0.3, scale: 0.94, y: 0 }
                }
                transition={{ type: 'spring', damping: 14, stiffness: 220, delay: done ? 0 : idx * 0.03 }}
                className={`relative aspect-square rounded-lg border flex flex-col items-center justify-center p-1 ${
                  done ? 'bg-gradient-to-br from-primary-light to-white border-primary/40 shadow-sm' : 'bg-border/20 border-border border-dashed'
                }`}
              >
                <Icon size={14} className={done ? 'text-primary' : 'text-muted/70'} />
                {done && (
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 350 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center shadow-md shadow-primary/40"
                  >
                    <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        <AnimatePresence>
          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ type: 'spring', damping: 16, stiffness: 220 }}
              className="relative mt-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg shadow-primary/30 overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden="true" />
              <div className="relative w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0 border border-white/25">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="relative flex-1 min-w-0">
                <p className="text-xs font-bold leading-tight">Dossier prêt pour l'audit.</p>
                <p className="text-[10px] text-white/80 mt-0.5">
                  Tracé, vérifiable, exportable VSME &amp; CSRD
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ---------- Right side : "Ce qui change" ----------
const whyBullets = [
  {
    Icon: Layers3,
    label: 'Du chaos à la structure',
    description: 'Vos fichiers, emails et post-it deviennent un dossier ESG traçable en 1 clic.',
  },
  {
    Icon: ShieldCheck,
    label: 'Chaque indicateur prouvé',
    description: 'Qui, quand, quelle pièce. Vous ne cherchez plus jamais une preuve.',
  },
  {
    Icon: Rocket,
    label: 'Prêt pour l\'audit dès le jour 1',
    description: 'Export VSME, CSRD, questionnaire bancaire — en 1 clic.',
  },
]

export default function BenefitsSection() {
  const { openDemo } = useDemoModal()
  const headerRef = useScrollReveal<HTMLDivElement>(0)
  const leftRef = useScrollReveal<HTMLDivElement>(200)
  const rightRef = useScrollReveal<HTMLDivElement>(400)

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-28">
      {/* Décorations */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(45,122,85,0.10) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(45,122,85,0.08) 0%, rgba(45,122,85,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Header centré compact */}
      <div ref={headerRef} className="relative max-w-3xl mx-auto text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-primary/20">
          <Sparkles size={14} />
          Pourquoi Solvid.ia
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
          Le même dossier ESG,{' '}
          <span
            className="bg-clip-text text-transparent inline-block"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 50%, #2D7A55 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 6s ease infinite',
            }}
          >
            deux mondes.
          </span>
        </h2>
        <p className="text-lg text-muted leading-relaxed mt-4 max-w-xl mx-auto">
          Testez vous-même : attrapez les fichiers chaotiques et glissez-les dans Solvid.ia.
        </p>
      </div>

      {/* Zone interactive centrée — playground */}
      <div ref={leftRef} className="relative max-w-xl mx-auto px-6 mb-20">
        <InteractiveDropZone />
      </div>

      {/* 3 bénéfices en 3 colonnes — storytelling horizontal */}
      <div ref={rightRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-2">
            Ce qui change
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-foreground tracking-tight max-w-2xl mx-auto">
            Vos fichiers,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #2D7A55 0%, #0D3B27 100%)',
              }}
            >
              version « prête pour l'audit »
            </span>
            .
          </h3>
        </div>

        {/* Grid 3 colonnes */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {whyBullets.map((b, idx) => {
            const Icon = b.Icon
            return (
              <div
                key={b.label}
                className="group relative bg-white rounded-2xl border border-border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 overflow-hidden"
              >
                {/* Grand numéro en filigrane */}
                <span
                  className="absolute -top-3 -right-1 text-[100px] font-black leading-none text-primary/[0.05] select-none pointer-events-none group-hover:text-primary/[0.08] transition-colors duration-500"
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <p className="font-bold text-foreground text-lg leading-tight mb-2">
                    {b.label}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{b.description}</p>

                  {/* Barre accent bottom */}
                  <div className="mt-5 h-0.5 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent group-hover:from-primary group-hover:via-primary/40 transition-all duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA centré */}
        <div className="flex justify-center">
          <button
            onClick={openDemo}
            className="group relative inline-flex items-center gap-2 bg-primary text-white rounded-xl px-7 py-3.5 font-semibold text-sm hover:bg-primary-dark transition-all cursor-pointer shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Demander l'accès beta</span>
            <ArrowRight
              size={16}
              className="relative transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}
