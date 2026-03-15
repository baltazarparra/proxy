/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function CopyBlock({ children, className = '' }) {
  return (
    <div
      className={`text-foreground/80 space-y-4 text-base leading-relaxed break-words text-shadow-[var(--text-shadow-readable)] md:text-lg ${className}`}
    >
      {children}
    </div>
  )
}
