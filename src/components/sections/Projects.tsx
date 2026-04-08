"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { LayoutGrid, Brain, Bot, FlaskConical, Database } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryMeta: Record<string, { icon: typeof Brain; label: string }> = {
  All: { icon: LayoutGrid, label: "All" },
  "ML/DL": { icon: Brain, label: "ML/DL" },
  "AI Models": { icon: Bot, label: "AI Models" },
  Research: { icon: FlaskConical, label: "Research" },
  "RAG Systems": { icon: Database, label: "RAG Systems" },
};

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
  staticFilters,
}: {
  category: string;
  isActive: boolean;
  mouseX: MotionValue<number>;
  onClick: () => void;
  staticFilters: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const scale = useFilterMagnification(mouseX, ref);
  const meta = categoryMeta[category] || categoryMeta["All"];
  const Icon = meta.icon;
  const [hovered, setHovered] = useState(false);

  const className = cn(
    "relative w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-200 origin-center cursor-pointer",
    isActive
      ? "text-white bg-white/[0.12]"
      : "text-neutral-300/80 hover:text-white"
  );

  const indicator = staticFilters ? (
    isActive ? <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-white" /> : null
  ) : (
    isActive ? (
      <motion.div
        layoutId="filter-indicator"
        className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    ) : null
  );

  const tooltip =
    hovered &&
    (staticFilters ? (
      <span className="absolute -bottom-7 text-[10px] font-medium text-text-secondary bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border whitespace-nowrap pointer-events-none z-10">
        {meta.label}
      </span>
    ) : (
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        className="absolute -bottom-7 text-[10px] font-medium text-text-secondary bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border whitespace-nowrap pointer-events-none z-10"
      >
        {meta.label}
      </motion.span>
    ));

  if (staticFilters) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={className}
        aria-label={`Filter: ${meta.label}`}
        aria-pressed={isActive}
      >
        <Icon size={16} strokeWidth={1.8} />
        {indicator}
        {tooltip}
      </button>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ scale }}
      className={className}
      aria-label={`Filter: ${meta.label}`}
      aria-pressed={isActive}
    >
      <Icon size={16} strokeWidth={1.8} />
      {indicator}
      {tooltip}
    </motion.button>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const mouseX = useMotionValue(Infinity);
  const prefersReducedMotion = useReducedMotion();
  const staticFilters = prefersReducedMotion === true;

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <h2
            className="text-2xl font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Selected Projects
          </h2>

          <div
            onMouseMove={(e) => {
              if (!staticFilters) mouseX.set(e.pageX);
            }}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="dock-pill inline-flex items-center gap-0.5 px-2 py-1.5 rounded-2xl backdrop-blur-xl border border-white/[0.08]"
          >
            {projectCategories.map((category) => (
              <FilterItem
                key={category}
                category={category}
                isActive={activeCategory === category}
                mouseX={mouseX}
                onClick={() => setActiveCategory(category)}
                staticFilters={staticFilters}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={staticFilters ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: staticFilters ? 0 : -8 }}
            transition={{ duration: staticFilters ? 0 : 0.25 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                featured={i === 0 && activeCategory === "All"}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
