import type { Metadata } from "next";
import { ProjectsPage } from "@/views/ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects — Pavers, Pool Decks & Remodels in NE Florida",
  description:
    "See completed Faith Construction One projects across paver installation, pool deck remodeling, LVP flooring, and interior improvements in Northeast Florida.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
