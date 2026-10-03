import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { TableOfContents } from "@/components/table-of-contents";
import { themeScript } from "@/components/theme-toggle";
import { getToc } from "@/lib/toc";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your First Keploy Tests in Go",
  description:
    "A beginner-friendly guide to recording and replaying API tests for a Go (Gin + MongoDB) app with Keploy, with no test code to write.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const toc = getToc();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">
        <SiteHeader />
        <div className="mx-auto flex max-w-6xl gap-12 px-4 sm:px-6 lg:px-8">
          <main className="min-w-0 flex-1 py-10 lg:py-14">
            <article className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert prose-headings:scroll-mt-20 prose-headings:tracking-tight prose-a:text-accent prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0">
              {children}
            </article>
          </main>
          <aside className="hidden w-56 shrink-0 xl:block">
            <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-14">
              <TableOfContents items={toc} />
            </div>
          </aside>
        </div>
        <footer className="border-t border-border py-8 text-center text-sm text-muted">
          Written by Shrey Tiwari · Built with Next.js, MDX and Tailwind CSS
        </footer>
      </body>
    </html>
  );
}
