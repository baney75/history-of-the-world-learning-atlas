import { motion, type Variants } from 'motion/react';
import type { HistoricalPeriod } from '@/types/history';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Calendar, Users } from 'lucide-react';

interface TimelineCardProps {
  period: HistoricalPeriod;
  index: number;
  onSelect: (periodId: string) => void;
  isFeatured?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
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

export function TimelineCard({ period, index, onSelect, isFeatured = false }: TimelineCardProps) {
  const imageSrc = resolveAssetUrl(period.imageUrl);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index}
      className="h-full"
    >
      <Card
        className={`group cursor-pointer overflow-hidden transition-all duration-300 
          hover:shadow-[0_8px_30px_rgb(143,170,143,0.12)] 
          hover:-translate-y-1 
          focus-within:ring-2 focus-within:ring-ring/50 border-border/30 
          card-accent relative h-full flex flex-col
          ${isFeatured ? 'hover:shadow-[0_12px_40px_rgb(143,170,143,0.15)]' : ''}`}
        onClick={() => onSelect(period.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(period.id);
          }
        }}
        aria-label={`View details for ${period.title}`}
      >
        {imageSrc && (
          <div className={`relative overflow-hidden ${isFeatured ? 'h-56 md:h-64' : 'h-40'}`}>
            <img
              src={imageSrc}
              alt={period.imageAlt || period.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              width={1200}
              height={600}
              loading={index < 2 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <Badge variant="secondary" className="text-xs bg-background/70 backdrop-blur-sm border-0 text-muted-foreground">
                {period.era}
              </Badge>
            </div>
          </div>
        )}
        <CardHeader className={`pb-3 pt-4 ${isFeatured ? 'md:pt-5' : ''}`}>
          {!period.imageUrl && (
            <Badge variant="secondary" className="text-xs w-fit mb-2">
              {period.era}
            </Badge>
          )}
          <CardTitle className={`font-serif leading-snug group-hover:text-primary transition-colors duration-300 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {period.title}
          </CardTitle>
          <CardDescription className="text-sm italic text-muted-foreground">
            {period.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pb-5 flex-1 flex flex-col">
          <p className={`text-sm text-muted-foreground line-clamp-3 leading-relaxed ${isFeatured ? 'text-base' : ''}`}>
            {period.description}
          </p>
          
          {period.quote && (
            <blockquote className="border-l-2 border-primary/25 pl-3 py-1 mt-auto">
              <p className="text-xs italic text-foreground/70 line-clamp-2 leading-relaxed">
                "{period.quote}"
              </p>
              {period.quoteSource && (
                <cite className="text-xs text-muted-foreground not-italic block mt-1">
                  — {period.quoteSource}
                </cite>
              )}
            </blockquote>
          )}

          {period.scripturalContext && !period.quote && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              <span>{period.scripturalContext}</span>
            </div>
          )}

          <Separator className="opacity-40 mt-auto" />

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              <span>{period.keyFigures.length} figures</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{period.keyEvents.length} events</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TimelineEventProps {
  event: HistoricalPeriod['keyEvents'][0];
  index: number;
}

const eventVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export function TimelineEvent({ event, index }: TimelineEventProps) {
  return (
    <motion.div
      variants={eventVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className="relative pl-6 pb-5 last:pb-0"
    >
      <div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background shadow-sm" />
      {index > 0 && (
        <div className="absolute left-[3.5px] top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent" />
      )}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-primary">{event.date}</span>
          {event.location && (
            <span className="text-xs text-muted-foreground">
              {event.location}
            </span>
          )}
        </div>
        <h4 className="font-medium text-sm">{event.name}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {event.description}
        </p>
        {event.scripturalReference && (
          <Badge variant="outline" className="text-xs border-border/40">
            {event.scripturalReference}
          </Badge>
        )}
      </div>
    </motion.div>
  );
}
