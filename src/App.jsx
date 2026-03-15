import { LanguageProvider } from './hooks/useLanguage'
import PageShell from './components/layout/PageShell'
import LanguageToggle from './components/layout/LanguageToggle'
import HeroSection from './components/sections/HeroSection'
import AgentsSection from './components/sections/AgentsSection'
import ModelsSection from './components/sections/ModelsSection'
import PlanSection from './components/sections/PlanSection'
import RoadmapSection from './components/sections/RoadmapSection'
import ExecutionSection from './components/sections/ExecutionSection'
import BootstrapSection from './components/sections/BootstrapSection'
import TemplatesSection from './components/sections/TemplatesSection'
import GlossarySection from './components/sections/GlossarySection'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <PageShell>
        <LanguageToggle />
        <HeroSection />
        <AgentsSection />
        <ModelsSection />
        <PlanSection />
        <RoadmapSection />
        <ExecutionSection />
        <BootstrapSection />
        <TemplatesSection />
        <GlossarySection />
        <Footer />
      </PageShell>
    </LanguageProvider>
  )
}
