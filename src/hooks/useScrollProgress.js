import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useScrollStore from './useScrollStore'
import { useLanguage } from './useLanguage'
import { SECTION_ORDER } from '../content/notebookStates'

gsap.registerPlugin(ScrollTrigger)

/**
 * Registers one GSAP ScrollTrigger per section, writing per-section progress
 * (0–1) into the Zustand store. Also determines activeSection based on which
 * section occupies the viewport center.
 *
 * Call once from a DOM-side component (e.g. PageShell). Never inside Canvas.
 */
export default function useScrollProgress() {
  const { lang } = useLanguage()

  useEffect(() => {
    const triggers = []

    for (const id of SECTION_ORDER) {
      const el = document.getElementById(id)
      if (!el) continue

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          useScrollStore.getState().setSectionProgress(id, self.progress)

          if (self.progress > 0.3 && self.progress < 0.7) {
            useScrollStore.getState().setActiveSection(id)
          }
        },
      })

      triggers.push(trigger)
    }

    return () => {
      for (const t of triggers) t.kill()
    }
  }, [])

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [lang])
}
