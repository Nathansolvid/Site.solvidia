import * as React from 'react'
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  animate,
  type PanInfo,
} from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Container avec perspective 3D pour les DraggableCardBody enfants.
 * Adapté de 21st.dev / Aceternity UI.
 */
export const DraggableCardContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('[perspective:3000px]', className)} {...props}>
      {children}
    </div>
  )
})
DraggableCardContainer.displayName = 'DraggableCardContainer'

/**
 * Props : on omet les handlers natifs `onDrag*` et `onAnimation*` car leurs
 * signatures rentrent en conflit avec celles de framer-motion.
 */
type DraggableCardBodyProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
> & {
  /** Zone qui contraint le drag (défaut: parent) */
  dragConstraints?: React.RefObject<HTMLElement | null> | { top: number; left: number; right: number; bottom: number }
  /** Callback appelé quand le drag démarre */
  onDragStart?: () => void
  /** Callback appelé quand le drag se termine, reçoit le PanInfo framer-motion */
  onDragEnd?: (info: PanInfo) => void
  /** Rotation initiale / de repos */
  initialRotation?: number
  /** Classe supplémentaire appliquée lors du drag */
  dragClassName?: string
  children?: React.ReactNode
}

/**
 * Card draggable avec physique spring, tilt 3D au hover, effet glare.
 * Gère les événements drag et délègue la détection de drop au parent.
 */
export const DraggableCardBody = React.forwardRef<HTMLDivElement, DraggableCardBodyProps>(
  ({ className, children, dragConstraints, onDragStart, onDragEnd, initialRotation = 0, ...props }, ref) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const cardRef = React.useRef<HTMLDivElement>(null)
    const controls = useAnimationControls()

    // Inertie physique
    const velocityX = useVelocity(mouseX)
    const velocityY = useVelocity(mouseY)

    const springConfig = { stiffness: 150, damping: 18, mass: 0.4 }

    // Tilt 3D TRÈS visible (rotation jusqu'à 35°)
    const rotateX = useSpring(useTransform(mouseY, [-100, 100], [35, -35]), springConfig)
    const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-35, 35]), springConfig)

    const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.95, 1, 0.95]), springConfig)

    // Glare très visible (opacité jusqu'à 0.7)
    const glareOpacity = useSpring(
      useTransform(mouseX, [-150, 0, 150], [0.7, 0, 0.7]),
      springConfig
    )

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      mouseX.set(clientX - cx)
      mouseY.set(clientY - cy)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    // Fusion des refs
    React.useImperativeHandle(ref, () => cardRef.current as HTMLDivElement, [])

    return (
      <motion.div
        ref={cardRef}
        drag
        dragMomentum={false}
        dragElastic={0.15}
        dragConstraints={dragConstraints as React.RefObject<HTMLElement>}
        onDragStart={() => {
          document.body.style.cursor = 'grabbing'
          onDragStart?.()
        }}
        onDragEnd={(_event, info) => {
          document.body.style.cursor = 'default'
          controls.start({
            rotateX: 0,
            rotateY: 0,
            transition: { type: 'spring', ...springConfig },
          })
          // Petite inertie après relâche
          const vx = velocityX.get()
          const vy = velocityY.get()
          const velocityMagnitude = Math.hypot(vx, vy)
          const bounce = Math.min(0.8, velocityMagnitude / 1000)
          animate(info.point.x, info.point.x + vx * 0.2, {
            duration: 0.6,
            type: 'spring',
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            bounce,
          })
          animate(info.point.y, info.point.y + vy * 0.2, {
            duration: 0.6,
            type: 'spring',
            stiffness: 60,
            damping: 18,
            mass: 0.7,
            bounce,
          })
          onDragEnd?.(info)
        }}
        whileHover={{ scale: 1.15, zIndex: 40 }}
        whileDrag={{ scale: 1.25, zIndex: 50 }}
        initial={{ rotate: initialRotation }}
        animate={controls}
        style={{ rotateX, rotateY, opacity, willChange: 'transform' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative cursor-grab active:cursor-grabbing select-none overflow-hidden transform-3d',
          className
        )}
        {...props}
      >
        {children}
        {/* Effet glare très visible */}
        <motion.div
          style={{ opacity: glareOpacity }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-white/20 to-transparent select-none rounded-[inherit]"
        />
        {/* Brillance bordure au hover */}
        <motion.div
          style={{ opacity: glareOpacity }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-primary/50 select-none"
        />
      </motion.div>
    )
  }
)
DraggableCardBody.displayName = 'DraggableCardBody'
