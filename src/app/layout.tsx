import type { Metadata } from "next";
import "./globals.css";

import {
  Inter,
  Calistoga,
  Dancing_Script,
  Fredoka,
  Poppins,
} from "next/font/google";

import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://ani-dev.vercel.app"
  ),

  title: {
    default: "Anirban | Fullstack Developer",
    template: "%s | Anirban",
  },

  description:
    "Modern cinematic developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and immersive UI systems.",

  keywords: [
    "Anirban",
    "Fullstack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Web Developer",
    "Portfolio",
    "Cybersecurity",
  ],

  applicationName: "Anirban Portfolio",

  authors: [
    {
      name: "Anirban",
    },
  ],

  creator: "Anirban",

  publisher: "Anirban",

  alternates: {
    canonical: "/",
  },

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ani-dev.vercel.app",

    title:
      "Anirban | Fullstack Developer",

    description:
      "Modern cinematic developer portfolio with immersive UI systems and scalable architecture.",

    siteName: "Anirban Portfolio",

    images: [
      {
        url: "/landing.png",
        width: 1200,
        height: 630,
        alt: "Anirban Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Anirban | Fullstack Developer",

    description:
      "Modern cinematic developer portfolio with immersive UI systems and scalable architecture.",

    images: ["/landing.png"],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={twMerge(
          "bg-[#050816] text-white antialiased font-inter overflow-x-hidden",
          inter.variable,
          calistoga.variable,
          dancingScript.variable,
          fredoka.variable,
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}