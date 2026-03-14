/**
 * Scroll state bridge: GSAP (DOM) -> Zustand -> R3F (WebGL).
 *
 * Architecture:
 * - GSAP ScrollTrigger reads DOM scroll position and calls setScrollProgress()
 * - R3F components read via useScrollStore.getState().scrollProgress inside useFrame()
 * - NEVER use useScrollStore() hook inside Canvas — it triggers React re-renders
 * - NEVER let R3F read scroll position from the DOM directly
 * - NEVER let GSAP animate Three.js objects directly
 *
 * Phase 4 will expand this store with per-section progress values and activeSection.
 */
import { create } from 'zustand'

const useScrollStore = create((set) => ({
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}))

export default useScrollStore
