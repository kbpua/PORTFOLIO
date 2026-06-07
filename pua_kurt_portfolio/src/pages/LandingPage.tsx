import { useEffect } from 'react';
import { scrollToSection } from '../hooks/useActiveSection';
import Masthead from '../components/Masthead';
import HeroSection from '../sections/HeroSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import ResumeSection from '../sections/ResumeSection';
import ContactSection from '../sections/ContactSection';
import './LandingPage.css';

const LandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, []);

  return (
    <div className="landing">
      <Masthead />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
