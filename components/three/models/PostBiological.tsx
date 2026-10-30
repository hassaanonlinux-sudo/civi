"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 420;

export function PostBiological() {
  const nodes = useRef<THREE.InstancedMesh>(null);
  const nodeGeometry = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);
  const nodeMaterial = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#e8d5ff" }),
    [],
  );
  const data = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, index) => {
      const shell = index % 3;
      const angle = (index / NODE_COUNT) * Math.PI * 2 * 3 + shell * 0.16;
      const radius = 1.18 + shell * 0.62;
      const y = Math.sin(angle * 0.48 + shell) * 0.16;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      );
    });
  }, []);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    if (!nodes.current) return;
    data.forEach((position, index) => {
      dummy.position.copy(position);
      dummy.scale.setScalar(index % 7 === 0 ? 0.055 : 0.026);
      dummy.updateMatrix();
      nodes.current?.setMatrixAt(index, dummy.matrix);
    });
    nodes.current.instanceMatrix.needsUpdate = true;
  }, [data, dummy]);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.58, 32, 32]} />
        <meshBasicMaterial color="#ffd89a" />
      </mesh>
      {[1.2, 1.8, 2.4].map((radius, index) => (
        <mesh key={radius} rotation={[0.25 + index * 0.3, 0.2, index * 0.18]}>
          <torusGeometry args={[radius, 0.025, 8, 120]} />
          <meshStandardMaterial
            color={index === 1 ? "#d5a8ff" : "#b7a5e8"}
            emissive="#8c52bd"
            emissiveIntensity={0.2}
            metalness={0.72}
            roughness={0.34}
          />
        </mesh>
      ))}
      <instancedMesh ref={nodes} args={[nodeGeometry, nodeMaterial, NODE_COUNT]} />
      {[1.05, 2.05, 2.75].map((radius, index) => (
        <mesh key={`orbit-${radius}`} rotation={[Math.PI / 2 + index * 0.25, 0, 0]}>
          <torusGeometry args={[radius, 0.003, 4, 128]} />
          <meshBasicMaterial color="#d5a8ff" transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  );
}
