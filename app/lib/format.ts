import type { Language } from "../data/types";

// Metric values are stored in English notation ("VND 64,309", "5.35").
// Vietnamese swaps the two separators: "VND 64.309", "5,35".
export function formatMetricValue(value: string, language: Language) {
  if (language === "en") return value;
  return value.replace(/[.,]/g, (separator) => (separator === "." ? "," : "."));
}
