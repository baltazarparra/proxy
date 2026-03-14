import { useLanguage } from '../../hooks/useLanguage'
import CopyBlock from '../ui/CopyBlock'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
          {t.hero.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted">
          {t.hero.subtitle}
        </p>
        <CopyBlock className="mt-8 max-w-2xl mx-auto">
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
