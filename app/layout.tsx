import type { Metadata } from "next";
import { Chakra_Petch, Unbounded } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const body = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Seedance 2.0 Prompts | Seedance Prompt Radar",
    template: "%s | Seedance Prompt Radar",
  },
  description:
    "Explore curated Seedance 2.0 prompts with source videos and remix-ready text prompts for faster testing.",
  keywords: [
    "seedance 2.0 prompts",
    "seedance prompts",
    "seedance prompt library",
    "seedance ai video prompts",
    "seedance 2.0",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Seedance 2.0 Prompts | Seedance Prompt Radar",
    description:
      "Explore curated Seedance 2.0 prompts with source videos and remix-ready text prompts for faster testing.",
    siteName: "Seedance Prompt Radar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seedance 2.0 Prompts | Seedance Prompt Radar",
    description:
      "Explore curated Seedance 2.0 prompts with source videos and remix-ready text prompts for faster testing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
