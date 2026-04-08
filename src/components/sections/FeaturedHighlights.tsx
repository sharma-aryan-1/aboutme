import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { withAssetBase } from "@/lib/assetPath";

export default function FeaturedHighlights() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section
      aria-labelledby="featured-work-heading"
      className="relative z-10 border-y border-border/60 bg-surface/35 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2
          id="featured-work-heading"
          className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-6"
        >
          Featured work
        </h2>
        <ul className="flex flex-col sm:flex-row gap-4">
          {featured.map((project) => (
            <li key={project.slug} className="min-w-0 flex-1">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col h-full rounded-xl border border-border bg-surface p-4 hover:border-accent/40 transition-colors"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-accent-soft to-transparent">
                  <Image
                    src={withAssetBase(project.image)}
                    alt=""
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </span>
                <span className="mt-1 text-sm text-text-secondary leading-snug line-clamp-2">
                  {project.shortDescription}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">
                  View project
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
