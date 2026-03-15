import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'

const LLMS_URL = 'https://baltazarparra.github.io/guia/llms.txt'

export default function BootstrapSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(LLMS_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [])

  return (
    <SectionContainer id="bootstrap">
      <div ref={revealRef}>
        <SectionHeading>{t.bootstrap.title}</SectionHeading>
        <CopyBlock>
          <p>{t.bootstrap.body}</p>
        </CopyBlock>

        <div className="bg-surface border-accent/30 mt-10 rounded-lg border p-5 md:p-8">
          <p className="text-muted mb-4 text-sm">{t.bootstrap.instruction}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <code className="bg-background text-accent min-w-0 flex-1 rounded px-4 py-3 text-xs font-medium break-all sm:text-sm">
              {LLMS_URL}
            </code>
            <button
              onClick={handleCopy}
              className={`focus:ring-accent/50 rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:ring-2 focus:outline-none ${
                copied ? 'bg-accent/20 text-accent' : 'bg-accent text-background hover:bg-accent/90'
              }`}
            >
              {copied ? t.bootstrap.copiedLabel : t.bootstrap.urlLabel}
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
