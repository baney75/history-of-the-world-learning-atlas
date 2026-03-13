with open('src/App.test.tsx', 'r') as f:
    c = f.read()
c = c.replace('Link: ({ children, to, className }: any)', 'Link: ({ children, to, className }: { children: React.ReactNode; to: string; className?: string })')
with open('src/App.test.tsx', 'w') as f:
    f.write(c)

with open('src/App.tsx', 'r') as f:
    c = f.read()
c = c.replace('import { Link, useNavigate, useParams, useMatchRoute } from "@tanstack/react-router";', 'import { Link, useNavigate, useMatchRoute } from "@tanstack/react-router";')
with open('src/App.tsx', 'w') as f:
    f.write(c)

with open('src/pages/FiguresNetwork.tsx', 'r') as f:
    c = f.read()
c = c.replace("import { useEffect, useRef, useMemo } from 'react';", "import { useRef, useMemo } from 'react';")
c = c.replace("import { getAllFigures, historicalPeriods } from '@/data/historical-periods';", "import { getAllFigures } from '@/data/historical-periods';")
with open('src/pages/FiguresNetwork.tsx', 'w') as f:
    f.write(c)
