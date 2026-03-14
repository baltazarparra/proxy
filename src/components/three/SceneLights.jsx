/**
 * Minimal lighting setup for the notebook scene.
 * @param {{ simplified?: boolean }} props
 */
export default function SceneLights({ simplified = false }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      {!simplified && <directionalLight position={[5, 5, 5]} intensity={0.8} />}
      {simplified && <directionalLight position={[5, 5, 5]} intensity={0.4} />}
    </>
  )
}
