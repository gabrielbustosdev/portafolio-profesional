"use client";

import { ProjectPost } from "../types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: ProjectPost }) {
  const { title, description, image, repo, liveDemo, techStack } =
    project.frontmatter;

  return (
    <Card className="group relative overflow-hidden flex flex-col h-full border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500">
      {/* Clickable Area for the whole card */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl"
        aria-label={`Ver detalles de ${title}`}
      />

      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {image?.src ? (
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt || title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* View Project Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-transparent text-primary px-4 py-2 rounded-lg border border-primary font-medium flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Eye className="w-4 h-4" />
                Ver Proyecto
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/50">
            <span className="text-sm font-medium">Sin imagen</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <CardHeader className="relative p-6 pb-2 z-20">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="relative p-6 pt-2 flex-grow flex flex-col gap-4 z-20">
        <p className="text-[#D5D5D5] text-sm line-clamp-3 leading-relaxed">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {techStack.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {techStack.length > 3 && (
              <Badge variant="default" className="text-xs">
                +{techStack.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      {/* Footer / Actions */}
      <CardFooter className="relative p-6 pt-0 flex gap-3 z-30">
        {repo && (
          <Button
            variant="default"
            size="sm"
            className="flex-1 gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all duration-300"
            asChild
          >
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          </Button>
        )}
        {liveDemo && (
          <Button
            variant="default"
            size="sm"
            className="flex-1 gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all duration-300"
            asChild
          >
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
