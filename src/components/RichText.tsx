import { glossary } from '@/data/glossary';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface RichTextProps {
  content: string;
}

export function RichText({ content }: RichTextProps) {
  // Sort glossary keys by length descending so longer phrases match first
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);

  if (terms.length === 0) return <>{content}</>;

  // Build regex to match terms (case insensitive)
  const regex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

  const parts = content.split(regex);

  return (
    <TooltipProvider>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const definition = glossary[lowerPart];

        if (definition) {
          return (
            <Tooltip key={i} delayDuration={300}>
              <TooltipTrigger className="underline decoration-dotted underline-offset-4 decoration-primary cursor-help text-foreground font-medium">
                {part}
              </TooltipTrigger>
              <TooltipContent className="max-w-[250px] text-sm leading-snug">
                {definition}
              </TooltipContent>
            </Tooltip>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </TooltipProvider>
  );
}
