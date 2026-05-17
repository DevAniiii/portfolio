"use client";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";
import DomeGallery from "@/components/DomeGallery";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    name: "BWU Web",
    description:
      "Modern university platform built with scalable architecture, responsive layouts, smooth animations, and optimized frontend engineering.",
    image: "/images/projects/bwu.png",
    link: "https://bwu-web.vercel.app/",
    repo: "https://github.com/DevAniiii/BWUWeb",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "MongoDB",
    ],
  },

  {
    name: "Reversed Encryptor",
    description:
      "Encryption and transformation platform focused on security experimentation, encoding systems, obfuscation workflows, and interactive UI.",
    image: "/images/projects/reversed.png",
    link: "https://reversed-enc.vercel.app/",
    repo: "https://github.com/DevAniiii/ReversedEncryptor",
    tech: [
      "Next.js",
      "TypeScript",
      "Security",
    ],
  },

  {
    name: "HTTPX",
    description:
      "Backend and networking utility project designed for request handling, API workflows, protocol testing, and performance-focused systems.",
    image: "/images/projects/httpx.png",
    link: "https://github.com/DevAniiii/httpx",
    repo: "https://github.com/DevAniiii/httpx",
    tech: [
      "PHP",
      "HTTP",
      "Networking",
      "Backend",
    ],
  },
];

const sideProjects = projects.map((project) => ({
  src: project.image,
  alt: project.name,
  title: project.name,
  description: project.description,
  href: project.link,
}));

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_35%)]" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.35em] text-transparent">
              Selected Work
            </p>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-white md:text-7xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
              A collection of projects focused on performance,
              scalability, clean architecture, and modern user experience.
            </p>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={800}
                    className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-3xl font-bold text-white">
                    {project.name}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      href={project.link}
                      target="_blank"
                    >
                      <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105">
                        <span>Live Demo</span>

                        <ArrowRightIcon className="size-4" />
                      </button>
                    </Link>

                    <Link
                      href={project.repo}
                      target="_blank"
                    >
                      <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]">
                        GitHub
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-40">
            <div className="mb-14 text-center">
              <h3 className="text-4xl font-black text-white">
                Project Showcase
              </h3>

              <p className="mt-4 text-white/50">
                Interactive 3D project gallery
              </p>
            </div>

            <div className="relative h-[70vh] w-full">
              <DomeGallery
                images={sideProjects}
                fit={0.75}
                minRadius={800}
                maxVerticalRotationDeg={20}
                segments={34}
                dragDampening={2}
                openedImageWidth="min(84vw, 980px)"
                openedImageHeight="min(78vh, 640px)"
                openedImageBorderRadius="16px"
                grayscale={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}