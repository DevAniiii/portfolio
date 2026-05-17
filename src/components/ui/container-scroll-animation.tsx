"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

const rotate = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [10, 0, 10]
);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.92, 1] : [1.08, 1]
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -40] : [0, -120]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-[52rem] md:h-[85rem] items-center justify-center py-10 md:py-24"
    >
      <div
        className="relative w-full"
        style={{
          perspective: "1800px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />

        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="mx-auto max-w-6xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate?: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformPerspective: 1800,
      }}
      className="relative mx-auto -mt-6 md:-mt-12 w-full max-w-6xl"
    >
      <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#050816]/90 p-[10px] md:p-[14px] shadow-[0_0_80px_rgba(59,130,246,0.12)] backdrop-blur-3xl">
        <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_30%)]" />

        <div className="absolute inset-[1px] rounded-[36px] border border-white/[0.06]" />

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120]">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.03),transparent)]" />

          <div className="relative z-10 h-full w-full">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};