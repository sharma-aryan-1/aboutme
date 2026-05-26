"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/projects";
import Section from "@/components/ui/Section";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <Section id="projects" number="03" title="Selected projects">
      <RevealStagger as="ul" staggerChildren={0.18} className="space-y-3">
        {projects.map((p, i) => (
          <RevealItem
            key={p.slug}
            as="li"
            variant={i % 2 === 0 ? "left" : "right"}
            offset={28}
            duration={0.9}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group relative block overflow-hidden rounded-xl border border-border bg-surface hover:border-accent transition-all duration-300 p-5 sm:p-6"
            >
              <span className="card-stripe" aria-hidden />

              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="section-label !text-accent">{p.category}</span>
                {p.status && (
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    / {p.status}
                  </span>
                )}
                <span className="ml-auto font-mono text-[11px] text-text-muted">
                  {p.date}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-text-primary mb-2 leading-tight group-hover:text-accent transition-colors flex items-start gap-2">
                <span>{p.title}</span>
                <ArrowUpRight
                  size={18}
                  className="mt-2 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300 shrink-0"
                />
              </h3>

              <p className="text-[14.5px] text-text-secondary leading-relaxed mb-4">
                {p.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-background border border-border text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 6 && (
                    <span className="text-[11px] font-mono text-text-muted self-center">
                      +{p.techStack.length - 6}
                    </span>
                  )}
                </div>

                <div className="ml-auto flex items-center gap-3 text-[12px]">
                  {p.githubUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(p.githubUrl, "_blank");
                      }}
                      className="inline-flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
                    >
                      <GithubIcon size={12} /> code
                    </button>
                  )}
                  {p.liveUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(p.liveUrl, "_blank");
                      }}
                      className="inline-flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} /> demo
                    </button>
                  )}
                  {p.paperUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(p.paperUrl, "_blank");
                      }}
                      className="inline-flex items-center gap-1 text-text-muted hover:text-accent transition-colors"
                    >
                      <FileText size={12} /> paper
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
