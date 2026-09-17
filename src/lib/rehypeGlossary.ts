// src/lib/rehypeGlossary.ts
import { visitParents } from "unist-util-visit-parents";
import type { Root, Text, Element } from "hast";
import type { GlossaryEntry } from "../data/glossaries";
import { buildGlossaryRegex } from "./glossaryMatch";

const SKIP_TAGS = new Set(["code", "pre"]);

export function rehypeGlossary(glossary: Map<string, GlossaryEntry>) {
  const regex = buildGlossaryRegex(glossary);

  return (tree: Root) => {
    if (!regex) return;

    const replacements: {
      parent: Element | Root;
      index: number;
      newNodes: (Text | Element)[];
    }[] = [];

    visitParents(tree, "text", (node: Text, ancestors) => {

      const insideSkippedTag = ancestors.some(
        (a) => a.type === "element" && SKIP_TAGS.has((a as Element).tagName)
      );
      if (insideSkippedTag) return;

      const parent = ancestors[ancestors.length - 1] as Element | Root;
      const index = parent.children.indexOf(node as any);
      if (index === -1) return;

      regex.lastIndex = 0;
      if (!regex.test(node.value)) return;
      regex.lastIndex = 0;

      const newNodes: (Text | Element)[] = [];
      let lastEnd = 0;
      let match: RegExpExecArray | null;

      while ((match = regex.exec(node.value)) !== null) {
        const matchedText = match[0];
        const start = match.index;

        if (start > lastEnd) {
          newNodes.push({ type: "text", value: node.value.slice(lastEnd, start) });
        }

        const term = matchedText.toLowerCase();
        const entry = glossary.get(term);

        newNodes.push({
          type: "element",
          tagName: "glossary-term",
          properties: { term },
          children: [{ type: "text", value: matchedText }],
        } as unknown as Element);

        lastEnd = start + matchedText.length;
      }

      if (lastEnd < node.value.length) {
        newNodes.push({ type: "text", value: node.value.slice(lastEnd) });
      }

      replacements.push({ parent, index, newNodes });
    });

    for (const { parent, index, newNodes } of replacements.reverse()) {
      parent.children.splice(index, 1, ...(newNodes as any));
    }
  };
}