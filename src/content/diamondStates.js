/**
 * Section-to-diamond pose map.
 * Each section ID maps to a target position and rotation for the 3D diamond.
 * Values tuned for diamond visibility and facet exploration during scroll.
 */

export const SECTION_ORDER = [
  'hero',
  'agents',
  'modes',
  'models',
  'tools',
  'plan',
  'roadmap',
  'execution',
  'bootstrap',
  'templates',
  'closing',
]

const diamondStates = {
  hero: { position: [0, 0, 0], rotation: [-0.1, 0.3, 0] },
  agents: { position: [0.2, 0, -0.2], rotation: [-0.05, 0.5, 0.02] },
  modes: { position: [0.15, -0.05, -0.25], rotation: [-0.06, 0.6, 0.01] },
  models: { position: [0.1, -0.1, -0.3], rotation: [-0.08, 0.7, 0] },
  tools: { position: [0, -0.1, -0.2], rotation: [-0.1, 0.9, 0.03] },
  plan: { position: [-0.2, 0.05, -0.1], rotation: [-0.15, -0.4, 0.02] },
  roadmap: { position: [-0.15, 0.1, 0], rotation: [-0.08, -0.3, 0] },
  execution: { position: [-0.1, 0, -0.15], rotation: [-0.05, -0.2, -0.02] },
  bootstrap: { position: [0.15, 0.05, 0.1], rotation: [-0.08, 0.5, 0] },
  templates: { position: [0.1, -0.05, 0], rotation: [-0.1, 0.75, 0.02] },
  closing: { position: [-0.1, 0, 0], rotation: [-0.08, -0.2, 0] },
}

export default diamondStates
