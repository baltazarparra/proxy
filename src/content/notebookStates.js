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
  'models',
  'tools',
  'plan',
  'roadmap',
  'execution',
  'bootstrap',
  'templates',
  'closing',
]

const notebookStates = {
  hero: { position: [2.2, 0.3, 0.5], rotation: [-0.15, 0.4, -0.05], openAmount: 0 },
  agents: { position: [2.0, 0, -0.3], rotation: [0, 0.6, 0.05], openAmount: 0.15 },
  models: { position: [2.2, -0.2, -0.5], rotation: [-0.1, 0.7, 0], openAmount: 0.2 },
  tools: { position: [2.0, -0.3, -0.4], rotation: [-0.15, 0.9, 0.05], openAmount: 0.3 },
  plan: { position: [-2.0, 0.1, -0.2], rotation: [-0.2, -0.4, 0.05], openAmount: 0.4 },
  roadmap: { position: [-2.2, 0.3, 0], rotation: [-0.1, -0.3, 0], openAmount: 0.5 },
  execution: { position: [-2.0, 0.1, -0.3], rotation: [-0.05, -0.2, -0.05], openAmount: 0.6 },
  bootstrap: { position: [2.0, 0.2, 0.3], rotation: [-0.1, 0.5, 0], openAmount: 0.7 },
  templates: { position: [2.2, -0.1, 0], rotation: [-0.15, 0.8, 0.05], openAmount: 0.8 },
  closing: { position: [-1.8, 0, 0], rotation: [-0.1, -0.2, 0], openAmount: 0 },
}

export default notebookStates
