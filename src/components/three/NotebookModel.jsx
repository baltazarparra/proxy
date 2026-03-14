import { forwardRef } from 'react'

const COVER_COLOR = '#2a2a2a'
const PAGE_COLOR = '#f5f5f0'

/**
 * Procedural low-poly notebook built from Three.js primitives.
 * Cover (box) + stacked pages (planes) wrapped in a group.
 */
const NotebookModel = forwardRef(function NotebookModel(_props, ref) {
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[2, 2.7, 0.08]} />
        <meshStandardMaterial color={COVER_COLOR} />
      </mesh>

      {[0.041, 0.043, 0.045].map((z, i) => (
        <mesh key={i} position={[0, 0, z]}>
          <planeGeometry args={[1.8, 2.5]} />
          <meshStandardMaterial color={PAGE_COLOR} />
        </mesh>
      ))}
    </group>
  )
})

export default NotebookModel
