"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  "ML/DL": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "AI Models": "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "Research": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "RAG Systems": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
};

const categoryGradients: Record<string, string> = {
  "ML/DL": "from-purple-500/20 via-violet-500/10 to-transparent",
  "AI Models": "from-pink-500/20 via-rose-500/10 to-transparent",
  "Research": "from-blue-500/20 via-indigo-500/10 to-transparent",
  "RAG Systems": "from-emerald-500/20 via-teal-500/10 to-transparent",
};

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = project.image && !imgError;

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="col-span-full"
      >
        <Link href={`/projects/${project.slug}`} className="group block">
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface hover:border-accent/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Visual area */}
              <div className={`relative h-48 md:h-auto min-h-[200px] bg-gradient-to-br ${categoryGradients[project.category] || categoryGradients["ML/AI"]} overflow-hidden`}>
                {hasImage ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-text-primary/10 font-mono mb-2">{project.title.split(" ").map(w => w[0]).join("")}</div>
                      <div className="flex flex-wrap gap-1.5 justify-center px-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs rounded bg-background/40 text-text-secondary backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded border ${categoryColors[project.category] || ""}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-text-secondary">{project.date}</span>
                </div>

                <h3
                  className="text-xl font-medium text-text-primary group-hover:text-accent transition-colors mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <span
                      onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, "_blank"); }}
                      className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors cursor-pointer"
                    >
                      <GithubIcon size={13} /> Code
                    </span>
                  )}
                  {project.liveUrl && (
                    <span
                      onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, "_blank"); }}
                      className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors cursor-pointer"
                    >
                      <ExternalLink size={13} /> Demo
                    </span>
                  )}
                  <span className="ml-auto flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="rounded-xl border border-border bg-surface hover:border-accent/30 transition-all duration-300 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 text-xs font-medium rounded border ${categoryColors[project.category] || ""}`}>
              {project.category}
            </span>
            <span className="text-xs text-text-secondary">{project.date}</span>
          </div>

          <h3
            className="font-semibold text-text-primary group-hover:text-accent transition-colors mb-1.5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h3>

          <p className="text-sm text-text-secondary mb-3 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded bg-surface-hover text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-border">
            {project.githubUrl && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(project.githubUrl, "_blank"); }}
                className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors cursor-pointer"
              >
                <GithubIcon size={12} /> Code
              </span>
            )}
            {project.liveUrl && (
              <span
                onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, "_blank"); }}
                className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors cursor-pointer"
              >
                <ExternalLink size={12} /> Demo
              </span>
            )}
            <span className="ml-auto flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Details <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
