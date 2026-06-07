import type { Project } from '../types';
import { asset } from '../utils/assets';
import Button from './Button';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => {
  return (
    <article className={`project-card card${compact ? ' project-card--compact' : ''}`}>
      <div className="project-card__image-wrap">
        <img
          src={asset(project.image)}
          alt={project.title}
          className="project-card__image"
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tech.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <Button href={project.liveUrl} variant="ghost">
          View project →
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
