import { lazy, Suspense } from 'react'

const NotebookScene = lazy(() => import('../three/NotebookScene'))

/**
 * @param {{ children: React.ReactNode }} props
 */
export default function PageShell({ children }) {
  return (
    <>
      <Suspense fallback={null}>
        <NotebookScene />
      </Suspense>
      <main className="relative z-10 min-h-screen">{children}</main>
    </>
  )
}
