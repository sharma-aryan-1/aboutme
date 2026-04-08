"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";

const contactLinks = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, desc: "Ask questions or explore collaboration" },
  { icon: GithubIcon, label: "GitHub", href: siteConfig.github, desc: "Open source projects and code" },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.linkedin, desc: "Professional network" },
  { icon: ScholarIcon, label: "Google Scholar", href: siteConfig.scholar, desc: "Publications and citations" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl font-medium text-text-primary mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Get in Touch
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg">
            I&apos;m always open to discussing research collaborations,
            interesting projects, or opportunities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl
                           bg-surface border border-border
                           hover:border-accent/30 hover:bg-surface-hover
                           transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon size={16} className="text-text-secondary group-hover:text-accent transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-text-secondary truncate">{link.desc}</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-text-secondary group-hover:text-accent transition-colors shrink-0" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
