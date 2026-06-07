import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT, viewport } from './variants';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

const item = (delay: number, reduceMotion: boolean | null) => ({
  hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT, delay },
  },
});

const SectionHeader = ({ eyebrow, title, subtitle }: SectionHeaderProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="section-header">
      <motion.span
        className="section-header__eyebrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={item(0, reduceMotion)}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="section-header__title"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={item(0.08, reduceMotion)}
      >
        {title}
      </motion.h2>
      <motion.p
        className="section-header__subtitle"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={item(0.16, reduceMotion)}
      >
        {subtitle}
      </motion.p>
    </header>
  );
};

export default SectionHeader;
