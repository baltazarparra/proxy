import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Modal from '../ui/Modal'

export default function GlossarySection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  const [openTerm, setOpenTerm] = useState(
    /** @type {typeof import('../../content/pt').default.glossary.terms[0] | null} */ (null),
  )

  const handleOpenModal = useCallback((term) => {
    setOpenTerm(term)
  }, [])

  const handleCloseModal = useCallback(() => {
    setOpenTerm(null)
  }, [])

  return (
    <SectionContainer id="glossary">
      <div ref={revealRef}>
        <SectionHeading>{t.glossary.title}</SectionHeading>
        <CopyBlock>
          <p>{t.glossary.body}</p>
        </CopyBlock>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.glossary.terms.map((item) => (
            <button
              key={item.term}
              type="button"
              onClick={() => handleOpenModal(item)}
              className="border-accent/40 bg-surface hover:border-accent/60 focus:ring-accent/50 focus:ring-offset-background cursor-pointer rounded-lg border-t-2 px-4 py-3.5 text-left transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none md:px-5 md:py-4"
            >
              <h3 className="text-accent mb-1 text-lg font-bold">{item.term}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.definition}</p>
            </button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!openTerm}
        onClose={handleCloseModal}
        title={openTerm?.term ?? ''}
        closeLabel={t.modal?.closeLabel}
      >
        {openTerm?.modalContent && (
          <div className="space-y-4">
            <div className="text-muted space-y-3 text-sm leading-relaxed">
              {openTerm.modalContent.extendedBody.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {openTerm.modalContent.sourceUrl && openTerm.modalContent.sourceName && (
              <p className="text-muted border-accent/20 border-l-2 pl-4 text-sm">
                {t.modal?.sourceLabel}{' '}
                <a
                  href={openTerm.modalContent.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {openTerm.modalContent.sourceName}
                </a>
              </p>
            )}
          </div>
        )}
      </Modal>
    </SectionContainer>
  )
}
