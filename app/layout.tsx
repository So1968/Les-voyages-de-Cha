import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Voyages de Cha | Travel planner sur mesure",
  description:
    "Les Voyages de Cha accompagne les voyageurs dans la création d’itinéraires sur mesure, immersifs et émotionnels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
