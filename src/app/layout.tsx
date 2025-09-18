import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getNavBarDataWithFallback } from "@/lib/navbar-service";
import { fetchSEOData } from "@/lib/seo-service";
import { SEO_CONSTANTS } from "@/constants/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const seoData = await fetchSEOData();
const og_image =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337" + seoData?.OG_Image || SEO_CONSTANTS.DEFAULT_OG_IMAGE;

export const metadata: Metadata = {
  title: seoData?.Title || SEO_CONSTANTS.DEFAULT_TITLE,
  description: seoData?.Description || SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  keywords: seoData?.Keywords || SEO_CONSTANTS.DEFAULT_KEYWORDS,
  alternates: {
    canonical: seoData?.Canonical_Url || SEO_CONSTANTS.DEFAULT_CANONICAL_URL,
  },
  openGraph: {
    title: seoData?.OG_Title || SEO_CONSTANTS.DEFAULT_OG_TITLE,
    description:
      seoData?.OG_Description || SEO_CONSTANTS.DEFAULT_OG_DESCRIPTION,
    images: og_image || SEO_CONSTANTS.DEFAULT_OG_IMAGE,
    type:
      (seoData?.OG_Type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other") || SEO_CONSTANTS.DEFAULT_OG_TYPE,
  },
  authors: [{ name: SEO_CONSTANTS.AUTHOR_NAME }],
  generator: SEO_CONSTANTS.GENERATOR,
  applicationName: SEO_CONSTANTS.APPLICATION_NAME,
  robots: SEO_CONSTANTS.ROBOTS,
  manifest: SEO_CONSTANTS.MANIFEST,
  creator: SEO_CONSTANTS.AUTHOR_NAME,
  publisher: SEO_CONSTANTS.AUTHOR_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: seoData?.Canonical_Url
    ? new URL(seoData.Canonical_Url)
    : new URL(SEO_CONSTANTS.DEFAULT_CANONICAL_URL),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9488",
};

// Server-side NavBar data fetching with fallback
async function getNavBarData() {
  try {
    const result = await getNavBarDataWithFallback();
    return result.data;
  } catch (error) {
    console.error("Error fetching NavBar data:", error);
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarData = await getNavBarData();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Skip link for keyboard navigation */}
        <Button
          asChild
          className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 z-[9999]"
        >
          <a href="#main-content">Skip to main content</a>
        </Button>
        {navbarData && <NavBar data={navbarData} />}
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
