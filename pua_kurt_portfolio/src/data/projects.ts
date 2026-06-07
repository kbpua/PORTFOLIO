import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bio-tracker',
    title: 'Bio-Tracker',
    description:
      'A client-facing group project for managing bio samples across three user roles — admin, researcher, and student — with clear workflows for tracking and oversight.',
    tech: ['React', 'TypeScript', 'Client Project', 'Vercel'],
    liveUrl: 'https://bio-tracker-ten.vercel.app/login',
    image: '/projects/bio-tracker.png',
    featured: true,
    status: 'live',
    preview: {
      headline: 'Laboratory sample tracking built for real research workflows.',
      role: 'Full-stack developer on a client-facing group project',
      aspects: [
        {
          label: 'Problem',
          detail:
            'Research teams needed a reliable way to register, track, and audit bio samples across multiple roles without losing oversight.',
        },
        {
          label: 'Solution',
          detail:
            'Role-based dashboards for admins, researchers, and students with clear sample lifecycle states and login-gated access.',
        },
        {
          label: 'Impact',
          detail:
            'Replaced fragmented manual tracking with a single deployed app used in an active client context.',
        },
      ],
    },
  },
  {
    id: 'capwa',
    title: 'CAPWA Animal Welfare',
    description:
      'Built for CAPWA to streamline reporting of animal-related issues — making it faster for the organization to receive, review, and act on field reports.',
    tech: ['React', 'Client Project', 'Netlify'],
    liveUrl: 'https://capwa.netlify.app/',
    image: '/projects/capwa.png',
    featured: true,
    status: 'live',
    preview: {
      headline: 'Field reports routed faster for an animal welfare organization.',
      role: 'Developer for a nonprofit client deployment',
      aspects: [
        {
          label: 'Problem',
          detail:
            'CAPWA needed a faster pipeline from field reports to organizational review and action.',
        },
        {
          label: 'Solution',
          detail:
            'A structured reporting flow that makes submissions easier to send, review, and follow up on.',
        },
        {
          label: 'Impact',
          detail:
            'Live on Netlify as a real tool for animal welfare reporting rather than a one-off prototype.',
        },
      ],
    },
  },
  {
    id: 'tuto',
    title: 'Tuto',
    description:
      'An active-retention learning platform powered by quizzing — think Gizmo, refined with a sharper flow and performance-focused optimizations.',
    tech: ['React', 'EdTech', 'Vercel'],
    liveUrl: 'https://tuto-app-sand.vercel.app/auth',
    image: '/projects/tuto.png',
    featured: true,
    status: 'live',
    preview: {
      headline: 'Quiz-driven learning with a sharper, faster user experience.',
      role: 'Lead builder on an EdTech retention platform',
      aspects: [
        {
          label: 'Problem',
          detail:
            'Learning platforms often feel heavy — Tuto targets active retention through quizzing without sacrificing speed.',
        },
        {
          label: 'Solution',
          detail:
            'Streamlined auth, quiz flows, and performance-minded frontend patterns deployed on Vercel.',
        },
        {
          label: 'Highlight',
          detail:
            'Positioned as a Gizmo-inspired experience with tighter UX and optimization focus.',
        },
      ],
    },
  },
  {
    id: 'padyak',
    title: 'Padyak',
    description:
      'An app currently in active development. More details and a public launch are on the way.',
    tech: ['In Development', 'Coming Soon'],
    image: '/projects/padyak.png',
    featured: true,
    status: 'coming-soon',
    editorsNote:
      "Editor's note: Born at BlueHacks 2026 — a crowd-sourced bike rental app aligned with SDGs 7, 11, and 12. The full story is still being written.",
    preview: {
      headline: 'A BlueHacks-winning bike rental concept entering its next chapter.',
      role: 'Hackathon developer — 2nd place, BlueHacks 2026',
      aspects: [
        {
          label: 'Origin',
          detail:
            'Built during BlueHacks as a crowd-sourced bike rental application pitched around sustainable urban mobility.',
        },
        {
          label: 'Focus',
          detail:
            'Aligned with SDGs 7, 11, and 12 — clean energy, sustainable cities, and responsible consumption.',
        },
        {
          label: 'Status',
          detail:
            'In active development with a public launch planned; preview details will expand in a future issue.',
        },
      ],
    },
  },
  {
    id: 'qma',
    title: 'Quine-McCluskey Algorithm Visualizer',
    description:
      'Interactive tool that walks through Boolean function minimization step by step using the Quine-McCluskey method.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://kbpua.github.io/qma-app/',
    image: '/QMA.png',
    featured: false,
    status: 'live',
    preview: {
      headline: 'Boolean minimization made visible, step by step.',
      aspects: [
        {
          label: 'Purpose',
          detail: 'Helps students follow the Quine-McCluskey method instead of memorizing tables blindly.',
        },
        {
          label: 'Approach',
          detail: 'Interactive walkthrough built with vanilla JavaScript for clarity and portability.',
        },
      ],
    },
  },
  {
    id: 'planner',
    title: 'Planner App',
    description:
      'A task planner for organizing daily schedules and keeping track of priorities in a clean interface.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://kbpua.github.io/planner/',
    image: '/planner.png',
    featured: false,
    status: 'live',
    preview: {
      headline: 'A lightweight daily planner for tasks and priorities.',
      aspects: [
        {
          label: 'Purpose',
          detail: 'Simple scheduling without the overhead of a full productivity suite.',
        },
        {
          label: 'Approach',
          detail: 'Clean interface focused on day-to-day organization and quick updates.',
        },
      ],
    },
  },
  {
    id: 'sudoku',
    title: 'Sudoku Solver',
    description:
      'A web-based Sudoku solver that validates puzzles and finds solutions using backtracking algorithms.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://kbpua.github.io/sudoku/',
    image: '/sudoku.png',
    featured: false,
    status: 'live',
    preview: {
      headline: 'Backtracking logic applied to a classic puzzle.',
      aspects: [
        {
          label: 'Purpose',
          detail: 'Validate Sudoku grids and demonstrate algorithmic problem solving in the browser.',
        },
        {
          label: 'Approach',
          detail: 'Backtracking solver with a straightforward web UI for testing puzzles.',
        },
      ],
    },
  },
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    description:
      'A classic two-player Tic Tac Toe game with win detection and a polished game board experience.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://kbpua.github.io/tic-tac-toe/',
    image: '/tic-tac-toe.png',
    featured: false,
    status: 'live',
    preview: {
      headline: 'Classic two-player gameplay with clean win detection.',
      aspects: [
        {
          label: 'Purpose',
          detail: 'A polished take on a fundamentals project — state management and UX on a simple board.',
        },
        {
          label: 'Approach',
          detail: 'Vanilla JavaScript with responsive layout and immediate feedback on each move.',
        },
      ],
    },
  },
  {
    id: 'sas',
    title: 'SAS 1 Final Project',
    description:
      'Final project for SAS 1 — a data-driven application built to analyze and present structured datasets.',
    tech: ['Python', 'Data Analysis'],
    liveUrl: 'https://kbpua.github.io/SAS-1-FINAL-PROJECT/',
    image: '/sas.png',
    featured: false,
    status: 'live',
    preview: {
      headline: 'Coursework turned into a structured data presentation.',
      aspects: [
        {
          label: 'Purpose',
          detail: 'Analyze and present structured datasets for a SAS 1 final deliverable.',
        },
        {
          label: 'Approach',
          detail: 'Python-driven analysis with a web-facing presentation layer.',
        },
      ],
    },
  },
  {
    id: 'political',
    title: 'Senator Campaign Website',
    description:
      'A political campaign website built for COMM 10, featuring candidate profiles and policy highlights.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://kbpua.github.io/-COMM-10-SENATOR-WEBSITE/',
    image: '/political.png',
    featured: false,
    status: 'live',
    preview: {
      headline: 'Campaign messaging and policy highlights for COMM 10.',
      aspects: [
        {
          label: 'Purpose',
          detail: 'Communications coursework — present a senator profile and policy platform clearly.',
        },
        {
          label: 'Approach',
          detail: 'Static site architecture with emphasis on readable content hierarchy.',
        },
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects.filter((project) => !project.featured);
