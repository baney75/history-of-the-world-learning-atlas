import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { historicalPeriods, getPeriodById } from "@/data/historical-periods";
import { PeriodDetail } from "@/components/PeriodDetail";
import { TimelineCard } from "@/components/TimelineCard";
import { SkipToContent } from "@/components/Accessibility";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { HistoricalPeriod } from "@/types/history";
import { Book, Moon, Sparkles, Sun, Users, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

type ViewMode = "timeline" | "detail";
type NarrativeLens =
  | "all"
  | "covenant"
  | "civilizations"
  | "church"
  | "america";
type SortMode = "canonical" | "intensity" | "compact";

const THEME_STORAGE_KEY = "history-world.theme";
const IMMERSIVE_STORAGE_KEY = "history-world.immersive";

const lensOptions: Array<{
  id: NarrativeLens;
  label: string;
  description: string;
}> = [
  {
    id: "all",
    label: "Full Canon",
    description: "Trace the complete story from Creation to the present age.",
  },
  {
    id: "covenant",
    label: "Covenant Arc",
    description: "Follow covenant milestones and redemptive turning points.",
  },
  {
    id: "civilizations",
    label: "Civilizations",
    description: "Focus on empires, institutions, and cultural formation.",
  },
  {
    id: "church",
    label: "Church Story",
    description: "Track Christendom, doctrine, and reform through history.",
  },
  {
    id: "america",
    label: "American Legacy",
    description: "Study the U.S. founding and modern liberty struggles.",
  },
];

const lensPeriodIds: Record<Exclude<NarrativeLens, "all">, string[]> = {
  covenant: [
    "creation",
    "patriarchal-era",
    "exodus-period",
    "israelite-kingdom",
    "life-of-christ",
    "early-church",
    "modern-era",
  ],
  civilizations: [
    "ancient-near-east",
    "ancient-egypt",
    "greek-philosophy",
    "roman-empire",
    "middle-ages",
    "world-wars",
    "cold-war",
  ],
  church: [
    "life-of-christ",
    "early-church",
    "church-fathers",
    "constantinian-era",
    "middle-ages",
    "reformation",
    "modern-era",
  ],
  america: ["american-founding", "world-wars", "cold-war", "modern-era"],
};

const sortOptions: Array<{ id: SortMode; label: string }> = [
  { id: "canonical", label: "Canonical Order" },
  { id: "intensity", label: "Most Content-Rich" },
  { id: "compact", label: "Shortest Reads" },
];

function readThemePreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark";
}

function readImmersivePreference(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(IMMERSIVE_STORAGE_KEY) === "1";
}

function matchesLens(period: HistoricalPeriod, lens: NarrativeLens): boolean {
  if (lens === "all") {
    return true;
  }

  return lensPeriodIds[lens].includes(period.id);
}

