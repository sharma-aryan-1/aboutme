"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Code, ChevronDown, Trophy } from "lucide-react";
import { publications, topicColors } from "@/data/publications";
import { siteConfig } from "@/data/siteConfig";

export default function Publications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline justify-between mb-8"
        >
          <h2
            className="text-2xl font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Publications
          </h2>
          {siteConfig.scholar && (
            <a
              href={siteConfig.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-secondary hover:text-accent transition-colors"
            >
              Google Scholar &rarr;
            </a>
          )}
        </motion.div>

        <div className="space-y-3">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-surface p-5
                         hover:border-accent/20 transition-colors"
            >
              {/* Award badge */}
              {pub.award && (
                <div className="flex items-center gap-1.5 mb-2">
                  <Trophy size={12} className="text-amber-400" />
                  <span className="text-xs font-medium text-amber-400">
                    {pub.award}
                  </span>
                </div>
              )}

              <h3 className="font-medium text-text-primary leading-snug">
                {pub.title}
              </h3>

              <p className="text-sm text-text-secondary mt-1.5">
                {pub.authors.map((author, j) => (
                  <span key={j}>
                    {j > 0 && ", "}
                    <span
                      className={
                        author === siteConfig.name
                          ? "text-accent font-medium"
                          : ""
                      }
                    >
                      {author}
                    </span>
                  </span>
                ))}
              </p>

              <div className="flex items-center flex-wrap gap-2 mt-3">
                <span className="text-xs font-medium text-text-secondary bg-surface-hover px-2 py-0.5 rounded">
                  {pub.venue}
                </span>

                {pub.topics.map((topic) => (
                  <span
                    key={topic}
                    className={`text-xs font-medium px-2 py-0.5 rounded ${topicColors[topic] || "bg-accent-soft text-accent"}`}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-3">
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    <FileText size={12} /> Paper
                  </a>
                )}
                {pub.codeUrl && (
                  <a
                    href={pub.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    <Code size={12} /> Code
                  </a>
                )}
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                  className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors ml-auto cursor-pointer"
                >
                  Abstract
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${expandedIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 pt-3 border-t border-border text-sm text-text-secondary leading-relaxed">
                      {pub.abstract}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
