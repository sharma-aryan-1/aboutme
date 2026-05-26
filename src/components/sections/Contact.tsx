"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { withAssetBase } from "@/lib/assetPath";
import Section from "@/components/ui/Section";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const channels = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: GithubIcon, label: "GitHub", value: "sharma-aryan-1", href: siteConfig.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "sharmaaryan25", href: siteConfig.linkedin },
  { icon: ScholarIcon, label: "Scholar", value: "Aryan Sharma", href: siteConfig.scholar },
];

export default function Contact() {
  return (
    <Section id="contact" number="08" title="Get in touch">
      <div className="space-y-8">
        <Reveal as="p" offset={24} className="text-[15px] text-text-secondary leading-relaxed max-w-xl">
          I&apos;m always open to a conversation about research, interesting
          engineering problems, or summer-2026 internship opportunities in
          AI / ML / DS. The fastest way to reach me is email.
        </Reveal>

        <Reveal variant="mask" offset={36} duration={1.0}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-baseline gap-2 font-display text-3xl sm:text-5xl text-text-primary hover:text-accent transition-colors break-all"
          >
            {siteConfig.email}
            <ArrowUpRight
              size={24}
              className="text-text-muted group-hover:text-accent shrink-0 translate-y-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </a>
        </Reveal>

        <RevealStagger
          as="div"
          staggerChildren={0.1}
          className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-4"
        >
          {channels.map(({ icon: Icon, label, value, href }) => (
            <RevealItem key={label} offset={20} duration={0.7}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-2 border-b border-border hover:border-accent transition-colors"
              >
                <Icon size={14} className="text-text-muted group-hover:text-accent transition-colors" />
                <span className="section-label">{label}</span>
                <span className="ml-auto text-[14px] text-text-secondary group-hover:text-text-primary transition-colors truncate">
                  {value}
                </span>
              </a>
            </RevealItem>
          ))}

          <RevealItem offset={20} duration={0.7}>
            <div className="flex items-center gap-3 py-2 border-b border-border">
              <MapPin size={14} className="text-text-muted" />
              <span className="section-label">Based in</span>
              <span className="ml-auto text-[14px] text-text-secondary">
                {siteConfig.location}
              </span>
            </div>
          </RevealItem>
          <RevealItem offset={20} duration={0.7}>
            <div className="flex items-center gap-3 py-2 border-b border-border">
              <Phone size={14} className="text-text-muted" />
              <span className="section-label">Phone</span>
              <span className="ml-auto text-[14px] text-text-secondary font-mono">
                {siteConfig.phone}
              </span>
            </div>
          </RevealItem>
        </RevealStagger>

        <Reveal offset={20} className="pt-2">
          <a
            href={withAssetBase(siteConfig.resumeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-accent text-accent-ink text-[13px] font-semibold hover:bg-accent-hover transition-colors"
          >
            Download résumé
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
