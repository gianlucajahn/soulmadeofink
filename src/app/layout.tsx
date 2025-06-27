"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Soul Made of Ink",
  description:
    "Fragments of thought, poetry, and memory. A private space of mine made public.",
  openGraph: {
    title: "A Soul Made of Ink",
    description:
      "Fragments of thought, poetry, and memory. A private space of mine made public.",
    url: "https://soulmadeofink.vercel.app",
    siteName: "Soul Made of Ink",
    images: [
      {
        url: "https://soulmadeofink.vercel.app/og-preview.png", 
        width: 1200,
        height: 630,
        alt: "A Soul Made of Ink – Personal writing journal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Soul Made of Ink",
    description:
      "Fragments of thought, poetry, and memory. A private space of mine made public.",
    images: ["https://soulmadeofink.vercel.app/og-preview.png"],
    creator: "@0xGianni", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
