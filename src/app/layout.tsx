// ✅ NO "use client" here!

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Metadata } from "next";
import PageWrapper from "./components/PageWrapper/PageWrapper";

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
