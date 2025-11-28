import { getAllProjects } from "@/lib/project-data";
import Projects from "./Projects";

export default function RecentProjects() {
  const projects = getAllProjects();
  return (
    <div
      className="min-h-screen flex flex-col gap-4 items-center 
    bg-gradient-to-b from-background via-slate-300/50 to-slate-800/50 
    dark:from-background dark:via-background/50 dark:to-slate-500/50 
    p-4 pt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
        Mis proyectos mas recientes
      </h1>
      <Projects projects={projects} limit={3} showViewMore={true} />
    </div>
  );
}
