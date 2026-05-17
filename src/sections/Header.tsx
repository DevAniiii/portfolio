"use client";

import GooeyNav from "@/components/GooeyNav";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-[999] w-full">
      <div className="mx-auto flex max-w-7xl justify-center px-4 pt-5">
        <div className="relative overflow-hidden rounded-full border border-white/10 bg-[#050816]/95 px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <GooeyNav
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ]}
            particleCount={8}
            particleDistances={[40, 8]}
            particleR={50}
            initialActiveIndex={0}
            animationTime={500}
            timeVariance={200}
            colors={[1, 1, 1, 1]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;