import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Accordion from '../ui/Accordion'

export default function ModesSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  const accordionItems = t.modes.items.map((item) => ({
    id: item.id,
    header: item.name,
    content: (
      <div className="space-y-4">
        <p className="text-foreground">{item.extendedBody}</p>
        {item.whenToUse?.length > 0 && (
          <div>
            <p className="text-foreground mb-2 text-xs font-medium">{t.modes.whenToUseLabel}</p>
            <ul className="text-muted list-inside list-disc space-y-1 text-sm">
              {item.whenToUse.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  }))

  return (
    <SectionContainer id="modes">
      <div ref={revealRef}>
        <SectionHeading>{t.modes.title}</SectionHeading>
        <CopyBlock>
          <p>{t.modes.body}</p>
        </CopyBlock>

        <div className="mt-10">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </SectionContainer>
  )
}
