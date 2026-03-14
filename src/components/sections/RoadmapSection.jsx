import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function RoadmapSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="roadmap">
      <div ref={revealRef}>
        <SectionHeading>{t.roadmap.title}</SectionHeading>
        <CopyBlock>
          {t.roadmap.body.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </CopyBlock>

        <ol className="text-muted mt-8 list-inside list-decimal space-y-3 text-base leading-relaxed md:text-lg">
          {t.roadmap.steps.map((step, i) => (
            <li key={i} className="pl-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </SectionContainer>
  )
}
