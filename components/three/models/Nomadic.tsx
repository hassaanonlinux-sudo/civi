"use client";

function GenerationShip({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.3, 2.15, 24]} />
        <meshStandardMaterial color="#9fb4a6" metalness={0.65} roughness={0.42} />
      </mesh>
      <mesh position={[1.02, 0, 0]}>
        <sphereGeometry args={[0.26, 20, 20]} />
        <meshStandardMaterial color="#c4d2cc" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[-0.12, 0, 0]}>
        <torusGeometry args={[0.4, 0.05, 8, 32]} />
        <meshStandardMaterial color="#77a88c" metalness={0.65} roughness={0.45} />
      </mesh>
      {[-0.52, 0.18].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.62, 1.5]} />
          <meshBasicMaterial color="#a6d88c" transparent opacity={0.45} side={2} />
        </mesh>
      ))}
      <mesh position={[0.55, 0, 0]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshBasicMaterial color="#fff1cf" />
      </mesh>
    </group>
  );
}

export function Nomadic() {
  return (
    <group>
      <GenerationShip position={[-0.25, 0.35, 0.1]} rotation={-0.18} />
      <GenerationShip position={[0.48, -0.58, -0.55]} rotation={0.04} />
      <GenerationShip position={[-0.88, -0.72, 0.6]} rotation={0.28} />
      <mesh rotation={[0.4, 0.1, 0.2]}>
        <torusGeometry args={[2.1, 0.006, 4, 100]} />
        <meshBasicMaterial color="#a6d88c" transparent opacity={0.13} />
      </mesh>
    </group>
  );
}
