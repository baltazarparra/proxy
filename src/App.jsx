import { LanguageProvider } from './hooks/useLanguage'
import PageShell from './components/layout/PageShell'
import LanguageToggle from './components/layout/LanguageToggle'
import HeroSection from './components/sections/HeroSection'
import AgentsSection from './components/sections/AgentsSection'
import ToolsSection from './components/sections/ToolsSection'
import PlanSection from './components/sections/PlanSection'
import RoadmapSection from './components/sections/RoadmapSection'
import ExecutionSection from './components/sections/ExecutionSection'
import TemplatesSection from './components/sections/TemplatesSection'
import ClosingSection from './components/sections/ClosingSection'

export default function App() {
  return (
    <LanguageProvider>
      <PageShell>
        <LanguageToggle />
        <HeroSection />
        <AgentsSection />
        <ToolsSection />
        <PlanSection />
        <RoadmapSection />
        <ExecutionSection />
        <TemplatesSection />
        <ClosingSection />
      </PageShell>
    </LanguageProvider>
  )
}
