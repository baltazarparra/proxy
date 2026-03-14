import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import useReducedComplexity from '../../hooks/useReducedComplexity'
import WebGLErrorBoundary from './WebGLErrorBoundary'
import SceneLights from './SceneLights'
import SceneController from './SceneController'

/**
 * DOM wrapper around the R3F Canvas.
 * Scroll orchestration is handled by useScrollProgress in PageShell (DOM side).
 * This component is a pure Canvas shell with adaptive quality and error boundary.
 */
export default function NotebookScene() {
  const { shouldSimplify, prefersReducedMotion } = useReducedComplexity()

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
