"use client";

import { Children, isValidElement, useId, useState, type ReactNode } from "react";

export function Tabs({ items, children }: { items: string[]; children: ReactNode }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const panels = Children.toArray(children).filter(isValidElement);

  return (
    <div className="my-6">
      <div role="tablist" className="not-prose flex gap-1 border-b border-border">
        {items.map((item, i) => (
          <button
            key={item}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            onClick={() => setActive(i)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "border-accent text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className="[&>*:first-child]:mt-4"
        >
          {panel}
        </div>
      ))}
    </div>
  );
}

export function Tab({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