function buildSearchText(period: HistoricalPeriod): string {
  return [
    period.title,
    period.subtitle,
    period.era,
    period.description,
    period.scripturalContext ?? "",
    period.quote ?? "",
    period.quoteSource ?? "",
    period.keyFigures
      .map(
        (figure) =>
          `${figure.name} ${figure.title ?? ""} ${figure.significance}`,
      )
      .join(" "),
    period.keyEvents
      .map(
        (event) =>
          `${event.name} ${event.date} ${event.description} ${event.location ?? ""}`,
      )
      .join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function intensityScore(period: HistoricalPeriod): number {
  return (
    period.keyEvents.length * 3 +
    period.keyFigures.length * 2 +
    period.sources.length +
    (period.quote ? 1 : 0)
  );
}

function estimateReadMinutes(period: HistoricalPeriod): number {
  const words =
    period.description.split(/\s+/).length +
    period.keyEvents.reduce(
      (count, event) => count + event.description.split(/\s+/).length,
      0,
    );
  return Math.max(2, Math.round(words / 120));
}

function buildLearningPrompt(period: HistoricalPeriod): string {
  const firstEvent = period.keyEvents[0]?.name;
  const secondEvent = period.keyEvents[1]?.name;
  const figureHint = period.keyFigures[0]?.name;

  if (firstEvent && secondEvent && figureHint) {
    return `Connect ${firstEvent} to ${secondEvent}, then explain how ${figureHint} embodies this period's central lesson.`;
  }

  if (firstEvent && secondEvent) {
    return `Compare ${firstEvent} and ${secondEvent}. What changed in worldview, worship, and social order?`;
  }

  if (firstEvent) {
    return `Start with ${firstEvent}. Identify the core conflict, the response, and the lasting consequence.`;
  }

  return "Identify the dominant worldview in this era, then describe one enduring lesson for Christian discipleship today.";
}

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(readThemePreference);
  const [immersiveMode, setImmersiveMode] = useState<boolean>(
    readImmersivePreference,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLens, setActiveLens] = useState<NarrativeLens>("all");
  const [sortMode, setSortMode] = useState<SortMode>("canonical");

  const searchInputRef = useRef<HTMLInputElement>(null);

  const canonicalIndexMap = useMemo(
    () => new Map(historicalPeriods.map((period, index) => [period.id, index])),
    [],
  );

  const activeLensMeta =
    lensOptions.find((lens) => lens.id === activeLens) ?? lensOptions[0];

  const filteredPeriods = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const lensFiltered = historicalPeriods.filter((period) => {
      if (!matchesLens(period, activeLens)) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return buildSearchText(period).includes(normalizedQuery);
    });

    if (sortMode === "canonical") {
      return lensFiltered.sort(
        (a, b) =>
          (canonicalIndexMap.get(a.id) ?? 0) -
          (canonicalIndexMap.get(b.id) ?? 0),
      );
    }

    if (sortMode === "intensity") {
      return lensFiltered.sort((a, b) => intensityScore(b) - intensityScore(a));
    }

    return lensFiltered.sort(
      (a, b) => estimateReadMinutes(a) - estimateReadMinutes(b),
    );
  }, [activeLens, canonicalIndexMap, searchQuery, sortMode]);

  const selectedPeriod = selectedPeriodId
    ? getPeriodById(selectedPeriodId)
    : null;
  const selectedInFiltered =
    !!selectedPeriod &&
    filteredPeriods.some((period) => period.id === selectedPeriod.id);

  const detailSequence = selectedInFiltered
    ? filteredPeriods
    : historicalPeriods;
  const selectedDetailIndex = selectedPeriod
    ? detailSequence.findIndex((period) => period.id === selectedPeriod.id)
    : -1;
  const hasPreviousDetail = selectedDetailIndex > 0;
  const hasNextDetail =
    selectedDetailIndex >= 0 && selectedDetailIndex < detailSequence.length - 1;

  const totalVisibleEvents = filteredPeriods.reduce(
    (sum, period) => sum + period.keyEvents.length,
    0,
  );
  const totalVisibleFigures = filteredPeriods.reduce(
    (sum, period) => sum + period.keyFigures.length,
    0,
  );
  const estimatedVisibleMinutes = filteredPeriods.reduce(
    (sum, period) => sum + estimateReadMinutes(period),
    0,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    window.localStorage.setItem(
      IMMERSIVE_STORAGE_KEY,
      immersiveMode ? "1" : "0",
    );
  }, [immersiveMode]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if (typing) {
        return;
      }

      if (viewMode === "timeline" && event.key === "/") {
        event.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (
        viewMode === "detail" &&
        event.key === "ArrowLeft" &&
        hasPreviousDetail
      ) {
        event.preventDefault();
        const previous = detailSequence[selectedDetailIndex - 1];
        if (previous) {
          setSelectedPeriodId(previous.id);
        }
      }

      if (
        viewMode === "detail" &&
        event.key === "ArrowRight" &&
        hasNextDetail
      ) {
        event.preventDefault();
        const next = detailSequence[selectedDetailIndex + 1];
        if (next) {
          setSelectedPeriodId(next.id);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    detailSequence,
    hasNextDetail,
    hasPreviousDetail,
    selectedDetailIndex,
    viewMode,
  ]);

  const handleSelectPeriod = (periodId: string) => {
    setSelectedPeriodId(periodId);
    setViewMode("detail");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleBack = () => {
    setViewMode("timeline");
    setSelectedPeriodId(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handlePreviousPeriod = () => {
    if (!hasPreviousDetail) {
      return;
    }

    const previous = detailSequence[selectedDetailIndex - 1];
    if (previous) {
      setSelectedPeriodId(previous.id);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const handleNextPeriod = () => {
    if (!hasNextDetail) {
      return;
    }

    const next = detailSequence[selectedDetailIndex + 1];
    if (next) {
      setSelectedPeriodId(next.id);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveLens("all");
    setSortMode("canonical");
  };

  const handleSurpriseMe = () => {
    if (filteredPeriods.length === 0) {
      return;
    }

    const randomPeriod =
      filteredPeriods[Math.floor(Math.random() * filteredPeriods.length)];
    handleSelectPeriod(randomPeriod.id);
  };

  const toggleTheme = () => setIsDark((current) => !current);
  const toggleImmersiveMode = () => setImmersiveMode((current) => !current);

  const detailSequenceLabel = selectedInFiltered
    ? activeLensMeta.label
    : "Canonical Timeline";
  const detailPositionLabel =
    selectedDetailIndex >= 0
      ? `${selectedDetailIndex + 1} of ${detailSequence.length}`
      : undefined;
  const detailSequenceDisplay = detailPositionLabel
    ? `${detailSequenceLabel} (${detailPositionLabel})`
    : detailSequenceLabel;
  const isFilterActive =
    searchQuery.trim().length > 0 ||
    activeLens !== "all" ||
    sortMode !== "canonical";

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-background text-foreground">
        <SkipToContent />

        <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
          <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition"
            >
              <Book
                className="h-5 w-5 text-primary shrink-0"
                aria-hidden="true"
              />
              <h1 className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-tight leading-tight">
                History of the Western World
              </h1>
            </Link>
            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-1 mr-2">
                <Link
                  to="/figures"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-muted/50"
                >
                  <Users className="h-4 w-4" />
                  <span>Figures</span>
                </Link>
                <Link
                  to="/definitions"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-muted/50"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Definitions</span>
                </Link>
              </nav>
              <span className="caption text-muted-foreground hidden lg:block">
                From Creation to the Present Age
              </span>
              <Button
                variant={immersiveMode ? "secondary" : "outline"}
                size="sm"
                onClick={toggleImmersiveMode}
                className="gap-1.5"
                aria-label={
                  immersiveMode
                    ? "Disable immersive mode"
                    : "Enable immersive mode"
                }
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">
                  {immersiveMode ? "Immersive On" : "Immersive"}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
                className="text-muted-foreground hover:text-foreground"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </header>

        <main
          id="main-content"
          className="container px-6 py-8 md:py-10"
          tabIndex={-1}
        >
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {viewMode === "detail" && selectedPeriod
              ? `Viewing ${selectedPeriod.title}`
              : "Viewing timeline"}
          </div>

          <LayoutGroup>
            <AnimatePresence mode="wait">
              {viewMode === "timeline" ? (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="hero-texture rounded-[1.5rem] sm:rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14 mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="caption text-primary/80 mb-3 sm:mb-4">
                      The Story of God&apos;s Dealings with Mankind
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-4xl mx-auto">
                      History of the Western World
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 text-sm sm:text-base md:text-[1.08rem]">
                      Trace Scripture, civilizations, church history, and the
                      American founding through primary sources. Each era links
                      to figures, definitions, and direct references so you can
                      verify claims.
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center justify-center">
                      <div className="relative pl-5 sm:pl-6 max-w-xl text-left">
                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary/60 via-primary/35 to-transparent" />
                        <p className="font-serif italic text-foreground/80 leading-relaxed text-base sm:text-lg md:text-xl">
                          In the beginning, God created the heavens and the
                          earth.
                        </p>
                        <cite className="block mt-2 text-xs sm:text-sm text-primary font-semibold not-italic tracking-wide uppercase">
                          Genesis 1:1
                        </cite>
                      </div>
                    </div>
                  </motion.div>

                  {!immersiveMode && (
                    <section className="mb-8 rounded-2xl border border-border/40 bg-card/70 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">
                              Browse by Era
                            </span>
                          </div>
                          <label htmlFor="timeline-search" className="sr-only">
                            Search timeline
                          </label>
                          <input
                            id="timeline-search"
                            ref={searchInputRef}
                            type="search"
                            value={searchQuery}
                            onChange={(event) =>
                              setSearchQuery(event.target.value)
                            }
                            placeholder="Search history..."
                            className="h-11 sm:h-10 w-full rounded-xl border border-border/50 bg-background/80 px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/30"
                          />
                          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
                            {lensOptions.map((lens) => (
                              <button
                                key={lens.id}
                                type="button"
                                onClick={() => setActiveLens(lens.id)}
                                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition min-h-[40px] sm:min-h-[36px] ${
                                  activeLens === lens.id
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "border border-border/50 bg-background/80 text-muted-foreground hover:text-foreground hover:border-border"
                                }`}
                              >
                                {lens.label}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground hidden sm:block">
                            {activeLensMeta.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-2.5">
                          <select
                            value={sortMode}
                            onChange={(event) =>
                              setSortMode(event.target.value as SortMode)
                            }
                            className="h-11 sm:h-10 rounded-lg border border-border/45 bg-background px-3 text-sm text-foreground"
                            aria-label="Sort periods"
                          >
                            {sortOptions.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={handleSurpriseMe}
                            disabled={filteredPeriods.length === 0}
                            className="gap-1.5 h-11 sm:h-10 font-medium"
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span className="hidden xs:inline">
                              Surprise Me
                            </span>
                            <span className="xs:hidden">Random</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleClearFilters}
                            className="h-11 sm:h-10 hidden sm:flex"
                          >
                            Clear
                          </Button>
                        </div>
                      </div>

                      <Separator className="my-4 opacity-50" />

                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <Badge variant="secondary" className="px-2.5 py-1">
                          {filteredPeriods.length} periods
                        </Badge>
                        <Badge variant="outline" className="px-2.5 py-1">
                          {totalVisibleFigures} figures
                        </Badge>
                        <Badge variant="outline" className="px-2.5 py-1">
                          {totalVisibleEvents} events
                        </Badge>
                        <Badge
                          variant="outline"
                          className="px-2.5 py-1 hidden sm:inline-flex"
                        >
                          ~{estimatedVisibleMinutes} min
                        </Badge>
                        <Badge
                          variant="outline"
                          className="px-2.5 py-1 hidden md:inline-flex"
                        >
                          Press / to search
                        </Badge>
                      </div>
                    </section>
                  )}

                  {filteredPeriods.length > 0 ? (
                    <ScrollArea
                      className={
                        immersiveMode
                          ? "h-[calc(100vh-23rem)]"
                          : "h-[calc(100vh-30rem)] md:h-[calc(100vh-29rem)]"
                      }
                    >
                      <ul
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 list-none pb-6"
                        aria-label="Historical periods"
                      >
                        {filteredPeriods.map((period, index) => {
                          const isFeatured =
                            index % (activeLens === "all" ? 5 : 4) === 0;
                          return (
                            <li
                              key={period.id}
                              className={`${isFeatured ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-3"}`}
                            >
                              <TimelineCard
                                period={period}
                                index={index}
                                onSelect={handleSelectPeriod}
                                isFeatured={isFeatured}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  ) : (
                    <div className="rounded-2xl border border-border/40 bg-card/80 p-7 text-center">
                      <h3 className="font-serif text-2xl">No periods found</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Try different keywords, switch lens, or clear filters to
                        return to the full timeline.
                      </p>
                      {isFilterActive && (
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={handleClearFilters}
                        >
                          Reset Explorer
                        </Button>
                      )}
                    </div>
                  )}
                </motion.div>
              ) : (
                selectedPeriod && (
                  <motion.div
                    key="detail"
                    initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PeriodDetail
                      period={selectedPeriod}
                      onBack={handleBack}
                      onPrevious={handlePreviousPeriod}
                      onNext={handleNextPeriod}
                      hasPrevious={hasPreviousDetail}
                      hasNext={hasNextDetail}
                      sequenceLabel={detailSequenceDisplay}
                      learningPrompt={buildLearningPrompt(selectedPeriod)}
                    />
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </LayoutGroup>
        </main>

        <footer className="border-t border-border/30 py-8 mt-auto">
          <div className="container px-6 text-center">
            <p className="text-xs text-muted-foreground">
              Sourced from Scripture, primary documents, and freely accessible
              archives. No Wikipedia.
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-serif italic">
              Fiat justitia, ruat caelum — Let justice be done, though the
              heavens fall.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
