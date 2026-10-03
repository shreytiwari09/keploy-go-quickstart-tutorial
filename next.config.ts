import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Let .md and .mdx files act as pages, just like .tsx files.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Don't let `next dev` generate assistant instruction files in the repo.
  agentRules: false,
};

const withMDX = createMDX({
  options: {
    // Plugins are passed by name (as strings) so they work with Turbopack.
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
