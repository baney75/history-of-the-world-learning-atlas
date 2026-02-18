import { useRef } from 'react';
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

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

      {period.imageUrl && (
        <motion.div 
          variants={itemVariants} 
          style={{ y: imageY }}
          className="relative h-80 md:h-[28rem] rounded-3xl overflow-hidden"
        >
          <img
            src={period.imageUrl}
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
              {period.title}
            </h1>
            <p className="text-xl text-muted-foreground italic mt-3">{period.subtitle}</p>
          </div>
        </motion.div>
      )}

      {!period.imageUrl && (
        <motion.div variants={itemVariants}>
          <div className="space-y-3">
            <Badge variant="secondary" className="text-xs">
              {period.era}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
              {period.title}
            </h1>
            <p className="text-xl text-muted-foreground italic">{period.subtitle}</p>
          </div>
        </motion.div>
      )}

      {period.quote && (
        <motion.div variants={itemVariants}>
          <Card className="bg-muted/20 border-primary/10 overflow-hidden">
            <CardContent className="pt-10 pb-8 px-8">
              <blockquote className="relative">
                <Quote className="absolute -top-4 -left-2 h-12 w-12 text-primary/10" />
                <p className="font-serif text-xl md:text-2xl italic text-foreground/90 pl-10 leading-relaxed">
                  {period.quote}
                </p>
                {period.quoteSource && (
                  <footer className="mt-5 pl-10">
                    <cite className="text-sm text-primary font-medium not-italic tracking-wide">
                      — {period.quoteSource}
                    </cite>
                  </footer>
                )}
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <Card className="border-border/30">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {period.description}
            </p>
            {period.scripturalContext && (
              <div className="mt-6 pt-5 border-t border-border/30">
                <span className="scripture-label">Scripture</span>
                <p className="font-serif text-base italic text-foreground/80 mt-1.5 leading-relaxed">
                  {period.scripturalContext}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {learningPrompt && (
        <motion.div variants={itemVariants}>
          <Card className="border-border/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2.5">
                <Compass className="h-4.5 w-4.5 text-primary" />
                <CardTitle className="text-lg font-medium">Learning Compass</CardTitle>
              </div>
              <CardDescription className="text-sm">A focused lens to guide this section of the timeline.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{learningPrompt}</p>
            </CardContent>
          </Card>
        </motion.div>
      )}

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

      {period.keyEvents.length > 0 && (
        <motion.div variants={itemVariants}>
          <Card className="border-border/30">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Key Events</CardTitle>
              <CardDescription className="text-sm">
                Significant events during this period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[340px] pr-4">
                {period.keyEvents.map((event, index) => (
                  <TimelineEvent key={event.id} event={event} index={index} />
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <Card className="border-border/30">
          <CardContent className="pt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button variant="outline" onClick={onPrevious} disabled={!hasPrevious} className="justify-between">
              <span className="inline-flex items-center gap-1.5"><ChevronLeft className="h-4 w-4" /> Previous Period</span>
              <span className="text-xs text-muted-foreground">Review</span>
            </Button>
            <Button variant="outline" onClick={onNext} disabled={!hasNext} className="justify-between">
              <span className="inline-flex items-center gap-1.5">Next Period <ChevronRight className="h-4 w-4" /></span>
              <span className="text-xs text-muted-foreground">Continue</span>
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-border/30">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5">
              {period.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
