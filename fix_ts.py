with open('src/components/RichText.tsx', 'r') as f:
    c = f.read()
c = c.replace("import React from 'react';\n", "")
with open('src/components/RichText.tsx', 'w') as f:
    f.write(c)

with open('src/router.tsx', 'r') as f:
    c = f.read()
c = c.replace(
    "const routeTree = rootRoute.addChildren([indexRoute, periodRoute, figuresRoute])",
    """const definitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/definitions',
  component: () => <div className="p-8">Definitions - Coming Soon</div>,
})

const routeTree = rootRoute.addChildren([indexRoute, periodRoute, figuresRoute, definitionsRoute])"""
)
with open('src/router.tsx', 'w') as f:
    f.write(c)
