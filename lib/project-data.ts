import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectPost } from "@/types/projectPost";

const projectsDirectory = path.join(process.cwd(), "lib/projects");

export function getAllProjects(): ProjectPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        frontmatter: data as ProjectPost["frontmatter"],
      };
    });

  // Sort projects by date if available, otherwise keep file system order
  return allProjectsData.sort((a, b) => {
    if (a.frontmatter.date && b.frontmatter.date) {
      return a.frontmatter.date < b.frontmatter.date ? 1 : -1;
    }
    return 0;
  });
}

export function getProjectBySlug(slug: string): ProjectPost | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      frontmatter: data as ProjectPost["frontmatter"],
    };
  } catch (error) {
    return null;
  }
}
