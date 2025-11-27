import { ProjectsProps } from "../types";
import ProjectCard from "./ProjectCard";

export default function Projects({
  projects = [],
  limit,
  showViewMore = false,
}: ProjectsProps) {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
