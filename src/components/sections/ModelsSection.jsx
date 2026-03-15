import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Modal from '../ui/Modal'

/**
 * @param {{ filter: { id: string, label: string }, isActive: boolean, onClick: () => void }} props
 */
function FilterPill({ filter, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`focus:ring-accent/50 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus:ring-2 focus:outline-none ${
        isActive ? 'bg-accent text-background' : 'bg-surface text-muted hover:text-foreground'
      }`}
    >
      {filter.label}
    </button>
  )
}

/**
 * @param {{ model: import('../../content/pt').default['models']['items'][0], onClick: () => void, index: number }} props
 */
function ModelCard({ model, onClick, index }) {
  return (
    <div
      className="bg-surface border-accent/10 hover:border-accent/30 translate-y-0 cursor-pointer rounded-lg border opacity-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,168,76,0.05)]"
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-accent min-w-0 text-lg font-semibold text-shadow-[var(--text-shadow-heading)]">
            {model.name}
          </p>
          <span className="text-muted bg-background shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium">
            {model.costLabel}
          </span>
        </div>
        <p className="text-muted mt-2 text-sm leading-relaxed">{model.description}</p>
      </div>
    </div>
  )
}

export default function ModelsSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  const [activeFilter, setActiveFilter] = useState('all')
  const [openModel, setOpenModel] = useState(
    /** @type {typeof import('../../content/pt').default.models.items[0] | null} */ (null),
  )

  const handleFilterChange = useCallback(
    /** @param {string} filterId */
    (filterId) => {
      setActiveFilter(filterId)
      setOpenModel(null)
    },
    [],
  )

  const handleOpenModel = useCallback(
    /** @param {typeof import('../../content/pt').default.models.items[0]} model */
    (model) => {
      setOpenModel(model)
    },
    [],
  )

  const handleCloseModal = useCallback(() => {
    setOpenModel(null)
  }, [])

  const filteredItems = t.models.items.filter(
    (item) => activeFilter === 'all' || item.family === activeFilter,
  )

  return (
    <SectionContainer id="models">
      <div ref={revealRef}>
        <SectionHeading>{t.models.title}</SectionHeading>
        <CopyBlock>
          <p>{t.models.body}</p>
        </CopyBlock>

        <div className="mt-10 flex flex-wrap gap-2">
          {t.models.filters.map((filter) => (
            <FilterPill
              key={filter.id}
              filter={filter}
              isActive={activeFilter === filter.id}
              onClick={() => handleFilterChange(filter.id)}
            />
          ))}
        </div>

        <div className="gap-content mt-6 grid md:grid-cols-2">
          {filteredItems.map((model, i) => (
            <ModelCard
              key={model.name}
              model={model}
              onClick={() => handleOpenModel(model)}
              index={i}
            />
          ))}
        </div>

        <p className="text-muted mt-8 text-sm">
          {t.models.lastUpdated} — {t.models.note}
        </p>
      </div>

      <Modal
        isOpen={!!openModel}
        onClose={handleCloseModal}
        title={openModel?.name ?? ''}
        closeLabel={t.modal?.closeLabel}
      >
        {openModel && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-muted bg-background rounded-full px-2.5 py-0.5 text-xs font-medium">
                {openModel.costLabel}
              </span>
            </div>

            <p className="text-muted text-sm leading-relaxed">{openModel.description}</p>

            {openModel.modalContent?.extendedDescription && (
              <p className="text-foreground border-accent/20 border-l-2 pl-4 text-sm">
                {openModel.modalContent.extendedDescription}
              </p>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs">
              <span className="text-muted">
                <span className="text-foreground font-medium">{openModel.pricing}</span>
              </span>
              <span className="text-muted">
                {t.modal?.contextLabel}{' '}
                <span className="text-foreground font-medium">{openModel.context}</span>
              </span>
            </div>

            <div>
              <p className="text-muted mb-1.5 text-xs font-medium">{t.modal?.strengthsLabel}</p>
              <div className="flex flex-wrap gap-1.5">
                {openModel.strengths.map((s) => (
                  <span
                    key={s}
                    className="bg-accent/10 text-accent rounded px-2 py-0.5 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-muted mb-1.5 text-xs font-medium">{t.modal?.availableInLabel}</p>
              <div className="flex flex-wrap gap-1.5">
                {openModel.availableIn.map((tool) => (
                  <span key={tool} className="bg-background text-muted rounded px-2 py-0.5 text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </SectionContainer>
  )
}
