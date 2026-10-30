export type Metric = {
  label: string;
  value: string;
  note: string;
};

export type BriefSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  observations: readonly string[];
};

export type ModelKey =
  | "planetary"
  | "stellar"
  | "galactic"
  | "megastructural"
  | "oceanic"
  | "nomadic"
  | "post-biological";

export type ModelSpec = {
  form: string;
  components: readonly string[];
  scaleNote: string;
};

export type Civilization = {
  slug: string;
  name: string;
  index: number;
  classification: string;
  tagline: string;
  accentColor: string;
  metrics: readonly Metric[];
  sections: readonly BriefSection[];
  modelKey: ModelKey;
  modelSpec: ModelSpec;
  fieldNotes: readonly string[];
};
