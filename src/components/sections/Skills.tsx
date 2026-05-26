"use client";

import { skillCategories } from "@/data/skills";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <Section id="skills" number="07" title="Technical skills">
      <RevealStagger
        staggerChildren={0.13}
        className="grid sm:grid-cols-[140px_1fr] gap-x-6 gap-y-6 sm:gap-y-4"
      >
        {skillCategories.map((cat) => (
          <RevealItem key={cat.name} offset={24} duration={0.75} className="contents">
            <dt className="section-label sm:pt-1">{cat.name}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-[12.5px] font-mono rounded-md bg-surface border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </dd>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
