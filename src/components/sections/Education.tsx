"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-text-primary mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Education
        </motion.h2>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              {/* Letter avatar */}
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                {edu.institution.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <h3 className="font-medium text-text-primary text-sm">
                    {edu.institution}
                  </h3>
                  <span className="text-xs text-text-secondary font-mono shrink-0">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{edu.degree}</p>
                {edu.details.length > 0 && (
                  <p className="text-xs text-text-secondary mt-1">
                    {edu.details.join(" · ")}
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
