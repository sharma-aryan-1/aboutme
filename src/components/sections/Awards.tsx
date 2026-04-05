"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { awards } from "@/data/awards";

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-text-primary mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Awards &amp; Honors
        </motion.h2>

        <div className="space-y-3">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-start gap-3 py-2"
            >
              <Trophy size={14} className="text-amber-400 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <span className="text-sm font-medium text-text-primary">
                    {award.title}
                  </span>
                  <span className="text-xs text-text-secondary font-mono shrink-0">
                    {award.year}
                  </span>
                </div>
                {award.description && (
                  <p className="text-xs text-text-secondary mt-0.5">
                    {award.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
