# CIVILIS

CIVILIS is a front-end-only, static-exportable archive of seven civilization
archetypes. It pairs procedural Three.js models with scientific field briefs.
All page content is local, typed TypeScript data; no backend, API, API keys,
remote models, or runtime asset CDN is used.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Next.js. The project uses Next.js App Router,
strict TypeScript, Tailwind CSS, React Three Fiber, Drei, Framer Motion, and
Lucide icons.

## Checks and static export

```bash
npm run typecheck
npm run lint
npm run build
```

The production build uses Next.js static export (`output: "export"`) and writes
the site to `out/`. Deploy that directory to any static host. The seven detail
routes are enumerated by `generateStaticParams`, so each civilization is
rendered during the build. No Next.js server is required at runtime.

## Project map

- `app/` contains the home, methodology, and statically generated detail routes.
- `components/three/` owns the shared Canvas shell, star field, loader, and scene.
- `components/three/models/` contains one procedural model per archetype.
- `components/ui/` contains the archive row, metrics, readouts, reveals, and
  scroll progress indicator.
- `lib/types.ts` and `lib/civilizations.ts` define the typed taxonomy and all
  static brief content.
- `app/globals.css` contains the palette, typography, responsive layout, and
  reduced-motion rules.

The landing page keeps one shared canvas behind the archive. As a civilization
row enters the central viewport, the active model changes to match it. Detail
pages keep one fixed canvas behind their text and map page scroll to a gradual
camera and model reveal. The free-look control pauses scroll mapping and enables
orbit inspection.

## Add an eighth civilization

1. Add an object to `civilizations` in `lib/civilizations.ts` and satisfy the
   `Civilization` type. Give it a unique slug, the next numeric index, a
   `modelKey`, metrics, all five brief sections, field notes, and a model spec.
2. Add the key to the `ModelKey` union in `lib/types.ts`.
3. Implement a procedural React Three Fiber model in
   `components/three/models/` and register it in `models/index.ts`.
4. Prefer `InstancedMesh` or points for repeated details; avoid creating
   hundreds of individual React Three Fiber objects. Keep the model centered
   near the origin and within the existing scene camera's view.
5. Run the type check, linter, and production build. `generateStaticParams`
   derives the route list from the civilization data, so no route list needs
   hand maintenance.

Keep scientific ranges explicitly approximate and include the physical limits
that matter for the concept. The archive intentionally distinguishes energy
classes from habitat, mobility, and substrate archetypes.

## Replace a procedural model with a bundled GLTF

Place the optimized `.glb` under `public/models/` and reference it by its
same-origin path only. For example, a model component can use Drei's loader:

```tsx
"use client";

import { useGLTF } from "@react-three/drei";

export function LocalModel() {
  const { scene } = useGLTF("/models/local-model.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/models/local-model.glb");
```

Register that component for its `modelKey` in `components/three/models/index.ts`.
Keep the file in `public/`; do not use a remote URL. For a robust fallback,
retain the procedural component and select it if loading fails rather than
silently rendering an empty scene. Validate model scale, material tone mapping,
draw calls, and mobile performance after replacing a model.

## Performance and accessibility

The renderer caps device pixel ratio at 2, requests high-performance WebGL, and
uses instancing for the stellar collector swarm, arcology windows, and
computational nodes. The galactic model is the densest point field (9,000
points). Bloom is restrained. The CSS poster remains behind the lazy-loaded
canvas and a WebGL fallback is included.

Canvas visuals are hidden from assistive technology; the names, classifications,
metrics, and scientific explanations are real DOM text. Links and controls are
keyboard reachable with visible focus. Reduced-motion preferences disable
automatic rotation and scroll-driven camera motion; the procedural poster/model
remains static.

The 3D geometry is illustrative, not to scale. Kardashev categories are used as
a heuristic for energy throughput, not as a measure of intelligence or social
progress. Some entries—especially post-biological computation and
galaxy-spanning coordination—are speculative and are not evidence of
extraterrestrial life.
