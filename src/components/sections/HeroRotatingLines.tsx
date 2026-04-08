"use client";

import { useCallback, useEffect, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroQuote } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 10_000;

function QuoteBlock({ item }: { item: HeroQuote }) {
  return (
    <>
      <p className="text-base text-text-secondary/90 leading-relaxed text-center md:text-left">
        {item.quote}
      </p>
      <p
        className="mt-2 text-sm font-medium text-text-secondary/75 text-center md:text-left"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {item.author}
      </p>
    </>
  );
}

export default function HeroRotatingLines({ lines }: { lines: HeroQuote[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + lines.length) % lines.length);
  }, [lines.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % lines.length);
  }, [lines.length]);

  useEffect(() => {
    if (reduceMotion || lines.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % lines.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [reduceMotion, lines.length]);

  if (lines.length === 0) return null;

  const current = lines[index] ?? lines[0];
  const showNav = lines.length > 1;

  const quoteBody = reduceMotion ? (
    <QuoteBlock item={current} />
  ) : (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${current.quote}-${current.author}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <QuoteBlock item={current} />
      </motion.div>
    </AnimatePresence>
  );

  const onCarouselKeyDown = (e: ReactKeyboardEvent) => {
    if (!showNav) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div
      className={cn(
        "relative mt-3 max-w-xl mx-auto md:mx-0 rounded-xl",
        showNav &&
          "outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      tabIndex={showNav ? 0 : undefined}
      onKeyDown={onCarouselKeyDown}
    >
      <div
        className={cn("flex items-start gap-2", showNav && "md:gap-3")}
      >
        {showNav && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous quote"
            className="shrink-0 mt-0.5 p-1.5 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-soft transition-colors"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>
        )}

        <div className="min-w-0 flex-1">{quoteBody}</div>

        {showNav && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next quote"
            className="shrink-0 mt-0.5 p-1.5 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-soft transition-colors"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        )}
      </div>

      {showNav && (
        <div
          className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4"
          role="group"
          aria-label="Choose a quote"
        >
          {lines.map((line, i) => (
            <button
              key={`${line.author}-${i}`}
              type="button"
              aria-current={i === index ? "true" : undefined}
              aria-label={`Show quote by ${line.author}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                i === index
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-border hover:bg-text-secondary/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
