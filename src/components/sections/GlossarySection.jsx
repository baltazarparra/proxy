import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function GlossarySection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="glossary">
      <div ref={revealRef}>
        <SectionHeading>{t.glossary.title}</SectionHeading>
        <CopyBlock>
          <p>{t.glossary.body}</p>
        </CopyBlock>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.glossary.terms.map((item) => (
            <div
              key={item.term}
              className="border-accent/40 bg-surface rounded-lg border-t-2 px-4 py-3.5 md:px-5 md:py-4"
            >
              <h3 className="text-accent mb-1 text-lg font-bold text-shadow-[var(--text-shadow-heading)]">
                {item.term}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
