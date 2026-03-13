import { useRef, useMemo } from 'react';
import { getAllFigures } from '@/data/historical-periods';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FiguresNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const figures = useMemo(() => getAllFigures(), []);

  // This is a placeholder for the actual interactive graph.
  // In a real implementation, we'd use vis-network, react-force-graph, or similar
  // to connect figures to periods and to each other based on shared eras or tags.

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4">
          <Button variant="ghost" size="sm" asChild className="gap-2 mr-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Timeline</span>
            </Link>
          </Button>
          <h1 className="text-lg font-medium">Historical Figures Network</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col p-4 md:p-8">
        <div className="bg-card border border-border/50 rounded-2xl p-8 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
          <h2 className="text-2xl mb-4 font-semibold">Interactive Figure Network</h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            This view maps the connections between the {figures.length} key historical figures,
            showing influence across eras and shared scriptural references.
          </p>

          {/* Placeholder for Canvas/SVG Network Graph */}
          <div ref={containerRef} className="w-full h-96 bg-muted/30 rounded-xl border border-dashed border-border flex items-center justify-center">
            <span className="text-muted-foreground italic opacity-60">Interactive Graph Canvas (vis-network / d3)</span>
          </div>
        </div>
      </main>
    </div>
  );
}
