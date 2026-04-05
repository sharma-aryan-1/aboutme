"use client";

import { motion } from "framer-motion";
import { FileText, Award, Rocket, Mic, Sparkles } from "lucide-react";
import { news, type NewsEntry } from "@/data/siteConfig";

const typeIcons: Record<NewsEntry["type"], typeof FileText> = {
  paper: FileText,
  award: Award,
  project: Rocket,
  talk: Mic,
  general: Sparkles,
};

const typeColors: Record<NewsEntry["type"], string> = {
  paper: "text-blue-400",
  award: "text-amber-400",
  project: "text-emerald-400",
  talk: "text-pink-400",
  general: "text-accent",
};

export default function LatestNews() {
  return (
    <section id="news" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-text-primary mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Latest News
        </motion.h2>

        <div className="space-y-0">
          {news.map((entry, i) => {
            const Icon = typeIcons[entry.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4 py-3 group"
              >
                <div className="flex items-start gap-3 shrink-0">
                  <Icon size={14} className={`mt-1 ${typeColors[entry.type]}`} />
                  <span className="text-sm font-mono text-text-secondary w-16 shrink-0">
                    {entry.date}
                  </span>
                </div>

                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                  {entry.content}
                  {entry.link && (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1.5 text-accent hover:underline font-medium"
                    >
                      [{entry.linkText}]
                    </a>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
