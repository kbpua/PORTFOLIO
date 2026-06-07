import { CV_URL } from '../data/contact';
import Button from '../components/Button';
import Reveal from '../components/motion/Reveal';
import SectionHeader from '../components/motion/SectionHeader';
import './ResumeSection.css';

const ResumeSection = () => {
  return (
    <section id="resume" className="section resume-section">
      <SectionHeader
        eyebrow="Resume"
        title="Curriculum Vitae"
        subtitle="My latest CV — available to view on Google Drive."
      />

      <Reveal>
        <div className="cv-panel">
          <p className="cv-panel__text">
            Open my curriculum vitae in a new tab. From there you can read it
            online or use Google Drive&apos;s download option if you need a copy.
          </p>
          <Button href={CV_URL}>View CV</Button>
        </div>
      </Reveal>
    </section>
  );
};

export default ResumeSection;
