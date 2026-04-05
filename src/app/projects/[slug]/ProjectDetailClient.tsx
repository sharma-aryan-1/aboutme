"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";

const categoryGradients: Record<string, string> = {
  "ML/DL": "from-purple-500/20 via-violet-500/10 to-transparent",
  "AI Models": "from-pink-500/20 via-rose-500/10 to-transparent",
  "Research": "from-blue-500/20 via-indigo-500/10 to-transparent",
  "RAG Systems": "from-emerald-500/20 via-teal-500/10 to-transparent",
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = project.image && !imgError;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3 text-xs text-text-secondary">
            <span className="px-2 py-0.5 font-medium rounded bg-accent-soft text-accent">
              {project.category}
            </span>
            <span>{project.date}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-medium text-text-primary mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded bg-surface-hover text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg
                           border border-border hover:border-accent/40 hover:text-accent transition-colors"
              >
                <GithubIcon size={14} />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg
                           bg-accent text-white hover:bg-accent-hover transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg
                           border border-border hover:border-accent/40 hover:text-accent transition-colors"
              >
                <FileText size={14} />
                Paper
              </a>
            )}
          </div>
        </motion.div>

        {/* Visual header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`relative rounded-xl bg-gradient-to-br ${categoryGradients[project.category] || categoryGradients["ML/AI"]} border border-border overflow-hidden mb-10 ${hasImage ? "" : "h-48 sm:h-64"}`}
        >
          {hasImage ? (
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-text-primary/10 font-mono">
                  {project.title.split(" ").map(w => w[0]).join("")}
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center mt-3 px-4">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded bg-background/40 text-text-secondary backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-lg font-semibold text-text-primary mb-3">Overview</h2>
          <p className="text-text-secondary leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-lg font-semibold text-text-primary mb-3">Key Results</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-4 rounded-xl bg-surface border border-border"
              >
                <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-text-secondary">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-text-primary mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm rounded-md bg-surface-hover text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
