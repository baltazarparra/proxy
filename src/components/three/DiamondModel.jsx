import { forwardRef } from 'react'
import { IcosahedronGeometry } from 'three'

const DIAMOND_COLOR = '#0a0a0a'
const ATTENUATION_COLOR = '#c9a84c'
const DIAMOND_SCALE = 0.8

/** @type {React.ForwardRefExoticComponent<{ simplified?: boolean }>} */
const DiamondModel = forwardRef(function DiamondModel(props, ref) {
  const { simplified = false } = /** @type {{ simplified?: boolean }} */ (props || {})
  return (
    <group ref={ref} scale={DIAMOND_SCALE}>
      <mesh rotation={[0, 0, Math.PI / 4]} geometry={new IcosahedronGeometry(1, 0)}>
        {simplified ? (
          <meshStandardMaterial
            color={DIAMOND_COLOR}
            roughness={0.1}
            metalness={0.2}
            envMapIntensity={1.2}
          />
        ) : (
          <meshPhysicalMaterial
            color={DIAMOND_COLOR}
            roughness={0.06}
            metalness={0.15}
            transmission={0.45}
            thickness={0.8}
            ior={2.42}
            attenuationColor={ATTENUATION_COLOR}
            attenuationDistance={0.8}
            envMapIntensity={0.9}
          />
        )}
      </mesh>
    </group>
  )
})

export default DiamondModel
