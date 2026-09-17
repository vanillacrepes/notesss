const noteModules = import.meta.glob("../notes/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

console.log(noteModules)

export interface Note {
  slug: string;
  title: string;
  content: string;
}

export interface Subject {
  slug: string;
  name: string;
  notes: Note[];
}

const SUBJECT_NAMES: Record<string, string> = {
  cmsc56: "CMSC 56 | Discrete Mathematical Structures in Computer Science I",
};

const subjectMap = new Map<string, Note[]>();

for (const notePath in noteModules) {
  const parts = notePath.split("/");
  const subjectSlug = parts[parts.length - 2];
  const fileName = parts[parts.length - 1].replace(/\.md$/, "");
  const raw = noteModules[notePath];

  if (fileName === "glossary") continue;

  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : fileName;

  const note: Note = { slug: fileName, title, content: raw };

  if (!subjectMap.has(subjectSlug)) subjectMap.set(subjectSlug, []);
  subjectMap.get(subjectSlug)!.push(note);
}

export const subjects: Subject[] = [];
for (const [slug, notes] of subjectMap.entries()) {
  notes.sort((a, b) => a.slug.localeCompare(b.slug));
  subjects.push({
    slug,
    name: SUBJECT_NAMES[slug] ?? slug,
    notes,
  });
}

subjects.sort((a, b) => a.name.localeCompare(b.name));
