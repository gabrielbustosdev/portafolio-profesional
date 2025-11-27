import { BasePost } from "./post";
import { ImageRef } from "./images";

export interface ProjectPost extends BasePost {
  frontmatter: BasePost["frontmatter"] & {
    repo?: string;
    liveDemo?: string;
    techStack?: string[];
    role?: string;
    status?: "draft" | "in-progress" | "completed";
    metrics?: {
      users?: number;
      uptime?: string;
      performanceScore?: number;
    };
    gallery?: ImageRef[];
  };
}

export interface ProjectsProps {
  projects?: ProjectPost[];
  limit?: number;
  showViewMore?: boolean;
}
