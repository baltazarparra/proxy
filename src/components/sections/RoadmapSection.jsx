import { useLanguage } from '../../hooks/useLanguage'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

export default function RoadmapSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="roadmap">
      <SectionHeading>{t.roadmap.title}</SectionHeading>
      <CopyBlock>
        {t.roadmap.body.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </CopyBlock>

      <ol className="mt-8 list-decimal list-inside space-y-3 text-base md:text-lg text-muted leading-relaxed">
        {t.roadmap.steps.map((step, i) => (
          <li key={i} className="pl-2">{step}</li>
        ))}
      </ol>
    </SectionContainer>
  )
}
