import { useLanguage } from '../../hooks/useLanguage'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-lg bg-surface/80 backdrop-blur-sm p-1">
      <button
        onClick={() => setLang('pt')}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          lang === 'pt'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted hover:text-foreground'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          lang === 'en'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  )
}
