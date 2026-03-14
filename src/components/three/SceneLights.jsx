/**
 * Cinematographic 4-light rig: ambient + key + gold rim + fill.
 * Simplified mode (mobile) drops the fill light and reduces rim intensity.
 * @param {{ simplified?: boolean }} props
 */
export default function SceneLights({ simplified = false }) {
  return (
    <>
      <ambientLight intensity={simplified ? 0.4 : 0.3} />
      <directionalLight position={[5, 5, 5]} intensity={simplified ? 0.8 : 1.5} />
      <directionalLight position={[-4, 2, -3]} intensity={simplified ? 0.3 : 0.8} color="#c9a84c" />
      {!simplified && <pointLight position={[0, -3, 4]} intensity={0.4} color="#f0ece2" />}
    </>
  )
}
