/**
 * @param {{
 *   href?: string,
 *   variant?: 'primary' | 'secondary',
 *   children: React.ReactNode,
 *   className?: string,
 *   [key: string]: any
 * }} props
 */
export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50'

  const variants = {
    primary: 'bg-accent text-background hover:bg-accent/90',
    secondary: 'bg-surface text-foreground border border-accent/20 hover:bg-surface/80',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    const isExternal = /^https?:\/\//.test(href)

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
