"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-text-primary mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4"
            >
              {/* Company letter avatar */}
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0 text-text-secondary font-bold text-sm">
                {exp.company.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <h3 className="font-medium text-text-primary text-sm">{exp.role}</h3>
                  <span className="text-xs text-text-secondary font-mono shrink-0">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-sm text-accent">{exp.company}</p>
                <p className="text-xs text-text-secondary mb-2">{exp.location}</p>

                <ul className="space-y-1">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-sm text-text-secondary leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
