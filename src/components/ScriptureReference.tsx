interface ScriptureReferenceProps {
  reference: string;
  text?: string;
}

export function ScriptureReference({ reference, text }: ScriptureReferenceProps) {
  return (
    <div className="relative inline-flex flex-col items-start pl-5">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
      <span className="scripture-label">
        Scripture
      </span>
      {text && (
        <p className="font-serif text-lg italic text-foreground/90 mt-1.5 leading-relaxed">
          "{text}"
        </p>
      )}
      <cite className="text-sm text-primary font-medium not-italic mt-2 tracking-wide">
        — {reference}
      </cite>
    </div>
  );
}