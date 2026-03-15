import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'
import SectionContainer from '../layout/SectionContainer'
import SectionHeading from '../ui/SectionHeading'
import CopyBlock from '../ui/CopyBlock'
import Button from '../ui/Button'

export default function BootstrapSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)
  const [copiedUrl, setCopiedUrl] = useState('')

  const handleCopy = useCallback((url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url)
      setTimeout(() => setCopiedUrl(''), 2000)
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
          <p className="text-muted mb-6 text-sm">{t.bootstrap.instruction}</p>

          <div className="grid gap-4 md:grid-cols-3">
            {t.bootstrap.assets.map((asset) => {
              const isCopied = copiedUrl === asset.url

              return (
                <div
                  key={asset.url}
                  className="border-accent/20 bg-background/60 flex h-full flex-col rounded-lg border p-4"
                >
                  <p className="text-accent text-base font-semibold">{asset.name}</p>
                  <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                    {asset.description}
                  </p>
                  <code className="bg-background text-accent mt-4 block rounded px-3 py-2 text-xs font-medium break-all">
                    {asset.url}
                  </code>
                  <div className="mt-4 flex gap-2">
                    <Button
                      href={asset.url}
                      variant="secondary"
                      className="flex-1 px-4 py-2 text-sm"
                    >
                      {t.bootstrap.openLabel}
                    </Button>
                    <button
                      type="button"
                      onClick={() => handleCopy(asset.url)}
                      className={`focus:ring-accent/50 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:outline-none ${
                        isCopied
                          ? 'bg-accent/20 text-accent'
                          : 'bg-accent text-background hover:bg-accent/90'
                      }`}
                    >
                      {isCopied ? t.bootstrap.copiedLabel : t.bootstrap.urlLabel}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-muted mt-6 text-sm">
            <span className="text-foreground/80">{t.bootstrap.agentIndexLabel}</span>{' '}
            <a
              href={t.bootstrap.agentIndexUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t.bootstrap.agentIndexUrl}
            </a>
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
