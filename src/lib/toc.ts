import { readFileSync } from "node:fs";
import path from "node:path";
import GithubSlugger from "github-slugger";

export type TocItem = { id: string; text: string; level: 2 | 3 };

/**
 * Builds the "On this page" list at build time from the ## and ### headings
 * in page.mdx. Uses the same slugger as rehype-slug, so the ids match the
 * anchors on the rendered headings.
 */
export function getToc(): TocItem[] {
  const source = readFileSync(path.join(process.cwd(), "src/app/page.mdx"), "utf8");
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inCodeFence = false;

  for (const line of source.split("\n")) {
    if (line.trimStart().startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;

    const match = /^(#{1,3})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    const level = match[1].length;
    const text = match[2].replace(/`([^`]+)`/g, "$1").replace(/[*_]/g, "");
    const id = slugger.slug(text);
    if (level === 2 || level === 3) items.push({ id, text, level });
  }

  return items;
}
