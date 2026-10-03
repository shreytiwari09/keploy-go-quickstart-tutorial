"use client";

import { ArrowRight, Circle, Play } from "lucide-react";
import { useState } from "react";

type Node = {
  label: string;
  detail: string;
  kind: "client" | "keploy" | "app" | "file" | "db" | "off";
};

const modes = {
  record: {
    title: "keploy record",
    icon: Circle,
    nodes: [
      { label: "Your requests", detail: "curl / Postman", kind: "client" },
      { label: "Keploy", detail: "saves tests/*.yaml", kind: "keploy" },
      { label: "Go app", detail: "Gin, port 8080", kind: "app" },
      { label: "Keploy", detail: "saves mocks.yaml", kind: "keploy" },
      { label: "MongoDB", detail: "real database", kind: "db" },
    ],
    steps: [
      "You use the app normally. Keploy sits on both sides of it.",
      "Each incoming request, plus the app's response, becomes a test case.",
      "Each call the app makes to MongoDB, and Mongo's answer, becomes a mock.",
    ],
  },
  replay: {
    title: "keploy test",
    icon: Play,
    nodes: [
      { label: "tests/*.yaml", detail: "recorded requests", kind: "file" },
      { label: "Keploy", detail: "compares responses", kind: "keploy" },
      { label: "Go app", detail: "same code, new build", kind: "app" },
      { label: "Keploy", detail: "answers from mocks", kind: "keploy" },
      { label: "MongoDB", detail: "not needed", kind: "off" },
    ],
    steps: [
      "Keploy re-sends every recorded request to your app.",
      "When the app queries MongoDB, Keploy answers from mocks.yaml instead.",
      "If the new response differs from the recorded one, the test fails.",
    ],
  },
} satisfies Record<string, { title: string; icon: typeof Play; nodes: Node[]; steps: string[] }>;

const nodeStyles: Record<Node["kind"], string> = {
  client: "border-border bg-background",
  keploy: "border-accent/50 bg-accent-soft text-accent",
  app: "border-foreground/30 bg-background font-semibold",
  file: "border-border bg-background font-mono text-[0.8rem]",
  db: "border-border bg-background",
  off: "border-dashed border-border bg-transparent text-muted line-through",
};

export function FlowDiagram() {
  const [mode, setMode] = useState<keyof typeof modes>("record");
  const current = modes[mode];

  return (
    <figure className="not-prose my-8 rounded-2xl border border-border bg-surface p-4 sm:p-6">
      <div role="radiogroup" aria-label="Keploy mode" className="mb-6 inline-flex rounded-lg border border-border bg-background p-1">
        {(Object.keys(modes) as (keyof typeof modes)[]).map((key) => {
          const { title, icon: Icon } = modes[key];
          const selected = mode === key;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setMode(key)}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                selected ? "bg-accent text-white dark:text-black" : "text-muted hover:text-foreground"
              }`}
            >
              <Icon className={`size-3.5 ${key === "record" ? "fill-current" : ""}`} aria-hidden />
              {title}
            </button>
          );
        })}
      </div>

      <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {current.nodes.map((node, i) => (
          <li key={`${mode}-${i}`} className="flex flex-col items-center gap-2 md:flex-1 md:flex-row">
            <div className={`w-full rounded-xl border px-3 py-2.5 text-center transition-colors ${nodeStyles[node.kind]}`}>
              <div className="text-sm">{node.label}</div>
              <div className="mt-0.5 text-xs font-normal text-muted no-underline">{node.detail}</div>
            </div>
            {i < current.nodes.length - 1 && (
              <ArrowRight className="size-4 shrink-0 rotate-90 text-muted md:rotate-0" aria-hidden />
            )}
          </li>
        ))}
      </ol>

      <figcaption className="mt-6 border-t border-border pt-4">
        <ol className="space-y-1.5 text-sm text-muted">
          {current.steps.map((step, i) => (
            <li key={step} className="flex gap-2">
              <span className="font-mono text-accent">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
