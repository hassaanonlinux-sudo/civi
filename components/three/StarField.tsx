"use client";

import { useMemo } from "react";

export function StarField() {
  const positions = useMemo(() => {
    const points = new Float32Array(1700 * 3);
    for (let index = 0; index < 1700; index += 1) {
      const radius = 8 + ((index * 67) % 1200) / 100;
      const theta = index * 2.399963;
      const vertical = Math.sin(index * 17.73) * 0.9;
      points.set(
        [
          Math.cos(theta) * radius,
          vertical * radius,
          Math.sin(theta) * radius,
        ],
        index * 3,
      );
    }
    return points;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#9bb4d3"
        size={0.014}
        sizeAttenuation
        transparent
        opacity={0.56}
      />
    </points>
  );
}
