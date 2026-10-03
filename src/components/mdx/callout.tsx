import { AlertTriangle, Info, Lightbulb, OctagonAlert } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  info: {
    icon: Info,
    label: "Note",
    className: "border-sky-500/30 bg-sky-500/5 [&_.callout-icon]:text-sky-500",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    className: "border-emerald-500/30 bg-emerald-500/5 [&_.callout-icon]:text-emerald-500",
  },
  warning: {
    icon: AlertTriangle,
    label: "Heads up",
    className: "border-amber-500/40 bg-amber-500/5 [&_.callout-icon]:text-amber-500",
  },
  danger: {
    icon: OctagonAlert,
    label: "Careful",
    className: "border-red-500/30 bg-red-500/5 [&_.callout-icon]:text-red-500",
  },
};

type CalloutProps = {
  type?: keyof typeof variants;
  title?: string;
  children: ReactNode;
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon: Icon, label, className } = variants[type];

  return (
    <aside className={`not-prose my-6 flex gap-3 rounded-xl border px-4 py-3.5 ${className}`}>
      <Icon className="callout-icon mt-0.5 size-5 shrink-0" aria-hidden />
      <div className="min-w-0 text-sm leading-relaxed [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-foreground/5 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_p+p]:mt-2">
        <p className="mb-1 font-semibold">{title ?? label}</p>
        {children}
      </div>
    </aside>
  );
}
