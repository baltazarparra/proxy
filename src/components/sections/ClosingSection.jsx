import { useLanguage } from '../../hooks/useLanguage'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Button from '../ui/Button'

export default function ClosingSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="closing" className="text-center">
      <SectionHeading>{t.closing.title}</SectionHeading>
      <CopyBlock className="max-w-2xl mx-auto">
        <p>{t.closing.body}</p>
      </CopyBlock>

      <div className="mt-10">
        <Button href="https://github.com/USERNAME/proxy">
          {t.closing.cta}
        </Button>
      </div>
    </SectionContainer>
  )
}
