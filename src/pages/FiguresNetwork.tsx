import { useRef, useEffect, useMemo } from 'react';
import { DataSet } from 'vis-data';
import { Network, type Node, type Edge } from 'vis-network';
import {
  biblicalFigures,
  philosophers,
  churchFathers,
  medievalTheologians,
  reformers,
  americanFounders,
  modernFigures
} from '@/data/historical-periods';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FiguresNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => [
    { name: 'Biblical Figures', figures: biblicalFigures, color: '#eab308' },
    { name: 'Philosophers', figures: philosophers, color: '#3b82f6' },
    { name: 'Church Fathers', figures: churchFathers, color: '#ef4444' },
    { name: 'Medieval Theologians', figures: medievalTheologians, color: '#a855f7' },
    { name: 'Reformers', figures: reformers, color: '#f97316' },
    { name: 'American Founders', figures: americanFounders, color: '#14b8a6' },
    { name: 'Modern Figures', figures: modernFigures, color: '#64748b' }
  ], []);

  const figuresCount = useMemo(() => categories.reduce((sum, cat) => sum + cat.figures.length, 0), [categories]);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodesData: Node[] = [];
    const edgesData: Edge[] = [];

    // Add category nodes
    categories.forEach((cat, index) => {
      nodesData.push({
        id: `cat-${index}`,
        label: cat.name,
        shape: 'box',
        color: cat.color,
        font: { color: 'white', size: 16, bold: 'true' },
        size: 30
      });

      // Add figure nodes and connect them to their category
      cat.figures.forEach((fig) => {
        nodesData.push({
          id: fig.id,
          label: fig.name,
          shape: 'dot',
          color: cat.color,
          font: { color: '#e2e8f0' },
          size: 10
        });

        edgesData.push({
          from: fig.id,
          to: `cat-${index}`,
          color: { color: cat.color, opacity: 0.5 },
          length: 150
        });
      });
    });

    const nodes = new DataSet(nodesData);
    const edges = new DataSet(edgesData);

    const data = { nodes, edges };
    const options = {
      nodes: {
        borderWidth: 2,
      },
      edges: {
        width: 1,
        smooth: {
          enabled: true,
          type: 'continuous',
          roundness: 0.5
        }
      },
      physics: {
        barnesHut: {
          gravitationalConstant: -2000,
          centralGravity: 0.3,
          springLength: 95,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0.1
        }
      },
      interaction: {
        hover: true,
        tooltipDelay: 200,
        zoomView: true,
        dragView: true
      }
    };

    const network = new Network(containerRef.current, data, options);

    return () => {
      network.destroy();
    };
  }, [categories]);

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
            This view maps the connections between the {figuresCount} key historical figures,
            showing influence across eras and shared scriptural references.
          </p>

          {/* Placeholder for Canvas/SVG Network Graph */}
          <div ref={containerRef} className="w-full h-[600px] bg-muted/30 rounded-xl border border-dashed border-border" />
        </div>
      </main>
    </div>
  );
}
