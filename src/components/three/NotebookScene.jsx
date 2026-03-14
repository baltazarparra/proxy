import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import useReducedComplexity from '../../hooks/useReducedComplexity'
import WebGLErrorBoundary from './WebGLErrorBoundary'
import SceneLights from './SceneLights'
import SceneController from './SceneController'

/**
 * DOM wrapper around the R3F Canvas.
 * Scroll orchestration is handled by useScrollProgress in PageShell (DOM side).
 * This component is a pure Canvas shell with adaptive quality, environment
 * reflections, bloom post-processing, and error boundary.
 */
export default function NotebookScene() {
  const { shouldSimplify, prefersReducedMotion } = useReducedComplexity()

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <WebGLErrorBoundary>
        <Suspense fallback={null}>
          <Canvas
            dpr={shouldSimplify ? 1 : [1, 2]}
            camera={{ position: [0, 0, 4.5], fov: 50 }}
            gl={{ antialias: !shouldSimplify }}
          >
            <SceneLights simplified={shouldSimplify} />
            <SceneController prefersReducedMotion={prefersReducedMotion} />
            {!shouldSimplify && <Environment preset="city" />}
            {!shouldSimplify && (
              <EffectComposer>
                <Bloom
                  luminanceThreshold={0.6}
                  luminanceSmoothing={0.9}
                  intensity={0.4}
                  radius={0.8}
                />
              </EffectComposer>
            )}
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  )
}
