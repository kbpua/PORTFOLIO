export interface Experience {
  id: string;
  title: string;
  year: string;
  badge: string;
  highlights: string[];
  relatedProjectId?: string;
}

export const experiences: Experience[] = [
  {
    id: 'bluehacks',
    title: '2nd Place — BlueHacks Hackathon by the Ateneo Computer Society',
    year: '2026',
    badge: '2nd Place',
    highlights: [
      'Developed and produced a crowd-sourced bike rental application as a proposed solution to concerns aligned with SDGs 7, 11, and 12.',
    ],
    relatedProjectId: 'padyak',
  },
  {
    id: 'imagination',
    title: 'Top 10 — Imagination Hackathon Participant',
    year: '2025',
    badge: 'Top 10',
    highlights: [
      'Selected as one of the top 10 groups out of 196 teams that applied to join the contest.',
      'Presented in front of GCash leadership to pitch a prototype built to expedite Barangay document processing.',
    ],
  },
];
