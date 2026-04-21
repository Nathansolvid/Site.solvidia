import * as React from 'react'
import { cn } from '@/lib/utils'

interface BucketProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  /** Label affiché au-dessus du carton (ex. "Solvid.ia") */
  label?: string
  /** Sous-label discret (ex. "Glissez ici") */
  sublabel?: string
}

/**
 * Carton / bucket SVG avec effet glass + blur.
 * Adapté de 21st.dev (retiré : rotation auto des chips + hugeicons).
 * Sert de zone de dépôt visuelle (target du drag).
 */
const Bucket = React.forwardRef<HTMLDivElement, BucketProps>(
  ({ className, label, sublabel, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative w-full mx-auto', className)}
        style={{ aspectRatio: '655/352' }}
        {...props}
      >
        {/* Label au-dessus */}
        {(label || sublabel) && (
          <div className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-full text-center pointer-events-none">
            {label && (
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-0.5">
                {label}
              </p>
            )}
            {sublabel && (
              <p className="text-xs text-muted">{sublabel}</p>
            )}
          </div>
        )}

        {/* SVG du carton */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 655 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-0"
          aria-hidden="true"
        >
          <g filter="url(#filter1_dddi_bucket)">
            <path
              d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
              fill="#2D7A55"
              fillOpacity="0.18"
              shapeRendering="crispEdges"
            />
          </g>

          <g filter="url(#filter2_dddi_bucket)">
            <path
              d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
              fill="#2D7A55"
              fillOpacity="0.18"
              shapeRendering="crispEdges"
            />
          </g>

          <g filter="url(#filter3_dddi_bucket)">
            <path
              d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
              fill="url(#paint0_linear_bucket)"
              fillOpacity="0.75"
              shapeRendering="crispEdges"
            />
          </g>

          <g filter="url(#filter4_dddi_bucket)">
            <path
              d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z"
              fill="#2D7A55"
              fillOpacity="0.28"
              shapeRendering="crispEdges"
            />
          </g>

          <g filter="url(#filter5_dddi_bucket)">
            <path
              d="M487.973 78.9088V42.8774L536.404 79.1144L487.973 78.9088Z"
              fill="#2D7A55"
              fillOpacity="0.28"
              shapeRendering="crispEdges"
            />
          </g>

          {/* Corps du carton */}
          <g filter="url(#filter0_i_bucket)">
            <path
              d="M512.766 79.1595L147.766 79.1624C136.453 79.1625 130.796 79.1626 127.281 82.6773C123.766 86.192 123.766 91.8488 123.766 103.162V327.159C123.766 338.473 123.766 344.13 127.281 347.645C130.796 351.159 136.453 351.159 147.766 351.159H512.766C524.08 351.159 529.737 351.159 533.252 347.645C536.766 344.13 536.766 338.473 536.766 327.159V103.159C536.766 91.8457 536.766 86.1888 533.252 82.6741C529.737 79.1594 524.08 79.1594 512.766 79.1595Z"
              fill="white"
            />
          </g>

          {/* Bande glass en haut */}
          <g filter="url(#filter6_dddi_bucket)">
            <path
              d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z"
              fill="#2D7A55"
              fillOpacity="0.42"
              shapeRendering="crispEdges"
            />
          </g>

          <defs>
            <filter
              id="filter0_i_bucket"
              x="123.766"
              y="79.1595"
              width="413"
              height="275.676"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="5.51362" />
              <feGaussianBlur stdDeviation="1.83787" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_bucket" />
            </filter>

            {['filter1_dddi_bucket', 'filter2_dddi_bucket', 'filter3_dddi_bucket', 'filter4_dddi_bucket', 'filter5_dddi_bucket', 'filter6_dddi_bucket'].map((id) => (
              <filter
                key={id}
                id={id}
                x="-50"
                y="-50"
                width="800"
                height="500"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.18 0 0 0 0 0.48 0 0 0 0 0.33 0 0 0 0.08 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
              </filter>
            ))}

            <linearGradient
              id="paint0_linear_bucket"
              x1="329.353"
              y1="42.8774"
              x2="329.353"
              y2="79.1144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2D7A55" stopOpacity="0.45" />
              <stop offset="1" stopColor="#2D7A55" stopOpacity="0.22" />
            </linearGradient>
          </defs>
        </svg>

        {/* Contenu superposé (dossier rangé, progression, etc.) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {children}
        </div>
      </div>
    )
  }
)
Bucket.displayName = 'Bucket'

export default Bucket
