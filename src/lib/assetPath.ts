/** Prefix static asset URLs for GitHub Pages subpath deploys (NEXT_PUBLIC_BASE_PATH). */
export function withAssetBase(path: string): string {
  if (!path || path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
