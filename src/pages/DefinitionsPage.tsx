import { useMemo, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { definitions, getRelatedDefinitions } from '@/data/definitions';
import { getAllFigures } from '@/data/historical-periods';
import { historicalPeriods } from '@/data/historical-periods';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import type { Definition } from '@/types/history';
import { Search, BookOpen, ArrowLeft, ExternalLink } from 'lucide-react';

type DefinitionCategory = 'all' | 'theology' | 'historical' | 'political';

const categoryLabels: Record<DefinitionCategory, string> = {
  all: 'All Terms',
  theology: 'Theology',
  historical: 'Historical',
  political: 'Political',
};

interface DefinitionCardProps {
  definition: Definition;
  onSelect: (def: Definition) => void;
}

function DefinitionCard({ definition, onSelect }: DefinitionCardProps) {
  const relatedDefs = getRelatedDefinitions(definition.id);
  
  return (
    <article className="group rounded-2xl border border-border/40 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:border-primary/30">
      <header className="mb-3">
        <button
          type="button"
          onClick={() => onSelect(definition)}
          className="text-left w-full"
        >
          <h3 className="font-serif text-lg font-medium leading-tight hover:text-primary transition">
            {definition.term}
          </h3>
        </button>
        <Badge variant="outline" className="mt-2 text-xs">
          {categoryLabels[definition.category as DefinitionCategory] || definition.category}
        </Badge>
      </header>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {definition.shortDefinition}
      </p>
      
      {definition.scriptureReferences.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-1">Scripture:</p>
          <p className="text-xs text-primary/80">{definition.scriptureReferences.slice(0, 3).join('; ')}{definition.scriptureReferences.length > 3 ? '...' : ''}</p>
        </div>
      )}
      
      {relatedDefs.length > 0 && (
        <div className="pt-3 border-t border-border/30">
          <p className="text-xs text-muted-foreground mb-1">Related terms:</p>
          <div className="flex flex-wrap gap-1">
            {relatedDefs.slice(0, 4).map(rel => (
              <Badge key={rel.id} variant="secondary" className="text-xs">
                {rel.term}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

interface DefinitionDetailProps {
  definition: Definition;
  onBack: () => void;
}

function DefinitionDetail({ definition, onBack }: DefinitionDetailProps) {
  const allFigures = useMemo(() => getAllFigures(), []);
  const relatedDefs = getRelatedDefinitions(definition.id);
  
  const relatedFigureData = useMemo(() => {
    return allFigures.filter(f => definition.relatedFigures.includes(f.id));
  }, [allFigures, definition.relatedFigures]);
  
  const relatedPeriodData = useMemo(() => {
    return historicalPeriods.filter(p => definition.relatedPeriods.includes(p.id));
  }, [definition.relatedPeriods]);
  
  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="text-sm">Back to definitions</span>
      </button>
      
      <header>
        <Badge variant="outline" className="mb-2">
          {categoryLabels[definition.category as DefinitionCategory] || definition.category}
        </Badge>
        <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">{definition.term}</h1>
      </header>
      
      <section className="prose prose-sm max-w-none">
        <p className="text-base leading-relaxed">{definition.fullDefinition}</p>
      </section>
      
      {definition.scriptureReferences.length > 0 && (
        <section className="rounded-xl border border-border/40 bg-card/50 p-4">
          <h2 className="font-serif text-lg font-medium mb-3">Scripture References</h2>
          <ul className="space-y-1">
            {definition.scriptureReferences.map((ref) => (
              <li key={ref}>
                <a
                  href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=ESV`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  {ref}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
      
      {relatedFigureData.length > 0 && (
        <section className="rounded-xl border border-border/40 bg-card/50 p-4">
          <h2 className="font-serif text-lg font-medium mb-3">Related Figures</h2>
          <div className="flex flex-wrap gap-2">
            {relatedFigureData.map(figure => (
              <Link
                key={figure.id}
                to="/figures"
                search={{ highlight: figure.id }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-sm hover:border-primary/30 transition"
              >
                {figure.name}
                {figure.title && <span className="text-muted-foreground text-xs">({figure.title})</span>}
              </Link>
            ))}
          </div>
        </section>
      )}
      
      {relatedPeriodData.length > 0 && (
        <section className="rounded-xl border border-border/40 bg-card/50 p-4">
          <h2 className="font-serif text-lg font-medium mb-3">Appears in Periods</h2>
          <div className="flex flex-wrap gap-2">
            {relatedPeriodData.map(period => (
              <Link
                key={period.id}
                to="/period/$periodId"
                params={{ periodId: period.id }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-sm hover:border-primary/30 transition"
              >
                {period.title}
              </Link>
            ))}
          </div>
        </section>
      )}
      
      {relatedDefs.length > 0 && (
        <section className="rounded-xl border border-border/40 bg-card/50 p-4">
          <h2 className="font-serif text-lg font-medium mb-3">Related Terms</h2>
          <div className="flex flex-wrap gap-2">
            {relatedDefs.map(rel => (
              <Badge
                key={rel.id}
                variant="secondary"
                className="cursor-pointer hover:bg-primary/20 transition"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {rel.term}
              </Badge>
            ))}
          </div>
        </section>
      )}
      
      {definition.sources.length > 0 && (
        <section className="rounded-xl border border-border/40 bg-card/50 p-4">
          <h2 className="font-serif text-lg font-medium mb-3">Sources</h2>
          <ul className="space-y-1">
            {definition.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  {source.title}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default function DefinitionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DefinitionCategory>('all');
  const [selectedDefinition, setSelectedDefinition] = useState<Definition | null>(null);
  
  const filteredDefinitions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    return definitions.filter(def => {
      const matchesCategory = activeCategory === 'all' || def.category === activeCategory;
      
      if (!matchesCategory) return false;
      
      if (!normalizedQuery) return true;
      
      const searchText = [
        def.term,
        def.shortDefinition,
        def.fullDefinition,
        ...def.relatedTerms,
      ].join(' ').toLowerCase();
      
      return searchText.includes(normalizedQuery);
    });
  }, [activeCategory, searchQuery]);
  
  const categoryOptions: DefinitionCategory[] = ['all', 'theology', 'historical', 'political'];
  
  if (selectedDefinition) {
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
              <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
              <h1 className="font-serif text-xl font-medium tracking-tight">Definitions</h1>
            </div>
            <div className="w-20" />
          </div>
        </header>
        
        <main className="container px-6 py-8">
          <DefinitionDetail
            definition={selectedDefinition}
            onBack={() => setSelectedDefinition(null)}
          />
        </main>
      </div>
    );
  }
  
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
            <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
            <h1 className="font-serif text-xl font-medium tracking-tight">Definitions</h1>
          </div>
          <div className="w-20" />
        </div>
      </header>
      
      <main className="container px-6 py-8">
        <section className="mb-8 rounded-2xl border border-border/40 bg-card/70 p-4 shadow-sm backdrop-blur-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 flex-1">
              <label htmlFor="definitions-search" className="sr-only">Search definitions</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="definitions-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search terms, definitions, related concepts..."
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
              <Badge variant="secondary" className="px-2.5 py-1">{filteredDefinitions.length} terms</Badge>
            </div>
          </div>
        </section>
        
        {filteredDefinitions.length > 0 ? (
          <ScrollArea className="h-[calc(100vh-20rem)]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none pb-6" aria-label="Definitions">
              {filteredDefinitions.map((def) => (
                <li key={def.id}>
                  <DefinitionCard definition={def} onSelect={setSelectedDefinition} />
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : (
          <div className="rounded-2xl border border-border/40 bg-card/80 p-7 text-center">
            <h3 className="font-serif text-2xl">No terms found</h3>
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
            Definitions link to Scripture, figures, and periods. All sources are primary and freely accessible.
          </p>
        </div>
      </footer>
    </div>
  );
}