"use client";

import { news, type NewsEntry } from "@/data/siteConfig";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const typeStyle: Record<NewsEntry["type"], { label: string; dot: string; text: string }> = {
  paper:   { label: "paper",     dot: "bg-accent",      text: "text-accent" },
  award:   { label: "milestone", dot: "bg-amber-500",   text: "text-amber-700 dark:text-amber-300" },
  project: { label: "project",   dot: "bg-emerald-500", text: "text-emerald-700 dark:text-emerald-300" },
  talk:    { label: "talk",      dot: "bg-rose-500",    text: "text-rose-700 dark:text-rose-300" },
  general: { label: "update",    dot: "bg-text-muted",  text: "text-text-secondary" },
};

export default function LatestNews() {
  return (
    <Section id="news" number="02" title="Recent activity">
      <RevealStagger
        as="ul"
        staggerChildren={0.11}
        className="divide-y divide-border border-t border-border"
      >
        {news.map((entry, i) => {
          const s = typeStyle[entry.type];
          return (
            <RevealItem
              key={i}
              as="li"
              offset={24}
              duration={0.75}
              className="group py-4 grid grid-cols-[72px_1fr] sm:grid-cols-[72px_96px_1fr] items-baseline gap-x-4"
            >
              <span className="font-mono text-[12px] text-text-muted tabular-nums">
                {entry.date}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} aria-hidden />
                <span className={`font-mono text-[11px] uppercase tracking-wider ${s.text}`}>
                  {s.label}
                </span>
              </span>
              <span className="text-[14.5px] text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                {entry.content}
                {entry.link && (
                  <>
                    {" "}
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2 font-medium"
                    >
                      [{entry.linkText}]
                    </a>
                  </>
                )}
              </span>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </Section>
  );
}
