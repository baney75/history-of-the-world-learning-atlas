import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import { FiguresNetwork } from './pages/FiguresNetwork'

const rootRoute = createRootRoute()

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

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
