import { ProjectPost } from "../types";

export default function ProjectCard({ project }: { project: ProjectPost }) {
  return (
    <div>
      <h2>{project.frontmatter.title}</h2>
      <p>{project.frontmatter.description}</p>
      <img
        src={project.frontmatter.image?.src}
        alt={project.frontmatter.image?.alt}
      />
      <a href={project.frontmatter.repo}>Repo</a>
      <a href={project.frontmatter.liveDemo}>Live Demo</a>
    </div>
  );
}
