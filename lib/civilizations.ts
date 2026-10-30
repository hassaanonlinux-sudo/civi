import type { Civilization } from "@/lib/types";

export const civilizations = [
  {
    slug: "planetary",
    name: "Planetary",
    index: 1,
    classification: "Type I · Planetary",
    tagline: "A homeworld connected by an integrated energy system.",
    accentColor: "#69B8FF",
    modelKey: "planetary",
    modelSpec: {
      form: "A living world wrapped in a sparse orbital commons.",
      components: ["Luminous city lattice", "Satellite ring", "Atmospheric shell"],
      scaleNote: "One inhabited planet",
    },
    metrics: [
      { label: "Energy scale", value: "~10^16 W", note: "Planetary budget" },
      { label: "Population", value: "10^9–10^10", note: "Distributed" },
      { label: "Radius", value: "1 R⊕", note: "Homeworld baseline" },
      { label: "Substrate", value: "Silicate / ocean", note: "Local biosphere" },
      { label: "Mobility", value: "Low", note: "Planet-bound" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "One world. One shared operating envelope.",
        body: "A Type I civilization is commonly described as one able to use energy on the scale available to its home planet. The label is a useful upper-bound shorthand, not a forecast: energy integration does not imply political uniformity, nor does it excuse ecological overshoot.",
        observations: [
          "A stable biosphere is infrastructure, not an externality.",
          "Planet-wide coordination is constrained by geography, institutions, and unequal access.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "The planetary threshold is a continuum.",
        body: "The original Kardashev framework classified civilizations by energy use at stellar and galactic scales. Later popularizations interpolate a planetary Type I. There is no agreed transition point; this brief uses the category qualitatively.",
        observations: [
          "The scale measures energy throughput, not wisdom or social progress.",
          "A high-throughput pathway must still respect waste-heat limits.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Power is abundant only when its flows are managed.",
        body: "An integrated mix of solar, wind, geothermal, hydro, and storage could supply a planetary civilization. Every conversion is lossy; large systems also face transmission, materials, land-use, and temporal storage constraints.",
        observations: [
          "Efficiency and demand management reduce the required generation footprint.",
          "No energy source eliminates the need for resilient grids and repair capacity.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "The infrastructure follows the contours of a world.",
        body: "The city-light lattice shown here is a visualization of connected settlement and exchange, not a literal continuous grid. Orbital relays improve communication and observation; they do not remove latency, congestion, or the need for local autonomy.",
        observations: [
          "The atmosphere is rendered as a thin optical shell, not a load-bearing structure.",
          "Satellite populations are intentionally sparse to avoid implying a solid ring.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "A habitable planet is a narrow, coupled system.",
        body: "Climate stability depends on feedbacks among atmosphere, oceans, geology, and life. The plausible operating envelope is bounded by planetary energy balance, chemical cycles, and the finite ability of ecosystems to recover from disturbance.",
        observations: [
          "Waste heat becomes a material climate concern at sufficiently large power use.",
          "Resilience comes from redundancy and preserved ecological function.",
        ],
      },
    ],
    fieldNotes: [
      "Night-side illumination is an artistic proxy for settlement density, not a map of energy consumption.",
      "Orbital assets require station-keeping, collision avoidance, and end-of-life disposal.",
      "A planetary civilization remains vulnerable to local failure if critical systems are over-centralized.",
    ],
  },
  {
    slug: "stellar",
    name: "Stellar",
    index: 2,
    classification: "Type II · Stellar",
    tagline: "A star's output gathered by a distributed swarm.",
    accentColor: "#FFB45F",
    modelKey: "stellar",
    modelSpec: {
      form: "A luminous star surrounded by independently orbiting collectors.",
      components: ["Three collector shells", "Instanced panels", "Thermal radiators"],
      scaleNote: "One stellar system",
    },
    metrics: [
      { label: "Energy scale", value: "~10^26 W", note: "Solar luminosity order" },
      { label: "Collectors", value: "10^6–10^9", note: "Illustrative range" },
      { label: "Orbit", value: "Habitable-zone → outer", note: "Distributed shells" },
      { label: "Substrate", value: "Reflector / PV", note: "Speculative industry" },
      { label: "Waste heat", value: "IR-dominant", note: "Thermal signature" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "A star is a power source—and a thermodynamic boundary.",
        body: "A Type II civilization is associated with energy use comparable to a star's luminosity. A Dyson swarm is a plausible conceptual alternative to a rigid shell: many independent collectors on separate orbits, built incrementally and separated by large distances.",
        observations: [
          "The model uses a small visible subset of a hypothetical vast population.",
          "Collector coverage must remain low enough to preserve orbital access and thermal balance.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "The classification is about power, not a solid shell.",
        body: "The Type II label originates in Kardashev's energy-use taxonomy. A swarm does not need to enclose a star; it intercepts a fraction of stellar flux. Complete coverage is neither assumed nor required for a high collection capacity.",
        observations: [
          "Every panel must orbit, orient, communicate, and avoid collisions.",
          "The visible disk is a scale cue, not a blueprint for a contiguous megastructure.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Captured energy eventually leaves as heat.",
        body: "Collectors absorb and convert stellar radiation, then reject waste heat at finite temperatures. Radiator area and temperature set power density; thermodynamics prevents the system from hiding its energy use indefinitely.",
        observations: [
          "Infrared excess could be a technosignature, but natural dust is a major confounder.",
          "Materials must withstand radiation, thermal cycling, and long-duration micrometeoroid exposure.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "Thousands of panels behave as a population, not a surface.",
        body: "The procedural scene instances 1,500 small panels across three inclined shells. This is intentionally a sparse sample that communicates orbital architecture without suggesting that a useful swarm requires a dense, continuous enclosure.",
        observations: [
          "Independent orbits permit replacement and fault isolation.",
          "A real swarm would need traffic management and collision probability control.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "The habitable zone is not the whole system.",
        body: "Long-term liquid-water conditions depend on atmosphere, planetary geology, and stellar evolution—not orbital distance alone. A stellar-scale infrastructure could also alter the spectrum, illumination, and thermal environment of planets.",
        observations: [
          "Collector orbits are constrained by radiation pressure and orbital dynamics.",
          "Construction demands mass and industrial throughput far beyond present capability.",
        ],
      },
    ],
    fieldNotes: [
      "The star is an emissive procedural mesh; bloom is subtle and limited to bright sources.",
      "No single panel is assumed to be a complete habitat or independent power plant.",
      "Waste heat, not optical glare, is likely to dominate the large-scale observable signal.",
    ],
  },
  {
    slug: "galactic",
    name: "Galactic",
    index: 3,
    classification: "Type III · Galactic",
    tagline: "A distributed civilization spanning a substantial fraction of a galaxy.",
    accentColor: "#A6A9FF",
    modelKey: "galactic",
    modelSpec: {
      form: "A spiral distribution of stars and sparse interstellar links.",
      components: ["Spiral stellar arms", "Bright central bulge", "Signal lattice"],
      scaleNote: "A substantial fraction of one galaxy",
    },
    metrics: [
      { label: "Energy scale", value: "~10^36 W", note: "Galaxy-order estimate" },
      { label: "Systems", value: "10^6–10^11", note: "Highly uncertain" },
      { label: "Span", value: "~10^4–10^5 ly", note: "Disc-scale" },
      { label: "Substrate", value: "Stellar systems", note: "Locally diverse" },
      { label: "Latency", value: "Years → millennia", note: "Light-speed limited" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "A galaxy-scale civilization cannot be a single conversation.",
        body: "Type III denotes energy use on the scale of a galaxy. At these distances, light-travel time dominates coordination. A realistic interpretation is a loose federation of autonomous systems, not a central authority issuing real-time commands across the disk.",
        observations: [
          "A message crossing the Milky Way takes roughly 100,000 years at light speed.",
          "Civilizational continuity would depend on local autonomy and durable records.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "The scale offers a useful extreme, not a measured category.",
        body: "The Type III endpoint extrapolates stellar energy use across a galaxy. It is not a claim that such engineering exists. Current searches for anomalous waste heat remain limited by sensitivity, survey coverage, and the difficulty of separating technology from astrophysical sources.",
        observations: [
          "The rendered spiral is inspired by generic disc-galaxy morphology.",
          "It should not be read as a map of the Milky Way or a candidate civilization.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Starlight is abundant; moving mass between stars is not.",
        body: "Most available power is locally bound to stellar systems. Interstellar industry must contend with propulsion energy, long travel times, radiation exposure, and the small fraction of a galaxy's mass that can be economically moved.",
        observations: [
          "Independent energy systems reduce dependence on interstellar supply chains.",
          "The engineering lattice represents communication paths, not material bridges.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "Connectivity is sparse, slow, and local-first.",
        body: "The scene uses instanced stellar points in curved arms, a dense central bulge, and faint connecting segments. The links are visual shorthand for relay relationships across empty space; they are not continuous structures.",
        observations: [
          "Interstellar distances make collision avoidance and navigation fundamental.",
          "A galaxy's stars orbit its center on timescales far longer than human history.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "Galactic geography is not uniformly hospitable.",
        body: "Radiation environment, metallicity, stellar age, and dynamical history vary across a galaxy. Habitable planets, if common, need not be evenly distributed; a civilization's accessible fraction may be much smaller than its geometric footprint.",
        observations: [
          "Communication latency imposes a hard causal limit.",
          "The central regions contain hazards and crowded orbits as well as resources.",
        ],
      },
    ],
    fieldNotes: [
      "A spiral-arm point field communicates distribution; it is not a star catalog.",
      "The mesh links are deliberately faint to avoid implying rigid galactic-scale infrastructure.",
      "The estimated energy range is uncertain by many orders of magnitude.",
    ],
  },
  {
    slug: "megastructural",
    name: "Megastructural",
    index: 4,
    classification: "Arcology Dwellers",
    tagline: "Dense settlement stacks infrastructure vertically around a local energy budget.",
    accentColor: "#FF806E",
    modelKey: "megastructural",
    modelSpec: {
      form: "A layered, self-supporting urban tower with terraced ring districts.",
      components: ["Stacked cylinders", "Terraced rings", "Emissive window bands"],
      scaleNote: "Dense regional settlement",
    },
    metrics: [
      { label: "Energy scale", value: "~10^12–10^16 W", note: "Scenario-dependent" },
      { label: "Population", value: "10^7–10^9", note: "Vertical density" },
      { label: "Height", value: "10^0–10^1 km", note: "Speculative envelope" },
      { label: "Substrate", value: "Steel / concrete", note: "Advanced composites" },
      { label: "Thermal load", value: "High", note: "Requires heat export" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "An arcology concentrates demand as well as opportunity.",
        body: "The term describes a speculative synthesis of architecture and ecology: dense habitation integrated with food, water, energy, and transport systems. A towering structure can shorten some supply chains, but it does not abolish material flows or the need for a functioning external biosphere.",
        observations: [
          "Vertical density can reduce land footprint while increasing systems interdependence.",
          "The model is an architectural abstraction, not a feasible construction plan.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "Settlement form is not a Kardashev type.",
        body: "Arcology is a built-environment archetype rather than an energy classification. Its scale depends on material strength, logistics, governance, and risk tolerance, so it can exist at many points on any energy-use continuum.",
        observations: [
          "Long-term maintenance may dominate initial construction cost.",
          "Failure in a tightly coupled system can propagate across districts.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Density makes heat rejection a first-order design problem.",
        body: "Every inhabited level adds metabolic and mechanical heat. Efficient envelopes, passive cooling, and low-carbon generation can reduce the burden, but high population density and computational activity require radiative surfaces or heat exchange with external systems.",
        observations: [
          "Cooling capacity may constrain floor area more than structural strength.",
          "Food production requires light, nutrients, water, and growing area.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "The visible rings are occupied terraces, not independent worlds.",
        body: "A central structural spine and stepped cylindrical plates form the model. Window bands indicate illuminated volumes. Real towers face wind loading, seismic motion, fire safety, evacuation, corrosion, and the difficult mechanics of building at extreme height.",
        observations: [
          "Terraces expose useful area but create complex pressure and weather loads.",
          "Structural redundancy and compartmentalization improve survivability.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "No building can be its own closed biosphere by default.",
        body: "Life-support closure is difficult: trace nutrients, pathogens, waste products, and ecological feedbacks accumulate over time. An arcology could improve resource efficiency, but maintaining human-scale comfort and access to open ecosystems remains a design constraint.",
        observations: [
          "Building-integrated agriculture is supplementary unless area and energy are large.",
          "A resilient city retains distributed services and external escape routes.",
        ],
      },
    ],
    fieldNotes: [
      "Window bands are emissive accents, not a literal map of occupied floors.",
      "The scene's height is visually exaggerated and has no engineering scale.",
      "Passive heat rejection becomes harder as inhabited volume grows faster than exposed surface.",
    ],
  },
  {
    slug: "oceanic",
    name: "Oceanic",
    index: 5,
    classification: "Subsurface Hydrosphere",
    tagline: "A dark ocean beneath ice, sustained by internal heat and chemistry.",
    accentColor: "#55D9CF",
    modelKey: "oceanic",
    modelSpec: {
      form: "An icy moon cross-section revealing a global subsurface ocean.",
      components: ["Fractured ice shell", "Glowing ocean", "Hydrothermal vents"],
      scaleNote: "Enceladus / Europa analogue",
    },
    metrics: [
      { label: "Energy scale", value: "Geothermal + tidal", note: "Low total flux" },
      { label: "Ocean depth", value: "10^1–10^2 km", note: "Model-dependent" },
      { label: "Shell", value: "10^0–10^1 km", note: "Highly uncertain" },
      { label: "Substrate", value: "Liquid water / ice", note: "High-pressure phases" },
      { label: "Light", value: "Absent at depth", note: "Chemosynthesis possible" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "A habitable ocean need not see its star.",
        body: "Europa and Enceladus motivate the possibility of subsurface liquid water beneath icy shells. Tidal flexing and radiogenic heat may help maintain liquid layers, while water-rock interactions could provide chemical disequilibria exploitable by life.",
        observations: [
          "The existence of liquid water is not evidence that life is present.",
          "The scene is a cutaway concept, not a cross-section at measured scale.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "This archetype is ecological, not technological.",
        body: "An oceanic civilization is included as a biosphere and environment case. It does not imply a tool-using or energy-intensive society. Any technological pathway would depend on access to materials, energy gradients, and communication through a thick ice shell.",
        observations: [
          "The Kardashev scale does not classify ecosystems or biological complexity.",
          "Surface communication may require rare vents, cracks, or penetrative probes.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Low flux can still sustain complex chemistry.",
        body: "The available energy may come from tidal dissipation, rock-water reactions, or redox gradients. These sources are modest compared with sunlight, and their spatial distribution could strongly limit productivity and ecosystem size.",
        observations: [
          "Hydrothermal vents are plausible chemical habitats, not guaranteed oases.",
          "A thick shell can isolate the ocean from surface sunlight and exchange.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "A shell separates the biosphere from the vacuum.",
        body: "The model opens a cross-section to reveal a liquid layer and several hydrothermal plumes. Ice fractures and plume activity vary over time; Enceladus' observed jets provide direct evidence for active material exchange, while Europa's ocean is inferred indirectly.",
        observations: [
          "High-pressure ice may separate deep oceans from silicate seafloors.",
          "The ice shell can be both protection and a barrier to exploration.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "Water, energy, and chemistry must coincide.",
        body: "Potential habitability depends on sustained liquid water, chemical nutrients, and useful energy gradients. Nutrient cycling and ocean circulation are uncertain; without direct sampling, estimates of shell thickness and ocean chemistry remain model-dependent.",
        observations: [
          "Radiation at the surface does not necessarily reach the subsurface ocean.",
          "Tidal heating can vary with orbital resonance and interior structure.",
        ],
      },
    ],
    fieldNotes: [
      "The inner ocean is shown in cutaway; the shell remains mostly opaque in nature.",
      "Vent plumes are a plausible structure, not proof of hydrothermal activity on every icy moon.",
      "The glow is an artistic aid: a deep subsurface ocean would be dark.",
    ],
  },
  {
    slug: "nomadic",
    name: "Nomadic",
    index: 6,
    classification: "Void-Faring Nomads",
    tagline: "Self-sustaining habitats travel between stars on generational timescales.",
    accentColor: "#A6D88C",
    modelKey: "nomadic",
    modelSpec: {
      form: "A small flotilla of elongated habitats and heat-radiator wings.",
      components: ["Generation-ship hulls", "Radiator fins", "Formation beacons"],
      scaleNote: "Interstellar transit",
    },
    metrics: [
      { label: "Energy scale", value: "10^12–10^16 W", note: "Mission-dependent" },
      { label: "Population", value: "10^3–10^7", note: "Closed-community risk" },
      { label: "Transit", value: "10^2–10^5 yr", note: "Propulsion-dependent" },
      { label: "Substrate", value: "Shielded habitats", note: "Recycled materials" },
      { label: "Thermal load", value: "Radiator-limited", note: "Infrared emission" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "A generation ship turns travel into a habitat problem.",
        body: "Interstellar nomadism is physically conceivable but technologically remote. A long-lived vehicle must protect a population from radiation and impacts, close nutrient loops, and maintain social and technical knowledge over periods that may exceed familiar institutional lifetimes.",
        observations: [
          "The flotilla implies multiple independent vessels, not a single city-ship.",
          "The destination may change as knowledge and mission conditions evolve.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "Mobility is an engineering choice, not an energy tier.",
        body: "A nomadic civilization could use a wide range of power budgets. Kardashev categories describe total energy use; they do not encode velocity, cultural continuity, or whether a civilization is bound to a planet.",
        observations: [
          "Even nearby stars are separated by years of light travel at high fractions of c.",
          "A slower uncrewed probe is much less demanding than a living generation ship.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Propulsion and life support compete for mass and power.",
        body: "The energy required depends sharply on vehicle mass, propulsion method, and target velocity. Thermal management is unavoidable: engines, life support, and computing all produce waste heat that radiators must emit without compromising the habitat.",
        observations: [
          "A radiator's temperature, area, and emissivity set its heat-rejection capacity.",
          "High-velocity travel raises shielding and dust-impact requirements.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "The radiators are as essential as the hull.",
        body: "Elongated hulls and broad fins make heat rejection legible in the model. The fins are not sails: they are radiative surfaces. Separate ships reduce common-mode failure but increase coordination and maintenance demands.",
        observations: [
          "Radiation shielding adds mass and may be sourced from water or other bulk materials.",
          "Formation spacing is a safety measure, not a rigid tethered train.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "A closed habitat must remain biologically open-ended.",
        body: "Perfect ecological closure is not established. Nutrient losses, microbial shifts, equipment failures, and demographic bottlenecks can accumulate. A robust mission would need repairable infrastructure and enough biological and cultural diversity to recover from surprises.",
        observations: [
          "Population size affects genetic health, skill coverage, and social resilience.",
          "Centuries-long missions make governance and knowledge transfer mission-critical.",
        ],
      },
    ],
    fieldNotes: [
      "The model uses three ships; the count is illustrative, not an optimal formation.",
      "Radiator panels emit heat and should not be confused with propulsion hardware.",
      "At interstellar speeds, even sparse interstellar dust is a serious impact hazard.",
    ],
  },
  {
    slug: "post-biological",
    name: "Post-Biological",
    index: 7,
    classification: "Substrate-Independent",
    tagline: "Computation migrates to layered, long-lived stellar infrastructure.",
    accentColor: "#D5A8FF",
    modelKey: "post-biological",
    modelSpec: {
      form: "Nested computational shells around a star, with distributed nodes.",
      components: ["Concentric collector shells", "Pulsing compute nodes", "Thermal gaps"],
      scaleNote: "Matrioshka-brain-inspired concept",
    },
    metrics: [
      { label: "Energy scale", value: "10^20–10^26 W", note: "Architecture-dependent" },
      { label: "Computation", value: "Temperature-limited", note: "Landauer bound" },
      { label: "Shells", value: "2–5 layers", note: "Illustrative only" },
      { label: "Substrate", value: "Unknown", note: "Hypothetical computation" },
      { label: "Thermal output", value: "Mid / far IR", note: "Layered radiators" },
    ],
    sections: [
      {
        id: "overview",
        eyebrow: "01 / Overview",
        title: "A computational civilization still has a physical substrate.",
        body: "The post-biological hypothesis asks whether minds could persist in non-biological media. A Matrioshka-brain concept nests energy-collecting and heat-radiating shells around a star. Both machine consciousness and mind uploading remain unverified; the model treats them as speculation, not established technology.",
        observations: [
          "The architecture is a thought experiment grounded in energy and heat flow.",
          "No claim is made that computation alone reproduces subjective experience.",
        ],
      },
      {
        id: "classification",
        eyebrow: "02 / Classification",
        title: "A substrate shift does not automatically change the energy class.",
        body: "The civilization's energy use could fall anywhere between planetary and stellar scales. A Matrioshka-like system is often associated with a Type II energy budget, but cognition, identity, and continuity are outside the Kardashev scale.",
        observations: [
          "The phrase 'substrate-independent' is a hypothesis, not a demonstrated property.",
          "Long-lived software depends on hardware repair, error correction, and governance.",
        ],
      },
      {
        id: "energy",
        eyebrow: "03 / Energy profile",
        title: "Computation has a thermodynamic cost.",
        body: "Landauer's principle gives a minimum heat cost for logically irreversible operations at a given temperature. Real computers operate far above that limit. Lower temperatures can improve theoretical efficiency but demand larger radiators and careful management of entropy and error rates.",
        observations: [
          "Energy efficiency trades against speed, error correction, and operating temperature.",
          "A layered system must radiate waste heat from its outermost surfaces.",
        ],
      },
      {
        id: "anatomy",
        eyebrow: "04 / Structural anatomy",
        title: "Nested shells are separated by thermal gradients.",
        body: "The scene shows three open toroidal shells and node clusters rather than a solid enclosure. Each layer absorbs radiation from within and re-emits at a lower effective temperature; real structures would require enormous area, stability, and material flows.",
        observations: [
          "Open geometry communicates that shells need not be mechanically continuous.",
          "Pulsing nodes visualize data traffic, not biological consciousness.",
        ],
      },
      {
        id: "habitability",
        eyebrow: "05 / Habitability & constraints",
        title: "Persistence is not the same as personhood.",
        body: "Even if a computational substrate can be maintained, the criteria for identity, welfare, and continuity remain unresolved. The system's thermal environment, radiation damage, finite stellar lifetime, and dependence on repairable hardware constrain its possible duration.",
        observations: [
          "Stars evolve; a stellar-scale archive must account for changing luminosity.",
          "Concentrated infrastructure creates risks of correlated failure and control.",
        ],
      },
    ],
    fieldNotes: [
      "The shell architecture is inspired by theoretical Matrioshka-brain literature.",
      "Node pulses are a visualization of activity and imply nothing about sentience.",
      "All layers must reject heat; no shell can absorb energy without a thermal signature.",
    ],
  },
] as const satisfies readonly Civilization[];

export type CivilizationSlug = (typeof civilizations)[number]["slug"];

export function getCivilizationBySlug(
  slug: string,
): (typeof civilizations)[number] | undefined {
  return civilizations.find((civilization) => civilization.slug === slug);
}
