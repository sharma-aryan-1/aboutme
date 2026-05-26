"use client";

import { experiences } from "@/data/experience";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <Section id="experience" number="05" title="Experience">
      <RevealStagger as="ol" className="relative" staggerChildren={0.18}>
        {experiences.map((e, i) => {
          const isLast = i === experiences.length - 1;
          return (
            <RevealItem
              key={`${e.company}-${i}`}
              as="li"
              offset={28}
              duration={0.85}
              className="grid grid-cols-[20px_1fr] gap-x-5 sm:gap-x-6 pb-12 last:pb-6"
            >
              <div className="relative">
                {/* Dot, centered on the spine. */}
                <span
                  className="block w-3 h-3 mt-2 rounded-full bg-background border-2 border-accent relative z-10"
                  aria-hidden
                />
                {/* Spine runs from below this dot down to the bottom of the row;
                    for non-last items it bleeds into the next li to meet its dot. */}
                <span
                  className={`absolute left-[5px] top-[22px] w-px bg-border ${
                    isLast ? "bottom-2" : "bottom-[-12px]"
                  }`}
                  aria-hidden
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-[16px] font-semibold text-text-primary">
                    {e.role},{" "}
                    <span className="font-medium text-text-secondary">
                      {e.company}
                    </span>
                  </h3>
                  <span className="font-mono text-[11px] text-text-muted whitespace-nowrap">
                    {e.startDate} to {e.endDate}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-text-muted mb-4">
                  {e.location}
                </p>

                <ul className="space-y-3 text-[14.5px] text-text-secondary leading-relaxed">
                  {e.description.map((d, j) => (
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
              </div>
            </RevealItem>
          );
        })}
      </RevealStagger>
    </Section>
  );
}
