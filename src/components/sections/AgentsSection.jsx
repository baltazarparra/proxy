import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Modal from '../ui/Modal'

function ToolCard({ tool, isCli }) {
  const installContent = isCli ? (
    <code className="bg-accent/10 text-foreground block rounded px-3 py-2 font-mono text-xs break-all sm:text-sm">
      {tool.install}
    </code>
  ) : (
    tool.install
  )

  const installBlock = tool.installUrl ? (
    <a
      href={tool.installUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      {installContent}
    </a>
  ) : (
    installContent
  )

  return (
    <div className="bg-surface border-accent/20 rounded-lg border-t-2 p-4 md:p-5">
      <p className="text-foreground font-semibold">{tool.name}</p>
      <p className="text-muted mt-1 text-sm">{tool.description}</p>
      <p className="text-muted mt-2 text-sm">{tool.plans}</p>
      <div className="mt-3">{installBlock}</div>
    </div>
  )
}

export default function AgentsSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  const [openCategory, setOpenCategory] = useState(
    /** @type {typeof import('../../content/pt').default.agents.categories[0] | null} */ (null),
  )

  const handleOpenModal = useCallback((category) => {
    setOpenCategory(category)
  }, [])

  const handleCloseModal = useCallback(() => {
    setOpenCategory(null)
  }, [])

  return (
    <SectionContainer id="agents">
      <div ref={revealRef}>
        <SectionHeading>{t.agents.title}</SectionHeading>
        <CopyBlock>
          <p>{t.agents.body}</p>
        </CopyBlock>

        <div className="gap-content mt-10 grid md:grid-cols-2">
          {t.agents.categories.map((category) => {
            const isCli = category.name.toLowerCase().includes('cli')
            return (
              <div key={category.name}>
                <button
                  type="button"
                  onClick={() => handleOpenModal(category)}
                  className="text-accent hover:text-accent/90 focus:ring-accent/50 focus:ring-offset-background mb-3 cursor-pointer rounded text-left text-lg font-semibold transition-colors text-shadow-[var(--text-shadow-heading)] focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  {category.name}
                </button>
                <p className="text-muted mb-6 text-sm leading-relaxed">{category.description}</p>
                <div className="space-y-4">
                  {category.tools.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} isCli={isCli} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {t.agents.lastUpdated && t.agents.note && (
          <p className="text-muted mt-8 text-sm">
            {t.agents.lastUpdated} — {t.agents.note}
          </p>
        )}
      </div>

      <Modal
        isOpen={!!openCategory}
        onClose={handleCloseModal}
        title={openCategory?.name ?? ''}
        closeLabel={t.modal?.closeLabel}
      >
        {openCategory?.modalContent && (
          <div className="space-y-4">
            <div className="text-muted space-y-3 text-sm leading-relaxed">
              {openCategory.modalContent.extendedBody.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {openCategory.modalContent.whenToChoose && (
              <p className="text-foreground border-accent/20 border-l-2 pl-4 text-sm">
                {openCategory.modalContent.whenToChoose}
              </p>
            )}
            <div className="pt-2">
              <p className="text-accent mb-2 text-sm font-medium">
                {openCategory.tools?.length ? t.modal?.toolsLabel : ''}
              </p>
              <ul className="text-muted space-y-1 text-sm">
                {openCategory.tools?.map((tool) => (
                  <li key={tool.name}>
                    {tool.installUrl ? (
                      <a
                        href={tool.installUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {tool.name}
                      </a>
                    ) : (
                      tool.name
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </SectionContainer>
  )
}
