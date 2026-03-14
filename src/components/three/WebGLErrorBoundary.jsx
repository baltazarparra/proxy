import { Component } from 'react'

/**
 * Catches WebGL/R3F errors and renders a clean fallback.
 * The page remains fully functional without the 3D scene.
 * @extends {Component<{ children: React.ReactNode }, { hasError: boolean }>}
 */
export default class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[WebGLErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}
