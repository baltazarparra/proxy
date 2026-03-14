import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function AgentsSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="agents">
      <div ref={revealRef}>
        <SectionHeading>{t.agents.title}</SectionHeading>
        <CopyBlock>
          <p>{t.agents.body}</p>
        </CopyBlock>

        <div className="gap-content mt-12 grid md:grid-cols-2">
          {t.agents.categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-foreground mb-3 text-xl font-semibold">{category.name}</h3>
              <p className="text-muted mb-6 text-sm leading-relaxed">{category.description}</p>
              <div className="space-y-4">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="bg-surface rounded-lg p-4">
                    <p className="text-foreground font-semibold">{tool.name}</p>
                    <p className="text-muted mt-1 text-sm">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
