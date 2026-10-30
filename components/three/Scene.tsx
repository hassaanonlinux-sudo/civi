"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import type { Civilization } from "@/lib/types";
import { Loader } from "@/components/three/Loader";
import { StarField } from "@/components/three/StarField";
import { modelRegistry } from "@/components/three/models";

type SceneProps = {
  civilization: Civilization;
  progress: number;
  freeLook: boolean;
  motionEnabled: boolean;
};

function ModelStage({
  civilization,
  progress,
  freeLook,
  motionEnabled,
}: Pick<SceneProps, "civilization" | "progress" | "freeLook" | "motionEnabled">) {
  const group = useRef<THREE.Group>(null);
  const Model = modelRegistry[civilization.modelKey];
  const { size } = useThree();
  const targetX = size.width > 800 ? -1.15 : -0.12;

  useFrame(({ camera, clock }) => {
    if (!group.current) return;
    const target = progress * Math.PI * 1.15;
    const drift = motionEnabled ? Math.sin(clock.elapsedTime * 0.12) * 0.035 : 0;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      target + drift,
      2.4,
      1 / 60,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      Math.sin(progress * Math.PI) * 0.12,
      2,
      1 / 60,
    );
    if (!freeLook) {
      camera.position.x = THREE.MathUtils.damp(
        camera.position.x,
        Math.sin(progress * Math.PI * 1.8) * 0.55,
        1.8,
        1 / 60,
      );
      camera.position.y = THREE.MathUtils.damp(
        camera.position.y,
        Math.sin(progress * Math.PI) * 0.34,
        1.8,
        1 / 60,
      );
      camera.position.z = THREE.MathUtils.damp(
        camera.position.z,
        8.4 - Math.sin(progress * Math.PI) * 0.8,
        1.8,
        1 / 60,
      );
      camera.lookAt(targetX, 0, 0);
    }
  });

  return (
    <group ref={group} key={civilization.modelKey} scale={0.9}>
      <Model />
    </group>
  );
}

export function Scene({
  civilization,
  progress,
  freeLook,
  motionEnabled,
}: SceneProps) {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 8.4], fov: 40 }}
      dpr={[1, 2]}
      fallback={
        <div className="webgl-fallback" aria-hidden="true">
          <div className="webgl-fallback__orb" />
        </div>
      }
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.12;
      }}
    >
      <color attach="background" args={["#05070a"]} />
      <fog attach="fog" args={["#05070a", 9, 23]} />
      <ambientLight intensity={0.58} />
      <pointLight position={[4.5, 3.2, 4]} intensity={70} color="#c9ddff" />
      <pointLight position={[-4, -2, -3]} intensity={35} color={civilization.accentColor} />
      <directionalLight position={[-3, 5, 5]} intensity={1.6} color="#eef4ff" />
      <StarField />
      <Suspense fallback={<Loader />}>
        <ModelStage
          civilization={civilization}
          freeLook={freeLook}
          motionEnabled={motionEnabled}
          progress={progress}
        />
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.5}
            luminanceSmoothing={0.25}
            luminanceThreshold={0.62}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>
      <OrbitControls
        enabled={freeLook}
        enableDamping
        dampingFactor={0.06}
        enablePan={false}
        minDistance={4.5}
        maxDistance={13}
        autoRotate={false}
      />
    </Canvas>
  );
}
