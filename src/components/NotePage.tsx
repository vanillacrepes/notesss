import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { subjects } from "../data/subjects";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export default function NotePage() {
  const { subjectSlug, noteSlug } = useParams();
  const subject = subjects.find((s) => s.slug === subjectSlug);
  const note = subject?.notes.find((n) => n.slug === noteSlug);

  if (!subject || !note) {
    return (
      <div className="note-content">
        <p className="empty-state">
          Note not found. Pick something from the sidebar.
        </p>
      </div>
    );
  }

  return (
    <article className="note-content">
      <div className="note-breadcrumb">
        {subject.name} <span className="sep">/</span> {note.title}
      </div>
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {note.content}
      </ReactMarkdown>
    </article>
  );
}
