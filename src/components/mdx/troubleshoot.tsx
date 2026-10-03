import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/** A collapsible "problem → fix" entry. Uses native <details>, so it works without JavaScript. */
export function Troubleshoot({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group my-3 rounded-xl border border-border bg-surface open:pb-1 [&_[data-rehype-pretty-code-figure]]:my-3">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
        <ChevronRight
          className="size-4 shrink-0 text-muted transition-transform group-open:rotate-90"
          aria-hidden
        />
        <span className="font-mono text-[0.8rem]">{title}</span>
      </summary>
      <div className="px-4 text-sm [&>p]:my-2">{children}</div>
    </details>
  );
}
