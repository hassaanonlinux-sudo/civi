"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion() ?? false;
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.35,
  });

  return (
    <motion.div
      className="scroll-progress"
      aria-hidden="true"
      style={{ scaleX: reducedMotion ? scrollYProgress : progress }}
    />
  );
}
