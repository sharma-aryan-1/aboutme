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
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Home, Newspaper, FolderOpen, FileText, Mail, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: Newspaper, href: "#news", label: "News" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: FileText, href: "#publications", label: "Publications" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

/** Bottom of page first: whichever matches wins (single active dock item). */
const SECTION_PRIORITY: { id: string; href: string }[] = [
  { id: "contact", href: "#contact" },
  { id: "publications", href: "#publications" },
  { id: "projects", href: "#projects" },
  { id: "news", href: "#news" },
  { id: "intro", href: "#" },
];

function useDockMagnification(mouseX: MotionValue<number>, ref: React.RefObject<HTMLElement | null>) {
  const distance = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el) return 150;
    const bounds = el.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-100, -50, 0, 50, 100], [1, 1.15, 1.35, 1.15, 1]);
  const smoothScale = useSpring(scale, { mass: 0.2, stiffness: 300, damping: 18 });

  return smoothScale;
}

function DockItem({
  icon: Icon,
  href,
  label,
  isActive,
  mouseX,
  onClick,
}: {
  icon: React.ComponentType<{ size: number; strokeWidth?: number }>;
  href: string;
  label: string;
  isActive: boolean;
  mouseX: MotionValue<number>;
  onClick: (href: string) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const scale = useDockMagnification(mouseX, ref);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={(e: ReactMouseEvent) => {
        if (href === "#") {
          e.preventDefault();
          onClick(href);
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      style={{ scale }}
      className={cn(
        "relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 origin-center",
        isActive
          ? "text-white bg-white/[0.12]"
          : "text-neutral-300/80 hover:text-white"
      )}
    >
      <Icon size={18} strokeWidth={1.8} />

      {isActive && (
        <motion.div
          layoutId="dock-indicator"
          className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute -bottom-7 text-[10px] font-medium text-text-secondary bg-surface/90 backdrop-blur-sm px-2 py-0.5 rounded-md border border-border whitespace-nowrap pointer-events-none"
        >
          {label}
        </motion.span>
      )}
    </motion.a>
  );
}

function ThemeButton({ mouseX }: { mouseX: MotionValue<number> }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const scale = useDockMagnification(mouseX, ref);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <motion.button
      ref={ref}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{ scale }}
      className="w-10 h-10 flex items-center justify-center rounded-xl
                 text-neutral-300/80 hover:text-white transition-colors duration-200 cursor-pointer origin-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#");
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        const next = SECTION_PRIORITY.find(({ id }) => visible.get(id));
        if (next) setActiveSection(next.href);
      },
      { threshold: [0.2, 0.35], rootMargin: "-12% 0px -12% 0px" }
    );

    for (const { id } of SECTION_PRIORITY) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="dock-pill flex items-center gap-1 px-2.5 py-2 rounded-2xl backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20"
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
          />
        ))}

        <div className="w-px h-5 bg-white/10 mx-0.5" />

        <ThemeButton mouseX={mouseX} />
      </div>
    </motion.nav>
  );
}
