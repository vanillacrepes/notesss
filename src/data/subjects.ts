const noteModules = import.meta.glob("../notes/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const imageModules = import.meta.glob(
  "../notes/**/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

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
  cmsc12: "CMSC 12 | Foundations of Computer Science",
};

const imagesByFolder = new Map<string, Record<string, string>>();

for (const imagePath in imageModules) {
  const parts = imagePath.split("/");
  const fileName = parts[parts.length - 1];
  const folder = parts.slice(2, -1).join("/");

  if (!imagesByFolder.has(folder)) imagesByFolder.set(folder, {});
  imagesByFolder.get(folder)![fileName] = imageModules[imagePath];
}

function resolveImagePaths(raw: string, folder: string): string {
  const folderImages = imagesByFolder.get(folder);
  if (!folderImages) return raw;

  return raw.replace(
    /!\[([^\]]*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g,
    (match, alt, src, titlePart = "") => {
      if (/^(https?:)?\/\//.test(src) || src.startsWith("/")) return match;
      const resolved = folderImages[src];
      return resolved ? `![${alt}](${resolved}${titlePart})` : match;
    }
  );
}

const subjectMap = new Map<string, Note[]>();

for (const notePath in noteModules) {
  const parts = notePath.split("/");
  const subjectSlug = parts[parts.length - 2];
  const fileName = parts[parts.length - 1].replace(/\.md$/, "");
  const raw = noteModules[notePath];

  if (fileName === "glossary") continue;

  const content = resolveImagePaths(raw, subjectSlug);

  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : fileName;

  const note: Note = { slug: fileName, title, content };

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