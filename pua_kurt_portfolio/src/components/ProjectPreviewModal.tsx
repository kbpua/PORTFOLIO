import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Project } from '../types';
import { asset } from '../utils/assets';
import { prefetchUrl } from '../utils/prefetch';
import Button from './Button';
import './ProjectPreviewModal.css';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

function getFallbackImage(imagePath: string): string {
  return imagePath.replace(/\.(png|jpe?g|webp)$/i, '.svg');
}

const ProjectPreviewModal = ({ project, onClose }: ProjectPreviewModalProps) => {
  const reduceMotion = useReducedMotion();
  const isOpen = project !== null;
  const isComingSoon = project?.status === 'coming-soon';
  const fallbackSrc = project ? asset(getFallbackImage(project.image)) : '';
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (project) {
      setImageSrc(asset(project.image));
    }
  }, [project]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('preview-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('preview-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleImageError = () => {
    setImageSrc((current) => (current === fallbackSrc ? current : fallbackSrc));
  };

  const handleVisitPrefetch = () => {
    if (project?.liveUrl) {
      prefetchUrl(project.liveUrl);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-preview"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <button
            type="button"
            className="project-preview__backdrop"
            aria-label="Close preview"
            onClick={onClose}
          />

          <motion.div
            className="project-preview__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-preview-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="project-preview__header">
              <span className="project-preview__kicker">
                {isComingSoon ? 'Future issue · Preview' : 'Project briefing'}
              </span>
              <button
                type="button"
                className="project-preview__close"
                onClick={onClose}
                aria-label="Close preview"
              >
                ×
              </button>
            </div>

            <div className="project-preview__layout">
              <div className="project-preview__media">
                <div className="project-preview__image-wrap">
                  <img
                    src={imageSrc}
                    alt={`${project.title} preview`}
                    className="project-preview__image"
                    onError={handleImageError}
                  />
                </div>
                <div className="project-preview__tags">
                  {project.tech.map((tag) => (
                    <span key={tag} className="project-preview__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-preview__content">
                <h2 id="project-preview-title" className="project-preview__title">
                  {project.title}
                </h2>
                <p className="project-preview__headline">{project.preview.headline}</p>
                <p className="project-preview__description">{project.description}</p>

                {project.preview.role && (
                  <p className="project-preview__role">
                    <span>Role</span> {project.preview.role}
                  </p>
                )}

                {project.editorsNote && (
                  <p className="project-preview__editors-note">{project.editorsNote}</p>
                )}

                <dl className="project-preview__aspects">
                  {project.preview.aspects.map((aspect) => (
                    <div key={aspect.label} className="project-preview__aspect">
                      <dt>{aspect.label}</dt>
                      <dd>{aspect.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="project-preview__actions">
              {isComingSoon ? (
                <span className="project-preview__status">
                  Launch details coming in a future issue
                </span>
              ) : (
                <Button
                  href={project.liveUrl}
                  onMouseEnter={handleVisitPrefetch}
                  onFocus={handleVisitPrefetch}
                >
                  Visit live site →
                </Button>
              )}
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;
