const glossaryModules = import.meta.glob("../notes/**/glossary.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface GlossaryEntry {
  term: string;
  body: string;
}

export const glossariesByFolder = new Map<string, GlossaryEntry[]>();

for (const glossaryPath in glossaryModules) {
  const raw = glossaryModules[glossaryPath];

  const folder = glossaryPath
    .replace("../notes/", "")
    .replace("/glossary.md", "")
    .replace("glossary.md", "");

  const entries: GlossaryEntry[] = raw
    .split(/^##\s+/m)
    .slice(1)
    .map((chunk) => {
      const [term, ...rest] = chunk.split("\n");
      return {
        term: term.trim().toLowerCase(),
        body: rest.join("\n").trim(),
      };
    });

  glossariesByFolder.set(folder, entries)
}

export function getGlossaryForPath(folderPath: string): Map<string, GlossaryEntry> {
  const resolved = new Map<string, GlossaryEntry>();

  const segments = folderPath.split("/").filter(Boolean);
  const pathsToCheck: string[] = [""];
  let currentPath = "";
  
  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment;
    pathsToCheck.push(currentPath);
  }

  for (const path of pathsToCheck) {
    const entries = glossariesByFolder.get(path) ?? [];
    for (const entry of entries) {
      resolved.set(entry.term, entry);
    }
  }

  return resolved;
}