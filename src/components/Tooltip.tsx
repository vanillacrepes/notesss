import { useState, useRef, useEffect } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"above" | "below">("above");
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleOutsideClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open]);

  useEffect(() => {
    if (!open || !rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    setPlacement(spaceAbove < 280 ? "below" : "above");
  }, [open]);

  return (
    <span
      ref={rootRef}
      className={`tooltip ${open ? "open" : ""} placement-${placement}`}
      onMouseEnter={() => {
        if (rootRef.current) {
          const rect = rootRef.current.getBoundingClientRect();
          setPlacement(rect.top < 280 ? "below" : "above");
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((v) => !v);
      }}
    >
      {children}
      <span className="tooltip-text">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </span>
    </span>
  );
}