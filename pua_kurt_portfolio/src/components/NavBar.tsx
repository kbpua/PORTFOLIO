import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { asset } from '../utils/assets';
import './NavBar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-bar__logo" onClick={handleClose}>
        <img src={asset('/pua.png')} alt="Kurt Pua" className="nav-bar__logo-img" />
        <span className="nav-bar__logo-text">Kurt Pua</span>
      </Link>

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
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-bar__link${isActive ? ' nav-bar__link--active' : ''}`
          }
          onClick={handleClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-bar__link${isActive ? ' nav-bar__link--active' : ''}`
          }
          onClick={handleClose}
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `nav-bar__link${isActive ? ' nav-bar__link--active' : ''}`
          }
          onClick={handleClose}
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-bar__link${isActive ? ' nav-bar__link--active' : ''}`
          }
          onClick={handleClose}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
