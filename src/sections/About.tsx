import AboutImage from "../../public/images/myabout.png";
import AboutImageMobile from "../../public/images/mobileabout.png";

import Image from "next/image";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import { Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center overflow-hidden px-4 py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_35%)]" />

      <div className="absolute top-20 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <ContainerScroll
          titleComponent={
            <div className="mb-10 flex flex-col items-center justify-center text-center md:mb-16">
              <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-violet-400" />

                <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                  Digital Identity
                </span>
              </div>

              <h2 className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-5xl font-black leading-none tracking-tight text-transparent md:text-7xl">
                About Me
              </h2>

              <p className="mt-5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.45em] text-transparent md:text-base">
                Inside The Mind Of A Builder
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-violet-400" />

                <div className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_25px_#a855f7]" />

                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-cyan-400" />
              </div>
            </div>
          }
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 scale-110 rounded-[52px] bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)] opacity-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#111827]/95 via-[#0f172a]/95 to-[#020617]/95 p-[12px] shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-3xl">
              <div className="absolute inset-0 rounded-[42px] border border-white/[0.05]" />

              <div className="absolute inset-[1px] rounded-[40px] bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.06),transparent,rgba(255,255,255,0.03))]" />

              <div className="relative overflow-hidden rounded-[30px] border border-violet-400/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_45%)]" />

                <Image
                  src={AboutImage}
                  alt="About"
                  width={2600}
                  height={720}
                  className="relative z-10 hidden w-full max-w-5xl rounded-[30px] object-cover md:block"
                  draggable={false}
                />

                <Image
                  src={AboutImageMobile}
                  alt="About"
                  width={1000}
                  height={450}
                  className="relative z-10 block h-[450px] w-[92vw] max-w-sm rounded-[24px] object-cover object-top md:hidden"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};