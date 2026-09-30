import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const LOGO_URL =
  "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/logos/d8f5e48a-90ad-4766-8719-99ae2c4d6c85/6e7218d535dc4338a043e5afda17b53e.png";

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Kiran Voss — Product Designer & Frontend Developer",
  description:
    "Portfolio of Kiran Voss, a product designer and frontend developer crafting clean, considered digital products for startups and studios worldwide.",
  icons: {
    icon: LOGO_URL,
  },
  openGraph: {
    title: "Kiran Voss — Product Designer & Frontend Developer",
    description:
      "I design and build interfaces that feel inevitable, clean systems, considered motion, and code that ships.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        className="bg-[var(--background)] text-[var(--foreground)] antialiased"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <LocaleProvider>
          <Navbar />
          {children}
          <Footer />
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}
