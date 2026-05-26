"use client";

import { ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export default function Publications() {
  return (
    <Section id="publications" number="04" title="Publications">
      <RevealStagger as="ul" staggerChildren={0.16} className="space-y-8">
        {publications.map((p) => (
          <RevealItem
            key={p.title}
            as="li"
            offset={36}
            duration={0.9}
            className="border-l-2 border-accent/50 pl-5"
          >
            <p className="font-mono text-[11px] text-text-muted mb-1">
              {p.month ? `${p.month} ${p.year}` : p.year}
              {" / "}
              <span className="text-text-secondary">{p.venue}</span>
              {p.meta && (
                <>
                  {" / "}
                  <span className="text-text-muted/70">{p.meta}</span>
                </>
              )}
            </p>

            <h3 className="font-display text-xl sm:text-2xl text-text-primary leading-snug mb-2">
              {p.paperUrl ? (
                <a
                  href={p.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-baseline gap-1.5"
                >
                  {p.title}
                  <ExternalLink
                    size={14}
                    className="text-text-muted shrink-0 translate-y-px"
                  />
                </a>
              ) : (
                p.title
              )}
            </h3>

            <p className="text-[13.5px] text-text-secondary mb-3">
              {p.authors.map((a, j) => (
                <span key={a}>
                  <span
                    className={
                      a === "Aryan Sharma"
                        ? "text-text-primary font-medium underline underline-offset-2 decoration-accent"
                        : ""
                    }
                  >
                    {a}
                  </span>
                  {j < p.authors.length - 1 && <span>, </span>}
                </span>
              ))}
            </p>

            <p className="text-[14px] text-text-secondary leading-relaxed">
              {p.abstract}
            </p>

            {p.topics.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-background border border-border text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
