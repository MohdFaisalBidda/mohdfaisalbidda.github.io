import type { Metadata } from "next";
import { Great_Vibes, Space_Mono } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Faisal | Full Stack Engineer",
  description:
    "Portfolio of Mohd Faisal Bidda — Full Stack Engineer building elegant web apps with React, TypeScript, Node.js, and more.",
  authors: { name: "Mohd Faisal Bidda" },
  keywords: [
    "Mohd Faisal Bidda",
    "Faisal",
    "portfolio",
    "full stack developer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preload" href="/assets/hero.avif" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
