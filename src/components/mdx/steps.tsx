import type { ReactNode } from "react";

/**
 * Wrap a run of ### headings to number them and join them with a line.
 * The numbering is done in CSS (see `.steps` in globals.css).
 */
export function Steps({ children }: { children: ReactNode }) {
  return <div className="steps my-8">{children}</div>;
}
