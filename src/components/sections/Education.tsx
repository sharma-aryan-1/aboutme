"use client";

import { education } from "@/data/education";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export default function Education() {
  return (
    <Section id="education" number="06" title="Education">
      <RevealStagger as="ol" staggerChildren={0.16} className="space-y-10">
        {education.map((e) => (
          <RevealItem
            key={e.degree}
            as="li"
            offset={32}
            duration={0.85}
            className="border-l-2 border-accent/50 pl-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-display text-xl sm:text-2xl text-text-primary">
                {e.institution}
              </h3>
              <span className="font-mono text-[11px] text-text-muted whitespace-nowrap">
                {e.startYear} to {e.endYear}
              </span>
            </div>
            <p className="text-[14px] text-text-secondary mb-2">
              {e.degree}
              {e.gpa && (
                <>
                  <span className="text-text-muted">, </span>
                  <span className="font-mono text-[12px] text-text-muted">
                    GPA {e.gpa}
                  </span>
                </>
              )}
              <span className="text-text-muted">, </span>
              <span className="font-mono text-[12px] text-text-muted">
                {e.location}
              </span>
            </p>
            <ul className="text-[14px] text-text-secondary leading-relaxed space-y-1.5 mt-2">
              {e.details.map((d, j) => (
                <li
                  key={j}
                  className="grid grid-cols-[28px_1fr] items-baseline gap-x-2"
                >
                  <span className="idx tabular-nums">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
