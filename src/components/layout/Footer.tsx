import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/data/siteConfig";

const socials = [
  { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: ScholarIcon, href: siteConfig.scholar, label: "Google Scholar" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-text-muted font-mono">
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
        </p>
        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-md text-text-secondary hover:text-accent hover:bg-accent-soft transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
