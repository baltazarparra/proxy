import { useLanguage } from '../../hooks/useLanguage'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function PlanSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="plan">
      <SectionHeading>{t.plan.title}</SectionHeading>
      <CopyBlock>
        {t.plan.body.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </CopyBlock>

      <ol className="mt-8 list-decimal list-inside space-y-3 text-base md:text-lg text-muted leading-relaxed">
        {t.plan.steps.map((step, i) => (
          <li key={i} className="pl-2">{step}</li>
        ))}
      </ol>
    </SectionContainer>
  )
}
