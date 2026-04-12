import "../App.css";
import Template from "./template";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeChild = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <Template>
      <div className="mx-auto max-w-[1400px] px-6 py-8">
        <motion.section
          initial="hidden"
          animate="show"
          variants={sectionFade}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] px-8 py-12 md:px-12 md:py-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_24%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div
                variants={fadeChild}
                className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                Available for projects and opportunities
              </motion.div>

              <motion.h1
                variants={fadeChild}
                className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
              >
                From Concepts
                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                  To Real-World Hardware
                </span>
              </motion.h1>

              <motion.p
                variants={fadeChild}
                className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
              >
                I build systems that blend software, hardware, automation, and interface design —
                from hydroponics towers to ESP32 projects and custom dashboards.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-orange-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-3 shadow-2xl">
                <img
                  src="/stock.png"
                  alt="Featured project preview"
                  className="h-full w-full rounded-[22px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={sectionFade}
          className="relative mt-10 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_35%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={fadeChild}
                className="text-sm uppercase tracking-[0.2em] text-cyan-300/80"
              >
                My Story
              </motion.p>

              <motion.h2
                variants={fadeChild}
                className="mt-3 text-3xl md:text-5xl font-black text-white leading-tight"
              >
                It started with curiosity.
              </motion.h2>

              <div className="mt-6 space-y-5 text-slate-300 leading-7 text-base">
                <motion.p variants={fadeChild}>
                  I didn’t start by trying to build real-world systems.
                </motion.p>

                <motion.p variants={fadeChild}>
                  I started by wondering how video games worked.
                </motion.p>

                <motion.p variants={fadeChild}>
                  At first, it was just curiosity — how does pressing a key move a character?
                  How does a world exist inside a screen?
                </motion.p>

                <motion.p variants={fadeChild}>
                  So I opened up Unity and started making small games.
                  They weren’t great. Most of them were honestly pretty bad.
                  But they worked — and that was enough to hook me.
                </motion.p>

                <motion.p variants={fadeChild} className="text-white font-semibold">
                  That’s when something shifted.
                </motion.p>

                <motion.p variants={fadeChild}>
                  I stopped just playing things… and started asking how everything worked.
                </motion.p>

                <motion.p variants={fadeChild}>
                  Not just games — but real-world systems.
                  Cars. Sensors. Electronics. Machines.
                </motion.p>

                <motion.p variants={fadeChild}>
                  I wanted to understand what was happening behind the scenes.
                  What makes something move? What makes it respond? What controls it?
                </motion.p>

                <motion.p variants={fadeChild}>
                  That curiosity turned into building.
                </motion.p>

                <motion.p variants={fadeChild}>
                  From ESP32 automation systems, to hydroponics towers, to custom dashboards —
                  I started creating things that weren’t just on a screen, but actually interacted with the real world.
                </motion.p>

                <motion.p variants={fadeChild} className="text-white font-semibold">
                  Now, I build systems that combine software and hardware —
                  things you can see, touch, and use.
                </motion.p>

                <motion.p variants={fadeChild} className="text-cyan-300 font-semibold">
                  It all started with one question:
                </motion.p>

                <motion.p variants={fadeChild} className="text-white text-lg font-bold italic">
                  “How does this actually work?”
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-5"
            >
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Then
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Small Unity experiments
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Crappy little game ideas, trial and error, and a lot of curiosity.
                  That was the starting point.
                </p>
              </div>

              <div className="rounded-[28px] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                  Now
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Real systems with real interaction
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Hydroponics towers, automation, dashboards, and embedded hardware —
                  projects that move beyond concepts and become something usable.
                </p>
              </div>

             
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={sectionFade}
          className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-12"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <motion.p
                variants={fadeChild}
                className="text-sm uppercase tracking-[0.2em] text-cyan-300/80"
              >
                My Mission
              </motion.p>

              <motion.h2
                variants={fadeChild}
                className="mt-3 text-3xl md:text-4xl font-black text-white"
              >
                To build real-world systems that connect software and hardware.
              </motion.h2>

              <motion.p
                variants={fadeChild}
                className="mt-6 max-w-2xl text-base leading-7 text-slate-300"
              >
                I want to create projects that are functional, practical, and interesting —
                not just ideas on a screen, but systems that actually do something.
              </motion.p>
            </div>

            <motion.div
              variants={fadeChild}
              className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 text-lg font-bold text-white">Useful Builds</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-slate-400">Style</p>
                  <p className="mt-2 text-lg font-bold text-white">Modern + Practical</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-slate-400">Goal</p>
                  <p className="mt-2 text-lg font-bold text-white">Real Systems</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </Template>
  );
}