import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/layout/AmbientBackground";
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

const siteDescription = `Personal portfolio of ${siteConfig.name}. ${siteConfig.subtitle}. ${siteConfig.tagline}.`;
const metadataBase = getMetadataBase();
const ogImageRelative = metadataBase ? "og.svg" : "/og.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase,
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: ogImageRelative,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <AmbientBackground />
          <div
            className="noise-overlay pointer-events-none fixed inset-0 z-[5]"
            aria-hidden
          />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer className="relative z-10" />
        </ThemeProvider>
      </body>
    </html>
  );
}
