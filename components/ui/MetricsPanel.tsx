import type { Metric } from "@/lib/types";
import { DataReadout } from "@/components/ui/DataReadout";

export function MetricsPanel({
  metrics,
  title = "Mission parameters",
}: {
  metrics: readonly Metric[];
  title?: string;
}) {
  return (
    <aside className="metrics-panel" aria-label={title}>
      <div className="eyebrow metrics-panel__heading">{title}</div>
      <DataReadout metrics={metrics} />
    </aside>
  );
}
