"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl font-semibold text-text-primary mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            About
          </h2>

          <div className="space-y-4">
            {siteConfig.bio.map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
