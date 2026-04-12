import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { SMALL_VARIANTS } from "../data/gaugePresets";
import { makeGauge } from "../utils/gaugeFactory";
import GaugeRenderer from "./GaugeRenderer";
import NumberField from "./fields/NumberField";
import TextField from "./fields/TextField";
import ColorField from "./fields/ColorField";

export default function GaugeEditor() {
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
return(
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
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
)
    }
