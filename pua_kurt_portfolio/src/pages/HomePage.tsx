import { asset } from '../utils/assets';
import { featuredProjects } from '../data/projects';
import { skills } from '../data/skills';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__eyebrow">Computer Science · UP Manila</span>
          <h1 className="hero__title">Hi, I'm Kurt Pua.</h1>
          <p className="hero__subtitle">
            I build thoughtful web apps and algorithmic tools — from puzzle solvers
            to interactive visualizers. I'm always looking for the next problem
            worth solving.
          </p>
          <div className="hero__actions">
            <Button to="/projects">View projects</Button>
            <Button to="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__photo-wrap card">
            <img
              src={asset('/profile.png')}
              alt="Kurt Pua"
              className="hero__photo"
            />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <span className="page-header__eyebrow">Featured work</span>
          <h2 className="home-section__title">Projects I'm proud of</h2>
          <p className="home-section__subtitle">
            A couple of highlights — see the full collection on the projects page.
          </p>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
        <div className="home-section__cta">
          <Button to="/projects" variant="ghost">
            See all projects →
          </Button>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <span className="page-header__eyebrow">Skills</span>
          <h2 className="home-section__title">Languages & tools</h2>
          <p className="home-section__subtitle">
            Technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge card">
              <img
                src={asset(skill.icon)}
                alt=""
                className="skill-badge__icon"
              />
              <span className="skill-badge__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta card">
        <h2 className="home-cta__title">Let's connect</h2>
        <p className="home-cta__text">
          Open to collaborations, internships, and interesting conversations.
        </p>
        <div className="home-cta__actions">
          <Button to="/contact">Contact me</Button>
          <Button to="/resume" variant="secondary">
            View resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
