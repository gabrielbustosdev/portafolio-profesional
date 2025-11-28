import { getAllProjects, getProjectBySlug } from "@/lib/project-data";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="group text-muted-foreground hover:text-foreground"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Proyectos
            </Link>
          </Button>
        </div>

        {/* Header Section */}
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {frontmatter.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground border-y border-border py-4">
            {frontmatter.date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{frontmatter.date}</span>
              </div>
            )}
            {frontmatter.role && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">Rol:</span>
                <span>{frontmatter.role}</span>
              </div>
            )}
            {frontmatter.status && (
              <Badge variant="outline" className="capitalize">
                {frontmatter.status}
              </Badge>
            )}
          </div>

          {/* Tech Stack */}
          {frontmatter.techStack && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {frontmatter.repo && (
              <Button variant="outline" asChild>
                <a
                  href={frontmatter.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" />
                  Ver Código
                </a>
              </Button>
            )}
            {frontmatter.liveDemo && (
              <Button asChild>
                <a
                  href={frontmatter.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Content Section */}
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
          <MDXRemote source={content} />
        </article>
      </div>
    </main>
  );
}
