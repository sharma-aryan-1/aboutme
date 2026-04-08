"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { withAssetBase } from "@/lib/assetPath";

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: ScholarIcon, href: siteConfig.scholar, label: "Google Scholar" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay },
  });

  const fadeScale = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay },
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <motion.div {...fadeScale(0.2)} className="shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg shadow-accent-glow">
              <span
                className="text-4xl md:text-5xl font-medium text-white tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
                aria-hidden
              >
                {siteConfig.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          </motion.div>

          <div className="text-center md:text-left max-w-xl">
            <motion.h1
              id="hero-heading"
              {...fadeUp(0.3)}
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-text-primary tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-3 text-lg sm:text-xl text-text-primary font-medium leading-snug"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.p
              {...fadeUp(0.45)}
              className="mt-2 text-base text-text-secondary"
            >
              {siteConfig.subtitle}
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-glow/40 hover:bg-accent-hover transition-colors"
              >
                View projects
              </a>
              <a
                href={withAssetBase(siteConfig.resumeUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-accent/40 hover:bg-surface-hover transition-colors"
              >
                Résumé
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.65)} className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                Focus areas
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {siteConfig.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent-soft text-accent border border-accent/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.75)}
              className="mt-6 flex items-center gap-1 justify-center md:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-accent hover:bg-accent-soft transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.9 }}
              className="mt-6 text-sm text-text-secondary"
            >
              <span
                className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 align-middle motion-safe:animate-pulse"
                aria-hidden
              />
              Currently: {siteConfig.currently}
            </motion.p>
          </div>
        </div>
      </div>

      <motion.a
        href="#news"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reduceMotion ? { duration: 0 } : { delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent transition-colors chevron-hint"
        aria-label="Scroll to latest news"
      >
        <ChevronDown size={20} aria-hidden />
      </motion.a>
    </section>
  );
}
