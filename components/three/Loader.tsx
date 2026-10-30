"use client";

import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="scene-loader" role="status" aria-live="polite">
        <span className="scene-loader__dot" />
        <span>Rendering field model</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </Html>
  );
}
