import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Button from '../ui/Button'

export default function ClosingSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="closing" className="text-center">
      <div ref={revealRef}>
        <SectionHeading>{t.closing.title}</SectionHeading>
        <CopyBlock className="mx-auto max-w-2xl">
          <p>{t.closing.body}</p>
        </CopyBlock>

        <div className="mt-10">
          <Button href="https://github.com/USERNAME/proxy">{t.closing.cta}</Button>
        </div>
      </div>
    </SectionContainer>
  )
}
