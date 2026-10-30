import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "CIVILIS — An Archive of Civilization Types",
  description:
    "Explore seven conceptual civilization archetypes through procedural 3D models and scientific field briefs.",
  openGraph: {
    title: "CIVILIS — An Archive of Civilization Types",
    description:
      "A visual archive of planetary, stellar, galactic, and speculative civilization archetypes.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeExperience />;
}
