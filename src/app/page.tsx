import type { Metadata } from "next";

import HomePageClient from "./home-page-client";

export const metadata: Metadata = {
  title: "Anirban | Fullstack Developer",

  description:
    "Modern cinematic developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and immersive UI systems.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Anirban | Fullstack Developer",

    description:
      "Modern cinematic developer portfolio with scalable architecture, immersive UI systems, and advanced frontend engineering.",

    url: "https://ani-dev.vercel.app",

    siteName: "Anirban Portfolio",

    images: [
      {
        url: "/landing.png",
        width: 1200,
        height: 630,
        alt: "Anirban Portfolio Preview",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Anirban | Fullstack Developer",

    description:
      "Modern cinematic developer portfolio with immersive UI systems and scalable frontend architecture.",

    images: ["/landing.png"],
  },
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Anirban",

    url: "https://ani-dev.vercel.app",

    image:
      "https://ani-dev.vercel.app/landing.png",

    jobTitle: "Fullstack Developer",

    sameAs: [
      "https://github.com/DevAniiii",
      "https://linkedin.com/in/yourprofile",
    ],

    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
      "Cybersecurity",
      "UI Engineering",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Anirban Portfolio",

    url: "https://ani-dev.vercel.app",

    description:
      "Modern cinematic developer portfolio built with immersive UI systems and scalable architecture.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />

      <HomePageClient />
    </main>
  );
}