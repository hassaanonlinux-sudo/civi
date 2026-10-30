import type { Metadata } from "next";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How CIVILIS uses the Kardashev scale and known physics to frame speculative civilization archetypes.",
  openGraph: {
    title: "Methodology — CIVILIS",
    description:
      "A concise guide to the taxonomy, its scientific context, and its limits.",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <main className="methodology-page">
      <header className="methodology-hero">
        <p className="eyebrow"><span className="eyebrow__rule" /> METHOD / 001</p>
        <h1>A taxonomy for the possible.</h1>
        <p>
          CIVILIS is a visual index of civilization archetypes, not a catalog of
          known extraterrestrial societies.
        </p>
      </header>
      <div className="methodology-sections">
        <SectionReveal className="methodology-block">
          <p className="eyebrow">01 / THE ENERGY SCALE</p>
          <h2>Kardashev, used carefully.</h2>
          <p>
            In 1964, Nikolai Kardashev proposed classifying technological
            civilizations by the energy available to them: stellar output for
            Type II and galaxy-scale output for Type III. Planetary Type I is a
            later interpolation commonly used in popular accounts. The scale is
            a compact way to discuss energy throughput—not a ranking of
            intelligence, ethics, or inevitable progress.
          </p>
        </SectionReveal>
        <SectionReveal className="methodology-block">
          <p className="eyebrow">02 / TAXONOMY</p>
          <h2>Seven archetypes, several dimensions.</h2>
          <p>
            Planetary, stellar, and galactic label energy scale. Megastructural,
            oceanic, nomadic, and post-biological describe settlement,
            environment, mobility, or substrate hypotheses. They are not seven
            consecutive Kardashev steps. Each entry separates observable
            physics—energy, mass, heat, distance—from more uncertain claims
            about life, society, and cognition.
          </p>
        </SectionReveal>
        <SectionReveal className="methodology-block">
          <p className="eyebrow">03 / PHYSICAL BASIS</p>
          <h2>Thermodynamics is not optional.</h2>
          <p>
            Models note constraints such as luminosity, orbital dynamics,
            habitable-zone uncertainty, material strength, collision risk,
            thermal management, and communication latency. Values are
            illustrative order-of-magnitude ranges where possible; they are
            not engineering specifications. The 3D models are procedural
            visualizations and do not encode literal dimensions.
          </p>
        </SectionReveal>
        <SectionReveal className="methodology-block methodology-disclaimer">
          <p className="eyebrow">04 / LIMITS</p>
          <h2>Conceptual and speculative.</h2>
          <p>
            These concepts are grounded in known physical principles and
            astrobiology where possible. Some are speculative but not excluded
            by current physics; others depend on technologies, biological
            assumptions, or forms of computation that remain unverified.
            Nothing here constitutes evidence that any such civilization
            exists. No remote assets, external APIs, or runtime data services
            are used.
          </p>
        </SectionReveal>
      </div>
    </main>
  );
}
