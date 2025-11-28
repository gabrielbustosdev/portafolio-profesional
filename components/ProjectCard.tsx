import { ProjectPost } from "../types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/CustomButton";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }: { project: ProjectPost }) {
  const { title, description, image, repo, liveDemo, techStack } =
    project.frontmatter;

  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 group">
      <div className="relative aspect-video overflow-hidden">
        {image?.src ? (
          <img
            src={image.src}
            alt={image.alt || title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="p-6 pb-2">
        <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-2 flex-grow flex flex-col gap-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {techStack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{techStack.length - 4}
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        {repo && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            href={repo}
            target="_blank"
          >
            <Github className="w-4 h-4" />
            Code
          </Button>
        )}
        {liveDemo && (
          <Button href={liveDemo} target="_blank" variant="primary" size="lg">
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
