import { useRef } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Button from '../ui/Button'

export default function TemplatesSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)

  return (
    <SectionContainer id="templates">
      <div ref={revealRef}>
        <SectionHeading>{t.templates.title}</SectionHeading>
        <CopyBlock>
          <p>{t.templates.body}</p>
        </CopyBlock>

        <div className="gap-content mt-10 grid md:grid-cols-2 lg:grid-cols-3">
          {t.templates.items.map((item) => (
            <div
              key={item.name}
              className="bg-surface border-accent/20 flex flex-col rounded-lg border-t-2 p-4 md:p-5"
            >
              <p className="text-accent text-lg font-semibold">{item.name}</p>
              <p className="text-muted mt-2 flex-1 text-sm">{item.description}</p>
              <div className="mt-4">
                <Button href={item.url} variant="secondary" className="w-full text-sm">
                  {item.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
