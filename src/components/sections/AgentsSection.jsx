import { useLanguage } from '../../hooks/useLanguage'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function AgentsSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="agents">
      <SectionHeading>{t.agents.title}</SectionHeading>
      <CopyBlock>
        <p>{t.agents.body}</p>
      </CopyBlock>

      <div className="mt-12 grid md:grid-cols-2 gap-content">
        {t.agents.categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {category.name}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {category.description}
            </p>
            <div className="space-y-4">
              {category.tools.map((tool) => (
                <div key={tool.name} className="bg-surface rounded-lg p-4">
                  <p className="font-semibold text-foreground">{tool.name}</p>
                  <p className="text-sm text-muted mt-1">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
