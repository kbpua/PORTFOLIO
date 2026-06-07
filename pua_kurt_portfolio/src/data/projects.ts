import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'qma',
    title: 'Quine-McCluskey Algorithm Visualizer',
    description:
      'Interactive tool that walks through Boolean function minimization step by step using the Quine-McCluskey method.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://kbpua.github.io/qma-app/',
    image: '/QMA.png',
    featured: true,
  },
  {
    id: 'planner',
    title: 'Planner App',
    description:
      'A task planner for organizing daily schedules and keeping track of priorities in a clean interface.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://kbpua.github.io/planner/',
    image: '/planner.png',
    featured: true,
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
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
