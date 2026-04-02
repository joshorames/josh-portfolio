import { BASE_PRESETS } from "../data/gaugePresets";

const uid = () => Math.random().toString(36).slice(2, 10);

export function makeGauge(type, overrides = {}) {
  return {
    id: uid(),
    name:
      type === "small"
        ? "Small Gauge"
        : type === "rpm"
        ? "RPM Gauge"
        : "Speed Gauge",
    variant: type === "small" ? "oil" : type,
    ...BASE_PRESETS[type],
    ...overrides,
  };
}