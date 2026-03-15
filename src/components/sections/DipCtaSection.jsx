import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const DIP_URL = 'https://baltazarparra.github.io/DIP/'

export default function DipCtaSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="dip" className="text-center">
      <div ref={revealRef}>
        <SectionHeading>{t.dip.headline}</SectionHeading>

        <div className="mt-10">
          <Button href={DIP_URL}>{t.dip.cta}</Button>
        </div>
      </div>
    </SectionContainer>
  )
}
