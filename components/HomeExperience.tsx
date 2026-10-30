"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CanvasShell } from "@/components/three/CanvasShell";
import { CivilizationCard } from "@/components/ui/CivilizationCard";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { civilizations } from "@/lib/civilizations";

export function HomeExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const archiveRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const activeCivilization = civilizations[reducedMotion ? 0 : activeIndex];
  const scrollProgress = activeIndex / (civilizations.length - 1);

  useEffect(() => {
    if (reducedMotion || !archiveRef.current) return;
    const rows = archiveRef.current.querySelectorAll<HTMLElement>("[data-civilization-index]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveIndex(Number((visible.target as HTMLElement).dataset.civilizationIndex));
        }
      },
      { rootMargin: "-34% 0px -34% 0px", threshold: [0.1, 0.35, 0.65] },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <>
      <ScrollProgress />
      <CanvasShell
        civilization={activeCivilization}
        progress={scrollProgress}
        className="home-canvas"
      />
      <div className="home-vignette" aria-hidden="true" />
      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero__copy">
            <p className="eyebrow"><span className="eyebrow__rule" /> A FIELD GUIDE TO CIVILIZATION</p>
            <motion.h1
              id="home-title"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Seven forms of
              <br />
              <span>cosmic intelligence.</span>
            </motion.h1>
            <p className="home-hero__description">
              A visual archive of civilization archetypes—spanning planetary
              energy systems, stellar engineering, and speculative substrates.
            </p>
            <a className="scroll-cue" href="#archive">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={14} strokeWidth={1.5} />
            </a>
          </div>
          <div className="home-hero__caption">
            <span className="eyebrow">01—07 / SPECULATIVE ARCHETYPES</span>
            <span>{activeCivilization.name} · {activeCivilization.classification}</span>
          </div>
        </section>

        <section
          className="archive-section"
          id="archive"
          ref={archiveRef}
          aria-labelledby="archive-title"
        >
          <header className="archive-heading">
            <p className="eyebrow"><span className="eyebrow__rule" /> THE ARCHIVE</p>
            <h2 id="archive-title">Seven possible scales.</h2>
            <p>Select a civilization to open its field brief. Scroll to move through the models.</p>
          </header>
          <div className="civilization-list">
            {civilizations.map((civilization, index) => (
              <div
                data-civilization-index={index}
                key={civilization.slug}
                className="civilization-row-wrap"
              >
                <CivilizationCard
                  civilization={civilization}
                  active={index === activeIndex}
                  onActivate={() => {
                    if (!reducedMotion) setActiveIndex(index);
                  }}
                />
              </div>
            ))}
          </div>
          <p className="archive-disclaimer">
            Conceptual reconstructions. Physical plausibility varies by archetype.
          </p>
        </section>
      </main>
    </>
  );
}
