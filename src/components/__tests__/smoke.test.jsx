import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../App'

vi.mock('../three/NotebookScene', () => ({
  default: () => null,
}))

vi.mock('../../hooks/useScrollProgress', () => ({
  default: () => {},
}))

vi.mock('../../hooks/useSectionReveal', () => ({
  default: () => {},
}))

describe('smoke tests', () => {
  it('App renders without crashing', () => {
    render(<App />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Guia prático')
  })

  it('renders all 10 section IDs', () => {
    const { container } = render(<App />)
    const expectedIds = [
      'hero',
      'agents',
      'modes',
      'models',
      'plan',
      'roadmap',
      'execution',
      'bootstrap',
      'templates',
      'glossary',
    ]

    for (const id of expectedIds) {
      expect(container.querySelector(`#${id}`), `section #${id} missing`).not.toBeNull()
    }
  })

  it('language toggle renders PT and EN buttons', () => {
    render(<App />)
    expect(screen.getByText('PT')).toBeInTheDocument()
    expect(screen.getByText('EN')).toBeInTheDocument()
  })
})
