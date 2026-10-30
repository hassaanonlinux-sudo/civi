"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import type { Civilization } from "@/lib/types";

const Scene = dynamic(
  () => import("@/components/three/Scene").then((module) => module.Scene),
  { ssr: false },
);

type CanvasShellProps = {
  civilization: Civilization;
  progress?: number;
  freeLook?: boolean;
  className?: string;
};

export function CanvasShell({
  civilization,
  progress = 0,
  freeLook = false,
  className = "",
}: CanvasShellProps) {
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionEnabled(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return (
    <div
      className={`canvas-shell ${className}${freeLook && motionEnabled ? " canvas-shell--interactive" : ""}`}
      style={{ "--civilization-accent": civilization.accentColor } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="canvas-poster">
        <div className="canvas-poster__glow" />
        <div className={`canvas-poster__shape canvas-poster__shape--${civilization.modelKey}`} />
        <div className="canvas-poster__grain" />
      </div>
      <Suspense fallback={null}>
        <Scene
          civilization={civilization}
          freeLook={freeLook && motionEnabled}
          motionEnabled={motionEnabled}
          progress={motionEnabled ? progress : 0}
        />
      </Suspense>
    </div>
  );
}
