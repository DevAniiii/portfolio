"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const cards = [
  {
    title: "Next.js",
    x: "-28%",
    y: "-18%",
    rotate: -12,
  },
  {
    title: "Cybersecurity",
    x: "30%",
    y: "-12%",
    rotate: 10,
  },
  {
    title: "Node.js",
    x: "-22%",
    y: "24%",
    rotate: 8,
  },
  {
    title: "MongoDB",
    x: "26%",
    y: "22%",
    rotate: -10,
  },
];

export default function NeuralHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [12, -12]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-12, 12]), {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );
  };
}, [mouseX, mouseY]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070707] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[140px]"
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-20 flex items-center justify-center"
      >
        <div className="relative">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 100,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0],
              }}
              transition={{
                delay: index * 0.15,
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: card.x,
                top: card.y,
                rotate: card.rotate,
              }}
              className="absolute w-44 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl"
            >
              <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />

              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Modern scalable architecture
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-14 shadow-[0_0_80px_rgba(139,92,246,0.18)] backdrop-blur-3xl"
          >
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-32 rotate-12 bg-white/10 blur-3xl"
            />

            <div className="relative z-10 max-w-3xl text-center">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mb-5 text-sm uppercase tracking-[0.4em] text-cyan-400"
              >
                Full Stack Developer
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-6xl font-black leading-tight text-white md:text-8xl"
              >
                Building
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  immersive
                </span>
                <br />
                web experiences
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="mx-auto mt-8 max-w-2xl text-lg text-white/50"
              >
                I build modern web applications focused on performance,
                scalability, and clean user experience.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="mt-10 flex items-center justify-center gap-5"
              >
                <button className="rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 font-medium text-white shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                  View Projects
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-white backdrop-blur-xl">
                  Contact Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}