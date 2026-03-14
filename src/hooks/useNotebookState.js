import useScrollStore from './useScrollStore'
import notebookStates, { SECTION_ORDER } from '../content/notebookStates'

/**
 * Computes the interpolated notebook pose based on current scroll state.
 * Designed to be called inside useFrame (R3F render loop) — NOT a React hook.
 *
 * Reads activeSection and sectionProgress from Zustand via getState() (zero-cost).
 * Blends between the current section's pose and the next section's pose
 * based on the current section's progress value.
 *
 * @returns {{ position: [number, number, number], rotation: [number, number, number] }}
 */
export function getTargetPose() {
  const { activeSection, sectionProgress } = useScrollStore.getState()
  const currentIndex = SECTION_ORDER.indexOf(activeSection)
  const nextIndex = Math.min(currentIndex + 1, SECTION_ORDER.length - 1)

  const currentPose = notebookStates[activeSection]
  const nextPose = notebookStates[SECTION_ORDER[nextIndex]]
  const progress = sectionProgress[activeSection]

  return {
    position: currentPose.position.map((v, i) => v + (nextPose.position[i] - v) * progress),
    rotation: currentPose.rotation.map((v, i) => v + (nextPose.rotation[i] - v) * progress),
  }
}
