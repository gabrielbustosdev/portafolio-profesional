import Projects from "@/components/Projects";
import { getAllProjects } from "@/lib/project-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Gabriel Bustos",
  description:
    "Explora mi portafolio completo de proyectos de desarrollo web, aplicaciones y experimentos.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Mis Proyectos
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Una colección de mis trabajos más recientes, experimentos y
            aplicaciones en producción.
          </p>
        </div>

        {/* Projects Grid */}
        <Projects projects={projects} />
      </div>
    </main>
  );
}
