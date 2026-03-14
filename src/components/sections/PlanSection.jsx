import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function PlanSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="plan">
      <div ref={revealRef}>
        <SectionHeading>{t.plan.title}</SectionHeading>
        <CopyBlock>
          {t.plan.body.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </CopyBlock>

        <ol className="text-muted mt-8 list-inside list-decimal space-y-3 text-base leading-relaxed md:text-lg">
          {t.plan.steps.map((step, i) => (
            <li key={i} className="pl-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </SectionContainer>
  )
}
