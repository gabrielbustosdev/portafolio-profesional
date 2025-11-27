import { getAllProjects } from "../app/api/projects/route";
import Projects from "./Projects";

export default function RecentProjects() {
  const projects = getAllProjects();
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center bg-foreground p-4 pt-20">
      <h1 className="text-3xl md:text-5xl font-bold text-background leading-tight tracking-tight">
        Mis proyectos mas recientes
      </h1>
      <Projects projects={projects} limit={3} showViewMore={true} />
    </div>
  );
}
