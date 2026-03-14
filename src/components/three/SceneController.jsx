import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import useScrollStore from '../../hooks/useScrollStore'
import NotebookModel from './NotebookModel'

/**
 * Reads scroll progress from Zustand and applies smooth rotation to the notebook.
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

    const progress = useScrollStore.getState().scrollProgress
    const targetY = progress * Math.PI * 0.5
    const targetX = progress * -Math.PI * 0.12

    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.1)
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.1)
  })

  return <NotebookModel ref={groupRef} />
}
