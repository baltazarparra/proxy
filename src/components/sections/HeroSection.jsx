import { useLanguage } from '../../hooks/useLanguage'
import CopyBlock from '../ui/CopyBlock'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="text-muted mt-4 text-xl md:text-2xl">{t.hero.subtitle}</p>
        <CopyBlock className="mx-auto mt-8 max-w-2xl">
          <p>{t.hero.body}</p>
        </CopyBlock>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
          className="text-muted"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
