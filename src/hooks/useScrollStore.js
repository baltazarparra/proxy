/**
 * Scroll state bridge: GSAP (DOM) -> Zustand -> R3F (WebGL).
 *
 * Architecture:
 * - GSAP ScrollTrigger reads DOM scroll position and calls setSectionProgress()
 * - R3F components read via useScrollStore.getState() inside useFrame()
 * - NEVER use useScrollStore() hook inside Canvas — it triggers React re-renders
 * - NEVER let R3F read scroll position from the DOM directly
 * - NEVER let GSAP animate Three.js objects directly
 */
import { create } from 'zustand'

const useScrollStore = create((set) => ({
  sectionProgress: {
    hero: 0,
    agents: 0,
    modes: 0,
    models: 0,
    tools: 0,
    plan: 0,
    roadmap: 0,
    execution: 0,
    bootstrap: 0,
    templates: 0,
    closing: 0,
  },
  activeSection: 'hero',
  setSectionProgress: (id, progress) =>
    set((state) => ({
      sectionProgress: { ...state.sectionProgress, [id]: progress },
    })),
  setActiveSection: (id) => set({ activeSection: id }),
}))

export default useScrollStore
