import { socialLinks } from '../data/contact';
import ContactIcon from './icons/ContactIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} The Kurt Pua Tribune — All rights reserved.
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
              <ContactIcon id={link.icon} className="footer__social-icon" size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
