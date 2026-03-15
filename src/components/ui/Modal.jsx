import { useEffect, useRef, useCallback } from 'react'

/**
 * @param {{
 *   isOpen: boolean
 *   onClose: () => void
 *   title: string
 *   closeLabel?: string
 *   children: React.ReactNode
 * }} props
 */
export default function Modal({ isOpen, onClose, title, closeLabel = 'Close', children }) {
  const dialogRef = useRef(/** @type {HTMLDivElement | null} */ (null))
  const previousActiveRef = useRef(/** @type {Element | null} */ (null))

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!isOpen) return

    previousActiveRef.current = document.activeElement

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (previousActiveRef.current instanceof HTMLElement) {
        previousActiveRef.current.focus()
      }
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      if (first instanceof HTMLElement) first.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-background/80 fixed inset-0 backdrop-blur-sm"
        onClick={handleBackdropClick}
        onKeyDown={() => {}}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        className="bg-surface border-accent/20 relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-lg border shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-accent/10 flex items-start justify-between gap-4 border-b px-6 py-4">
          <h2
            id="modal-title"
            className="text-accent text-xl font-semibold text-shadow-[var(--text-shadow-heading)]"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-foreground focus:ring-accent/50 -m-2 rounded p-2 transition-colors focus:ring-2 focus:outline-none"
            aria-label={closeLabel}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-[calc(90vh-5rem)] overflow-y-auto px-6 py-4">{children}</div>
      </div>
    </div>
  )
}
