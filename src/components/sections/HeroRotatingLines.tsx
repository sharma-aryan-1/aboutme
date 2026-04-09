"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
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
  const columnRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [quoteSlotMinHeight, setQuoteSlotMinHeight] = useState(0);

  const measureQuoteHeights = useCallback(() => {
    const root = measureRef.current;
    if (!root || lines.length === 0) return;
    let max = 0;
    for (const child of Array.from(root.children)) {
      const el = child as HTMLElement;
      max = Math.max(max, Math.ceil(el.getBoundingClientRect().height));
    }
    if (max > 0) setQuoteSlotMinHeight(max);
  }, [lines]);

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

  useLayoutEffect(() => {
    measureQuoteHeights();
  }, [measureQuoteHeights, lines]);

  useEffect(() => {
    const col = columnRef.current;
    if (!col || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measureQuoteHeights());
    ro.observe(col);
    return () => ro.disconnect();
  }, [measureQuoteHeights]);

  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts?.ready) return;
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) measureQuoteHeights();
    });
    return () => {
      cancelled = true;
    };
  }, [measureQuoteHeights]);

  if (lines.length === 0) return null;

  const current = lines[index] ?? lines[0];
  const showNav = lines.length > 1;

  const quoteBody = reduceMotion ? (
    <div className="absolute left-0 right-0 top-0">
      <QuoteBlock item={current} />
    </div>
  ) : (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${current.quote}-${current.author}`}
        className="absolute left-0 right-0 top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
        "relative mt-3 max-w-xl mx-auto md:mx-0 rounded-xl group",
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
            className="shrink-0 mt-0.5 p-1.5 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-soft transition-colors transition-opacity duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>
        )}

        <div
          ref={columnRef}
          className="min-w-0 flex-1 shrink-0 relative overflow-hidden min-h-[7rem]"
          aria-live="polite"
          aria-atomic="true"
          style={
            quoteSlotMinHeight > 0
              ? {
                  height: quoteSlotMinHeight,
                  minHeight: quoteSlotMinHeight,
                }
              : undefined
          }
        >
          <div
            ref={measureRef}
            aria-hidden
            className="absolute left-0 top-0 w-full opacity-0 pointer-events-none -z-10"
            style={{ visibility: "hidden" }}
          >
            {lines.map((line, i) => (
              <div key={`${line.author}-${i}-measure`} className="w-full">
                <QuoteBlock item={line} />
              </div>
            ))}
          </div>
          <div className="relative h-full w-full">{quoteBody}</div>
        </div>

        {showNav && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next quote"
            className="shrink-0 mt-0.5 p-1.5 rounded-lg text-text-secondary hover:text-accent hover:bg-accent-soft transition-colors transition-opacity duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        )}
      </div>
    </div>
  );
}
