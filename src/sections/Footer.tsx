"use client";

import Link from "next/link";
import ArrowUpRightIcon from "../../public/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/DevAniiii",
  },
  {
    title: "Telegram",
    href: "https://t.me/OrginalAni",
  },
  {
    title: "Email",
    href: "mailto:anirbanbanerjeeofficial@outlook.com",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/anirbanbanerjeee/",
  },
  {
    title: "Twitter",
    href: "https://x.com/cyberAniirban",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1220]/80 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

          <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-10 px-8 py-10 md:flex-row">
            <div>
              <h3 className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-3xl font-black text-transparent">
                Let’s Build Something Great
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
                Designing scalable digital experiences
                with immersive interfaces, modern
                engineering, and performance-focused
                systems.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <Link
                  target="_blank"
                  href={link.href}
                  key={link.title}
                  className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>{link.title}</span>

                  <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/10 px-8 py-5 text-center text-sm text-white/40">
            © {new Date().getFullYear()} Anirban. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};