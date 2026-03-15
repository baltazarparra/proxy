import { useRef, useState, useCallback } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import useSectionReveal from '../../hooks/useSectionReveal'

export default function HeroSection() {
  const { t } = useLanguage()
  const revealRef = useRef(null)
  useSectionReveal(revealRef)
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(t.hero.prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [t.hero.prompt])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div ref={revealRef} className="mx-auto max-w-3xl">
        <h1 className="text-accent text-4xl font-bold tracking-tight md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="text-foreground/70 mt-4 text-xl md:text-2xl">{t.hero.subtitle}</p>

        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="text-foreground ml-2 text-sm font-bold">{t.hero.tabLabel}</span>
          </div>

          <div className="flex items-start gap-3 p-4 md:p-5">
            <span className="text-accent mt-px font-mono text-sm select-none" aria-hidden="true">
              &gt;
            </span>
            <p className="min-w-0 flex-1 text-left font-mono text-xs leading-relaxed break-all text-white/70 sm:text-sm">
              {t.hero.prompt}
            </p>
            <button
              onClick={handleCopy}
              aria-label={copied ? t.hero.copiedLabel : 'Copy'}
              className="flex-shrink-0 rounded-md p-2 text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent/60"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
