with open('src/router.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "import App from './App'",
    "import App from './App'\nimport { FiguresNetwork } from './pages/FiguresNetwork'"
)

content = content.replace(
    "const routeTree = rootRoute.addChildren([indexRoute, periodRoute])",
    """const figuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/figures',
  component: FiguresNetwork,
})

const routeTree = rootRoute.addChildren([indexRoute, periodRoute, figuresRoute])"""
)

with open('src/router.tsx', 'w') as f:
    f.write(content)
