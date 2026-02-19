import { useMemo, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { getAllFigures } from '@/data/historical-periods';
import { historicalPeriods } from '@/data/historical-periods';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import type { HistoricalFigure } from '@/types/history';
import { Search, Users, ArrowLeft } from 'lucide-react';

type FigureCategory = 'all' | 'biblical' | 'philosophers' | 'church-fathers' | 'reformers' | 'founders' | 'modern';

const categoryLabels: Record<FigureCategory, string> = {
  all: 'All Figures',
  biblical: 'Biblical Figures',
  philosophers: 'Philosophers & Theologians',
  'church-fathers': 'Church Fathers',
  reformers: 'Reformers',
  founders: 'American Founders',
  modern: 'Modern Figures',
};

function categorizeFigure(figure: HistoricalFigure): FigureCategory[] {
  const categories: FigureCategory[] = [];
  const id = figure.id;
  
  // Biblical figures
  if ([
    'abraham', 'moses', 'david', 'solomon', 'elijah', 'isaiah', 'jeremiah', 'daniel',
    'jesus', 'peter', 'john', 'paul', 'joseph', 'joshua', 'samuel', 'ruth', 'esther',
    'ezra', 'nehemiah'
  ].includes(id)) {
    categories.push('biblical');
  }
  
  // Philosophers & Theologians (classical and medieval)
  if (['socrates', 'plato', 'aristotle', 'augustine', 'thomas-aquinas', 'anselm', 'bernard-clairvaux'].includes(id)) {
    categories.push('philosophers');
  }
  
  // Church Fathers
  if (['athanasius', 'john-chrysostom', 'jerome', 'augustine', 'irenaeus', 'tertullian', 'origen'].includes(id)) {
    categories.push('church-fathers');
  }
  
  // Reformers
  if (['martin-luther', 'john-calvin', 'william-tyndale', 'john-knox', 'ulrich-zwingli', 'jonathan-edwards', 'john-wesley'].includes(id)) {
    categories.push('reformers');
  }
  
  // American Founders
  if (['george-washington', 'thomas-jefferson', 'james-madison', 'john-adams', 'benjamin-franklin'].includes(id)) {
    categories.push('founders');
  }
  
  // Modern Figures
  if (['william-wilberforce', 'cs-lewis', 'abraham-lincoln', 'dietrich-bonhoeffer', 'aleksandr-solzhenitsyn', 'winston-churchill', 'ronald-reagan', 'martin-luther-king-jr'].includes(id)) {
    categories.push('modern');
  }
  
  return categories.length > 0 ? categories : ['modern'];
}

function getPeriodsForFigure(figureId: string): Array<{ id: string; title: string }> {
  return historicalPeriods
    .filter(period => period.keyFigures.some(f => f.id === figureId))
    .map(period => ({ id: period.id, title: period.title }));
}

interface FigureCardProps {
  figure: HistoricalFigure;
}

function FigureCard({ figure }: FigureCardProps) {
  const periods = getPeriodsForFigure(figure.id);
  const categories = categorizeFigure(figure);
  
  return (
    <article className="group rounded-2xl border border-border/40 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:border-primary/30">
      <header className="mb-3">
        <h3 className="font-serif text-lg font-medium leading-tight">{figure.name}</h3>
        {figure.title && (
          <p className="text-sm text-muted-foreground mt-0.5">{figure.title}</p>
        )}
        {figure.lifespan && (
          <p className="text-xs text-muted-foreground/70 mt-1">{figure.lifespan}</p>
        )}
      </header>
      
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">
        {figure.description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mb-3">
        {categories.map(cat => (
          <Badge key={cat} variant="secondary" className="text-xs">
            {categoryLabels[cat]}
          </Badge>
        ))}
      </div>
      
      {periods.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-1">Appears in:</p>
          <div className="flex flex-wrap gap-1">
            {periods.map(period => (
              <Link
                key={period.id}
                to="/period/$periodId"
                params={{ periodId: period.id }}
                className="text-xs text-primary hover:underline"
              >
                {period.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {figure.scripturalReference && (
        <div className="mt-3 pt-3 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Scripture:</span> {figure.scripturalReference}
          </p>
        </div>
      )}
    </article>
  );
}

export default function FiguresPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FigureCategory>('all');
  
  const allFigures = useMemo(() => getAllFigures(), []);
  
  const filteredFigures = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    return allFigures.filter(figure => {
      const matchesCategory = activeCategory === 'all' || categorizeFigure(figure).includes(activeCategory);
      
      if (!matchesCategory) return false;
      
      if (!normalizedQuery) return true;
      
      const searchText = [
        figure.name,
        figure.title,
        figure.lifespan,
        figure.description,
        figure.significance,
        figure.scripturalReference,
      ].join(' ').toLowerCase();
      
      return searchText.includes(normalizedQuery);
    });
  }, [allFigures, activeCategory, searchQuery]);
  
  const categoryOptions: FigureCategory[] = ['all', 'biblical', 'philosophers', 'church-fathers', 'reformers', 'founders', 'modern'];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Timeline</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" aria-hidden="true" />
            <h1 className="font-serif text-xl font-medium tracking-tight">Figures Library</h1>
          </div>
          <div className="w-20" />
        </div>
      </header>
      
      <main className="container px-6 py-8">
        <section className="mb-8 rounded-2xl border border-border/40 bg-card/70 p-4 shadow-sm backdrop-blur-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 flex-1">
              <label htmlFor="figures-search" className="sr-only">Search figures</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="figures-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search figures, titles, significance..."
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {categoryOptions.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                      activeCategory === cat
                        ? 'border-primary/45 bg-primary/15 text-primary'
                        : 'border-border/45 bg-background/80 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="px-2.5 py-1">{filteredFigures.length} figures</Badge>
            </div>
          </div>
        </section>
        
        {filteredFigures.length > 0 ? (
          <ScrollArea className="h-[calc(100vh-20rem)]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none pb-6" aria-label="Historical figures">
              {filteredFigures.map((figure) => (
                <li key={figure.id}>
                  <FigureCard figure={figure} />
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : (
          <div className="rounded-2xl border border-border/40 bg-card/80 p-7 text-center">
            <h3 className="font-serif text-2xl">No figures found</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Try different keywords or switch categories.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </main>
      
      <footer className="border-t border-border/30 py-6 mt-auto">
        <div className="container px-6 text-center">
          <p className="text-xs text-muted-foreground">
            Figures are linked to their periods and Scripture references. All sources are primary and freely accessible.
          </p>
        </div>
      </footer>
    </div>
  );
}