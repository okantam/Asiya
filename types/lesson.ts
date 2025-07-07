import { LucideIcon } from "lucide-react";

export interface Material {
  name: string;
  type: string;
  icon: LucideIcon;
  path: string; 
  externalLink?: string;
}

export interface LessonPlan {
  id: number;
  title: string;
  description: string;
  additionalInfo?: string;
  moreInfoText?: string;
  image: string;
  imageAlt: string;
  materials: Material[];
  category: string;
  type: string;
  grade: string;
}

export interface ElementaryArtSection {
  name: string;
  description: string;
  images: string[];
}

export interface JuniorArtSection {
  title: string;
  description: string;
  images: string[];
}

export interface HighSchoolSection {
  title: string;
  description: string;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
}
