export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
