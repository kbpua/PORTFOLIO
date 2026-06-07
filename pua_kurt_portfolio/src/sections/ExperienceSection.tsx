import { experiences } from '../data/experiences';
import SectionHeader from '../components/motion/SectionHeader';
import { Stagger, StaggerItem } from '../components/motion/Stagger';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section experience-section">
      <SectionHeader
        eyebrow="Experience"
        title="Hackathons & milestones"
        subtitle="Highlights from competitions where ideas turned into prototypes — and pitches in front of real stakeholders."
      />

      <Stagger className="experience-list">
        {experiences.map((experience) => (
          <StaggerItem key={experience.id}>
            <article className="experience-card">
              <div className="experience-card__header">
                <span className="experience-card__badge">{experience.badge}</span>
                <span className="experience-card__year">{experience.year}</span>
              </div>
              <h3 className="experience-card__title">{experience.title}</h3>
              <ul className="experience-card__highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {experience.relatedProjectId && (
                <a
                  href={`#project-${experience.relatedProjectId}`}
                  className="experience-card__link"
                >
                  Related project: Padyak →
                </a>
              )}
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default ExperienceSection;
