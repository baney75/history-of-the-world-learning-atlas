import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from '@/App';
import FiguresPage from '@/pages/FiguresPage';
import DefinitionsPage from '@/pages/DefinitionsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    },
  },
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const periodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/period/$periodId',
});

const figureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/figure/$figureId',
});

const figuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/figures',
  component: FiguresPage,
});

const definitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/definitions',
  component: DefinitionsPage,
});

const definitionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/definitions/$termId',
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  periodRoute,
  figureRoute,
  figuresRoute,
  definitionsRoute,
  definitionDetailRoute,
]);

// Get base path from import.meta.env.BASE_URL (set by Vite)
const basepath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const router = createRouter({ 
  routeTree,
  basepath,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}