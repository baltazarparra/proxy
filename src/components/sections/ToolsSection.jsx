import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

function ToolCard({ tool, isCli }) {
  return (
    <div className="bg-surface rounded-lg p-5">
      <p className="text-foreground text-lg font-semibold">{tool.name}</p>
      <p className="text-muted mt-2 text-sm">{tool.plans}</p>
      <div className="mt-3">
        {isCli ? (
          <code className="bg-foreground/5 text-foreground block overflow-x-auto rounded px-3 py-2 font-mono text-sm">
            {tool.install}
          </code>
        ) : (
          <p className="text-muted text-sm">{tool.install}</p>
        )}
      </div>
    </div>
  )
}

export default function ToolsSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="tools">
      <div ref={revealRef}>
        <SectionHeading>{t.tools.title}</SectionHeading>
        <CopyBlock>
          <p>{t.tools.body}</p>
        </CopyBlock>

        <div className="mt-12 space-y-10">
          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">IDE</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {t.tools.ide.map((tool) => (
                <ToolCard key={tool.name} tool={tool} isCli={false} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground mb-4 text-lg font-semibold">CLI</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.tools.cli.map((tool) => (
                <ToolCard key={tool.name} tool={tool} isCli={true} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-muted mt-8 text-sm">
          {t.tools.lastUpdated} — {t.tools.note}
        </p>
      </div>
    </SectionContainer>
  )
}
