import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useScrollStore from '../../hooks/useScrollStore'
import useReducedComplexity from '../../hooks/useReducedComplexity'
import WebGLErrorBoundary from './WebGLErrorBoundary'
import SceneLights from './SceneLights'
import SceneController from './SceneController'

gsap.registerPlugin(ScrollTrigger)

/**
 * DOM wrapper around the R3F Canvas. Handles:
 * - GSAP ScrollTrigger → Zustand bridge (DOM side)
 * - Adaptive quality via useReducedComplexity
 * - Error boundary + Suspense for progressive enhancement
 */
export default function NotebookScene() {
  const { shouldSimplify, prefersReducedMotion } = useReducedComplexity()

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        useScrollStore.getState().setScrollProgress(self.progress)
      },
    })
    return () => trigger.kill()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <WebGLErrorBoundary>
        <Suspense fallback={null}>
          <Canvas
            dpr={shouldSimplify ? 1 : [1, 2]}
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: !shouldSimplify }}
          >
            <SceneLights simplified={shouldSimplify} />
            <SceneController prefersReducedMotion={prefersReducedMotion} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  )
}
