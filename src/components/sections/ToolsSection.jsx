import { useLanguage } from '../../hooks/useLanguage'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

function ToolCard({ tool, isCli }) {
  return (
    <div className="bg-surface rounded-lg p-5">
      <p className="font-semibold text-foreground text-lg">{tool.name}</p>
      <p className="text-sm text-muted mt-2">{tool.plans}</p>
      <div className="mt-3">
        {isCli ? (
          <code className="text-sm font-mono bg-foreground/5 text-foreground px-3 py-2 rounded block overflow-x-auto">
            {tool.install}
          </code>
        ) : (
          <p className="text-sm text-muted">{tool.install}</p>
        )}
      </div>
    </div>
  )
}

export default function ToolsSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="tools">
      <SectionHeading>{t.tools.title}</SectionHeading>
      <CopyBlock>
        <p>{t.tools.body}</p>
      </CopyBlock>

      <div className="mt-12 space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">IDE</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {t.tools.ide.map((tool) => (
              <ToolCard key={tool.name} tool={tool} isCli={false} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">CLI</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.tools.cli.map((tool) => (
              <ToolCard key={tool.name} tool={tool} isCli={true} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted">
        {t.tools.lastUpdated} — {t.tools.note}
      </p>
    </SectionContainer>
  )
}
