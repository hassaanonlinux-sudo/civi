"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Civilization } from "@/lib/types";
import { formatIndex } from "@/lib/utils";

export function CivilizationCard({
  civilization,
  active,
  onActivate,
}: {
  civilization: Civilization;
  active: boolean;
  onActivate: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`civilization-row${active ? " civilization-row--active" : ""}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      style={{ "--row-accent": civilization.accentColor } as React.CSSProperties}
      animate={reduceMotion ? undefined : { opacity: active ? 1 : 0.58 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/civilizations/${civilization.slug}`}
        className="civilization-row__link"
        aria-label={`Explore ${civilization.name}: ${civilization.classification}`}
      >
        <span className="civilization-row__index">
          {formatIndex(civilization.index - 1)} <span>/ 07</span>
        </span>
        <span className="civilization-row__main">
          <span className="civilization-row__name">{civilization.name}</span>
          <span className="civilization-row__classification">
            {civilization.classification}
          </span>
          <span className="civilization-row__tagline">{civilization.tagline}</span>
        </span>
        <span className="civilization-row__preview" aria-hidden="true">
          <span className={`preview-shape preview-shape--${civilization.modelKey}`} />
        </span>
        <ArrowUpRight className="civilization-row__arrow" size={18} strokeWidth={1.4} />
      </Link>
    </motion.article>
  );
}
