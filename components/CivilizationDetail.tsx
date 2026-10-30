"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, Move3D } from "lucide-react";
import { CanvasShell } from "@/components/three/CanvasShell";
import { MetricsPanel } from "@/components/ui/MetricsPanel";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { civilizations } from "@/lib/civilizations";
import type { Civilization } from "@/lib/types";
import { formatIndex } from "@/lib/utils";

export function CivilizationDetail({ civilization }: { civilization: Civilization }) {
  const [progress, setProgress] = useState(0);
  const [freeLook, setFreeLook] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (reducedMotion) return;
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [reducedMotion]);

  return (
    <>
      <ScrollProgress />
      <CanvasShell
        civilization={civilization}
        progress={freeLook || reducedMotion ? 0 : progress}
        freeLook={freeLook}
        className="detail-canvas"
      />
      <div className="detail-vignette" aria-hidden="true" />
      <main
        className="detail-main"
        style={{ "--civilization-accent": civilization.accentColor } as React.CSSProperties}
      >
        <section className="detail-hero" aria-labelledby="civilization-title">
          <div className="detail-hero__content">
            <Link href="/#archive" className="back-link">
              <ArrowLeft size={14} /> ALL CIVILIZATIONS
            </Link>
            <p className="eyebrow detail-hero__index">
              {formatIndex(civilization.index - 1)} / 07 <span>·</span> {civilization.classification}
            </p>
            <h1 id="civilization-title">{civilization.name}</h1>
            <p className="detail-hero__tagline">{civilization.tagline}</p>
            <p className="detail-hero__scale">{civilization.modelSpec.scaleNote}</p>
            <a href="#overview" className="scroll-cue">
              <span>ENTER FIELD BRIEF</span>
              <ArrowDown size={14} strokeWidth={1.5} />
            </a>
          </div>
          <p className="detail-hero__caption">
            MODEL FORM<br />
            <span>{civilization.modelSpec.form}</span>
          </p>
        </section>

        <MetricsPanel metrics={civilization.metrics} />

        <div className="detail-sections">
          {civilization.sections.map((section) => (
            <section
              className="brief-section"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-title`}
            >
              <SectionReveal className="brief-section__inner">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                <p className="brief-section__body">{section.body}</p>
                <ul className="observation-list">
                  {section.observations.map((observation) => (
                    <li key={observation}>{observation}</li>
                  ))}
                </ul>
              </SectionReveal>
            </section>
          ))}
          <section className="brief-section field-notes" id="field-notes">
            <SectionReveal className="brief-section__inner">
              <p className="eyebrow">06 / Field notes</p>
              <h2>Observations from the model.</h2>
              <ol className="field-note-list">
                {civilization.fieldNotes.map((note, index) => (
                  <li key={note}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{note}</p>
                  </li>
                ))}
              </ol>
              <Link className="next-brief-link" href={nextCivilization(civilization.slug)}>
                NEXT ARCHETYPE <span aria-hidden="true">↗</span>
              </Link>
            </SectionReveal>
          </section>
        </div>

        <button
          type="button"
          className="freelook-button"
          aria-pressed={freeLook}
          aria-label={freeLook ? "Disable free-look controls" : "Enable free-look controls"}
          onClick={() => setFreeLook((value) => !value)}
          disabled={reducedMotion}
          title={reducedMotion ? "Free-look is disabled by reduced-motion preference" : undefined}
        >
          <Move3D size={15} strokeWidth={1.5} />
          {reducedMotion ? "STATIC VIEW" : freeLook ? "FREE-LOOK ON" : "FREE-LOOK"}
        </button>
      </main>
    </>
  );
}

function nextCivilization(slug: string): string {
  const index = civilizations.findIndex((entry) => entry.slug === slug);
  return `/civilizations/${civilizations[(index + 1) % civilizations.length].slug}`;
}
