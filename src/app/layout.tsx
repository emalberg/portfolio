import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { fetchNavBarDataWithRevalidation } from "@/lib/navbar-service";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects, skills, and experience",
};

// Server-side NavBar data fetching
async function getNavBarData() {
  try {    
    return await fetchNavBarDataWithRevalidation(60);
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {navbarData && <NavBar data={navbarData} />}
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
