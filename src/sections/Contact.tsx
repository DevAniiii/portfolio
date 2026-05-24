export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />

  

      <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0b1220]/80 p-10 backdrop-blur-3xl md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

          <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.35em] text-transparent">
                Contact
              </span>
            </div>

            <h2 className="mt-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl">
              Let&apos;s Connect
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
              My inbox is always open. Whether you
              have a question, collaboration idea,
              freelance opportunity, or just want to
              connect, feel free to reach out anytime.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a
                href="mailto:anirbanbanerjee3112@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>

              <a
                href="https://github.com/DevAniiii"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
