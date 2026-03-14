/**
 * Section-to-notebook pose map.
 * Each section ID maps to a target position and rotation for the 3D notebook.
 * Values are tuned to match narrative intent from PLAN.md section 12.
 *
 * openAmount is defined for future Tier 2 (cover open/close animation)
 * but is not consumed in Tier 1.
 */

export const SECTION_ORDER = [
  'hero',
  'agents',
  'tools',
  'plan',
  'roadmap',
  'execution',
  'templates',
  'closing',
]

const notebookStates = {
  hero: { position: [0, 0, 0], rotation: [0, 0, 0], openAmount: 0 },
  agents: { position: [0.5, 0, 0], rotation: [0, 0.3, 0], openAmount: 0.15 },
  tools: { position: [0.3, -0.2, 0], rotation: [-0.1, 0.5, 0], openAmount: 0.3 },
  plan: { position: [-0.2, 0, 0], rotation: [-0.15, -0.2, 0.05], openAmount: 0.4 },
  roadmap: { position: [0, 0.3, 0], rotation: [-0.1, 0.4, 0], openAmount: 0.5 },
  execution: { position: [0.3, 0.1, 0], rotation: [-0.05, 0.6, 0], openAmount: 0.6 },
  templates: { position: [0, 0, 0], rotation: [-0.1, 0.8, 0], openAmount: 0.8 },
  closing: { position: [0, -0.1, 0], rotation: [0, 0.15, 0], openAmount: 0 },
}

export default notebookStates
