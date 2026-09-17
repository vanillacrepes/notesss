import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { subjects } from "../data/subjects";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { getGlossaryForPath } from "../data/glossaries";
import { rehypeGlossary } from "../lib/rehypeGlossary";
import Tooltip from "./Tooltip";

export default function NotePage() {
  const { subjectSlug, noteSlug } = useParams();
  const subject = subjects.find((s) => s.slug === subjectSlug);
  const note = subject?.notes.find((n) => n.slug === noteSlug);

  if (!subject || !note) {
    return (
      <div className="note-content">
        <p>Note not found.</p>
      </div>
    );
  }

  const glossary = getGlossaryForPath(subjectSlug!);

  return (
    <article className="note-content">
      <div className="note-note">
        {subject.name} <span className="sep">/</span> {note.title}
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, [rehypeGlossary, glossary]]}
        components={{
          // @ts-expect-error -- :P
          "glossary-term": ({ node, children }: any) => {
            const term = node?.properties?.term as string;
            const entry = glossary.get(term);
            if (!entry) return <>{children}</>;
            return (
              <Tooltip text={entry.body}>
                <span className="tooltip-trigger">{children}</span>
              </Tooltip>
            );
          },
        }}
      >
        {note.content}
      </ReactMarkdown>
    </article>
  );
}