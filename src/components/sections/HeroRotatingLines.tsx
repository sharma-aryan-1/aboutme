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
      <p className="text-[13.5px] leading-relaxed text-text-secondary italic">
        &ldquo;{item.quote}&rdquo;
      </p>
      <p className="mt-2 text-[11px] font-mono text-text-muted uppercase tracking-wider">
        / {item.author}
      </p>
    </>
  );
}

export default function HeroRotatingLines({ lines }: { lines: HeroQuote[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const [slotHeight, setSlotHeight] = useState(0);

  const measure = useCallback(() => {
    const root = measureRef.current;
    if (!root) return;
    let max = 0;
    for (const child of Array.from(root.children)) {
      const el = child as HTMLElement;
      max = Math.max(max, Math.ceil(el.getBoundingClientRect().height));
    }
    if (max > 0) setSlotHeight(max);
  }, []);

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + lines.length) % lines.length),
    [lines.length]
  );
  const goNext = useCallback(
    () => setIndex((i) => (i + 1) % lines.length),
    [lines.length]
  );

  useEffect(() => {
    if (reduceMotion || lines.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % lines.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [reduceMotion, lines.length]);

  useLayoutEffect(() => {
    measure();
  }, [measure, lines]);

  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts?.ready) return;
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) measure();
    });
    return () => {
      cancelled = true;
    };
  }, [measure]);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    if (measureRef.current) ro.observe(measureRef.current);
    return () => ro.disconnect();
  }, [measure]);

  if (lines.length === 0) return null;

  const current = lines[index] ?? lines[0];
  const showNav = lines.length > 1;

  const onKey = (e: ReactKeyboardEvent) => {
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
      tabIndex={showNav ? 0 : undefined}
      onKeyDown={onKey}
      className={cn(
        "group relative rounded-lg outline-none",
        "focus-visible:ring-2 focus-visible:ring-accent/40"
      )}
    >
      <div className="flex items-start gap-2">
        {showNav && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous quote"
            className="shrink-0 mt-0.5 p-1 rounded text-text-muted hover:text-accent transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <ChevronLeft size={14} strokeWidth={1.75} />
          </button>
        )}

        <div
          className="min-w-0 flex-1 relative overflow-hidden"
          style={slotHeight > 0 ? { height: slotHeight } : undefined}
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            ref={measureRef}
            aria-hidden
            className="absolute inset-0 invisible pointer-events-none -z-10"
          >
            {lines.map((line, i) => (
              <div key={i}>
                <QuoteBlock item={line} />
              </div>
            ))}
          </div>

          {reduceMotion ? (
            <div className="absolute inset-0">
              <QuoteBlock item={current} />
            </div>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${current.author}-${index}`}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <QuoteBlock item={current} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {showNav && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next quote"
            className="shrink-0 mt-0.5 p-1 rounded text-text-muted hover:text-accent transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <ChevronRight size={14} strokeWidth={1.75} />
          </button>
        )}
      </div>
    </div>
  );
}
