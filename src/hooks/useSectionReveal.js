import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Registers a GSAP ScrollTrigger-driven entrance animation on the given ref.
 * Effect: fade-in (opacity 0→1) + slide-up (translateY 30→0), 0.6s ease-out.
 * Plays once on viewport entry; content stays visible on scroll reversal.
 * No-op when prefers-reduced-motion is active.
 *
 * @param {import('react').RefObject<HTMLElement | null>} ref
 */
export default function useSectionReveal(ref) {
  useEffect(() => {
    if (!ref.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.set(ref.current, { opacity: 0, y: 30 })

    const tween = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      paused: true,
    })

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => tween.play(),
    })

    return () => {
      trigger.kill()
      tween.kill()
    }
  }, [ref])
}
