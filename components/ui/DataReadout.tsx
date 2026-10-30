import type { Metric } from "@/lib/types";

export function DataReadout({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <dl className="data-readout">
      {metrics.map((metric) => (
        <div className="data-readout__item" key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
          <span>{metric.note}</span>
        </div>
      ))}
    </dl>
  );
}
