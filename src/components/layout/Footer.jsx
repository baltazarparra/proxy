import { useLanguage } from '../../hooks/useLanguage'
import references from '../../content/references'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="border-accent/10 bg-surface border-t px-6 py-8 md:px-8"
      aria-label={t.footer?.bibliographyTitle}
    >
      <section className="mx-auto max-w-4xl">
        <p className="text-muted text-justify text-[10px] leading-relaxed">
          <span className="text-accent font-semibold">{t.footer?.bibliographyTitle}</span>{' '}
          {references.map((ref, i) => (
            <span key={ref.url}>
              {ref.name} —{' '}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {ref.url}
              </a>
              {i < references.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </section>
    </footer>
  )
}
