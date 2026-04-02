import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { SMALL_VARIANTS } from "./data/gaugePresets";
import { makeGauge } from "./utils/gaugeFactory";
import GaugeRenderer from "./components/GaugeRenderer";
import NumberField from "./components/fields/NumberField";
import TextField from "./components/fields/TextField";
import ColorField from "./components/fields/ColorField";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [gauges, setGauges] = useState(() => {
    const saved = localStorage.getItem("webGaugeDashboardV1");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return [
      makeGauge("small", { name: "Oil", variant: "oil", x: 190, y: 180 }),
      makeGauge("small", {
        name: "Water",
        variant: "water",
        ...SMALL_VARIANTS.water,
        x: 190,
        y: 430,
      }),
      makeGauge("small", {
        name: "Volts",
        variant: "volts",
        ...SMALL_VARIANTS.volts,
        x: 920,
        y: 180,
      }),
      makeGauge("small", {
        name: "Fuel",
        variant: "fuel",
        ...SMALL_VARIANTS.fuel,
        x: 920,
        y: 430,
      }),
      makeGauge("speedometer", { name: "Speed", x: 395, y: 310 }),
      makeGauge("rpm", { name: "RPM", x: 715, y: 310 }),
    ];
  });

  const [selectedId, setSelectedId] = useState(null);
  const [dragState, setDragState] = useState(null);

  const selectedGauge = gauges.find((g) => g.id === selectedId) || null;

  useEffect(() => {
    if (!selectedId && gauges.length) setSelectedId(gauges[0].id);
  }, [gauges, selectedId]);

  useEffect(() => {
    localStorage.setItem("webGaugeDashboardV1", JSON.stringify(gauges));
  }, [gauges]);

  const updateGauge = (id, patch) => {
    setGauges((prev) => prev.map((g) => (g.id === id ? { ...g, ...patch } : g)));
  };

  const addGauge = (type) => {
    let gauge = makeGauge(type, {
      x: 540,
      y: 300,
      zIndex: gauges.length + 1,
    });

    if (type === "small") {
      gauge = {
        ...gauge,
        ...SMALL_VARIANTS.oil,
        variant: "oil",
        name: "Oil",
      };
    }

    setGauges((prev) => [...prev, gauge]);
    setSelectedId(gauge.id);
    setActivePage("builder");
  };

  const duplicateGauge = () => {
    if (!selectedGauge) return;
    const copy = {
      ...selectedGauge,
      id: crypto.randomUUID?.() || Math.random().toString(36).slice(2, 10),
      name: `${selectedGauge.name} Copy`,
      x: selectedGauge.x + 32,
      y: selectedGauge.y + 32,
      zIndex: gauges.length + 1,
    };
    setGauges((prev) => [...prev, copy]);
    setSelectedId(copy.id);
  };

  const deleteGauge = () => {
    if (!selectedGauge) return;
    setGauges((prev) => prev.filter((g) => g.id !== selectedGauge.id));
    setSelectedId(null);
  };

  const resetLayout = () => {
    localStorage.removeItem("webGaugeDashboardV1");
    window.location.reload();
  };

  const handlePointerMove = (e) => {
    if (!dragState) return;
    const rect = dragState.bounds;
    const x = e.clientX - rect.left - dragState.offsetX;
    const y = e.clientY - rect.top - dragState.offsetY;
    updateGauge(dragState.id, { x, y });
  };

  const handlePointerUp = () => setDragState(null);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  });

  const startDrag = (e, id) => {
    const bounds = e.currentTarget.parentElement.getBoundingClientRect();
    const gauge = gauges.find((g) => g.id === id);
    if (!gauge) return;

    setSelectedId(id);
    setDragState({
      id,
      bounds,
      offsetX: e.clientX - bounds.left - gauge.x,
      offsetY: e.clientY - bounds.top - gauge.y,
    });
  };

  const exportJson = JSON.stringify(gauges, null, 2);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#071018] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative z-10 min-h-screen">
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#071018]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
            <div>
              <div className="text-lg font-black text-white">Josh Orames</div>
              <div className="text-xs text-slate-400"></div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActivePage("home")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  activePage === "home"
                    ? "bg-emerald-300 text-slate-950"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => setActivePage("builder")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  activePage === "builder"
                    ? "bg-emerald-300 text-slate-950"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Gauge Builder
              </button>

            </div>
          </div>
        </div>

        {activePage === "home" && (
          <div className="mx-auto max-w-[1400px] px-6 py-8">
            <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                    Available for projects and opportunities
                  </div>

                  {/* <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                    I build
                    <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                      real devices, not just mockups
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    Explore my portfolio and then jump into the custom gauge
                    builder page to try a browser-based version of the dashboard
                    system inspired by my PySide app.
                  </p> */}

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() => setActivePage("builder")}
                      className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                    >
                      Open Gauge Builder
                    </button>

                    <a
                      href="https://github.com/joshorames/CustomGaugeDashboard"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      View PySide Repo
                    </a>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm text-slate-400">Featured build</p>
                  <p className="mt-3 text-2xl font-bold text-white">
                    Custom Gauge Dashboard
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    A configurable dashboard system with draggable gauges,
                    custom styling, and saved layouts. The builder page lets you
                    experiment with a web version directly in the browser.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === "builder" && (
          <div className="mx-auto grid max-w-[1600px] gap-6 px-6 py-6 xl:grid-cols-[1.1fr_0.55fr]">
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 md:p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                    Canvas
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    Drag gauges, click to edit
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => addGauge("speedometer")}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                  >
                    Add Speed
                  </button>
                  <button
                    onClick={() => addGauge("rpm")}
                    className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Add RPM
                  </button>
                  <button
                    onClick={() => addGauge("small")}
                    className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Add Oil
                  </button>
                </div>
              </div>

              <div
                className="relative h-[760px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70"
                onClick={() => setSelectedId(null)}
              >
                {gauges.map((g) => (
                  <GaugeRenderer
                    key={g.id}
                    config={g}
                    isSelected={g.id === selectedId}
                    onSelect={setSelectedId}
                    onDragStart={startDrag}
                  />
                ))}
              </div>
            </motion.section>

            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
                    Settings
                  </p>
                  <h2 className="mt-1 text-2xl font-black">Selected gauge</h2>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={duplicateGauge}
                    className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold"
                  >
                    Duplicate
                  </button>
                  <button
                    onClick={deleteGauge}
                    className="rounded-xl bg-red-500/20 px-3 py-2 text-sm font-semibold text-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {!selectedGauge ? (
                <p className="text-slate-400">Select a gauge on the canvas.</p>
              ) : (
                <div className="space-y-5">
                  <TextField
                    label="Name"
                    value={selectedGauge.name}
                    onChange={(v) => updateGauge(selectedGauge.id, { name: v })}
                  />

                  <TextField
                    label="Display label"
                    value={selectedGauge.label}
                    onChange={(v) => updateGauge(selectedGauge.id, { label: v })}
                  />

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Type
                    </label>
                    <select
                      value={selectedGauge.type}
                      onChange={(e) => {
                        const nextType = e.target.value;
                        const base = makeGauge(nextType);
                        updateGauge(selectedGauge.id, {
                          ...base,
                          id: selectedGauge.id,
                          name: selectedGauge.name,
                          x: selectedGauge.x,
                          y: selectedGauge.y,
                          zIndex: selectedGauge.zIndex,
                        });
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
                    >
                      <option value="speedometer">Speedometer</option>
                      <option value="rpm">RPM</option>
                      <option value="small">Small</option>
                    </select>
                  </div>

                  {selectedGauge.type === "small" && (
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        Small gauge preset
                      </label>
                      <select
                        value={selectedGauge.variant || "oil"}
                        onChange={(e) => {
                          const variant = e.target.value;
                          updateGauge(selectedGauge.id, {
                            ...SMALL_VARIANTS[variant],
                            variant,
                            name: variant[0].toUpperCase() + variant.slice(1),
                          });
                        }}
                        className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
                      >
                        <option value="oil">Oil</option>
                        <option value="water">Water</option>
                        <option value="volts">Volts</option>
                        <option value="fuel">Fuel</option>
                      </select>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <NumberField
                      label="Value"
                      value={selectedGauge.value}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, {
                          value: v,
                          unitText:
                            selectedGauge.type === "speedometer"
                              ? `${Math.round(v)} MPH`
                              : selectedGauge.unitText,
                        })
                      }
                    />
                    <TextField
                      label="Unit text"
                      value={selectedGauge.unitText}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { unitText: v })
                      }
                    />
                    <NumberField
                      label="Min"
                      value={selectedGauge.min}
                      onChange={(v) => updateGauge(selectedGauge.id, { min: v })}
                    />
                    <NumberField
                      label="Max"
                      value={selectedGauge.max}
                      onChange={(v) => updateGauge(selectedGauge.id, { max: v })}
                    />
                    <NumberField
                      label="Scale"
                      step={0.05}
                      value={selectedGauge.scale}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, {
                          scale: Math.max(0.35, v),
                        })
                      }
                    />
                    <NumberField
                      label="Z Index"
                      value={selectedGauge.zIndex}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { zIndex: v })
                      }
                    />
                  </div>

                  <TextField
                    label="Major labels (comma separated)"
                    value={selectedGauge.majorLabels.join(",")}
                    onChange={(v) =>
                      updateGauge(selectedGauge.id, {
                        majorLabels: v
                          .split(",")
                          .map((x) => x.trim())
                          .filter(Boolean)
                          .map((x) =>
                            Number.isNaN(Number(x)) ? x : Number(x)
                          ),
                      })
                    }
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <NumberField
                      label="Start angle"
                      value={selectedGauge.startAngle}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { startAngle: v })
                      }
                    />
                    <NumberField
                      label="End angle"
                      value={selectedGauge.endAngle}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { endAngle: v })
                      }
                    />
                    <NumberField
                      label="Radius"
                      value={selectedGauge.radius}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { radius: v })
                      }
                    />
                    <NumberField
                      label="Number radius"
                      value={selectedGauge.numberRadius}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { numberRadius: v })
                      }
                    />
                    <NumberField
                      label="Needle length"
                      value={selectedGauge.needleLength}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { needleLength: v })
                      }
                    />
                    <NumberField
                      label="Needle width"
                      step={0.5}
                      value={selectedGauge.needleWidth}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { needleWidth: v })
                      }
                    />
                    <NumberField
                      label="Needle back"
                      value={selectedGauge.needleBackLength}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { needleBackLength: v })
                      }
                    />
                    <NumberField
                      label="Hub radius"
                      value={selectedGauge.hubRadius}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { hubRadius: v })
                      }
                    />
                    <NumberField
                      label="Major tick outer"
                      value={selectedGauge.majorTickOuter}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { majorTickOuter: v })
                      }
                    />
                    <NumberField
                      label="Major tick inner"
                      value={selectedGauge.majorTickInner}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { majorTickInner: v })
                      }
                    />
                    <NumberField
                      label="Minor tick outer"
                      value={selectedGauge.minorTickOuter}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { minorTickOuter: v })
                      }
                    />
                    <NumberField
                      label="Minor tick inner"
                      value={selectedGauge.minorTickInner}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { minorTickInner: v })
                      }
                    />
                    <NumberField
                      label="Major tick width"
                      step={0.5}
                      value={selectedGauge.majorTickWidth}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { majorTickWidth: v })
                      }
                    />
                    <NumberField
                      label="Minor tick width"
                      step={0.5}
                      value={selectedGauge.minorTickWidth}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { minorTickWidth: v })
                      }
                    />
                    <NumberField
                      label="Label size"
                      value={selectedGauge.labelFontSize}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { labelFontSize: v })
                      }
                    />
                    <NumberField
                      label="Number size"
                      value={selectedGauge.numberFontSize}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { numberFontSize: v })
                      }
                    />
                    <NumberField
                      label="Unit size"
                      value={selectedGauge.unitFontSize}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { unitFontSize: v })
                      }
                    />
                    <NumberField
                      label="Label offset Y"
                      value={selectedGauge.labelOffsetY}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { labelOffsetY: v })
                      }
                    />
                    <NumberField
                      label="Unit offset Y"
                      value={selectedGauge.unitOffsetY}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { unitOffsetY: v })
                      }
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <label className="mb-3 flex items-center gap-3 text-sm text-slate-300">
                      <input
                        type="checkbox"
                        checked={selectedGauge.showOdometer}
                        onChange={(e) =>
                          updateGauge(selectedGauge.id, {
                            showOdometer: e.target.checked,
                          })
                        }
                      />
                      Show odometer box
                    </label>

                    {selectedGauge.showOdometer && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextField
                          label="Odometer text"
                          value={selectedGauge.odometerText}
                          onChange={(v) =>
                            updateGauge(selectedGauge.id, {
                              odometerText: v,
                            })
                          }
                        />
                        <NumberField
                          label="Odo width"
                          value={selectedGauge.odometerWidth}
                          onChange={(v) =>
                            updateGauge(selectedGauge.id, {
                              odometerWidth: v,
                            })
                          }
                        />
                        <NumberField
                          label="Odo height"
                          value={selectedGauge.odometerHeight}
                          onChange={(v) =>
                            updateGauge(selectedGauge.id, {
                              odometerHeight: v,
                            })
                          }
                        />
                        <NumberField
                          label="Odo offset X"
                          value={selectedGauge.odometerOffsetX}
                          onChange={(v) =>
                            updateGauge(selectedGauge.id, {
                              odometerOffsetX: v,
                            })
                          }
                        />
                        <NumberField
                          label="Odo offset Y"
                          value={selectedGauge.odometerOffsetY}
                          onChange={(v) =>
                            updateGauge(selectedGauge.id, {
                              odometerOffsetY: v,
                            })
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <ColorField
                      label="Face color"
                      value={selectedGauge.faceColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { faceColor: v })
                      }
                    />
                    <ColorField
                      label="Border color"
                      value={selectedGauge.borderColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { borderColor: v })
                      }
                    />
                    <ColorField
                      label="Tick color"
                      value={selectedGauge.tickColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { tickColor: v })
                      }
                    />
                    <ColorField
                      label="Minor tick color"
                      value={selectedGauge.minorTickColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { minorTickColor: v })
                      }
                    />
                    <ColorField
                      label="Needle color"
                      value={selectedGauge.needleColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { needleColor: v })
                      }
                    />
                    <ColorField
                      label="Hub color"
                      value={selectedGauge.hubColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { hubColor: v })
                      }
                    />
                    <ColorField
                      label="Text color"
                      value={selectedGauge.textColor}
                      onChange={(v) =>
                        updateGauge(selectedGauge.id, { textColor: v })
                      }
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={resetLayout}
                      className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold"
                    >
                      Reset layout
                    </button>
                    <button
                      onClick={() => setActivePage("export")}
                      className="rounded-xl bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950"
                    >
                      View JSON
                    </button>
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        )}

        {activePage === "export" && (
          <div className="mx-auto max-w-[1200px] px-6 py-6">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                    Export
                  </p>
                  <h2 className="mt-1 text-2xl font-black">Dashboard JSON</h2>
                </div>

                <button
                  onClick={() => navigator.clipboard.writeText(exportJson)}
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  Copy JSON
                </button>
              </div>

              <textarea
                readOnly
                value={exportJson}
                className="h-[700px] w-full rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-sm text-white outline-none"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}