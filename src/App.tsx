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

export const DemoContext = createContext<{ openDemo: () => void }>({ openDemo: () => {} })
export const useDemoModal = () => useContext(DemoContext)

function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <DemoContext.Provider value={{ openDemo: () => setDemoOpen(true) }}>
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
