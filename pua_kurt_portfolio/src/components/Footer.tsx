import { socialLinks } from '../data/contact';
import { asset } from '../utils/assets';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Kurt Pua. All rights reserved.
        </p>
        <div className="footer__social">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={link.label}
            >
              <img src={asset(link.icon)} alt="" className="footer__social-icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
