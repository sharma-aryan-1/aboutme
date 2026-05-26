"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";
import { withAssetBase } from "@/lib/assetPath";
import HeroRotatingLines from "@/components/sections/HeroRotatingLines";

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: ScholarIcon, href: siteConfig.scholar, label: "Scholar" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const maskReveal = {
  hidden: { opacity: 0, y: 32, clipPath: "inset(100% 0% 0% 0%)" },
  show: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
};

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative isolate min-h-[92vh] flex items-center px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden />
      <div
        className="hero-blob -top-20 -left-20 sm:left-[-80px] sm:top-[35%]"
        aria-hidden
      />

      <div className="relative max-w-3xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
          }}
          className="flex flex-col gap-7"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: EASE }}
            className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur"
          >
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500 ping-dot" />
            <span className="section-label !text-text-secondary !tracking-wider">
              {siteConfig.currently}
            </span>
          </motion.div>

          <motion.h1
            variants={maskReveal}
            transition={{ duration: 1.05, ease: EASE }}
            className="font-display text-6xl sm:text-7xl md:text-8xl font-normal text-text-primary leading-[1.08] tracking-tight pb-2"
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: EASE }}
            className="text-lg sm:text-xl text-text-secondary -mt-1"
          >
            {siteConfig.role}.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: EASE }}
            className="max-w-xl text-[15.5px] leading-relaxed text-text-secondary"
          >
            {siteConfig.heroLead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-wrap gap-x-3 gap-y-2"
          >
            {siteConfig.researchInterests.map((interest, i) => (
              <span
                key={interest}
                className="text-[12.5px] font-mono text-text-muted"
              >
                {interest}
                {i < siteConfig.researchInterests.length - 1 && (
                  <span className="ml-3 text-text-muted/40">/</span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex flex-wrap items-center gap-2 pt-2"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-[13px] text-text-secondary hover:text-text-primary hover:border-accent hover:bg-surface transition-colors"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
            <a
              href={withAssetBase(siteConfig.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-accent text-accent-ink text-[13px] font-semibold hover:bg-accent-hover transition-colors"
            >
              Résumé
              <ArrowUpRight
                size={14}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: EASE }}
            className="mt-8 max-w-xl pl-4 border-l-2 border-accent/50"
          >
            <HeroRotatingLines lines={siteConfig.heroRotatingLines} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
