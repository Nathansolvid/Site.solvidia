import { useState, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PainPointsSection from './components/PainPointsSection'
import DataRoomSection from './components/DataRoomSection'
import PacksSection from './components/PacksSection'
import ExcelImportSection from './components/ExcelImportSection'
import BenefitsSection from './components/BenefitsSection'
import BetaAccessSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FinalCtaSection from './components/FinalCtaSection'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import { GridPattern } from '@/components/ui/grid-pattern'

const DemoContext = createContext<{ openDemo: () => void }>({ openDemo: () => {} })
export const useDemoModal = () => useContext(DemoContext)

function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <DemoContext.Provider value={{ openDemo: () => setDemoOpen(true) }}>
      {/* Fond global : grille SVG derrière toute la page (21st.dev GridPattern) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <GridPattern
          width={56}
          height={56}
          strokeDasharray="0"
          className="fill-primary/[0.04] stroke-primary/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
          squares={[
            [3, 2],
            [7, 4],
            [10, 1],
            [14, 6],
            [18, 3],
            [22, 8],
            [4, 10],
            [9, 13],
            [15, 11],
            [20, 14],
            [6, 17],
            [12, 20],
            [18, 18],
            [3, 22],
            [9, 25],
          ]}
        />
      </div>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <PainPointsSection />
          <DataRoomSection />
          <PacksSection />
          <ExcelImportSection />
          <BenefitsSection />
          <BetaAccessSection />
          <PricingSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </DemoContext.Provider>
  )
}

export default App
