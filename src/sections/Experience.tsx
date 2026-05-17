"use client";

import { motion } from "framer-motion";

import { Timeline } from "@/components/ui/timeline";

import {
  IconBrandFramerMotion,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconGitPullRequest,
} from "@tabler/icons-react";

export const Experience = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      glow: "from-cyan-500/20",
      skills: [
        {
          name: "Next.js",
          icon: <IconBrandNextjs size={52} stroke={1.5} />,
        },
        {
          name: "React",
          icon: <IconBrandReact size={52} stroke={1.5} />,
        },
        {
          name: "JavaScript",
          icon: (
            <IconBrandJavascript
              size={52}
              stroke={1.5}
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <IconBrandTypescript
              size={52}
              stroke={1.5}
            />
          ),
        },
        {
          name: "Tailwind",
          icon: (
            <IconBrandTailwind
              size={52}
              stroke={1.5}
            />
          ),
        },
        {
          name: "Framer Motion",
          icon: (
            <IconBrandFramerMotion
              size={52}
              stroke={1.5}
            />
          ),
        },
      ],
    },

    {
      title: "Backend Development",
      glow: "from-purple-500/20",
      skills: [
        {
          name: "Node.js",
          icon: <IconBrandNodejs size={52} stroke={1.5} />,
        },
        {
          name: "MongoDB",
          icon: (
            <IconBrandMongodb
              size={52}
              stroke={1.5}
            />
          ),
        },
      ],
    },

    {
      title: "Tools & Workflow",
      glow: "from-cyan-500/20",
      skills: [
        {
          name: "Git",
          icon: (
            <IconGitPullRequest
              size={52}
              stroke={1.5}
            />
          ),
        },
      ],
    },
  ];

  const data = [
    {
      title: "2026",
      content: (
        <div className="relative">
          <div className="absolute -left-6 top-5 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl" />

          <h3 className="max-w-2xl text-3xl font-serif leading-[1.05] text-white md:text-5xl">
            Fullstack & Cybersecurity Projects
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-[15px]">
            Building scalable fullstack applications
            using Next.js, Node.js, MongoDB, and
            TypeScript with strong focus on
            performance, immersive UI systems, and
            secure architecture.
          </p>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div className="relative">
          <div className="absolute -left-6 top-5 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />

          <h3 className="max-w-2xl text-3xl font-serif leading-[1.05] text-white md:text-5xl">
            Creative Frontend Engineering
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-[15px]">
            Designing premium dark interfaces with
            Tailwind CSS, Framer Motion, cinematic
            animations, advanced interactions, and
            responsive UI systems.
          </p>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div className="relative">
          <div className="absolute -left-6 top-5 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl" />

          <h3 className="max-w-2xl text-3xl font-serif leading-[1.05] text-white md:text-5xl">
            API & Automation Systems
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-[15px]">
            Developed backend systems, Telegram bot
            architectures, middleware pipelines,
            MongoDB integrations, and automation
            workflows using Node.js and Express.
          </p>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div className="relative">
          <div className="absolute -left-6 top-5 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />

          <h3 className="max-w-2xl text-3xl font-serif leading-[1.05] text-white md:text-5xl">
            Cybersecurity Exploration
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-[15px]">
            Exploring web security concepts, HTTP
            request analysis, proxy tooling,
            application behavior testing, and
            secure architecture practices through
            practical experimentation and research.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28"
    >
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Experience & Skills
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base"
          >
            Building modern fullstack experiences
            with scalable architecture, immersive
            UI systems, and cybersecurity-focused
            workflows.
          </motion.p>
        </div>

        <div className="mt-24">
          <Timeline data={data} />
        </div>

        <div className="relative mt-36 grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
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
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1220]/80 p-8 backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gradient-to-b ${group.glow} to-transparent blur-3xl`}
              />

              <div className="relative z-10">
                <h3 className="text-center text-3xl font-bold text-white">
                  {group.title}
                </h3>

                <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: skillIndex * 0.08,
                      }}
                      whileHover={{
                        y: -6,
                      }}
                      className="group/item relative flex flex-col items-center justify-center"
                    >
                      <div className="absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover/item:opacity-100">
                        <div className="h-full w-full rounded-3xl bg-purple-500/20" />
                      </div>

                      <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] text-white/90 transition-all duration-500 group-hover/item:border-cyan-400/30 group-hover/item:bg-white/[0.06]">
                        {skill.icon}
                      </div>

                      <span className="mt-4 text-center text-sm text-white/70">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};