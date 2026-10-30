"use client";

import { useMemo } from "react";

const STAR_COUNT = 9000;

export function Galactic() {
  const { stars, links } = useMemo(() => {
    const starPositions = new Float32Array(STAR_COUNT * 3);
    const linkPositions: number[] = [];
    const arms = 4;
    for (let i = 0; i < STAR_COUNT; i += 1) {
      const arm = i % arms;
      const radial = Math.sqrt((i + 1) / STAR_COUNT) * 3.6;
      const angle =
        arm * ((Math.PI * 2) / arms) + radial * 1.65 + (i % 71) * 0.017;
      const thickness = Math.sin(i * 78.233) * 0.13;
      const x = Math.cos(angle) * radial;
      const z = Math.sin(angle) * radial;
      const y = thickness + Math.sin(radial * 0.7) * 0.12;
      starPositions.set([x, y, z], i * 3);
      if (i % 36 === 0) {
        const nextAngle = angle + 0.09;
        const nextRadius = radial + 0.2;
        linkPositions.push(
          x, y, z,
          Math.cos(nextAngle) * nextRadius,
          y * 0.8,
          Math.sin(nextAngle) * nextRadius,
        );
      }
    }
    return {
      stars: starPositions,
      links: new Float32Array(linkPositions),
    };
  }, []);

  return (
    <group rotation={[0.35, 0, -0.2]}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[stars, 3]}
            count={STAR_COUNT}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#c5d0ff"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.75}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[links, 3]}
            count={links.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#9b9eff" transparent opacity={0.09} />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshBasicMaterial color="#fff1d2" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshBasicMaterial color="#a6a9ff" transparent opacity={0.07} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.45, 0.004, 4, 160]} />
        <meshBasicMaterial color="#d0c8ff" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}
