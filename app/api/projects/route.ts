import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectPost, ImageRef } from "@/types";
import { NextResponse } from "next/server";

const projectsDirectory = path.join(process.cwd(), "lib/projects");

function normalizeImage(image: any): ImageRef | undefined {
  if (!image) return undefined;
  if (typeof image === "string") {
    return { src: image };
  }
  return image as ImageRef;
}

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string): ProjectPost {
  const realSlug = slug.replace(/\.mdx?$/, "");

  let fullPath = path.join(projectsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const normalizedData = {
    ...data,
    image: normalizeImage(data.image),
    gallery: Array.isArray(data.gallery)
      ? data.gallery.map(normalizeImage).filter(Boolean)
      : undefined,
  };

  return {
    slug: realSlug,
    frontmatter: normalizedData as any,
    content,
  };
}

export function getAllProjects(): ProjectPost[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((post1, post2) =>
      (post1.frontmatter.date || "") > (post2.frontmatter.date || "") ? -1 : 1
    );
  return projects;
}

export async function GET() {
  const projects = getAllProjects();
  return NextResponse.json(projects);
}
