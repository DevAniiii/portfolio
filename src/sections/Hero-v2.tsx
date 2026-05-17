"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const floatingCards = [
  {
    title: "Next.js",
    desc: "Modern scalable apps",
    x: "-24%",
    y: "-18%",
    rotate: -10,
  },
  {
    title: "Cybersecurity",
    desc: "Secure architecture",
    x: "8%",
    y: "12%",
    rotate: 10,
  },
  {
    title: "Node.js",
    desc: "Backend systems",
    x: "-20%",
    y: "22%",
    rotate: 8,
  },
  {
    title: "MongoDB",
    desc: "Database solutions",
    x: "65%",
    y: "-25%",
    rotate: -8,
  },
  {
    title: "React",
    desc: "Interactive frontends",
    x: "-38%",
    y: "2%",
    rotate: -14,
  },
  {
    title: "Tailwind CSS",
    desc: "Modern UI styling",
    x: "42%",
    y: "-30%",
    rotate: 14,
  },
  {
    title: "TypeScript",
    desc: "Type-safe development",
    x: "-10%",
    y: "-34%",
    rotate: -6,
  },
  {
    title: "Express.js",
    desc: "Fast API systems",
    x: "8%",
    y: "34%",
    rotate: 6,
  },
  {
    title: "Framer Motion",
    desc: "Smooth animations",
    x: "-42%",
    y: "-24%",
    rotate: -18,
  },
  {
    title: "Telegram Bots",
    desc: "Automation systems",
    x: "82%",
    y: "-24%",
    rotate: 18,
  },
  {
    title: "REST APIs",
    desc: "Scalable integrations",
    x: "92%",
    y: "30%",
    rotate: 12,
  },
  {
    title: "UI/UX",
    desc: "Premium interfaces",
    x: "94%",
    y: "-8%",
    rotate: 12,
  },
  {
    title: "Performance",
    desc: "Optimized architecture",
    x: "0%",
    y: "42%",
    rotate: 0,
  },
];

export default function PremiumHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-500, 500], [8, -8]),
    {
      stiffness: 100,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-500, 500], [-8, 8]),
    {
      stiffness: 100,
      damping: 25,
    }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070707] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <motion.div
        animate={{
          scale: [1, 1.015, 1.03, 1.015, 1],
          opacity: [0.32, 0.38, 0.45, 0.38, 0.32],
          x: [0, 8, 14, 8, 0],
          y: [0, -4, -8, -4, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: [0.37, 0, 0.63, 1],
        }}
        className="absolute h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
          filter: [
            "brightness(1)",
            "brightness(1.08)",
            "brightness(1)",
          ],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
        className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-20 w-full max-w-7xl"
      >
        <div className="relative flex items-center justify-center">
          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
                rotate: [
                  card.rotate,
                  card.rotate + 1.5,
                  card.rotate,
                ],
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                repeatType: "mirror",
                delay: index * 0.2,
              }}
              style={{
                left: card.x,
                top: card.y,
              }}
              className="pointer-events-none absolute hidden w-36 rounded-3xl border border-white/15 bg-[#0b0b0f]/80 p-5 backdrop-blur-2xl lg:block"
            >
              <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />

              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-2 text-sm text-white/40">
                {card.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[#0b0b0f]/80 px-8 py-16 shadow-[0_0_80px_rgba(139,92,246,0.15)] backdrop-blur-3xl md:px-16"
          >
            <motion.div
              animate={{
                x: ["-350%", "350%"],
              }}
              transition={{
                duration: 15,

                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-[-20%] w-[220px] rotate-12 bg-white/10 blur-[70px]"
            />

            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#0b0b0f]/80 px-5 py-2 backdrop-blur-xl"
              >
                <div className="h-2 w-2 rounded-full bg-green-400" />

                <span className="text-sm text-white/70">
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl"
              >
                Hello, I'm
                <br />

                <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  Anirban
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                }}
                className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50"
              >
                I build modern web applications focused on performance,
                scalability, and clean user experience.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 1,
                }}
                className="mt-12 flex flex-wrap items-center justify-center gap-5"
              >
                <button className="rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 font-medium text-white shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all duration-500 hover:scale-105">
                  Explore My Work
                </button>

                <button className="rounded-2xl border border-white/15 bg-[#0b0b0f]/80 px-8 py-4 text-white backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08]">
                  View Resume
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}