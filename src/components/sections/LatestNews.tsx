"use client";

import { motion } from "framer-motion";
import { news, type NewsEntry } from "@/data/siteConfig";

/** Short typographic codes — same timeline shape as before, without pictorial icons. */
const typeLabels: Record<NewsEntry["type"], string> = {
  paper: "P",
  award: "A",
  project: "B",
  talk: "T",
  general: "·",
};

const typeColors: Record<NewsEntry["type"], string> = {
  paper: "text-blue-400",
  award: "text-amber-400",
  project: "text-emerald-400",
  talk: "text-pink-400",
  general: "text-accent",
};

const typeTitles: Record<NewsEntry["type"], string> = {
  paper: "Publication",
  award: "Academic milestone",
  project: "Project",
  talk: "Talk",
  general: "Update",
};

export default function LatestNews() {
  return (
    <section id="news" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-text-primary mb-10"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Latest News
        </motion.h2>

        <div className="relative">
          <div
            className="absolute left-[15px] sm:left-[19px] top-1 bottom-1 w-px bg-border/80"
            aria-hidden
          />

          <ul className="space-y-0 list-none m-0 p-0">
            {news.map((entry, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative pl-11 sm:pl-14 py-4 group"
              >
                <span
                  className="absolute left-0 sm:left-1 top-[1.15rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface shadow-sm z-[1]"
                  title={typeTitles[entry.type]}
                  aria-hidden
                >
                  <span
                    className={`text-[11px] font-mono font-semibold tabular-nums leading-none ${typeColors[entry.type]}`}
                  >
                    {typeLabels[entry.type]}
                  </span>
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-xs font-mono text-text-secondary shrink-0 tabular-nums">
                    {entry.date}
                  </span>
                  <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
                    {entry.content}
                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1.5 text-accent hover:underline font-medium"
                      >
                        [{entry.linkText}]
                      </a>
                    )}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
