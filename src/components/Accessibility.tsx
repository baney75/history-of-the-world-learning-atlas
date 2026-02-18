import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SkipToContentProps {
  className?: string;
}

export function SkipToContent({ className }: SkipToContentProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50',
        className
      )}
      onClick={() => {
        const main = document.getElementById('main-content');
        main?.focus();
      }}
      aria-label="Skip to main content"
    >
      Skip to content
    </Button>
  );
}

export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive' | 'off';
}

export function LiveRegion({ message, politeness = 'polite' }: LiveRegionProps) {
  return (
    <div
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}