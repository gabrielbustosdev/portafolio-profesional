import { ProjectsProps } from "../types";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects({
  projects = [],
  limit,
  showViewMore = false,
}: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {showViewMore && (
        <div className="flex justify-center pt-8">
          <Button
            variant="default"
            size="lg"
            className="group border-primary/50 hover:border-primary hover:bg-primary/30 text-primary-foreground hover:text-primary transition-all duration-300"
            asChild
          >
            <Link href="/projects">
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
