"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  className?: string;
  children: ReactNode;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: 36, clipPath: "inset(100% 0% 0% 0%)" },
  show: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
};

const hairlineVariants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1 },
};

export default function Section({
  id,
  number,
  title,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-28 px-6", className)}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-12% 0px -12% 0px", amount: 0.2 }}
          className="mb-12"
        >
          <motion.div
            variants={headerVariants}
            transition={{ duration: 0.75, ease: EASE }}
            className="flex items-baseline gap-3 overflow-hidden pb-1"
          >
            <span className="section-number tabular-nums">{number}</span>
            <span className="section-label">/</span>
            <motion.h2
              variants={titleVariants}
              transition={{ duration: 0.95, delay: 0.15, ease: EASE }}
              className="font-display text-3xl sm:text-4xl font-normal text-text-primary leading-[1.15] pb-1"
            >
              {title}
            </motion.h2>
          </motion.div>
          <motion.span
            variants={hairlineVariants}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            style={{ originX: 0 }}
            className="mt-5 block h-px bg-gradient-to-r from-accent via-accent to-border"
            aria-hidden
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
