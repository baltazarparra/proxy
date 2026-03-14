/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-content ${className}`}>
      {children}
    </h2>
  )
}
