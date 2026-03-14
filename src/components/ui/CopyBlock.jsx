/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function CopyBlock({ children, className = '' }) {
  return (
    <div className={`text-base md:text-lg text-muted leading-relaxed space-y-4 ${className}`}>
      {children}
    </div>
  )
}
