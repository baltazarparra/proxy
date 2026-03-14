import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { getTargetPose } from '../../hooks/useNotebookState'
import NotebookModel from './NotebookModel'

/**
 * Reads per-section scroll state via getTargetPose() and applies smoothly
 * interpolated position + rotation to the notebook group each frame.
 * @param {{ prefersReducedMotion?: boolean }} props
 */
export default function SceneController({ prefersReducedMotion = false }) {
  const groupRef = useRef(null)

  useFrame(() => {
    if (!groupRef.current) return

    if (prefersReducedMotion) {
      groupRef.current.rotation.y = 0.3
      groupRef.current.rotation.x = -0.1
      return
    }

    const target = getTargetPose()
    const g = groupRef.current
    g.position.x = MathUtils.lerp(g.position.x, target.position[0], 0.08)
    g.position.y = MathUtils.lerp(g.position.y, target.position[1], 0.08)
    g.position.z = MathUtils.lerp(g.position.z, target.position[2], 0.08)
    g.rotation.x = MathUtils.lerp(g.rotation.x, target.rotation[0], 0.08)
    g.rotation.y = MathUtils.lerp(g.rotation.y, target.rotation[1], 0.08)
    g.rotation.z = MathUtils.lerp(g.rotation.z, target.rotation[2], 0.08)
  })

  return <NotebookModel ref={groupRef} />
}
