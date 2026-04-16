import { beforeEach, describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
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
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'pt-BR'
  })

  it('App renders without crashing', () => {
    render(<App />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Guia prático')
  })

  it('renders all 9 section IDs', () => {
    const { container } = render(<App />)
    const expectedIds = [
      'hero',
      'glossary',
      'agents',
      'modes',
      'models',
      'plan',
      'roadmap',
      'execution',
      'templates',
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

  it('language toggle switches copy and html lang', () => {
    render(<App />)

    fireEvent.click(screen.getByText('EN'))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('practical guide')
    expect(document.documentElement.lang).toBe('en')
  })
})
