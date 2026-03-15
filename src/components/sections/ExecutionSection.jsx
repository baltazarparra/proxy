import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function ExecutionSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="execution">
      <div
        ref={revealRef}
        className="rounded-lg border border-white/5 bg-black/30 px-6 py-6 backdrop-blur-sm md:px-8 md:py-8"
      >
        <SectionHeading>{t.execution.title}</SectionHeading>
        <CopyBlock>
          {t.execution.body.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </CopyBlock>

        <ol className="text-foreground/80 marker:text-accent mt-10 list-inside list-decimal space-y-3 text-base leading-relaxed text-shadow-[var(--text-shadow-readable)] md:text-lg">
          {t.execution.steps.map((step, i) => (
            <li key={i} className="pl-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </SectionContainer>
  )
}
