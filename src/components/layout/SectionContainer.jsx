/**
 * @param {{ id: string, children: React.ReactNode, className?: string }} props
 */
export default function SectionContainer({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-section md:py-section-lg relative ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(12,12,14,0.85)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-6">{children}</div>
    </section>
  )
}
