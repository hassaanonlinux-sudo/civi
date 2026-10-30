"use client";

import * as THREE from "three";

export function Oceanic() {
  return (
    <group rotation={[0.08, 0, -0.12]}>
      <mesh>
        <sphereGeometry args={[1.38, 48, 48]} />
        <meshStandardMaterial
          color="#056b83"
          emissive="#03485b"
          emissiveIntensity={0.6}
          roughness={0.32}
          metalness={0.1}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.48, 48, 40, Math.PI / 2, Math.PI]} />
        <meshStandardMaterial
          color="#d5f1ee"
          transparent
          opacity={0.82}
          roughness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, -0.78, 0]}>
        <torusGeometry args={[1.39, 0.025, 8, 100]} />
        <meshBasicMaterial color="#55d9cf" transparent opacity={0.75} />
      </mesh>
      {[-0.52, -0.08, 0.38].map((x, index) => (
        <group key={x} position={[x, -1.2 + (index % 2) * 0.08, 0.1]}>
          <mesh position={[0, 0.28, 0]}>
            <cylinderGeometry args={[0.06, 0.13, 0.62, 10]} />
            <meshStandardMaterial color="#464d57" metalness={0.6} roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.64, 0]}>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshBasicMaterial color="#ff906b" transparent opacity={0.75} />
          </mesh>
          <mesh position={[0, 0.81, 0]}>
            <sphereGeometry args={[0.1, 12, 12]} />
            <meshBasicMaterial color="#7ffff0" transparent opacity={0.35} />
          </mesh>
        </group>
      ))}
      <mesh position={[-0.35, 0.2, 0.95]} rotation={[0.4, 0, 0.6]}>
        <boxGeometry args={[0.42, 0.07, 0.12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.62} />
      </mesh>
      <mesh position={[0.78, 0.85, 0.25]} rotation={[0.2, 0, -0.5]}>
        <boxGeometry args={[0.36, 0.06, 0.1]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}
