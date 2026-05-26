"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "scale" | "mask";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span" | "p" | "h2" | "h3";
  /** How far the element starts off-screen, in px. Default 36. */
  offset?: number;
  /** Trigger reveal earlier. Negative margin pulls trigger upward. */
  margin?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function buildVariants(variant: Variant, offset: number): Variants {
  switch (variant) {
    case "left":
      return {
        hidden: { opacity: 0, x: -offset },
        show: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: offset },
        show: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.96, y: offset / 2 },
        show: { opacity: 1, scale: 1, y: 0 },
      };
    case "mask":
      return {
        hidden: {
          opacity: 0,
          y: offset,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        show: {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
        },
      };
    case "up":
    default:
      return {
        hidden: { opacity: 0, y: offset },
        show: { opacity: 1, y: 0 },
      };
  }
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.9,
  className,
  as = "div",
  offset = 36,
  margin = "-10% 0px -10% 0px",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants = buildVariants(variant, offset);

  const Component = motion[as] as typeof motion.div;

  if (reduceMotion) {
    const Fallback = as as keyof React.JSX.IntrinsicElements;
    return <Fallback className={className}>{children}</Fallback>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin, amount: 0.15 }}
      variants={variants}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

/** Stagger container — wrap a list to animate its direct children in sequence. */
export function RevealStagger({
  children,
  className,
  as = "div",
  staggerChildren = 0.13,
  delayChildren = 0,
  margin = "-8% 0px -8% 0px",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  staggerChildren?: number;
  delayChildren?: number;
  margin?: string;
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (reduceMotion) {
    const Fallback = as as keyof React.JSX.IntrinsicElements;
    return <Fallback className={className}>{children}</Fallback>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin, amount: 0.1 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren, delayChildren } },
      }}
    >
      {children}
    </Component>
  );
}

/** Use with RevealStagger as a direct child. */
export function RevealItem({
  children,
  className,
  variant = "up",
  offset = 32,
  duration = 0.8,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  offset?: number;
  duration?: number;
  as?: "div" | "li" | "p" | "span";
}) {
  const variants = buildVariants(variant, offset);
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={cn(className)}
      variants={variants}
      transition={{ duration, ease: EASE }}
    >
      {children}
    </Component>
  );
}
