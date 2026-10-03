import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/callout";
import { CodeBlock } from "@/components/mdx/code-block";
import { FlowDiagram } from "@/components/mdx/flow-diagram";
import { Steps } from "@/components/mdx/steps";
import { Tab, Tabs } from "@/components/mdx/tabs";
import { Troubleshoot } from "@/components/mdx/troubleshoot";

const components: MDXComponents = {
  // Markdown elements
  pre: CodeBlock,
  a: ({ href = "", ...props }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ) : (
      <a href={href} {...props} />
    ),

  // Custom components available in every .mdx file
  Callout,
  FlowDiagram,
  Steps,
  Tab,
  Tabs,
  Troubleshoot,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
