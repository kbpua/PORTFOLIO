import { motion, useReducedMotion } from 'framer-motion';
import {
  AVAILABILITY,
  CV_URL,
  PROFILE_IMAGE_DARK,
  PROFILE_IMAGE_HOVER_DARK,
  PROFILE_IMAGE_HOVER_LIGHT,
  PROFILE_IMAGE_LIGHT,
} from '../data/contact';
import { useTheme } from '../context/ThemeContext';
import { asset } from '../utils/assets';
import Button from '../components/Button';
import { heroItem, heroStagger } from '../components/motion/variants';
import './HeroSection.css';

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const primaryImage = isDark ? PROFILE_IMAGE_DARK : PROFILE_IMAGE_LIGHT;
  const hoverImage = isDark ? PROFILE_IMAGE_HOVER_DARK : PROFILE_IMAGE_HOVER_LIGHT;

  return (
    <motion.section
      id="hero"
      className="section hero"
      initial={reduceMotion ? false : 'hidden'}
      animate="visible"
      variants={reduceMotion ? undefined : heroStagger}
    >
      <div className="hero__content">
        <motion.p className="hero__kicker" variants={heroItem}>
          Lead Story · Developer Profile
        </motion.p>
        <motion.p className="hero__status" variants={heroItem}>
          {AVAILABILITY}
        </motion.p>
        <motion.h2 className="hero__title" variants={heroItem}>
          Kurt Pua builds software for real users and clients
        </motion.h2>
        <motion.p className="hero__subtitle drop-cap" variants={heroItem}>
          From bio sample systems and animal welfare reporting to learning
          platforms and hackathon-winning prototypes — turning real problems
          into shipped applications.
        </motion.p>
        <motion.div className="hero__actions" variants={heroItem}>
          <Button href={CV_URL}>View CV</Button>
          <Button hash="#projects" variant="secondary">
            See projects
          </Button>
          <Button hash="#experience" variant="secondary">
            Read experience
          </Button>
        </motion.div>
      </div>
      <motion.figure className="hero__visual" variants={heroItem}>
        <div className="hero__photo-wrap">
          <img
            src={asset(primaryImage)}
            alt="Kurt Pua"
            className="hero__photo hero__photo--primary"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <img
            key={hoverImage}
            src={asset(hoverImage)}
            alt=""
            className="hero__photo hero__photo--alternate"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="hero__caption hero__caption--default">
          {isDark ? 'I\'m from Manila, Philippines, let\'s connect!' : 'I\'m from Manila, Philippines, let\'s connect!'}
        </figcaption>
        <figcaption className="hero__caption hero__caption--hover" aria-hidden="true">
          Seems you're interested in my work, let's connect!
        </figcaption>
      </motion.figure>
    </motion.section>
  );
};

export default HeroSection;
