import type { ComponentType } from "react";
import type { ModelKey } from "@/lib/types";
import { Galactic } from "@/components/three/models/Galactic";
import { Megastructural } from "@/components/three/models/Megastructural";
import { Nomadic } from "@/components/three/models/Nomadic";
import { Oceanic } from "@/components/three/models/Oceanic";
import { Planetary } from "@/components/three/models/Planetary";
import { PostBiological } from "@/components/three/models/PostBiological";
import { Stellar } from "@/components/three/models/Stellar";

export const modelRegistry: Record<ModelKey, ComponentType> = {
  planetary: Planetary,
  stellar: Stellar,
  galactic: Galactic,
  megastructural: Megastructural,
  oceanic: Oceanic,
  nomadic: Nomadic,
  "post-biological": PostBiological,
};
