import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      <header className="page-header">
        <span className="page-header__eyebrow">Portfolio</span>
        <h1 className="page-header__title">Projects</h1>
        <p className="page-header__subtitle">
          A collection of apps and tools I've built — from games and planners to
          algorithm visualizers and course projects.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
