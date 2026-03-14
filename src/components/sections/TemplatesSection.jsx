import { useLanguage } from '../../hooks/useLanguage'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Button from '../ui/Button'

export default function TemplatesSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer id="templates">
      <SectionHeading>{t.templates.title}</SectionHeading>
      <CopyBlock>
        <p>{t.templates.body}</p>
      </CopyBlock>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-content">
        {t.templates.items.map((item) => (
          <div key={item.name} className="bg-surface rounded-lg p-6 flex flex-col">
            <p className="font-semibold text-foreground text-lg">{item.name}</p>
            <p className="text-sm text-muted mt-2 flex-1">{item.description}</p>
            <div className="mt-4">
              <Button href="#" variant="secondary" className="w-full text-sm">
                {item.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
