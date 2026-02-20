import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import type { HistoricalPeriod } from '@/types/history';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { TimelineEvent } from './TimelineCard';
import { ArrowLeft, ChevronLeft, ChevronRight, Compass, ExternalLink, Quote, Users } from 'lucide-react';

interface PeriodDetailProps {
  period: HistoricalPeriod;
  onBack: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  sequenceLabel?: string;
  learningPrompt?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      ease: 'easeOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function resolveAssetUrl(url?: string): string | undefined {
  if (!url) {
    return undefined;
  }

  if (url.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${url.slice(1)}`;
  }

  return url;
}

const sourceTypeLabel: Record<HistoricalPeriod['sources'][number]['type'], string> = {
  bible: 'Scripture',
  archaeological: 'Archaeology',
  theological: 'Theology',
  historical: 'History',
  primary: 'Primary Source',
  academic: 'Academic',
};

function sourceHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function formatSourceCitation(title: string, url: string, accessDate: Date): string {
  const accessDateLabel = accessDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `${title}. Retrieved ${accessDateLabel}, from ${url}`;
}

export function PeriodDetail({
  period,
  onBack,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
  sequenceLabel,
  learningPrompt,
}: PeriodDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copiedSourceUrl, setCopiedSourceUrl] = useState<string | null>(null);
  const citationAccessDate = useMemo(() => new Date(), []);
  const imageSrc = resolveAssetUrl(period.imageUrl);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  async function handleCopyCitation(citation: string, sourceUrl: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedSourceUrl(sourceUrl);
      window.setTimeout(() => setCopiedSourceUrl((current) => (current === sourceUrl ? null : current)), 1800);
    } catch {
      setCopiedSourceUrl(null);
    }
  }

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Go back to timeline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Timeline
          </Button>
          {sequenceLabel && (
            <Badge variant="outline" className="text-xs border-border/40">
              View: {sequenceLabel}
            </Badge>
          )}
        </div>
      </motion.div>

      {imageSrc && (
        <motion.div 
          variants={itemVariants} 
          style={{ y: imageY }}
          className="relative h-80 md:h-[28rem] rounded-3xl overflow-hidden"
        >
          <img
            src={imageSrc}
            alt={period.imageAlt || period.title}
            className="w-full h-[110%] object-cover -translate-y-[5%]"
            width={1200}
            height={600}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <Badge variant="secondary" className="text-xs mb-3 bg-background/50 backdrop-blur-sm border-0">
              {period.era}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {period.title}
            </h1>
            <p className="text-xl text-muted-foreground italic mt-3">{period.subtitle}</p>
          </div>
        </motion.div>
      )}

      {!imageSrc && (
        <motion.div variants={itemVariants}>
          <div className="space-y-3">
            <Badge variant="secondary" className="text-xs">
              {period.era}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {period.title}
            </h1>
            <p className="text-xl text-muted-foreground italic">{period.subtitle}</p>
          </div>
        </motion.div>
      )}

      {period.quote && (
        <motion.div variants={itemVariants}>
          <div className="relative py-6 md:py-10 px-4 md:px-12 rounded-3xl bg-gradient-to-br from-secondary/50 to-background border border-border/40 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
            <div className="absolute -right-8 -top-8 text-primary/[0.03] rotate-12">
              <Quote className="w-64 h-64" />
            </div>
            <blockquote className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
              <div className="shrink-0 hidden md:block pt-2">
                 <span className="font-serif text-8xl leading-[0.5] text-primary/30">"</span>
              </div>
              <div>
                <Quote className="h-8 w-8 text-primary/20 mb-3 md:hidden" />
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground/90 leading-tight md:leading-snug text-balance">
                  {period.quote}
                </p>
                {period.quoteSource && (
                  <footer className="mt-6">
                    <cite className="text-sm md:text-base text-primary/80 font-medium tracking-wide uppercase not-italic">
                      — {period.quoteSource}
                    </cite>
                  </footer>
                )}
              </div>
            </blockquote>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">

          <motion.div variants={itemVariants}>
            <section className="prose prose-stone dark:prose-invert max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-medium m-0">Historical Overview</h2>
                <div className="h-px bg-border flex-1 ml-4 hidden sm:block" />
              </div>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                <span className="drop-cap">{period.description.charAt(0)}</span>
                {period.description.slice(1)}
              </p>
              
              {period.scripturalContext && (
                <div className="mt-8 p-6 rounded-2xl bg-card border border-border/50 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent/40" />
                  <span className="scripture-label block mb-2">Scriptural Context</span>
                  <p className="font-serif text-lg md:text-xl italic text-foreground/80 leading-relaxed m-0">
                    {period.scripturalContext}
                  </p>
                </div>
              )}
            </section>
          </motion.div>

          {learningPrompt && (
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl border-2 border-primary/10 bg-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80">Learning Compass</h3>
                  </div>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-foreground/80 pl-12">{learningPrompt}</p>
              </div>
            </motion.div>
          )}

          {period.keyEvents.length > 0 && (
            <motion.div variants={itemVariants} className="mt-4">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-medium m-0">Key Events</h2>
              </div>
              <div className="bg-card rounded-2xl border border-border/40 p-1">
                <ScrollArea className="h-[400px] px-5 py-4">
                  <div className="pr-4 mt-2">
                    {period.keyEvents.map((event, index) => (
                      <TimelineEvent key={event.id} event={event} index={index} />
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </motion.div>
          )}
        </div>

        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
          {period.keyFigures.length > 0 && (
        <motion.div variants={itemVariants}>
          <Card className="border-border/30">
            <CardHeader>
              <div className="flex items-center gap-2.5">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg font-medium">Key Figures</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {period.keyFigures.map((figure) => (
                <div key={figure.id} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{figure.name}</h4>
                      {figure.title && (
                        <p className="text-xs text-muted-foreground mt-0.5">{figure.title}</p>
                      )}
                    </div>
                    {figure.lifespan && (
                      <Badge variant="outline" className="text-xs border-border/40">
                        {figure.lifespan}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{figure.significance}</p>
                  {figure.scripturalReference && (
                    <Badge variant="secondary" className="text-xs">
                      {figure.scripturalReference}
                    </Badge>
                  )}
                  <Separator className="last:hidden opacity-40" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}
        </div>
      </div>

      <motion.div variants={itemVariants}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" onClick={onPrevious} disabled={!hasPrevious} className="flex-1 h-auto py-3 px-4">
            <span className="flex flex-col items-start w-full">
              <span className="inline-flex items-center gap-1.5 text-sm"><ChevronLeft className="h-4 w-4" /> Previous Period</span>
              <span className="text-xs text-muted-foreground ml-5.5">Review</span>
            </span>
          </Button>
          <Button variant="outline" onClick={onNext} disabled={!hasNext} className="flex-1 h-auto py-3 px-4">
            <span className="flex flex-col items-end w-full">
              <span className="inline-flex items-center gap-1.5 text-sm">Next Period <ChevronRight className="h-4 w-4" /></span>
              <span className="text-xs text-muted-foreground mr-5.5">Continue</span>
            </span>
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-border/30">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Sources</CardTitle>
            <CardDescription className="text-sm">
              Direct links with copy-ready citation text for faster study notes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {period.sources.map((source) => {
                const citation = formatSourceCitation(source.title, source.url, citationAccessDate);
                const host = sourceHostname(source.url);
                const isCopied = copiedSourceUrl === source.url;

                return (
                  <li key={source.url} className="rounded-xl border border-border/30 p-3 sm:p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-xs border-border/40">
                        {sourceTypeLabel[source.type]}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {host}
                      </Badge>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {source.title}
                    </a>
                    <p className="mt-2 text-xs text-muted-foreground break-all">
                      {citation}
                    </p>
                    <div className="mt-3">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          void handleCopyCitation(citation, source.url);
                        }}
                      >
                        {isCopied ? 'Citation copied' : 'Copy citation'}
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
