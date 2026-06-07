export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navSections)[number]['id'];

export const observedSections: SectionId[] = navSections.map((section) => section.id);
