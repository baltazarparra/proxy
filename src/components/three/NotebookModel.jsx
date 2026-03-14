import { forwardRef, useMemo } from 'react'
import { RoundedBox } from '@react-three/drei'

const COVER_COLOR = '#0a0a0a'
const SPINE_COLOR = '#3a3020'
const PAGE_COLOR = '#d4c9a8'

const COVER_W = 2
const COVER_H = 2.7
const COVER_D = 0.06
const SPINE_D = 0.18
const GAP = SPINE_D

/**
 * Procedural notebook with front/back covers, visible spine, and stacked pages.
 * Materials tuned for warm leather cover, gold-emissive spine, and cream paper.
 */
const NotebookModel = forwardRef(function NotebookModel(_props, ref) {
  const pageOffsets = useMemo(() => [0.02, 0.035, 0.05, 0.065, 0.08], [])

  const frontZ = GAP / 2 + COVER_D / 2
  const backZ = -(GAP / 2 + COVER_D / 2)

  return (
    <group ref={ref}>
      {/* Front cover */}
      <RoundedBox
        args={[COVER_W, COVER_H, COVER_D]}
        radius={0.02}
        smoothness={4}
        position={[0, 0, frontZ]}
      >
        <meshStandardMaterial color={COVER_COLOR} roughness={0.7} metalness={0.1} />
      </RoundedBox>

      {/* Back cover */}
      <RoundedBox
        args={[COVER_W, COVER_H, COVER_D]}
        radius={0.02}
        smoothness={4}
        position={[0, 0, backZ]}
      >
        <meshStandardMaterial color={COVER_COLOR} roughness={0.7} metalness={0.1} />
      </RoundedBox>

      {/* Spine */}
      <mesh position={[-COVER_W / 2, 0, 0]}>
        <boxGeometry args={[0.06, COVER_H, SPINE_D]} />
        <meshStandardMaterial
          color={SPINE_COLOR}
          roughness={0.5}
          metalness={0.2}
          emissive="#c9a84c"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Pages */}
      {pageOffsets.map((z, i) => (
        <mesh key={i} position={[0.02, 0, -GAP / 2 + z]}>
          <planeGeometry args={[1.75, 2.5]} />
          <meshStandardMaterial color={PAGE_COLOR} roughness={0.95} metalness={0} />
        </mesh>
      ))}
    </group>
  )
})

export default NotebookModel
