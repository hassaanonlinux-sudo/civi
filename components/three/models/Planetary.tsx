"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function Planetary() {
  const lights = useMemo(() => {
    const positions = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i += 1) {
      const y = 1 - (i / 899) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = i * 2.399963;
      const point = new THREE.Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      ).multiplyScalar(1.015);
      positions.set([point.x, point.y, point.z], i * 3);
    }
    return positions;
  }, []);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#10253a"
          roughness={0.88}
          metalness={0.08}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.53, 48, 48]} />
        <meshBasicMaterial
          color="#398bd5"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lights, 3]}
            count={lights.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#b9e8ff"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      <mesh rotation={[Math.PI / 2.8, 0.18, 0.12]}>
        <torusGeometry args={[1.78, 0.008, 6, 180]} />
        <meshBasicMaterial color="#69b8ff" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2.8, 0.18, 0.12]}>
        <torusGeometry args={[1.9, 0.003, 4, 180]} />
        <meshBasicMaterial color="#d3eaff" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}
