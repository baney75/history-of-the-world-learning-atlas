import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'

import { Link } from '@tanstack/react-router'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 p-4 text-center">
      <h1 className="text-6xl font-serif text-stone-800 mb-4">404</h1>
      <h2 className="text-2xl font-serif text-stone-700 mb-6">Page Not Found</h2>
      <p className="text-stone-600 mb-8 max-w-md">
        The history you are looking for does not exist in our archives.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-stone-800 text-stone-100 rounded-md hover:bg-stone-700 transition-colors"
      >
        Return to Timeline
      </Link>
    </div>
  )
}

import App from './App'
import { FiguresNetwork } from './pages/FiguresNetwork'

const rootRoute = createRootRoute({ notFoundComponent: NotFound })

// We can define a dynamic parameter :periodId to support deep linking to a specific period.
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const periodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/period/$periodId',
  component: App, // App handles the logic if `periodId` is selected, we'll need to adapt it slightly
})

const figuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/figures',
  component: FiguresNetwork,
})

const definitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/definitions',
  component: () => <div className="p-8">Definitions - Coming Soon</div>,
})

const routeTree = rootRoute.addChildren([indexRoute, periodRoute, figuresRoute, definitionsRoute])

declare const __BASE_PATH__: string
const basepath = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/'

export const router = createRouter({ routeTree, basepath })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
