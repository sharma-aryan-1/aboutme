"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const maskReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32, clipPath: "inset(100% 0% 0% 0%)" },
  animate: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  transition: { duration: 0.85, delay, ease: EASE },
});

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp(0, 12)}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-accent transition-colors mb-10 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to projects
          </Link>
        </motion.div>

        <motion.div {...fadeUp(0.05)}>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="section-label !text-accent">{project.category}</span>
            {project.status && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                / {project.status}
              </span>
            )}
            <span className="ml-auto font-mono text-[11px] text-text-muted">
              {project.date}
            </span>
          </div>

          <motion.h1
            {...maskReveal(0.1)}
            className="font-display text-4xl sm:text-5xl text-text-primary mb-4 leading-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="text-[16px] leading-relaxed text-text-secondary mb-6 max-w-2xl"
          >
            {project.shortDescription}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-2 mb-12">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-border text-[13px] text-text-secondary hover:text-text-primary hover:border-accent hover:bg-surface transition-colors"
              >
                <GithubIcon size={14} />
                Source
                <ArrowUpRight size={12} className="text-text-muted" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-accent text-accent-ink text-[13px] font-semibold hover:bg-accent-hover transition-colors"
              >
                <ExternalLink size={14} />
                Live demo
              </a>
            )}
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-border text-[13px] text-text-secondary hover:text-text-primary hover:border-accent hover:bg-surface transition-colors"
              >
                <FileText size={14} />
                Paper
                <ArrowUpRight size={12} className="text-text-muted" />
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <h2 className="section-label !text-accent mb-3">Overview</h2>
          <p className="text-[15px] text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <h2 className="section-label !text-accent mb-4">Key results</h2>
          <ol className="space-y-3">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="grid grid-cols-[32px_1fr] items-baseline gap-x-3 py-2 border-b border-border last:border-b-0"
              >
                <span className="idx tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14.5px] text-text-secondary leading-relaxed">
                  {h}
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <h2 className="section-label !text-accent mb-4">Tech stack</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[12.5px] font-mono rounded-md bg-surface border border-border text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {project.tags.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12"
          >
            <h2 className="section-label !text-accent mb-4">Topics</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-background border border-border text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
