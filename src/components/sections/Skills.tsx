"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { LayoutGrid, Code, Brain, Globe, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryMeta: Record<string, { icon: typeof Brain; label: string }> = {
  All: { icon: LayoutGrid, label: "All" },
  Languages: { icon: Code, label: "Languages" },
  "ML / AI": { icon: Brain, label: "ML / AI" },
  "Web & Backend": { icon: Globe, label: "Web & Backend" },
  "Tools & Infrastructure": { icon: Wrench, label: "Tools" },
};

const filterCategories = ["All", ...skillCategories.map((c) => c.name)];

function useFilterMagnification(
  mouseX: MotionValue<number>,
  ref: React.RefObject<HTMLElement | null>
) {
  const distance = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el) return 150;
    const bounds = el.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(
    distance,
    [-80, -40, 0, 40, 80],
    [1, 1.08, 1.18, 1.08, 1]
  );
  return useSpring(scale, { mass: 0.2, stiffness: 300, damping: 18 });
}

function FilterItem({
  category,
  isActive,
  mouseX,
  onClick,
}: {
  category: string;
  isActive: boolean;
  mouseX: MotionValue<number>;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const scale = useFilterMagnification(mouseX, ref);
  const meta = categoryMeta[category] || { icon: LayoutGrid, label: category };
  const Icon = meta.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ scale }}
      className={cn(
        "relative w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-200 origin-center cursor-pointer",
        isActive
          ? "text-white bg-white/[0.12]"
          : "text-neutral-300/80 hover:text-white"
      )}
      aria-label={`Filter: ${meta.label}`}
    >
      <Icon size={16} strokeWidth={1.8} />

      {isActive && (
        <motion.div
          layoutId="skill-filter-indicator"
          className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute -bottom-7 text-[10px] font-medium text-text-secondary bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border whitespace-nowrap pointer-events-none z-10"
        >
          {meta.label}
        </motion.span>
      )}
    </motion.button>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const mouseX = useMotionValue(Infinity);

  const allSkills = skillCategories.flatMap((c) => c.skills);
  const filtered =
    activeCategory === "All"
      ? allSkills
      : skillCategories.find((c) => c.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          <h2
            className="text-2xl font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Skills
          </h2>

          <div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="dock-pill inline-flex items-center gap-0.5 px-2 py-1.5 rounded-2xl backdrop-blur-xl border border-white/[0.08]"
          >
            {filterCategories.map((category) => (
              <FilterItem
                key={category}
                category={category}
                isActive={activeCategory === category}
                mouseX={mouseX}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filtered.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="px-3 py-1.5 text-sm rounded-md bg-surface-hover text-text-primary
                           hover:text-accent transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
