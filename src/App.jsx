import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [water, setWater] = useState(72);
  const [temp, setTemp] = useState(68);
  const [lightCycle, setLightCycle] = useState(84);

  useEffect(() => {
    const interval = setInterval(() => {
      setWater((w) => Math.max(50, Math.min(90, w + (Math.random() * 6 - 3))));
      setTemp((t) => Math.max(65, Math.min(75, t + (Math.random() * 2 - 1))));
      setLightCycle((l) => Math.max(60, Math.min(100, l + (Math.random() * 8 - 4))));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Hydroponics Tower",
      category: "3D Printing + Hydroponics",
      status: "Live build",
      description:
        "A custom grow tower system for compact indoor growing with practical plant spacing, printable parts, cleaner plumbing, and a polished maker look.",
      tags: ["Hydroponics", "CAD", "3D Printing", "DIY Systems"],
      accent: "from-emerald-400/30 to-cyan-400/20",
      metric: "Modular grow design",
    },
    {
      title: "Custom Gauge Dashboard",
      category: "Python + UI Engineering",
      status: "In progress",
      description:
        "A customizable digital gauge cluster inspired by classic automotive styling, with draggable gauges, scalable layouts, and refined visuals for real dashboard displays.",
      tags: ["Python", "PySide6", "UI Design", "Automotive"],
      accent: "from-orange-400/30 to-amber-400/20",
      metric: "Interactive UI system",
    },
    {
      title: "ESP32 / Pico Automation",
      category: "Embedded + IoT",
      status: "Field tested",
      description:
        "Wi-Fi setup portals, sensor-triggered actions, timers, relays, and hardware control flows for smart devices that solve real problems beyond the screen.",
      tags: ["ESP32", "Pico W", "MicroPython", "IoT"],
      accent: "from-sky-400/30 to-indigo-400/20",
      metric: "Sensor-driven automation",
    },
    {
      title: "NFC + LED Interactive Builds",
      category: "Embedded Prototyping",
      status: "Prototype",
      description:
        "Interactive systems combining NFC readers, LEDs, custom logic, and audio feedback to create polished physical experiences with personality.",
      tags: ["NFC", "WS2812", "Electronics", "Prototyping"],
      accent: "from-fuchsia-400/30 to-violet-400/20",
      metric: "Physical interaction design",
    },
  ];

  const skills = [
    "React",
    "Tailwind",
    "Python",
    "MicroPython",
    "ESP32",
    "Raspberry Pi Pico W",
    "3D Printing",
    "CAD / FreeCAD",
    "UI Design",
    "IoT Systems",
    "Automation",
    "Hardware Prototyping",
  ];

  const contactLinks = [
    { label: "Email Me", value: "joshorames2@gmail.com", href: "mailto:joshorames2@gmail.com" },
    { label: "GitHub", value: "github.com/joshorames", href: "https://github.com/joshorames?tab=repositories" },
    { label: "Resume", value: "Add resume PDF later", href: "#" },
  ];

  const buildProcess = [
    "Identify a real-world problem worth solving",
    "Prototype hardware and software together",
    "Iterate until it feels practical, clean, and reliable",
    "Polish the interface so the project feels complete",
  ];

  const currentBuilds = [
    "Smart hydroponics monitoring systems",
    "Custom dashboard interfaces",
    "Embedded automation builds",
  ];

  const photoPlaceholders = [
    {
      title: "Hydroponics Tower Build",
      note: "Replace with /tower.jpg in your public folder.",
      image: "/tower.jpg",
    },
    {
      title: "Gauge Dashboard UI",
      note: "Replace with /dashboard.jpg in your public folder.",
      image: "/dashboard.jpg",
    },
    {
      title: "ESP32 / Pico Project",
      note: "Replace with /esp32.jpg in your public folder.",
      image: "/esp32.jpg",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#071018] text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative z-10">
        <section className="w-full px-6 pt-8 pb-16 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(16,185,129,0.08)]">
            <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
              <div className="flex flex-col justify-center">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                  Available for projects and opportunities
                </div>

                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  I build
                  <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                    real devices, not just mockups
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  I design and build practical systems that blend hardware, software, and interface
                  design — from hydroponics towers and embedded automation to custom dashboards and
                  interactive prototypes.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Let’s Build Something
                  </a>
                </div>

                <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    ["Projects", "10+"],
                    ["Systems", "Hardware + Software"],
                    ["Focus", "Useful Builds"],
                    ["Style", "Modern + Practical"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="mt-1 text-sm text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-orange-400/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Live builder snapshot</p>
                      <h2 className="text-xl font-bold">Josh Portfolio</h2>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Active
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-400">Current focus</p>
                          <p className="mt-2 text-2xl font-black text-white">Hydroponics + IoT</p>
                          <p className="mt-2 text-sm text-slate-400">
                            Building systems that actually live in the real world.
                          </p>
                        </div>
                        <div className="relative h-24 w-24 rounded-full border-8 border-emerald-300/20 border-t-emerald-300 border-r-cyan-300 animate-spin [animation-duration:6s]">
                          <div className="absolute inset-4 rounded-full border border-white/10 bg-slate-950/80" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-slate-400">Build style</p>
                        <p className="mt-2 text-lg font-bold">Clean, custom, functional</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-slate-400">What stands out</p>
                        <p className="mt-2 text-lg font-bold">Real devices, not slides</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-orange-300/15 bg-orange-300/5 p-4">
                      <p className="text-sm text-orange-100/70">Why people should email you</p>
                      <p className="mt-2 text-base leading-7 text-orange-50">
                        For prototypes, custom builds, automation ideas, embedded systems,
                        dashboards, or unusual concepts that need both design and execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section {...fadeUp} className="w-full px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">How I build</p>
                <h2 className="mt-2 text-3xl font-black text-white">My process</h2>
                <div className="mt-6 space-y-3">
                  {buildProcess.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 text-sm font-black text-slate-950">
                        {index + 1}
                      </div>
                      <p className="text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">Currently building</p>
                <h2 className="mt-2 text-3xl font-black text-white">What I’m working on now</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {currentBuilds.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                      <div className="mb-3 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                        In progress
                      </div>
                      <p className="text-base font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="w-full px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Live demo</p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Interactive system snapshot
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  This section makes the site feel like a real product. It shows the kinds of
                  dashboards, sensors, live states, and control systems I build.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Water Level", `${Math.round(water)}%`, "Tank healthy"],
                    ["Pump State", "ON", "Automation active"],
                    ["Grow Temp", `${Math.round(temp)}°F`, "Stable environment"],
                  ].map(([label, value, note]) => (
                    <motion.div
                      key={label}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
                    >
                      <p className="text-sm text-slate-400">{label}</p>
                      <p className="mt-2 text-3xl font-black text-white">{value}</p>
                      <p className="mt-2 text-sm text-emerald-200">{note}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">System dashboard demo</p>
                    <h3 className="text-xl font-bold text-white">Hydroponics Monitor</h3>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Live
                  </motion.div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Reservoir</span>
                      <span>{Math.round(water)}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        animate={{ width: `${Math.round(water)}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Light Cycle</span>
                      <span>{Math.round(lightCycle)}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        animate={{ width: `${Math.round(lightCycle)}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-orange-300 to-amber-300"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Temperature Stability</span>
                      <span>{Math.round(((temp - 65) / 10) * 100)}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        animate={{ width: `${Math.round(((temp - 65) / 10) * 100)}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-sky-300 to-indigo-300"
                      />
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Flow status</p>
                        <p className="mt-1 text-lg font-bold text-white">Nominal</p>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="relative h-16 w-16 rounded-full border-4 border-cyan-300/20 border-t-cyan-300 border-r-emerald-300"
                      >
                        <div className="absolute inset-2 rounded-full bg-slate-950" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="w-full px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">Project gallery</p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Show the real builds
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Add real photos here to make the site hit harder. Photos of actual builds,
                  wiring, prototypes, screens, and finished results make the portfolio much more
                  credible and memorable.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {photoPlaceholders.map((item) => (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-center">
                        <div>
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300">
                            +
                          </div>
                          <p className="px-4 text-sm font-semibold text-white">{item.title}</p>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-4">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">Featured projects</p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Projects people can reach out about
                </h2>
              </div>
            </div>

            <div id="projects" className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {project.category}
                      </div>
                      <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                        {project.status}
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm font-medium text-cyan-200">{project.metric}</p>
                    <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium text-emerald-200">
                        Interested in this kind of work?
                      </span>
                      <a
                        href="#contact"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        Email Me
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="w-full px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Why this matters</p>
              <h2 className="mt-3 text-3xl font-black">More than a portfolio</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                This site is designed to show employers and collaborators that I do more than talk
                about ideas — I design, prototype, code, test, and build things that actually
                exist.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Show practical, real-world problem solving",
                  "Highlight hardware + software crossover",
                  "Create easy ways for companies or clients to contact me",
                  "Make projects feel premium and memorable",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">Tech and capabilities</p>
              <h2 className="mt-3 text-3xl font-black">What I can be hired for</h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Custom Builds", "Have an idea that needs prototyping?"],
                  ["UI + Dashboards", "Need a polished interface for hardware or data?"],
                  ["Automation", "Need sensors, triggers, or control systems?"],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="contact" className="w-full px-6 pb-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_0_70px_rgba(59,130,246,0.08)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">Contact</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let’s build something impressive</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Interested in a custom build, collaboration, prototype, dashboard, automation
                  idea, or something unusual? Reach out and tell me what you have in mind.
                </p>

                <div className="mt-8 space-y-4">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                    >
                      <div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="mt-1 font-semibold text-white">{item.value}</div>
                      </div>
                      <div className="text-slate-400">→</div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div className="mb-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-100">
                  Have an idea for a product, prototype, automation, or one-off system? Send it over.
                </div>
                <div className="grid gap-4">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Name</label>
                    <input
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Email</label>
                    <input
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">Project idea / message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell me what you want to build, improve, automate, or prototype..."
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                    />
                  </div>

                  <button className="rounded-2xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01]">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}