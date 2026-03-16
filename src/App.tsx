import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PainPointsSection from './components/PainPointsSection'
import DataRoomSection from './components/DataRoomSection'
import PacksSection from './components/PacksSection'
import ExcelImportSection from './components/ExcelImportSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import FinalCtaSection from './components/FinalCtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <DataRoomSection />
        <PacksSection />
        <ExcelImportSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
