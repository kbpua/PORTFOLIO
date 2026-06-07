import { useState } from 'react';
import Reveal from '../components/motion/Reveal';
import SectionHeader from '../components/motion/SectionHeader';
import { Stagger, StaggerItem } from '../components/motion/Stagger';
import { featuredProjects, otherProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="section projects-section">
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Client work, shipped products, and personal builds — from bio sample management and welfare reporting to learning tools and side projects."
      />

      <Reveal className="projects-block">
        <div className="projects-block__header">
          <h3 className="projects-block__title">Highlighted work</h3>
          <p className="projects-block__subtitle">
            Deployed projects I'm most proud of — built for real users and clients.
            Click any card for a full briefing.
          </p>
        </div>

        <Stagger className="projects-grid">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>

        {otherProjects.length > 0 && (
          <div className="projects-block__toggle-wrap">
            <button
              type="button"
              className="projects-block__toggle"
              onClick={() => setShowMore((open) => !open)}
              aria-expanded={showMore}
              aria-controls="more-projects-panel"
            >
              {showMore
                ? 'Show less'
                : `View more projects (${otherProjects.length})`}
            </button>
          </div>
        )}

        {showMore && (
          <div id="more-projects-panel" className="projects-block__more">
            <div className="projects-block__more-header">
              <h3 className="projects-block__title">More projects</h3>
              <p className="projects-block__subtitle">
                Earlier apps, coursework, and experiments from along the way.
              </p>
            </div>
            <Stagger className="projects-grid">
              {otherProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} compact />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}
      </Reveal>
    </section>
  );
};

export default ProjectsSection;
