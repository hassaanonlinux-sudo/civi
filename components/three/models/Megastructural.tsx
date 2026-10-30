"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const WINDOW_COUNT = 680;

export function Megastructural() {
  const windows = useRef<THREE.InstancedMesh>(null);
  const windowGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const windowMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#ffc18a" }),
    [],
  );
  const data = useMemo(() => {
    const values: { position: THREE.Vector3; rotation: THREE.Euler }[] = [];
    for (let i = 0; i < WINDOW_COUNT; i += 1) {
      const level = i % 68;
      const angle = Math.floor(i / 68) * ((Math.PI * 2) / 10) + (level % 2) * 0.08;
      const radius = 0.62 + (level % 5) * 0.12;
      const y = -1.65 + level * 0.05;
      values.push({
        position: new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius),
        rotation: new THREE.Euler(0, -angle, 0),
      });
    }
    return values;
  }, []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    if (!windows.current) return;
    data.forEach(({ position, rotation }, index) => {
      dummy.position.copy(position);
      dummy.rotation.copy(rotation);
      dummy.scale.set(0.035, 0.022, 0.018);
      dummy.updateMatrix();
      windows.current?.setMatrixAt(index, dummy.matrix);
    });
    windows.current.instanceMatrix.needsUpdate = true;
  }, [data, dummy]);

  return (
    <group>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.55, 0.78, 3.55, 48, 1, true]} />
        <meshStandardMaterial
          color="#271c26"
          metalness={0.72}
          roughness={0.52}
          side={THREE.DoubleSide}
        />
      </mesh>
      {Array.from({ length: 10 }, (_, index) => {
        const y = -1.65 + index * 0.36;
        const radius = 0.73 + Math.sin(index * 2) * 0.12;
        return (
          <group key={index}>
            <mesh position={[0, y, 0]}>
              <cylinderGeometry args={[radius + 0.22, radius, 0.12, 64, 1, true]} />
              <meshStandardMaterial
                color="#6e3c36"
                metalness={0.55}
                roughness={0.48}
                side={THREE.DoubleSide}
              />
            </mesh>
            <mesh position={[0, y + 0.07, 0]}>
              <torusGeometry args={[radius + 0.16, 0.012, 5, 96]} />
              <meshBasicMaterial color="#ff806e" transparent opacity={0.72} />
            </mesh>
          </group>
        );
      })}
      <instancedMesh
        ref={windows}
        args={[windowGeometry, windowMaterial, WINDOW_COUNT]}
      />
      <mesh position={[0, -1.88, 0]}>
        <cylinderGeometry args={[1.15, 1.28, 0.12, 64, 1, true]} />
        <meshStandardMaterial color="#362a34" metalness={0.5} roughness={0.6} />
      </mesh>
    </group>
  );
}
