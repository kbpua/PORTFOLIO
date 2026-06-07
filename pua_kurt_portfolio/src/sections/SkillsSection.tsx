import { asset } from '../utils/assets';
import { skills } from '../data/skills';
import SectionHeader from '../components/motion/SectionHeader';
import { Stagger, StaggerItem } from '../components/motion/Stagger';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section id="skills" className="section skills-section">
      <SectionHeader
        eyebrow="Skills"
        title="Languages & tools"
        subtitle="Technologies I use to bring ideas to life."
      />

      <Stagger className="skills-grid">
        {skills.map((skill) => (
          <StaggerItem key={skill.name}>
            <div className="skill-badge">
              <img
                src={asset(skill.icon)}
                alt=""
                className="skill-badge__icon"
              />
              <span className="skill-badge__name">{skill.name}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default SkillsSection;
