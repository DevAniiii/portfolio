"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
}: {
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const updateHeight = () => {
      setHeight(element.scrollHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height]
  );

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  );

  return (
    <div
      ref={containerRef}
      className="w-full px-4 md:px-10"
    >
      <div
        ref={ref}
        className="relative mx-auto max-w-7xl pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-12 pt-14 md:grid-cols-[240px_minmax(0,1fr)] md:pt-32"
          >
            <div className="relative hidden md:block">
              <div className="sticky top-32">
                <div className="absolute left-0 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d0d12] shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                </div>

                <h3 className="pl-16 text-4xl font-black leading-[0.95] tracking-tight text-white/90 lg:text-5xl">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative min-w-0 pl-16 md:pl-0">
              <div className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d0d12] md:hidden">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
              </div>

              <h3 className="mb-6 text-3xl font-black leading-tight text-white md:hidden">
                {item.title}
              </h3>

              <div className="w-full overflow-hidden">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-5 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-5"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};