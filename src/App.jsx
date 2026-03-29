export default function App() {
  const projects = [
    {
      title: "Hydroponics Tower",
      category: "3D Printing + Hydroponics",
      description:
        "A custom grow tower system designed for compact growing, cleaner plumbing, and a polished maker look. Built around practical plant spacing, printable parts, and real-world usability.",
      tags: ["Hydroponics", "CAD", "3D Printing", "DIY Systems"],
      accent: "from-emerald-400/30 to-cyan-400/20",
    },
    {
      title: "Custom Gauge Dashboard",
      category: "Python + UI Engineering",
      description:
        "A customizable digital gauge cluster inspired by classic automotive styling, with draggable gauges, scalable layouts, and a refined visual design for real dashboard displays.",
      tags: ["Python", "PySide6", "UI Design", "Automotive"],
      accent: "from-orange-400/30 to-amber-400/20",
    },
    {
      title: "ESP32 / Pico Automation",
      category: "Embedded + IoT",
      description:
        "Wi-Fi setup portals, sensor-triggered actions, timers, relays, and hardware control flows for smart devices that solve real problems beyond the screen.",
      tags: ["ESP32", "Pico W", "MicroPython", "IoT"],
      accent: "from-sky-400/30 to-indigo-400/20",
    },
    {
      title: "NFC + LED Interactive Builds",
      category: "Embedded Prototyping",
      description:
        "Interactive systems combining NFC readers, LEDs, custom logic, and audio feedback to create polished physical experiences with personality.",
      tags: ["NFC", "WS2812", "Electronics", "Prototyping"],
      accent: "from-fuchsia-400/30 to-violet-400/20",
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
    { label: "Resume", value: "Download PDF", href: "https://github.com/joshorames?tab=repositories" },
  ];

  return (
    <div className="min-h-screen bg-[#071018] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative z-10">
        <section className="px-6 pt-8 pb-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(16,185,129,0.08)]">
            <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
              <div className="flex flex-col justify-center">
                <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Available for projects and opportunities
                </div>

                <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  I build bold,
                  <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                    real-world tech projects
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  From hydroponics towers and custom dashboards to embedded systems, sensors,
                  automations, and polished interfaces — I create practical projects that blend
                  hardware, software, and design.
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
                    Contact Me
                  </a>
                </div>

                <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    ["Projects", "10+"],
                    ["Hardware + Software", "Hybrid"],
                    ["Focus", "Useful Builds"],
                    ["Style", "Modern + Practical"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
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

                <div className="relative rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Featured Builder Snapshot</p>
                      <h2 className="text-xl font-bold">Josh Portfolio</h2>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Live Projects
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-sm text-slate-400">Current Focus</p>
                          <p className="mt-2 text-2xl font-black text-white">Hydroponics + IoT</p>
                        </div>
                        <div className="relative h-24 w-24 rounded-full border-8 border-emerald-300/20 border-t-emerald-300 border-r-cyan-300">
                          <div className="absolute inset-4 rounded-full border border-white/10 bg-slate-950/80" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-slate-400">Build Style</p>
                        <p className="mt-2 text-lg font-bold">Clean, custom, functional</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-slate-400">What stands out</p>
                        <p className="mt-2 text-lg font-bold">Real devices, not just mockups</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-orange-300/15 bg-orange-300/5 p-4">
                      <p className="text-sm text-orange-100/70">Why people should email you</p>
                      <p className="mt-2 text-base leading-7 text-orange-50">
                        Product ideas, prototyping help, custom builds, automation concepts,
                        embedded systems, dashboards, and one-off maker projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">What I build</p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Projects people can reach out about</h2>
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
                    <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {project.category}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
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
                      <span className="text-sm font-medium text-emerald-200">Interested in this kind of work?</span>
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
        </section>

        <section className="px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Why this matters</p>
              <h2 className="mt-3 text-3xl font-black">More than a portfolio</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                This site is designed to show employers and collaborators that you do more than just talk about ideas — you design, prototype, code, test, and build things that actually exist.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Show practical, real-world problem solving",
                  "Highlight hardware + software crossover",
                  "Create easy ways for companies or clients to contact you",
                  "Make your projects feel premium and memorable",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">Tech and capabilities</p>
              <h2 className="mt-3 text-3xl font-black">What you can be hired for</h2>

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
        </section>

        <section id="contact" className="px-6 pb-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_0_70px_rgba(59,130,246,0.08)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">Contact</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let’s build something impressive</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Interested in a custom build, collaboration, prototype, dashboard, automation idea,
                  or something unusual? Reach out and tell me what you have in mind.
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
        </section>
      </main>
    </div>
  );
}
