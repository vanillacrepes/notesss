import type { GlossaryEntry } from "../data/glossaries";

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildGlossaryRegex(glossary: Map<string, GlossaryEntry>): RegExp | null {
  const terms = [...glossary.keys()];
  if (terms.length === 0) return null;

  const sorted = terms.sort((a, b) => b.length - a.length);
  const pattern = sorted.map(escapeRegex).join("|");

  return new RegExp(`\\b(${pattern})\\b`, "gi");
}