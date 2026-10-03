# Your First Keploy Tests in Go

A single-page, beginner-friendly tutorial on recording and replaying API tests for a Go app with [Keploy](https://keploy.io). It's written from my own first run of Keploy's **Gin + MongoDB** quickstart on an Apple Silicon Mac, including the errors I hit and how I fixed them.

The site is built with **Next.js** and **MDX**, styled with **Tailwind CSS**, and statically generated.

## What the tutorial covers

- What Keploy does and why it's useful for Go developers
- Installing Keploy, logging in, and running the sample app with MongoDB in Docker
- Recording test cases with `keploy record`, and what Keploy writes to disk (tests, mocks, noise)
- Replaying with `keploy test` **with the database switched off**
- Catching a deliberate regression
- Troubleshooting the real errors from my run

## Features

- **MDX content.** The whole tutorial lives in [`src/app/page.mdx`](src/app/page.mdx): Markdown with React components mixed in.
- **Custom components**: `<Callout>`, `<Steps>`, `<Tabs>`, `<Troubleshoot>` and an interactive record/replay `<FlowDiagram>`
- **Syntax highlighting** with [rehype-pretty-code](https://rehype-pretty.pages.dev/) and Shiki, with separate light and dark themes, file titles and highlighted lines
- **Copy button** on every code block
- **Dark/light mode toggle** that follows the system setting, remembers your choice, and doesn't flash on load
- **"On this page" sidebar** generated from the MDX headings at build time, highlighting the section you're reading
- **Reading progress bar** using CSS scroll-driven animations, with no JavaScript
- **Responsive** down to phone widths
- **Social preview image** generated at build time

## Running locally

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/shreytiwari09/keploy-go-quickstart-tutorial.git
cd keploy-go-quickstart-tutorial
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static production site |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```txt
src/
├── app/
│   ├── page.mdx              # The tutorial
│   ├── layout.tsx            # Header, sidebar, footer, theme script, metadata
│   ├── globals.css           # Theme colours, code block and step styles
│   ├── icon.svg              # Favicon
│   └── opengraph-image.tsx   # Social preview image
├── components/
│   ├── mdx/                  # Components used inside page.mdx
│   ├── site-header.tsx
│   ├── table-of-contents.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── toc.ts                # Builds the sidebar from page.mdx headings
└── mdx-components.tsx        # Registers MDX components and overrides (e.g. <pre>)
```

## How MDX is wired up

- [`next.config.ts`](next.config.ts) enables `@next/mdx` and registers the remark/rehype plugins (`remark-gfm`, `rehype-slug`, `rehype-pretty-code`). Plugins are passed by name so they work with Turbopack.
- [`src/mdx-components.tsx`](src/mdx-components.tsx) makes the custom components available in every `.mdx` file without importing them, and replaces `<pre>` with a version that has a copy button.

## Tech stack

Next.js 16 (App Router) · React 19 · MDX 3 · Tailwind CSS 4 · Shiki · Lucide icons · TypeScript

---

Written by Shrey Tiwari.
