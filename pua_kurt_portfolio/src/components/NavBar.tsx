import { useState, useEffect, type MouseEvent } from 'react';
import { navSections } from '../data/navigation';
import { useSectionNav } from '../hooks/useSectionNav';
import { asset } from '../utils/assets';
import ThemeToggle from './ThemeToggle';
import './NavBar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { activeSection, handleNavClick } = useSectionNav();

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    handleNavClick(event, sectionId);
    handleClose();
  };

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <nav className="nav-bar" aria-label="Section navigation">
      <div className="nav-bar__inner">
        <div className="nav-bar__brand">
          <a
            href="#hero"
            className="nav-bar__logo"
            onClick={(event) => handleLinkClick(event, 'hero')}
            aria-label="Home"
          >
            <img
              src={asset('/pua.png')}
              alt=""
              className="nav-bar__logo-img"
            />
          </a>
        </div>

        <div className="nav-bar__controls">
          <ThemeToggle />

          <button
            type="button"
            className={`nav-bar__toggle${open ? ' nav-bar__toggle--open' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="nav-bar__bar" />
            <span className="nav-bar__bar" />
            <span className="nav-bar__bar" />
          </button>

          <div className={`nav-bar__links${open ? ' nav-bar__links--open' : ''}`}>
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`nav-bar__link${
                  activeSection === section.id ? ' nav-bar__link--active' : ''
                }`}
                onClick={(event) => handleLinkClick(event, section.id)}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
