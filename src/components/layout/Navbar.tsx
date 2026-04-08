"use client";

import { useTheme } from "next-themes";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Home, FolderOpen, FileText, Mail, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: FileText, href: "#publications", label: "Publications" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

function useDockMagnification(mouseX: MotionValue<number>, ref: React.RefObject<HTMLElement | null>) {
  const distance = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el) return 150;
    const bounds = el.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-100, -50, 0, 50, 100], [1, 1.15, 1.35, 1.15, 1]);
  return useSpring(scale, { mass: 0.2, stiffness: 300, damping: 18 });
}

function DockItem({
  icon: Icon,
  href,
  label,
  isActive,
  mouseX,
  onClick,
  staticDock,
}: {
  icon: React.ComponentType<{ size: number; strokeWidth?: number }>;
  href: string;
  label: string;
  isActive: boolean;
  mouseX: MotionValue<number>;
  onClick: (href: string) => void;
  staticDock: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const scale = useDockMagnification(mouseX, ref);
  const [hovered, setHovered] = useState(false);

  const className = cn(
    "relative w-10 h-10 shrink-0 flex items-center justify-center rounded-xl transition-colors duration-200 origin-center",
    isActive
      ? "text-white bg-white/[0.12]"
      : "text-neutral-300/80 hover:text-white"
  );

  const activeDot = staticDock ? (
    isActive ? (
      <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-white" />
    ) : null
  ) : (
    isActive ? (
      <motion.div
        layoutId="dock-indicator"
        className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    ) : null
  );

  const tooltip =
    hovered ? (
      staticDock ? (
        <span className="absolute -bottom-7 text-[10px] font-medium text-text-secondary bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border whitespace-nowrap pointer-events-none">
          {label}
        </span>
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute -bottom-7 text-[10px] font-medium text-text-secondary bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border whitespace-nowrap pointer-events-none"
        >
          {label}
        </motion.span>
      )
    ) : null;

  const onClickLink = (e: ReactMouseEvent) => {
    if (href === "#") {
      e.preventDefault();
      onClick(href);
    }
  };

  if (staticDock) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClickLink}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={label}
        className={className}
      >
        <Icon size={18} strokeWidth={1.8} />
        {activeDot}
        {tooltip}
      </a>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClickLink}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      style={{ scale }}
      className={className}
    >
      <Icon size={18} strokeWidth={1.8} />
      {activeDot}
      {tooltip}
    </motion.a>
  );
}

function ThemeButton({
  mouseX,
  staticDock,
}: {
  mouseX: MotionValue<number>;
  staticDock: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const scale = useDockMagnification(mouseX, ref);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10 shrink-0" />;

  const className =
    "w-10 h-10 shrink-0 flex items-center justify-center rounded-xl text-neutral-300/80 hover:text-white transition-colors duration-200 cursor-pointer origin-center";

  if (staticDock) {
    return (
      <button
        type="button"
        ref={ref}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={className}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{ scale }}
      className={className}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#");
  const [coarsePointer, setCoarsePointer] = useState(false);
  const mouseX = useMotionValue(Infinity);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion === true;
  const staticDock = reducedMotion || coarsePointer;

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const sections = ["contact", "publications", "projects", "news"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "projects") setActiveSection("#projects");
            else if (id === "publications") setActiveSection("#publications");
            else if (id === "contact") setActiveSection("#contact");
            else setActiveSection("#");
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(
    (href: string) => {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
      }
    },
    [reducedMotion]
  );

  return (
    <motion.nav
      initial={staticDock ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={staticDock ? { duration: 0 } : { duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[min(100%-1.25rem,auto)]"
    >
      <div
        onMouseMove={(e) => {
          if (!staticDock) mouseX.set(e.pageX);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="dock-pill flex items-center justify-center gap-0.5 sm:gap-1 px-2 sm:px-2.5 py-2 rounded-2xl backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20"
      >
        {dockItems.map(({ icon, href, label }) => (
          <DockItem
            key={label}
            icon={icon}
            href={href}
            label={label}
            isActive={activeSection === href}
            mouseX={mouseX}
            onClick={handleClick}
            staticDock={staticDock}
          />
        ))}

        <div className="w-px h-5 bg-white/10 mx-0.5 shrink-0" />

        <ThemeButton mouseX={mouseX} staticDock={staticDock} />
      </div>
    </motion.nav>
  );
}
