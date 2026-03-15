import { useState, useCallback } from 'react'
import useReducedComplexity from '../../hooks/useReducedComplexity'

/**
 * Accordion component. One item open at a time by default.
 *
 * @param {{
 *   items: Array<{ id: string, header: string, content: React.ReactNode }>
 *   allowMultiple?: boolean
 * }} props
 */
export default function Accordion({ items, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState(/** @type {Set<string>} */ (new Set()))
  const { prefersReducedMotion } = useReducedComplexity()

  const toggle = useCallback(
    (id) => {
      setOpenIds((prev) => {
        const next = new Set(prev)
        if (next.has(id)) {
          next.delete(id)
        } else {
          if (!allowMultiple) next.clear()
          next.add(id)
        }
        return next
      })
    },
    [allowMultiple],
  )

  return (
    <div className="divide-accent/10 divide-y">
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id)
        const isFirst = index === 0

        return (
          <div key={item.id} className={isFirst ? 'border-accent/20 border-t-2' : ''}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(item.id)
                }
              }}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-header-${item.id}`}
              className="text-foreground hover:bg-accent/5 focus:ring-accent/50 focus:ring-offset-background flex min-h-[48px] w-full items-center justify-between gap-4 py-4 text-left transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <span className="text-accent text-lg font-semibold">{item.header}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              className={`grid overflow-hidden ${
                prefersReducedMotion ? '' : 'transition-[grid-template-rows] duration-300 ease-out'
              }`}
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
              }}
            >
              <div className="min-h-0">
                <div className="text-muted pt-0 pb-5 text-sm leading-relaxed">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
