"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const PANEL_COUNT = 1500;
const SHELL_RADII = [2.05, 2.65, 3.25] as const;

export function Stellar() {
  const panels = useRef<THREE.InstancedMesh>(null);
  const panelGeometry = useMemo(() => new THREE.BoxGeometry(0.09, 0.025, 0.045), []);
  const panelMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffcf8a",
        emissive: "#d77826",
        emissiveIntensity: 0.4,
        metalness: 0.58,
        roughness: 0.45,
      }),
    [],
  );
  const panelData = useMemo(() => {
    const entries: { position: THREE.Vector3; rotation: THREE.Euler; scale: number }[] = [];
    for (let i = 0; i < PANEL_COUNT; i += 1) {
      const shell = i % SHELL_RADII.length;
      const fraction = Math.floor(i / SHELL_RADII.length) / (PANEL_COUNT / 3);
      const angle = fraction * Math.PI * 2 + shell * 0.17;
      const inclination = Math.sin(i * 12.9898) * 0.3 + shell * 0.22;
      const radius = SHELL_RADII[shell];
      const position = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(inclination + angle * 0.31) * radius * 0.48,
        Math.sin(angle) * radius,
      );
      const normal = position.clone().normalize();
      const rotation = new THREE.Euler(
        Math.atan2(normal.z, normal.y),
        Math.atan2(normal.x, normal.z),
        angle * 0.18,
      );
      entries.push({ position, rotation, scale: 0.75 + ((i * 17) % 31) / 100 });
    }
    return entries;
  }, []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    if (!panels.current) return;
    panelData.forEach(({ position, rotation, scale }, index) => {
      dummy.position.copy(position);
      dummy.rotation.copy(rotation);
      dummy.scale.set(scale, 0.025, scale * 0.42);
      dummy.updateMatrix();
      panels.current?.setMatrixAt(index, dummy.matrix);
    });
    panels.current.instanceMatrix.needsUpdate = true;
  }, [dummy, panelData]);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.72, 48, 48]} />
        <meshBasicMaterial color="#ff9a42" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.84, 48, 48]} />
        <meshBasicMaterial color="#ff7b32" transparent opacity={0.12} />
      </mesh>
      {SHELL_RADII.map((radius, index) => (
        <mesh key={radius} rotation={[0.2 + index * 0.3, 0.15, index * 0.25]}>
          <torusGeometry args={[radius, 0.004, 4, 180]} />
          <meshBasicMaterial color="#ffc47d" transparent opacity={0.16} />
        </mesh>
      ))}
      <instancedMesh
        ref={panels}
        args={[panelGeometry, panelMaterial, PANEL_COUNT]}
      />
    </group>
  );
}
