import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CivilizationDetail } from "@/components/CivilizationDetail";
import { civilizations, getCivilizationBySlug } from "@/lib/civilizations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return civilizations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const civilization = getCivilizationBySlug(slug);
  if (!civilization) return {};
  const description = `${civilization.classification}: ${civilization.tagline} Explore the conceptual model, energy profile, physical constraints, and field notes.`;
  return {
    title: civilization.name,
    description,
    openGraph: {
      title: `${civilization.name} — CIVILIS`,
      description,
      type: "article",
    },
  };
}

export default async function CivilizationPage({ params }: PageProps) {
  const { slug } = await params;
  const civilization = getCivilizationBySlug(slug);
  if (!civilization) notFound();
  return <CivilizationDetail civilization={civilization} />;
}
