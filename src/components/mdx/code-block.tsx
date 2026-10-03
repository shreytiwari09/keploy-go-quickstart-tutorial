"use client";

import { Check, Copy, X } from "lucide-react";
import { useRef, useState, type ComponentProps } from "react";

/** Replaces every <pre> rendered from MDX, adding a copy-to-clipboard button. */
export function CodeBlock(props: ComponentProps<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  async function copy() {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text.trimEnd());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (permissions, insecure context); say so instead of failing silently.
      setFailed(true);
      setTimeout(() => setFailed(false), 2000);
    }
  }

  const label = copied ? "Copied" : failed ? "Copy failed" : "Copy code";

  return (
    <div className="group relative">
      <pre ref={preRef} {...props} />
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        title={label}
        className="absolute top-2.5 right-2.5 grid size-8 place-items-center rounded-md border border-border bg-background text-muted opacity-0 transition hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
      >
        {copied ? (
          <Check className="size-4 text-emerald-500" />
        ) : failed ? (
          <X className="size-4 text-red-500" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    </div>
  );
}
