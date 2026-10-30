import { civilizations } from "@/lib/civilizations";

export function getCivilizationIndex(slug: string): number {
  return civilizations.findIndex((civilization) => civilization.slug === slug);
}

export function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}
