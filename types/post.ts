import { ImageRef } from "./images";

export interface BasePost {
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags?: string[];
    image?: ImageRef;
    [key: string]: any;
  };
}
