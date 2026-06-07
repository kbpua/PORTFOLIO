import { useEffect, useState } from 'react';
import { scrollToSection } from '../hooks/useActiveSection';
import './BackToTop.css';

const SCROLL_THRESHOLD = 480;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const handleClick = () => {
    scrollToSection('hero');
    window.history.replaceState(null, '', '#hero');
  };

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
    >
      <span className="back-to-top__label">Top</span>
      <svg
        className="back-to-top__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
