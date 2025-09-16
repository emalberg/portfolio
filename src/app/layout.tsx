import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { fetchNavBarDataWithRevalidation, getNavBarDataWithFallback } from "@/lib/navbar-service";
import { ISR_CONFIG } from "@/lib/fallback-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects, skills, and experience",
};

// Server-side NavBar data fetching with fallback
async function getNavBarData() {
  try {    
    const result = await getNavBarDataWithFallback();
    return result.data;
  } catch (error) {
    console.error('Error fetching NavBar data:', error);
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
          <a href="#main-content">
            Skip to main content
          </a>
        </Button>
        {navbarData && <NavBar data={navbarData} />}
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
