"use client";

import { siteConfig } from "@/data/siteConfig";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export default function About() {
  const [lead, ...rest] = siteConfig.bio;
  return (
    <Section id="about" number="01" title="About">
      <RevealStagger staggerChildren={0.18} className="space-y-6">
        <RevealItem
          as="p"
          offset={40}
          duration={0.95}
          className="font-display text-2xl sm:text-3xl leading-[1.25] text-text-primary"
        >
          {lead}
        </RevealItem>

        {rest.map((paragraph, i) => (
          <RevealItem
            key={i}
            as="p"
            offset={32}
            duration={0.85}
            className="text-[15px] leading-relaxed text-text-secondary"
          >
            {paragraph}
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
