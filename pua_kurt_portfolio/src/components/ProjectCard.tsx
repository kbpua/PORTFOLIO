import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '../types';
import { useProjectPreview } from '../context/ProjectPreviewContext';
import { asset } from '../utils/assets';
import { prefetchUrl } from '../utils/prefetch';
import Button from './Button';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

function getFallbackImage(imagePath: string): string {
  return imagePath.replace(/\.(png|jpe?g|webp)$/i, '.svg');
}

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => {
  const { openPreview } = useProjectPreview();
  const isComingSoon = project.status === 'coming-soon';
  const reduceMotion = useReducedMotion();
  const fallbackSrc = asset(getFallbackImage(project.image));
  const [imageSrc, setImageSrc] = useState(asset(project.image));

  const handleImageError = () => {
    setImageSrc((current) => (current === fallbackSrc ? current : fallbackSrc));
  };

  const handlePrefetch = () => {
    if (project.liveUrl) {
      prefetchUrl(project.liveUrl);
    }
  };

  const imageBlock = (
    <div className="project-card__image-wrap">
      {isComingSoon && (
        <span className="project-card__badge">Future issue</span>
      )}
      <motion.img
        src={imageSrc}
        alt=""
        className="project-card__image"
        onError={handleImageError}
        loading="lazy"
        decoding="async"
        whileHover={
          isComingSoon || reduceMotion ? undefined : { scale: 1.02 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
      {!isComingSoon && (
        <span className="project-card__preview-hint">Read briefing</span>
      )}
    </div>
  );

  return (
    <motion.article
      id={`project-${project.id}`}
      className={`project-card${compact ? ' project-card--compact' : ''}${isComingSoon ? ' project-card--soon' : ''}`}
      whileHover={
        isComingSoon || reduceMotion ? undefined : { y: -2 }
      }
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      {isComingSoon ? (
        imageBlock
      ) : (
        <button
          type="button"
          className="project-card__preview-trigger"
          onClick={() => openPreview(project)}
          aria-label={`Open preview for ${project.title}`}
        >
          {imageBlock}
        </button>
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">
          {isComingSoon ? (
            <span className="project-card__title-text">{project.title}</span>
          ) : (
            <button
              type="button"
              className="project-card__title-button"
              onClick={() => openPreview(project)}
            >
              {project.title}
            </button>
          )}
        </h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tech.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          {!isComingSoon && (
            <Button
              variant="secondary"
              className="btn--sm"
              onClick={() => openPreview(project)}
            >
              Briefing
            </Button>
          )}
          {isComingSoon ? (
            <span className="project-card__status">Future issue</span>
          ) : (
            <Button
              href={project.liveUrl}
              variant="ghost"
              className="btn--sm"
              onMouseEnter={handlePrefetch}
              onFocus={handlePrefetch}
            >
              Visit site →
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
