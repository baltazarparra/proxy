import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * Detects conditions that warrant a simplified 3D scene.
 * @returns {{ isMobile: boolean, prefersReducedMotion: boolean, shouldSimplify: boolean }}
 */
export default function useReducedComplexity() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches)
    }

    window.addEventListener('resize', handleResize)
    mql.addEventListener('change', handleMotionChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      mql.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return {
    isMobile,
    prefersReducedMotion,
    shouldSimplify: isMobile || prefersReducedMotion,
  }
}
