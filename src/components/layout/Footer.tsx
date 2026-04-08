import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";

const navColumns = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "News", href: "#news" },
      { label: "Projects", href: "#projects" },
      { label: "Publications", href: "#publications" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: `mailto:${siteConfig.email}` },
      { label: "GitHub", href: siteConfig.github },
      { label: "LinkedIn", href: siteConfig.linkedin },
      { label: "Google Scholar", href: siteConfig.scholar },
    ],
  },
];

const socialIcons = [
  { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: ScholarIcon, href: siteConfig.scholar, label: "Scholar" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`border-t border-border ${className || ""}`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
          {/* Identity */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                <span className="text-xs font-bold text-white">
                  {siteConfig.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <span className="font-medium text-text-primary text-sm" style={{ fontFamily: "var(--font-serif)" }}>{siteConfig.name}</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed max-w-[200px]">
              {siteConfig.subtitle}
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 flex items-center justify-center rounded-md
                             text-text-secondary hover:text-accent hover:bg-accent-soft
                             transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                      target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>

      </div>
    </footer>
  );
}
