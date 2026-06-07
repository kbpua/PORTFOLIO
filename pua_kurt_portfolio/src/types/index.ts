export type ProjectStatus = 'live' | 'coming-soon';

export interface ProjectPreviewAspect {
  label: string;
  detail: string;
}

export interface ProjectPreview {
  headline: string;
  role?: string;
  aspects: ProjectPreviewAspect[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  image: string;
  featured: boolean;
  status: ProjectStatus;
  editorsNote?: string;
  preview: ProjectPreview;
}

export interface Skill {
  name: string;
  icon: string;
}

export type ContactIconId = 'email' | 'phone' | 'linkedin' | 'github' | 'facebook';

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: ContactIconId;
}

export interface SocialLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: ContactIconId;
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
