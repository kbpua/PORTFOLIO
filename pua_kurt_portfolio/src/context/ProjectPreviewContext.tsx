import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Project } from '../types';
import ProjectPreviewModal from '../components/ProjectPreviewModal';

interface ProjectPreviewContextValue {
  openPreview: (project: Project) => void;
  closePreview: () => void;
}

const ProjectPreviewContext = createContext<ProjectPreviewContextValue | null>(null);

export function ProjectPreviewProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);

  const openPreview = useCallback((nextProject: Project) => {
    setProject(nextProject);
  }, []);

  const closePreview = useCallback(() => {
    setProject(null);
  }, []);

  const value = useMemo(
    () => ({ openPreview, closePreview }),
    [openPreview, closePreview]
  );

  return (
    <ProjectPreviewContext.Provider value={value}>
      {children}
      <ProjectPreviewModal project={project} onClose={closePreview} />
    </ProjectPreviewContext.Provider>
  );
}

export function useProjectPreview() {
  const context = useContext(ProjectPreviewContext);
  if (!context) {
    throw new Error('useProjectPreview must be used within ProjectPreviewProvider');
  }
  return context;
}
