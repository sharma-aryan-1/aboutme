"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { withAssetBase } from "@/lib/assetPath";

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: ScholarIcon, href: siteConfig.scholar, label: "Scholar" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dot grid for hero only */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Monogram avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-lg shadow-accent-glow">
              <span
                className="text-4xl md:text-5xl font-medium text-white tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {siteConfig.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-text-primary tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-3 text-lg sm:text-xl text-text-secondary max-w-xl"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Research interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {siteConfig.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-accent-soft text-accent border border-accent/10"
                >
                  {interest}
                </span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6 flex items-center gap-1 justify-center md:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                             text-text-secondary hover:text-accent hover:bg-accent-soft
                             transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="mx-2 w-px h-5 bg-border" />
              <a
                href={withAssetBase(siteConfig.resumeUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                Resume &darr;
              </a>
            </motion.div>

            {/* Currently */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 text-sm text-text-secondary"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Currently: {siteConfig.currently}
            </motion.p>
          </div>
        </div>
      </div>

      <motion.a
        href="#news"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent transition-colors"
        style={{ animation: "chevron-bounce 2s ease-in-out infinite" }}
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
