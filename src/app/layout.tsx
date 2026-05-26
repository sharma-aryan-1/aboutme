import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

function getMetadataBase(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    const normalized = raw.endsWith("/") ? raw : `${raw}/`;
    return new URL(normalized);
  } catch {
    return undefined;
  }
}

function getAssetBasePath(): string {
  const raw = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
  if (!raw) return "";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

const siteDescription = `${siteConfig.name}, ${siteConfig.subtitle}. ${siteConfig.tagline}`;
const metadataBase = getMetadataBase();
const ogImageRelative = metadataBase ? "og.svg" : "/og.svg";
const faviconUrl = `${getAssetBasePath()}/favicon.svg`;

const inter = Inter({
  variable: "--font-sans-family",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: `${siteConfig.name}, ${siteConfig.subtitle}`,
  description: siteDescription,
  icons: {
    icon: [{ url: faviconUrl, type: "image/svg+xml" }],
  },
  openGraph: {
    title: `${siteConfig.name}, ${siteConfig.subtitle}`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: ogImageRelative,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.subtitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}, ${siteConfig.subtitle}`,
    description: siteDescription,
    images: [ogImageRelative],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
